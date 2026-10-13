// Cloudflare Pages Function: POST /api/stats
// Тело: { id: "<uuid посетителя>", like?: true|false }
// Засчитывает уникальный просмотр, при наличии like ставит/снимает лайк, возвращает счётчики.
// Нужна привязка D1-базы с именем переменной DB (Settings → Bindings).
// ponytail: id посетителя из localStorage, накрутку не ловим; при абузе — считать по хэшу IP.
const ID = /^[0-9a-f-]{36}$/;

export async function onRequestPost({ request, env }) {
  if (!env.DB) return Response.json({ error: "no db" }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { body = {}; }
  const id = String(body.id || "");
  if (!ID.test(id)) return Response.json({ error: "bad id" }, { status: 400 });

  const db = env.DB;
  const writes = [
    db.prepare("CREATE TABLE IF NOT EXISTS views (id TEXT PRIMARY KEY)"),
    db.prepare("CREATE TABLE IF NOT EXISTS likes (id TEXT PRIMARY KEY)"),
    db.prepare("INSERT OR IGNORE INTO views (id) VALUES (?)").bind(id)
  ];
  if (body.like === true) writes.push(db.prepare("INSERT OR IGNORE INTO likes (id) VALUES (?)").bind(id));
  if (body.like === false) writes.push(db.prepare("DELETE FROM likes WHERE id = ?").bind(id));
  await db.batch(writes);

  const [views, likes, liked] = await db.batch([
    db.prepare("SELECT COUNT(*) AS n FROM views"),
    db.prepare("SELECT COUNT(*) AS n FROM likes"),
    db.prepare("SELECT 1 AS n FROM likes WHERE id = ?").bind(id)
  ]);
  return Response.json({
    views: views.results[0].n,
    likes: likes.results[0].n,
    liked: liked.results.length > 0
  });
}
