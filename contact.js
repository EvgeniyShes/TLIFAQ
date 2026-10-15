// Форма «Сотрудничество и реклама»: кнопка [data-contact] открывает <dialog id="cdlg"> (разметка — contactBlock в build.js).
// Turnstile грузится при первом открытии окна; отправка — POST /api/contact (functions/api/contact.js).
(() => {
  const dlg = document.getElementById("cdlg");
  if (!dlg) return;
  const f = dlg.querySelector("form"), st = dlg.querySelector(".cst"), btn = f.querySelector('button[type="submit"]');
  const M = JSON.parse(dlg.dataset.msg), lang = dlg.dataset.lang;
  const say = (txt, cls) => { st.textContent = txt; st.className = "cst " + (cls || ""); };
  let widget = null;

  function captcha() {
    if (widget !== null) return;
    widget = false;
    window.__tsReady = () => { widget = turnstile.render("#cts", { sitekey: dlg.dataset.sitekey, theme: "dark", language: lang }); };
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__tsReady";
    s.async = true;
    document.head.appendChild(s);
  }

  document.querySelectorAll("[data-contact]").forEach(b => b.addEventListener("click", () => { dlg.showModal(); captcha(); }));
  dlg.querySelector("[data-close]").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }); // клик по фону закрывает

  // Свои подсказки — до встроенной проверки браузера; сбрасываются при вводе
  btn.addEventListener("click", () => {
    f.message.setCustomValidity(f.message.value.trim().length < 20 ? M.cMsgShort : "");
    f.contact.setCustomValidity(f.contact.value.trim().length < 3 ? M.cContactShort : "");
  });
  [f.message, f.contact].forEach(el => el.addEventListener("input", () => el.setCustomValidity("")));

  f.addEventListener("submit", async e => {
    e.preventDefault();
    if (btn.dataset.busy) return;
    btn.dataset.busy = "1"; say(M.cSending);
    const token = (f.querySelector('[name="cf-turnstile-response"]') || {}).value || "";
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ topic: f.topic.value, message: f.message.value, contact: f.contact.value, website: f.website.value, token, lang }) });
      if (r.ok) { f.hidden = true; say(M.cOk, "ok"); return; }
      say(r.status === 403 ? M.cErrCaptcha : r.status === 429 ? M.cErrLimit : M.cErr, "err");
      if (widget) turnstile.reset(widget);
    } catch { say(M.cErr, "err"); }
    finally { delete btn.dataset.busy; }
  });
})();
