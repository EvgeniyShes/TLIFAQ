// Сборка готовых HTML-страниц для поисковиков: node build.js
// Из template.html + data.js + render.js получаются:
//   index.html, en/index.html                — главная (RU/EN) с уже отрисованными тирами и билдами
//   hero/<id>/index.html, en/hero/<id>/...   — страница каждого героя/трейта
//   sitemap.xml
// Запускать после каждого изменения data.js, render.js, template.html.
const fs = require("fs"), path = require("path");
const root = __dirname;
globalThis.window = globalThis;
require(path.join(root, "data.js"));
require(path.join(root, "render.js"));
const { D, H, SITE, T, L, esc, label, img, pageUrl, tierOf, dots } = TLI;
const LANGS = ["en", "ru"]; // английская версия — основная (корень сайта), русская — /ru/
// Коды подтверждения владельца для Google Search Console / Яндекс Вебмастера (ставятся на главные страницы)
const VERIFY = {
  "google-site-verification": "EC71OXZ5T7s2XkNTHbbgbjq7a0rILMfgmgyjy2NUmNI"
};

const write = (rel, html) => { const p = path.join(root, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, html); };
const fillId = (h, id, html) => {
  const re = new RegExp(`(id="${id}"[^>]*>)(</)`);
  if (!re.test(h)) throw new Error("в шаблоне нет пустого #" + id);
  return h.replace(re, (_, a, b) => a + html + b);
};
const updText = lang => new Date(D.season.updatedAt).toLocaleString(lang === "ru" ? "ru-RU" : "en-US",
  { timeZone: lang === "ru" ? "Europe/Moscow" : "UTC", dateStyle: "medium", timeStyle: "short" }) + (lang === "ru" ? " МСК" : " UTC");
const langLinks = (lang, id) => LANGS.map(l => `<a href="${pageUrl(l, id)}" hreflang="${l}" class="${l === lang ? "on" : ""}">${l.toUpperCase()}</a>`).join("");

function head(lang, id, title, desc) {
  const url = SITE + pageUrl(lang, id);
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${url}">`,
    ...LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE + pageUrl(l, id)}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE + pageUrl("en", id)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="TLI FAQ">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:locale" content="${lang === "ru" ? "ru_RU" : "en_US"}">`,
    ...(id ? [`<meta property="og:image" content="${SITE + img(id)}">`] : []),
    `<meta name="twitter:card" content="summary">`,
    ...(id ? [] : Object.entries(VERIFY).map(([n, c]) => `<meta name="${n}" content="${c}">`))
  ].join("\n");
}

// Главная страница
const template = fs.readFileSync(path.join(root, "template.html"), "utf8");
function indexPage(lang) {
  const t = k => T(lang, k);
  let h = template.replace("{{lang}}", lang).replace("{{head}}", head(lang, null, t("title"), t("desc")));
  h = h.replace(/(data-i="(\w+)"[^>]*>)(<\/)/g, (_, a, k, b) => a + esc(t(k)) + b);
  h = h.replace(`id="logLink"`, `id="logLink" title="${esc(t("changelog"))}" aria-label="${esc(t("changelog"))}"`);
  h = h.replace(`<input id="q" type="search">`, `<input id="q" type="search" placeholder="${esc(t("search"))}">`);
    const seg = (opts, cur) => opts.map(([k, txt]) => `<button data-k="${k}" class="${k === cur ? "on" : ""}">${esc(txt)}</button>`).join("");
  const fills = {
    sBadge: `${t("season")} ${D.season.code} · ${D.season.name}`,
    sUpd: updText(lang),
    sStart: esc(L(lang, D.season.startLabel)),
    sNote: esc(L(lang, D.season.note)),
    langSeg: langLinks(lang, null),
    tierSeg: TLI.phaseTabsHTML(lang, "starter"),
    tierList: TLI.tiersHTML(lang, "starter", null),
    stageSeg: seg([["all", t("all")], ["start", t("start")], ["end", t("end")]], "all"),
    heroSel: TLI.heroOptionsHTML(lang),
    tbody: TLI.buildsHTML(lang, TLI.buildRows(lang)),
    chList: TLI.changesHTML(lang),
    srcList: TLI.sourcesHTML(lang),
    heroIdx: TLI.heroIndexHTML(lang),
    guidesBody: TLI.guidesHTML(lang),
    authorsList: TLI.authorsListHTML()
  };
  for (const [id, html] of Object.entries(fills)) h = fillId(h, id, html);
  return h;
}

// Страница героя: статичная, без скриптов
function heroPage(lang, id) {
  const t = k => T(lang, k), hero = H[id], name = label(id);
  const st = tierOf("starter", id), en = tierOf("endgame", id);
  const builds = D.builds.filter(b => b.hero === id);
  const title = t("heroTitle")(name, hero.trait);
  const desc = t("heroDesc")(name, hero.trait, st.t, en.t, builds.map(b => L(lang, b.name)).join(", "));
  const trendMark = tr => tr ? ` <span class="trend-inline ${tr}">${TLI.TREND[tr]}</span>` : "";
  const tierCard = (x, cap) => `<div class="tcard" style="--tc:var(--${x.t})"><span class="tb" style="background:var(--${x.t})">${x.t}</span>
      <div><b>${cap}</b>${trendMark(x.r[1])}<p>${esc(L(lang, x.r[2]))}</p></div></div>`;
  const buildCard = b => `<article class="bcard" style="--tc:var(--${b.tier})">
      <h3><span class="tb" style="background:var(--${b.tier})">${b.tier}</span>${esc(L(lang, b.name))}</h3>
      <div class="bmeta"><span>${t("thSkill")}: <b>${esc(L(lang, b.skill))}</b></span><span class="tag">${t(b.stage)}</span>
        <span>${t("thBudget")}: <span class="dots">${dots(b.budget)}</span></span><span class="tag">${t("diff")[b.diff]}</span>
        ${b.trend === "up" ? `<span class="tr-up">▲ ${t("buff")}</span>` : b.trend === "down" ? `<span class="tr-down">▼ ${t("nerf")}</span>` : ""}</div>
      ${TLI.moreHTML(lang, b)}
    </article>`;
  const others = Object.keys(H).filter(x => H[x].hero === hero.hero && x !== id);
  const body = `
<header class="hp-head"><div class="wrap">
  <div class="hp-nav"><a href="${pageUrl(lang, null)}">${t("backToList")}</a><div class="seg lang">${langLinks(lang, id)}</div></div>
  <div class="hp-top">
    <img src="${img(id)}" alt="${esc(name + " " + hero.trait)}" width="128" height="128">
    <div>
      <span class="badge">${t("season")} ${D.season.code} · ${D.season.name}</span>
      <h1>${esc(name)} · ${esc(hero.trait)}</h1>
      <p class="sub">${t("lastUpd")} ${updText(lang)}</p>
    </div>
  </div>
</div></header>
<main class="wrap">
  <section><div class="tcards">${tierCard(st, t("tierStart"))}${tierCard(en, t("tierEnd"))}</div></section>
  <section>
    <h2>${t("heroBuilds")}</h2>
    ${builds.length ? builds.map(buildCard).join("") :
      `<p class="lead">${t("noBuilds")}</p><div class="links"><a class="lnk yt" href="${TLI.ytSearch({ hero: id, name: "" })}" target="_blank" rel="noopener">▶ ${t("ytVideos")}</a></div>`}
  </section>
  ${others.length ? `<section><h2>${t("otherTraits")}</h2><div class="heroes-idx">${others.map(x => `<a href="${pageUrl(lang, x)}">${label(x)} · ${esc(H[x].trait)}</a>`).join("")}</div></section>` : ""}
</main>
<footer class="wrap">
  <h3 class="idx-title">${t("heroesIdx")}</h3>
  <div class="heroes-idx">${TLI.heroIndexHTML(lang)}</div>
  <span>${t("footer")}</span>
</footer>`;
  return template.slice(0, template.indexOf("<body>") + 6).replace("{{lang}}", lang).replace("{{head}}", head(lang, id, title, desc)) +
    "\n<!-- Сгенерировано build.js — не править вручную -->" + body + "\n</body>\n</html>\n";
}

// Журнал изменений: одна страница, только EN
function changelogPage() {
  const title = "Changelog — Torchlight: Infinite tier list", desc = "Major content updates of the TLI FAQ tier lists and builds.";
  const url = SITE + "/changelog/";
  const meta = [`<title>${title}</title>`, `<meta name="description" content="${desc}">`, `<link rel="canonical" href="${url}">`,
    `<meta property="og:title" content="${title}">`, `<meta property="og:description" content="${desc}">`, `<meta property="og:url" content="${url}">`].join("\n");
  const day = d => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { timeZone: "UTC", dateStyle: "long" });
  const body = `
<header class="hp-head"><div class="wrap">
  <div class="hp-nav"><a href="/">${T("en", "backToList")}</a><a href="/ru/">RU</a></div>
  <h1>Changelog</h1>
  <p class="sub">Major content updates: tiers, builds, guides and sources.</p>
</div></header>
<main class="wrap clog">
${D.changelog.map(([d, items]) => `  <section><h2>${day(d)}</h2><ul>${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></section>`).join("\n")}
</main>
<footer class="wrap"><span>${T("en", "footer")}</span></footer>`;
  return template.slice(0, template.indexOf("<body>") + 6).replace("{{lang}}", "en").replace("{{head}}", meta) +
    "\n<!-- Сгенерировано build.js — не править вручную -->" + body + "\n</body>\n</html>\n";
}

// Сборка
for (const dir of ["hero", "en", "ru", "changelog"]) fs.rmSync(path.join(root, dir), { recursive: true, force: true });
const urls = [];
for (const lang of LANGS) {
  write(lang === "ru" ? "ru/index.html" : "index.html", indexPage(lang));
  for (const id of Object.keys(H)) write(pageUrl(lang, id).slice(1) + "index.html", heroPage(lang, id));
}
write("changelog/index.html", changelogPage());
for (const id of [null, ...Object.keys(H)]) urls.push(id);
const lastmod = D.season.updatedAt.slice(0, 10);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.flatMap(id => LANGS.map(lang => `<url><loc>${SITE + pageUrl(lang, id)}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>${id ? "0.7" : "1.0"}</priority>
${LANGS.map(l => `  <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + pageUrl(l, id)}"/>`).join("\n")}
</url>`)).join("\n")}
<url><loc>${SITE}/changelog/</loc><lastmod>${D.changelog[0][0]}</lastmod><changefreq>daily</changefreq><priority>0.5</priority></url>
</urlset>
`);
console.log(`Готово: ${LANGS.length} главных, ${LANGS.length * Object.keys(H).length} страниц героев, sitemap на ${urls.length * LANGS.length} адресов`);
