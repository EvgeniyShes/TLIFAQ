// Cloudflare Pages Function: POST /api/contact — форма «Сотрудничество и реклама» (/contact/, /ru/contact/).
// Тело: { topic, message, contact, website (ловушка для ботов), token (ответ Turnstile), lang }
// Проверяет Turnstile, лимит 3 сообщения в час с одного IP, сохраняет в D1 и пересылает владельцу в Telegram.
// Настройки проекта (Settings → Variables and Secrets, тип Secret): TURNSTILE_SECRET, TG_BOT_TOKEN, TG_CHAT_ID.
// Привязка D1 — DB (та же, что у /api/stats).
const TOPICS = { collab: "Сотрудничество", ads: "Реклама", bug: "Ошибка на сайте" };
const LIMIT = 3; // сообщений в час с одного IP

const res = (status, error) => Response.json(error ? { error } : { ok: true }, { status });

export function check(b) {
  const topic = TOPICS[b.topic], message = String(b.message || "").trim(), contact = String(b.contact || "").trim();
  if (!topic || message.length < 20 || message.length > 2000 || contact.length < 3 || contact.length > 200) return null;
  return { topic, message, contact };
}

export async function onRequestPost({ request, env }) {
  if (!env.DB || !env.TURNSTILE_SECRET || !env.TG_BOT_TOKEN || !env.TG_CHAT_ID) return res(503, "not configured");
  let b;
  try { b = await request.json(); } catch { return res(400, "bad json"); }
  if (b.website) return res(200); // ловушку заполняют только боты — молча «принимаем»
  const m = check(b);
  if (!m) return res(400, "invalid");

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const v = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST", body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: String(b.token || ""), remoteip: ip })
  }).then(r => r.json()).catch(() => ({}));
  if (!v.success) return res(403, "captcha");

  // IP храним только хэшем — для лимита
  const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + env.TG_CHAT_ID)))]
    .map(x => x.toString(16).padStart(2, "0")).join("");
  const now = Math.floor(Date.now() / 1000), db = env.DB;
  await db.prepare("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, ip TEXT, ts INTEGER, topic TEXT, message TEXT, contact TEXT)").run();
  const { n } = await db.prepare("SELECT COUNT(*) AS n FROM contacts WHERE ip = ? AND ts > ?").bind(hash, now - 3600).first();
  if (n >= LIMIT) return res(429, "limit");
  await db.prepare("INSERT INTO contacts (ip, ts, topic, message, contact) VALUES (?, ?, ?, ?, ?)").bind(hash, now, m.topic, m.message, m.contact).run();

  // Сообщение уже сохранено в D1, поэтому сбой Telegram посетителю не показываем
  await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text: `📩 TLI FAQ — ${m.topic} (${b.lang === "ru" ? "RU" : "EN"})\n\n${m.message}\n\nКонтакт: ${m.contact}` })
  }).catch(() => {});
  return res(200);
}
