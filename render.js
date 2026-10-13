// Общая отрисовка: работает и в браузере (window.TLI), и в Node (build.js собирает из неё готовые HTML-страницы).
(function (g) {
const D = g.DATA, H = D.heroes;
const SITE = "https://tlifaq.pages.dev";
const TIER_ORDER = {S:0,A:1,B:2,C:3};
const TREND = {up:"▲", down:"▼", new:"✦"};

// Переводы интерфейса
const I18N = {
  ru: {
    title: "Тир-лист Torchlight: Infinite SS14 Tartarus — лучшие стартовые билды | TLI FAQ",
    desc: "Актуальный тир-лист героев и билдов Torchlight: Infinite, сезон SS14 Tartarus: лучшие стартовые билды для старта сезона, эндгейм, баффы и нерфы, гайды. Обновляется каждые 12 часов.",
    heroTitle: (name, trait) => `${name} (${trait}) — билды и тир в Torchlight: Infinite SS14 | TLI FAQ`,
    heroDesc: (name, trait, st, en, builds) => `${name} ${trait} в Torchlight: Infinite SS14 Tartarus: тир на старте сезона — ${st}, в эндгейме — ${en}.${builds ? " Билды: " + builds + "." : ""} Плюсы, минусы, гайды и видео.`,
    season: "Сезон", subtitle: "Тир-листы героев и билдов", updEvery: "Информация обновляется раз в 12 часов", lastUpd: "последнее обновление:",
    seasonStart: "Старт сезона", running: "Сезон идёт", units: ["дней","часов","минут","секунд"],
    navTiers: "Тир-листы", navBuilds: "Билды", navChanges: "Изменения SS14", navSources: "Источники",
    tiersTitle: "Тир-лист героев", legendUp: "бафф или новинка SS14", legendDown: "нерф в SS14", legendNew: "трейт переработан", legendClick: "Нажми на героя, чтобы открыть подробности",
    start: "Старт", end: "Эндгейм", both: "Старт + эндгейм", all: "Все", allHeroes: "Все герои",
    buildsTitle: "Сводная таблица билдов", buildsLead: "Нажми на строку, чтобы увидеть плюсы, минусы и источник. Нажми на заголовок колонки, чтобы отсортировать.",
    search: "Поиск: скилл, билд…", thHero: "Герой", thTier: "Тир", thBuild: "Билд", thSkill: "Ключевой скилл", thStage: "Этап", thBudget: "Бюджет", thDiff: "Сложность",
    diff: ["","Легко","Средне","Сложно"], buff: "бафф", nerf: "нерф", pros: "Плюсы", cons: "Минусы", source: "Источник", ytVideos: "Видео на YouTube", showAll: "показать все билды",
    like: "Нравится", tip: "поддержать автора", tipTitle: "Поддержите проект — оставьте чаевые", views: "уникальных просмотров", empty: "Ничего не найдено",
    changesTitle: "Что изменилось в SS14", changesLead: "Ключевые правки по официальному патчноуту и превью сезона", sourcesTitle: "Источники",
    heroPage: "Страница героя", heroesIdx: "Все герои и трейты", backToList: "← Все тир-листы", heroBuilds: "Билды", otherTraits: "Другие трейты",
    noBuilds: "Отдельных разборов билда пока нет — смотрите видео:", tierStart: "Старт лиги — первая валюта", tierEnd: "Эндгейм — Profound, Deep Space", phaseArrow: "накопил валюту — пересел",
    footer: "Фанатский проект, не связан с XD Inc. Портреты взяты с tlidb.com, права на них принадлежат правообладателям игры."
  },
  en: {
    title: "Torchlight: Infinite SS14 Tartarus Tier List — Best League Starter Builds | TLI FAQ",
    desc: "Up-to-date Torchlight: Infinite hero and build tier list for SS14 Tartarus: best league starter builds, endgame picks, buffs and nerfs, guides. Updated every 12 hours.",
    heroTitle: (name, trait) => `${name} (${trait}) — Builds & Tier in Torchlight: Infinite SS14 | TLI FAQ`,
    heroDesc: (name, trait, st, en, builds) => `${name} ${trait} in Torchlight: Infinite SS14 Tartarus: league start tier ${st}, endgame tier ${en}.${builds ? " Builds: " + builds + "." : ""} Pros, cons, guides and videos.`,
    season: "Season", subtitle: "Hero and build tier lists", updEvery: "Updated every 12 hours", lastUpd: "last update:",
    seasonStart: "Season start", running: "Season is live", units: ["days","hours","min","sec"],
    navTiers: "Tier lists", navBuilds: "Builds", navChanges: "SS14 changes", navSources: "Sources",
    tiersTitle: "Hero tier list", legendUp: "SS14 buff or new", legendDown: "SS14 nerf", legendNew: "trait reworked", legendClick: "Click a hero for details",
    start: "Start", end: "Endgame", both: "Start + endgame", all: "All", allHeroes: "All heroes",
    buildsTitle: "Build overview", buildsLead: "Click a row to see pros, cons and source. Click a column header to sort.",
    search: "Search: skill, build…", thHero: "Hero", thTier: "Tier", thBuild: "Build", thSkill: "Key skill", thStage: "Stage", thBudget: "Budget", thDiff: "Difficulty",
    diff: ["","Easy","Medium","Hard"], buff: "buff", nerf: "nerf", pros: "Pros", cons: "Cons", source: "Source", ytVideos: "Videos on YouTube", showAll: "show all builds",
    like: "Like", tip: "buy me a coffee", tipTitle: "Support the project — leave a tip", views: "unique views", empty: "Nothing found",
    changesTitle: "What changed in SS14", changesLead: "Key changes from the official patch notes and season preview", sourcesTitle: "Sources",
    heroPage: "Hero page", heroesIdx: "All heroes and traits", backToList: "← All tier lists", heroBuilds: "Builds", otherTraits: "Other traits",
    noBuilds: "No dedicated build breakdown yet — check the videos:", tierStart: "League start — first currency", tierEnd: "Endgame — Profound, Deep Space", phaseArrow: "farm currency, then switch",
    footer: "Fan project, not affiliated with XD Inc. Portraits from tlidb.com, all rights belong to the game's owners."
  }
};

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const label = id => `${H[id].hero} ${H[id].n}`;
const img = id => `/img/${id}.webp`;
const dots = n => "●".repeat(n) + `<i>${"●".repeat(3-n)}</i>`;
const T = (lang, k) => I18N[lang][k];
const L = (lang, x) => x && typeof x === "object" ? (x[lang] ?? x.ru) : x; // текст из data.js
const pageUrl = (lang, id) => (lang === "ru" ? "/ru" : "") + (id ? `/hero/${id}/` : "/");
const ytSearch = b => "https://www.youtube.com/results?search_query=" +
  encodeURIComponent(`Torchlight Infinite ${D.season.code} ${label(b.hero)} ${H[b.hero].trait} ${typeof b.name === "object" ? b.name.en : b.name}`);

function tierOf(list, id) {
  for (const [tier, arr] of Object.entries(D.tiers[list].rows)) { const r = arr.find(x => x[0] === id); if (r) return {t: tier, r}; }
}

function tiersHTML(lang, mode, selected) {
  return Object.entries(D.tiers[mode].rows).map(([tier, arr]) => `
    <div class="tier" style="--tc:var(--${tier})">
      <div class="tier-label" style="background:var(--${tier})">${tier}</div>
      <div class="tier-items">${arr.map(([id, tr]) => `
        <button class="hcard ${id===selected?"sel":""}" data-id="${id}" title="${esc(H[id].trait)}">
          <div class="portrait"><img src="${img(id)}" alt="${label(id)} ${esc(H[id].trait)}" loading="lazy" width="72" height="72"></div>
          ${tr ? `<span class="trend ${tr}">${TREND[tr]}</span>` : ""}
          <div class="hname">${label(id)}</div><div class="htrait">${esc(H[id].trait)}</div>
        </button>`).join("")}</div>
    </div>`).join("");
}

const sortVal = {
  hero: b => label(b.hero), tier: b => TIER_ORDER[b.tier], stage: b => b.stage,
  budget: b => b.budget, diff: b => b.diff, trend: b => ({up:0,"":1,down:2})[b.trend]
};
function buildRows(lang, {stage = "all", hero = "", q = "", sortK = "tier", sortDir = 1} = {}) {
  const val = sortK === "name" ? b => L(lang, b.name) : sortVal[sortK];
  return D.builds.map((b, i) => ({...b, i}))
    .filter(b => stage === "all" || b.stage === stage || b.stage === "both")
    .filter(b => !hero || b.hero === hero)
    .filter(b => !q || [label(b.hero), H[b.hero].trait, L(lang, b.name), L(lang, b.skill), L(lang, b.pros), L(lang, b.cons)].join(" ").toLowerCase().includes(q))
    .sort((a, b) => { const x = val(a), y = val(b);
      return (x > y ? 1 : x < y ? -1 : TIER_ORDER[a.tier] - TIER_ORDER[b.tier]) * sortDir; });
}

// Плюсы/минусы, ссылки и источник билда — в раскрытой строке таблицы и на странице героя
function moreHTML(lang, b) {
  return `<div class="pc"><div class="p"><b>${T(lang,"pros")}</b>${esc(L(lang, b.pros))}</div><div class="c"><b>${T(lang,"cons")}</b>${esc(L(lang, b.cons))}</div></div>
      <div class="links">${(b.links || []).map(([s,u]) => `<a class="lnk" href="${u}" target="_blank" rel="noopener">📖 ${esc(L(lang, s))}</a>`).join("")}
        <a class="lnk yt" href="${ytSearch(b)}" target="_blank" rel="noopener">▶ ${T(lang,"ytVideos")}</a></div>
      <div class="srcline">${T(lang,"source")}: ${esc(L(lang, b.src))}</div>`;
}

function buildsHTML(lang, rows, open = new Set()) {
  const t = k => T(lang, k);
  return rows.length ? rows.map(b => `
    <tr class="row" data-i="${b.i}" style="--tc:var(--${b.tier})">
      <td class="c-who"><div class="who"><img src="${img(b.hero)}" alt="" loading="lazy" width="40" height="40"><div><a href="${pageUrl(lang, b.hero)}"><b>${label(b.hero)}</b></a><small>${esc(H[b.hero].trait)}</small></div></div></td>
      <td class="c-tier"><span class="tb" style="background:var(--${b.tier})">${b.tier}</span></td>
      <td class="c-name">${esc(L(lang, b.name))}</td>
      <td class="c-skill">${esc(L(lang, b.skill))}</td>
      <td class="c-stage"><span class="tag">${t(b.stage)}</span></td>
      <td class="c-budget" title="${t("thBudget")}"><span class="dots">${dots(b.budget)}</span></td>
      <td class="c-diff" title="${t("thDiff")}"><span class="tag">${t("diff")[b.diff]}</span></td>
      <td class="c-trend">${b.trend==="up"?`<span class="tr-up">▲ ${t("buff")}</span>`:b.trend==="down"?`<span class="tr-down">▼ ${t("nerf")}</span>`:"—"}</td>
    </tr>
    ${open.has(b.i) ? `<tr class="more"><td colspan="8">${moreHTML(lang, b)}</td></tr>` : ""}`).join("")
    : `<tr><td colspan="8" class="empty">${t("empty")}</td></tr>`;
}

const changesHTML = lang => D.changes.map(c => `<div class="ch ${c.type}"><span class="ic">${TREND[c.type]}</span><span>${esc(L(lang, c.text))}</span></div>`).join("");
const sourcesHTML = lang => D.sources.map(([s,u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(L(lang, s))}</a></li>`).join("");
const heroOptionsHTML = lang => `<option value="">${T(lang,"allHeroes")}</option>` + [...new Set(D.builds.map(b => b.hero))].sort()
  .map(id => `<option value="${id}">${label(id)} — ${esc(H[id].trait)}</option>`).join("");
// Две карточки-этапа вместо переключателя: старт лиги → эндгейм
const phaseTabsHTML = (lang, mode) => {
  const card = ([k, v]) => `<button class="phase ${k === mode ? "on" : ""}" data-k="${k}"><span class="ph-ic">${v.icon}</span><span class="ph-t">${esc(L(lang, v.title))}</span><span class="ph-d">${esc(L(lang, v.desc))}</span></button>`;
  const [a, b] = Object.entries(D.tiers);
  return card(a) + `<div class="ph-arrow"><span>${T(lang, "phaseArrow")}</span><b>→</b></div>` + card(b);
};
const heroIndexHTML = lang => Object.keys(H).map(id => `<a href="${pageUrl(lang, id)}">${label(id)} · ${esc(H[id].trait)}</a>`).join("");

g.TLI = { D, H, SITE, I18N, TREND, esc, label, img, dots, T, L, pageUrl, ytSearch, tierOf, tiersHTML, buildRows, moreHTML, buildsHTML,
  changesHTML, sourcesHTML, heroOptionsHTML, heroIndexHTML, phaseTabsHTML };
})(typeof window !== "undefined" ? window : globalThis);
