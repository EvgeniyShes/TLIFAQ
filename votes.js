// Голоса источников за тиры. Методика — в SOURCES.md (веса, пороги S/A/B/C).
// node votes.js — печатает расчёт по каждому трейту и расхождения с тирами в data.js.
// Новый источник: добавить в SOURCES ниже (вес + голоса), запустить, перенести изменения в data.js.
const SCORE = { S: 4, "A+": 3.5, A: 3, B: 2, C: 1 };
const SOURCES = [
  { id: "laoke", name: "Lao Ke, тир-лист SS14 (Bilibili, скриншоты с DCInside)", w: 2, lists: ["start", "end"],
    // уровни автора: «бог»+«бессмертный» → S, «демон» → A, «призрак» → B; «наблюдаем» — без голоса; Gemma 2 на скриншотах нет
    votes: { S: "youga_03 rosa_02 iris_02 sage_01 selena_01",
             A: "erika_03 moto_02 carino_03 bing_01 thea_03 thea_02 erika_02 gemma_01 bing_02",
             B: "gemma_03 rosa_01 rehan_01 rehan_02 carino_02 erika_01 selena_02" } },
  { id: "don", name: "DonTheCrown, прогноз тир-листа SS14 (YouTube)", w: 2, lists: ["start", "end"],
    // Powerful and Popular → S, Strong Options → A, Less Played → B, Off Meta / Not Played → C
    votes: { S: "sage_01 youga_03 rehan_02 rosa_02 bing_02 erika_01",
             A: "gemma_02 iris_02 selena_01 erika_02 carino_02 youga_02",
             B: "bing_01 selena_02 thea_01 moto_02 erika_03 rehan_01 youga_01",
             C: "carino_01 rosa_01 gemma_03 thea_03 carino_03 iris_01 thea_02 moto_01 gemma_01" } },
  { id: "r3plic", name: "R3plic, «5 (+1) Battle-Tested Starters for SS14» (tlicompendium)", w: 2, lists: ["start"],
    // подборка лучших стартеров без порядка → S
    votes: { S: "erika_01 selena_01 youga_02 rehan_02 youga_03" } },
  { id: "yt_season_unknown", old: true, name: "YouTube, тир-лист на весь сезон (скриншот от владельца, автор не указан)", w: 1, lists: ["end"],
    // героев опознал по артам (сверка с подписанным тир-листом DonTheCrown); SSS и S → S, A → A, B → B, F → C
    votes: { S: "youga_03 erika_01 carino_03 erika_03 bing_01 gemma_02 selena_01 iris_02 youga_02 rosa_02 thea_01 carino_02 rehan_02",
             A: "rehan_01 bing_02 iris_01 sage_01 thea_03 gemma_03",
             B: "erika_02 gemma_01 selena_02 youga_01 rosa_01 carino_01",
             C: "moto_01 moto_02 thea_02" } },
  { id: "pat404", name: "Pat404, «СТАРТЕРЫ SS14: кого брать, а кого нет?» (YouTube)", w: 2, lists: ["start"],
    // героев опознал по портретам; «S, но дорого» и S → S, A+ → 3,5
    votes: { S: "youga_03 erika_01 iris_02",
             "A+": "rehan_02 selena_01 thea_01 gemma_02 bing_02 rosa_02",
             A: "iris_01 moto_02 youga_02 bing_01 erika_02 carino_02 carino_01 selena_02 erika_03 sage_01 thea_03",
             B: "moto_01 youga_01 carino_03 rehan_01",
             C: "rosa_01 thea_02 gemma_01 gemma_03" } },
  { id: "little_practice", name: "Little_practice, «Кем играть в лиге Tartarus?» (YouTube)", w: 1, lists: ["start", "end"],
    // шаблон и расстановка почти как у DonTheCrown (4 отличия) — вес 1, чтобы не считать одно мнение дважды
    votes: { S: "erika_01 rehan_02 rosa_02 sage_01 youga_03",
             A: "bing_02 carino_02 gemma_02 iris_02 selena_01 thea_01 youga_02",
             B: "bing_01 carino_01 carino_03 erika_02 erika_03 moto_02 rehan_01 selena_02 youga_01",
             C: "gemma_01 gemma_03 rosa_01 thea_02 thea_03 iris_01 moto_01" } },
  { id: "satu1kaa", name: "satu1kaa, «Вилкой в глаз или стартер раз? Лигстартеры SS14» (YouTube)", w: 2, lists: ["start"],
    // рекомендованные стартеры; «Рехан» = Rehan 1, «три Карины» = Carino 1/2/3 (уточнил владелец)
    votes: { S: "carino_03 iris_02 selena_01 erika_01 rosa_02 rehan_01 carino_01 carino_02" } },
  { id: "minmaxed_yt", name: "MinMaxedARPG, «META: Tierlist Torchlight Infinite Tartarus Season 14» (YouTube)", w: 2, lists: ["start", "end"],
    // героев опознал по артам (тот же набор артов, что в тир-листе «на весь сезон»); «unsure» (Moto 1/2, Rosa 1, Iris 1) — без голоса
    votes: { S: "thea_01 carino_01 rosa_02 gemma_02 rehan_02 sage_01",
             A: "erika_01 youga_03 youga_02 iris_02 bing_02 selena_01 thea_03 bing_01 youga_01 rehan_01 gemma_01 carino_02 carino_03",
             B: "selena_02 gemma_03 thea_02 erika_02 erika_03" } },
  { id: "coffeebns", name: "CoffeeBns, «Tartarus Tier List SS14 | NEW KINGS ON TOP» (YouTube)", w: 2, lists: ["start", "end"],
    // героев опознал по артам (сошлись все 28)
    votes: { S: "youga_03 bing_02 erika_01 selena_01 selena_02",
             A: "rosa_02 rehan_02 gemma_02 erika_02 carino_03 gemma_03 iris_01 iris_02 erika_03 thea_01 sage_01",
             B: "rehan_01 youga_02 rosa_01 bing_01 carino_01 carino_02 moto_02",
             C: "moto_01 gemma_01 thea_02 thea_03 youga_01" } },
  { id: "unclejay", name: "UncleJay, «LEAGUE START TIER LIST UPDATED» (YouTube, 14.10.2026)", w: 2, lists: ["start"],
    // финальный кадр видео (tiermaker, герои подписаны); SSSSSSSSS → S, DNOPE → C, SSS пусто
    votes: { S: "youga_03 thea_01 carino_02 erika_01",
             A: "iris_02 rosa_02 rehan_02 selena_01 youga_02",
             B: "sage_01 moto_02 gemma_02 rehan_01 erika_02 selena_02 bing_02 bing_01",
             C: "gemma_03 erika_03 moto_01 carino_01 carino_03 thea_03 youga_01 thea_02 rosa_01 iris_01 gemma_01" } },
  { id: "bmlegolas", name: "Bmlegolas, «TLI Season 14 Tier List» (YouTube, 11.10.2026)", w: 2, lists: ["start", "end"],
    // финальный кадр видео (tiermaker, герои подписаны); «?» (Bing 1) — без голоса
    votes: { S: "youga_03 erika_01 carino_02 thea_01",
             A: "rosa_02 rehan_02 iris_02 bing_02 carino_01 youga_02 moto_02 youga_01 sage_01 selena_01",
             B: "gemma_02 thea_03 erika_03 selena_02 moto_01 gemma_03 erika_02 rehan_01",
             C: "thea_02 rosa_01 iris_01 carino_03 gemma_01" } },
  { id: "itsadiar", name: "ItsAdiar, «The BEST Tier List For New Players» (YouTube, 14.10.2026)", w: 1, lists: ["start"],
    // тир-лист простоты для новичков, а не силы → вес 1; Great for beginner → A, Solid choice → B, Avoid for first character → C; Youga 3 на доске нет
    votes: { A: "bing_01 erika_01 rehan_02 rosa_02 thea_01 youga_01 gemma_02 carino_02 gemma_03 selena_01 moto_02",
             B: "thea_03 youga_02 selena_02 bing_02 carino_01 iris_02",
             C: "erika_02 erika_03 iris_01 sage_01 moto_01 carino_03 gemma_01 rehan_01 rosa_01 thea_02" } },
  { id: "bagash", name: "BagashTorchlite, «TOP 5 Starters SS14» (YouTube, 14.10.2026)", w: 2, lists: ["start"],
    // топ-5 стартеров из его тир-листа (по описанию видео), без порядка → S; «Rosa2/Rehan2» — оба
    votes: { S: "youga_03 erika_01 carino_03 iris_02 rosa_02 rehan_02" } },
  // Ниже — тир-листы на tiermaker-шаблоне без подписей (полноростовые арты трейтов): трейты опознаны по эталону —
  // картинкам шаблона tiermaker.com/create/torchlight-infinite-afterlight-season-13-characters-tierlist-18065698 (имена файлов = трейты)
  { id: "frostlex", name: "FrostLex, «SS14 - Tier List, атакеры всё ещё в мете?» (YouTube, 15.10.2026)", w: 2, lists: ["start", "end"],
    // S/A/B/F → S/A/B/C; Thea 1 закрыта вебкамерой — без голоса
    votes: { S: "youga_03 erika_01 gemma_02",
             A: "selena_01 iris_02 rehan_01 rehan_02 moto_02 rosa_02 carino_03 bing_01 bing_02 sage_01 youga_01",
             B: "youga_02 selena_02 erika_02 carino_02 carino_01 erika_03 gemma_03 rosa_01 thea_03 iris_01",
             C: "moto_01 gemma_01 thea_02" } },
  { id: "farmingnerd", name: "파밍너드, «SS14 타르타로스 스타터 티어리스트» (YouTube, корейский, 14.10.2026)", w: 1, lists: ["start"],
    // подписи рядов не прямые тиры → вес 1: «최후의 존재» и «추천» (рекомендую) → S, «도망친 곳에 낙원은 없다» → A,
    // «숙련자 전용» (только опытным) → B, «비추천» (не рекомендую) → C, «몰?루» (не знаю) — без голоса
    votes: { S: "youga_03 moto_02 bing_01",
             A: "erika_03 rehan_02 rosa_02 erika_01 bing_02 youga_02 selena_01",
             B: "carino_02 carino_03 gemma_02 gemma_03 selena_02 sage_01",
             C: "gemma_01 rosa_01 rehan_01 carino_01 youga_01 thea_02 erika_02 thea_03" } },
  { id: "yamatsy", name: "Yamatsy, «A TIER LIST F2P DEFINITIVA PARA A NOVA LIGA» (YouTube, португальский, 13.10.2026)", w: 2, lists: ["start"],
    // F2P-старт; S/A/B/F → S/A/B/C; «N Sei» (не знаю) — без голоса
    votes: { S: "youga_03 erika_01 selena_01 thea_01 youga_02 iris_02",
             A: "gemma_02 rehan_02 carino_02 bing_02 bing_01 rehan_01 gemma_03 rosa_02 sage_01",
             B: "thea_03 carino_03",
             C: "erika_03 carino_01 selena_02 gemma_01" } },
  // 14.10.2026 убраны RMT-магазины и продавец ботов — не источники (см. SOURCES.md).
  // Тиры после этого не сдвигали (решение владельца): ≠ у rosa_01 (старт), carino_03 (эндгейм) — намеренно, см. SOURCES.md
  // 15.10.2026 решение владельца поверх формулы: старт — rosa_02 и selena_01 в S, selena_02 и thea_01 в A, moto_02 в B; эндгейм — rehan_02 в S, rehan_01 в A (Spell Burst)
  { id: "kr4000", old: true, name: "DCInside: игроков на 4000-м этаже, конец SS13", w: 1, lists: ["end"],
    // 100+ → S, 30–73 → A, 10–22 → B, меньше 10 → C
    votes: { S: "sage_01 iris_02 erika_02", A: "rosa_02 bing_02 moto_02 gemma_02 rehan_02",
             B: "rehan_01 selena_02 erika_03 thea_03 youga_01",
             C: "iris_01 moto_01 gemma_01 thea_01 carino_02 gemma_03 carino_01 rosa_01 carino_03 youga_02 bing_01 erika_01 thea_02 selena_01" } },
  { id: "instinct", old: true, name: "instinct, гайд Iris 2 (SS13)", w: 1.5, lists: ["start", "end"], votes: { A: "iris_02" } },
  { id: "travic", old: true, name: "Travic, гайд Rehan 1 от кампании до 250M (Twitch, ред. 1)", w: 1.5, lists: ["start"], votes: { A: "rehan_01" } },
  { id: "seph", name: "SephGoesGaming, гайды Iris 2 Erosion Magus и Youga 1 Ice Lances до Profound (SS14)", w: 1.5, lists: ["start", "end"], votes: { A: "iris_02 youga_01" } },
  { id: "bili_titles", name: "Bilibili, заголовки про Youga 3", w: 0.5, lists: ["start", "end"], votes: { S: "youga_03" } },
  { id: "selena1_old", old: true, name: "Selena 1: тир SS7 и гайд maxroll до T7", w: 0.5, lists: ["start"], votes: { B: "selena_01" } },
  { id: "owner", name: "Владелец сайта: Selena 1 хороша на актах", w: 0.5, lists: ["start"], votes: { A: "selena_01" } }
];
// Поправка за патч SS14 (явные нерфы/баффы из патчноута и блюпоста)
// Поправка патча — только на долю источников прошлого сезона (old: true); прогнозы SS14 патч уже учли
// 15.10.2026: rehan_01 убран — по патчноуту нерф ярости только у Rehan 2 (Seething Silhouette)
const PATCH = { rehan_02: -0.5, selena_02: -0.5, rosa_02: -0.5, sage_01: -0.5, moto_02: -0.5 };
// S также по частоте: S поставили ≥ 50% веса источников, а A и выше — ≥ 75% (среднее сжимает лидеров к центру)
const tierOf = (x, sShare = 0, aShare = 0) => x >= 3.5 || (sShare >= 0.5 && aShare >= 0.75 && x >= 3) ? "S" : x >= 2.5 ? "A" : x >= 1.5 ? "B" : "C";

function calc(list) {
  const acc = {};
  for (const s of SOURCES) if (s.lists.includes(list))
    for (const [t, ids] of Object.entries(s.votes)) for (const id of ids.split(" ")) {
      (acc[id] ||= { sum: 0, w: 0, ow: 0, sw: 0, aw: 0, from: [] });
      if (t === "S") acc[id].sw += s.w; if (SCORE[t] >= 3) acc[id].aw += s.w;
      acc[id].sum += SCORE[t] * s.w; acc[id].w += s.w; if (s.old) acc[id].ow += s.w; acc[id].from.push(`${s.id}:${t}`);
    }
  return Object.fromEntries(Object.entries(acc).map(([id, a]) => {
    const raw = a.sum / a.w, val = raw + (PATCH[id] || 0) * a.ow / a.w;
    return [id, { val: +val.toFixed(2), tier: tierOf(val, a.sw / a.w, a.aw / a.w), sShare: +(a.sw / a.w).toFixed(2), weight: a.w, from: a.from.join(" ") }];
  }));
}

if (require.main === module) {
  globalThis.window = globalThis; require("./data.js");
  const D = window.DATA;
  for (const [list, key] of [["start", "starter"], ["end", "endgame"]]) {
    const res = calc(list), cur = {};
    for (const [t, rows] of Object.entries(D.tiers[key].rows)) for (const [id] of rows) cur[id] = t;
    console.log(`\n=== ${list} ===`);
    for (const id of Object.keys(D.heroes)) {
      const r = res[id];
      const line = r ? `${r.val.toFixed(2)} → ${r.tier}  (вес ${r.weight}${r.weight < 2 ? ", мало данных" : ""})` : "нет голосов";
      console.log(`${(r && r.tier !== cur[id]) ? "≠" : " "} ${id.padEnd(10)} сейчас ${cur[id]}  ${line}   ${r ? r.from : ""}`);
    }
  }
}
module.exports = { calc, SOURCES, PATCH };
