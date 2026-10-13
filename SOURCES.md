# Журнал источников

Что уже проверено при обновлении тир-листов, чтобы не перечитывать одно и то же.
Перед обновлением: смотреть сюда, проверять только **новое** или помеченное «перепроверять».
После обновления: дописать строки и поменять `season.updatedAt` в `data.js`.

Статусы: ✅ полезно · 🔁 перепроверять (обновляется) · ⛔ пусто/устарело · 🚫 недоступно

## Как считаем тир (взвешивание источников)

Каждый источник ставит герою/билду оценку: **S = 4, A = 3, B = 2, C = 1**.
Итог — средневзвешенное по весам ниже, затем порог: **≥ 3,5 → S · ≥ 2,5 → A · ≥ 1,5 → B · иначе C**.

| Тип источника | Вес | Доля при равном числе |
|---|---|---|
| Статистика текущего сезона (ладдер, популярность в топах) | 3 | ~33% |
| Тир-лист эксперта/сайта по текущему сезону | 2 | ~22% |
| Гайд топ-игрока или стримера по конкретному герою (в т.ч. присланные владельцем) | 1,5 | ~17% |
| Тир-лист или данные прошлого сезона, прогноз до старта | 1 | ~11% |
| Заголовки видео, мнения без деталей | 0,5 | ~6% |

- Патчноут — не голос, а поправка: явный нерф −0,5, бафф/новинка +0,5 (и ▲/▼ на сайте).
- Гайд по одному герою влияет только на этого героя: он не сравнивает героев между собой.
- Если у героя меньше 2 источников — тир помечаем как прогноз и пересматриваем первым.
- Если суммарный вес голосов у трейта меньше 2 — тир по формуле не меняем (оставляем прежнюю оценку, «мало данных»).
- **Голоса всех источников хранятся в `votes.js`.** `node votes.js` печатает расчёт по каждому трейту и расхождения с `data.js`. Новый источник: добавить в `votes.js` (вес + голоса), запустить, перенести изменения в `data.js`.
- Источник от владельца сайта: прочитать, пересказать своими словами (не копировать текст и коды билдов), **указать автора** в `src` билда и в списке источников, дать ссылку на оригинал.

### Расчёты по присланным источникам

- **13.10.2026, гайд instinct по Iris 2** (вес 1,5, SS13). Старт: musabots A×2 + instinct A×1,5 → 3,0 → **A** (без изменений).
  Эндгейм: musabots S×2 + mmoexp S×2 + instinct A×1,5 → 3,73 → **S** (без изменений, но теперь 3 источника).
  Добавлено в билд Iris 2: путь от кампании до Deep Space, варианты Thunder/Fire Magus, плюсы/минусы, ссылки на гайд и Twitch.
- **13.10.2026, архив исследования от ChatGPT** (прислал владелец). Агрегатор: веса даются по исходным источникам внутри него, а не самому архиву.
  Важно: ChatGPT сам указывает, что видео **не смотрел** (Bilibili 412, YouTube ограничен) — только заголовки, описания и текстовые посты.
  - Carino 1, старт: musabots C×2 + тест игрока на Reddit B×1 (не проверен мной: Reddit закрыт для меня) → 1,33 → **C** (без изменений). Добавлен билд Ice Lances / Chromatic Shot.
  - Erika 1, старт: musabots S×2 + IGGM S×1 + Reddit S×1 → 4,0 → **S** (без изменений). В билд добавлены Thunder Spike, Thunder Jawbone, Farewell Desire (90+ FE — цена до старта).
  - Youga 3: ≥4 автора на Bilibili — это интерес, а не сила (вес 0,5 каждый). Тир S остаётся **прогнозом**, источников с результатами пока нет.
  - Тир-лист Lao Ke (Bilibili, 11.10), Q&A Marcus_Nordstrom (YouTube), SS13-тир KaidGames2: содержимое (сами тиры/цены) недоступно → на тиры не влияют, пометил 🔁.
- **13.10.2026, пересмотр Selena 1 (Sing with the Tide), старт** — по вопросу владельца («говорят, хороша на актах и первых картах»).
  Ошибка прошлой оценки: C стоял почти без данных, а нерф −30% скорости я ошибочно приписал Selena 1 — к какому трейту он относится, не подтверждено (поиск не нашёл), поэтому поправку −0,5 не применяю.
  Расчёт: тир-лист SS7 B×0,5 (старый сезон) + гайд maxroll «прокачка до T7» B×1 (гайд 2024, сейчас 404) + mmoexp SS13 «теряла игроков» C×1 + мнение владельца без источника A×0,5 → (1+2+1+1,5)/3 = 1,83 → **B** (было C). Эндгейм остаётся **C** (слабый урон по боссам, зависимость от шмота).
- **13.10.2026, полный пересчёт всех 28 трейтов** после трёх новых источников (голоса — в `votes.js`):
  - **Lao Ke, тир-лист SS14** (вес 2, оба списка) — по 4 скриншотам из поста на DCInside (прислал владелец через ChatGPT). Уровни автора: «бог» и «бессмертный» → S, «демон» → A, «призрак» → B, «наблюдаем» — без голоса. Gemma 2 на скриншотах нет.
  - **DCInside, игроки на 4000-м этаже в конце SS13** (вес 1, только эндгейм): 100+ → S, 30–73 → A, 10–22 → B, меньше 10 → C.
  - **DonTheCrown, «NO BAIT TIER LIST … SS14»** (вес 2, оба списка, прислал владелец): Powerful and Popular → S, Strong Options → A, Less Played → B, Off Meta и Not Played → C.
  - Веса старых источников приведены к методике: musabots, IGGM, mmoexp — данные SS13 → вес 1 (раньше musabots/mmoexp считались с весом 2); mmoexp и эндгейм musabots — один и тот же источник, считается один раз.
  - Итог: 27 изменений тиров (полный список — в истории коммитов). Главное: старт — S у Youga 2, Youga 3, Bing 2; Rosa 2 C → A, Selena 1 → A, Erika 1 S → A. Эндгейм — S у Iris 2, Youga 3, Sage; Carino 3 S → B, Bing 1 и Gemma 2 S → A, Selena 1 C → A (прогноз).
  - **R3plic, «5 (+1) Battle-Tested Starters for SS14»** (tlicompendium, 12.10, вес 2, только старт): Erika 1, Selena 1, Youga 2, Rehan 2, Youga 3 → S. После него Erika 1 и Selena 1 на старте → **S**. Добавлены билды Selena 1 Howling Gale и Erika 1 Corrosive Throw, ссылки на гайды BmLegolas, ShadyBroker, AgroMorph, DonTheCrown, Allie, ItsAdiar, Shad0ws.
- **13.10.2026, скриншот тир-листа с YouTube «на весь сезон»** (прислал владелец, автор и ссылка не указаны). Подписей нет — героев опознал по артам, сверяясь с подписанным тир-листом DonTheCrown (сошлись все 28). Вес 1 (автор неизвестен), только эндгейм. SSS и S → S, A → A, B → B, F → C.
  Изменения в эндгейме: Carino 2 B → A, Youga 2 B → A, Gemma 3 C → B, Rosa 1 C → B, Iris 1 C → B, Sage S → A (3,36 с учётом нерфа SS14). Когда будет ссылка на видео — указать автора и поднять вес до 2.
- **13.10.2026, гайд Travic по Rehan 1 (Anger)** — PDF «TLI Tartarus Leaguestarter, Part 1», ред. 1 от 12.10.2026 (прислал владелец). Вес 1,5, только старт. Голос A (рабочий стартер с полным путём до 250M DPS).
  Rehan 1, старт: Lao Ke B×2 + DonTheCrown B×2 + Travic A×1,5 → 2,27, нерф SS14 −0,5 → 1,77 → **B** (без изменений). Добавлен билд Whirlwind с пересказом этапов; сам PDF на сайт не выкладываем — ссылки на Twitch автора и YouTube Marcus Nordstrom (автор благодарит его в гайде).
- **13.10.2026, Pat404, «СТАРТЕРЫ SS14: кого брать, а кого нет?»** (YouTube, прислал владелец скриншотом). Вес 2, только старт. Героев опознал по портретам (сошлись все 28). «S, но дорого» и S → S, A+ → 3,5 (добавлено в шкалу votes.js). Автор оговаривает: тир-лист — ориентир, главное — ваши питомцы и комфорт.
  Изменения на старте: Thea 1 B → A, Carino 1 C → B, Gemma 3 и Rosa 1 B → C.
- **13.10.2026, Little_practice, «Кем играть в лиге Tartarus? Тирлист героев и билды»** (YouTube, прислал владелец скриншотом, герои подписаны). Шаблон и расстановка почти как у DonTheCrown (отличия: Bing 2 ниже, Thea 1 выше, Erika 2 ниже, Carino 1/3 выше) — похоже на адаптацию, поэтому вес 1, оба списка. Powerful and Popular → S, Strong Options → A, Less Played → B, Not Played → C.
  Изменения: старт — Youga 2, Bing 2 и Selena 1 S → A (Selena 1 — 3,45, на волосок ниже S), Thea 3 A → B; эндгейм — Rosa 1 и Iris 1 B → C.

## Проверенные страницы

| Источник | Проверен | Статус | Что взято / почему нет |
|---|---|---|---|
| [musabots — SS14 tier list](https://musabots.com/blog/torchlight-infinite-tier-list) | 13.10.2026 | 🔁 | Стартер и эндгейм тиры (данные SS13). Обещают обновить после 1-й недели SS14 |
| [IGGM — SS13 starter tier list](https://www.iggm.com/news/torchlight-infinite-ss13-afterlight-starter-build-tier-list-for-fast-leveling) | 13.10.2026 | ✅ | Стартовые тиры SS13, плюсы/минусы, ключевые скиллы |
| [mmoexp — SS13 tier list, day 3](https://www.mmoexp.com/News/torchlight-infinite-ss13-afterlight-tier-list-10-best-builds-to-farm-faster-based-on-day-3-performance.html) | 13.10.2026 | ✅ | Эндгейм SS13, кто набирал/терял игроков. Carino 3 = S |
| [Официальный патчноут SS14](https://torchlight.xd.com/ss14pn/) | 13.10.2026 | 🔁 | Нерфы Rehan/Selena/Rosa/Sage, скиллы. Могут выйти хотфиксы |
| [PCGamesN — Tartarus](https://www.pcgamesn.com/torchlight-infinite/update-tartarus-season) | 13.10.2026 | ✅ | Даты, механики, Youga 3, Thea 1 rework (без деталей) |
| [17173 — превью SS14](https://news.17173.com/content/10112026/143712170.shtml) | 13.10.2026 | ✅ | Наёмники, «шесть проклятий», Youga 3 Dictator |
| [Bilibili — превью S14 (BV1eWph6qEfM)](https://www.bilibili.com/video/BV1eWph6qEfM/) | 13.10.2026 | 🔁 | Только описание + список похожих видео. Автор обещал коды билдов после старта |
| [233leyuan — Moto 2 self-destruct](https://www.233leyuan.com/post-detail/2077457185859616768) | 13.10.2026 | ✅ | Гайд с кодом билда (SS13) |
| [233leyuan — что играть в SS13](https://www.233leyuan.com/post-detail/2076310819657379840) | 13.10.2026 | ⛔ | Только вступление, без тиров |
| [minmaxed — S14](https://minmaxedarpg.com/games/tli/seasons/s14) | 13.10.2026 | 🔁 | 4 гайда (Gemma 2 ×2, Youga 1 ×2). Новые гайды появляются |
| [instinct — гайд по Iris 2 (Google Docs)](https://docs.google.com/document/d/1ZvE5EIwXpxn1Ta5Zi8qDGuKBDS1TEDlNggbTgI1X6o8/edit) · [Twitch](https://www.twitch.tv/instinct_t) | 13.10.2026 | 🔁 | Прислал владелец. Прогрессия Iris 2 до Profound/Deep (SS13): Thunder/Fire Magus на актах, питомцы, трейты, грейды. Автор обещал дополнять |
| [Reddit — Early SS14 League Start Ideas](https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/) | 13.10.2026 | 🔁 | Из архива ChatGPT. Тесты игроков: Carino 1 Ice Lances, Erika 1 Thunder Spike. Мне Reddit недоступен (403) — не проверено |
| [Lao Ke — тир-лист SS14 (Bilibili)](https://www.bilibili.com/video/BV1yqpL6kEYK/) | 13.10.2026 | ✅ | Тиры расшифрованы по скриншотам из поста на DCInside (см. ниже). Вес 2, оба списка |
| [DonTheCrown — NO BAIT TIER LIST SS14 (YouTube)](https://www.youtube.com/watch?v=WOTBgd06l2U) | 13.10.2026 | 🔁 | Прислал владелец (скриншот тир-листа). Прогноз силы/популярности на SS14, все 28 трейтов. Вес 2 |
| [Pat404 — стартеры SS14 (YouTube)](https://www.youtube.com/watch?v=7y6-yvglxeQ) | 13.10.2026 | ✅ | Тир-лист стартеров с ценами сборок, все 28 трейтов. Вес 2 |
| [Little_practice — кем играть в Tartarus (YouTube)](https://www.youtube.com/watch?v=s61o8_2aYN4) | 13.10.2026 | ✅ | Тир-лист по шаблону DonTheCrown, все 28 трейтов. Вес 1 (похож на адаптацию Don) |
| Travic — PDF «TLI Tartarus Leaguestarter, Part 1» ([Twitch](https://www.twitch.tv/travic)) | 13.10.2026 | 🔁 | Rehan 1, 4 этапа до 250M. Автор обещает Part 2+ и новые редакции — проверять номер редакции. YouTube-канал автора не найден |
| [Marcus Nordstrom (YouTube)](https://www.youtube.com/@marcusnordstrom9251) | 13.10.2026 | 🔁 | Видео по Rehan 1 и ответы на вопросы с Reddit (цены билдов) |
| [DCInside — пост со скриншотами Lao Ke и статистикой SS13](https://gall.dcinside.com/mgallery/board/view/?id=torchlightinfinite&no=142605) | 13.10.2026 | ✅ | Через ChatGPT. 3 скриншота тир-листа Lao Ke (SS14) + таблица «игроков на 4000-м этаже» по итогам SS13 |
| [Qingzi Tan — первый геймплей Youga 3](https://www.bilibili.com/video/BV1BHHS6oEyh/) | 13.10.2026 | ✅ | Из архива. Ссылка в билде Youga 3 |
| Bilibili: Yin Ya, Ares, Zuiwu Canxue — Youga 3 (поиск, без прямых ссылок) | 13.10.2026 | ⛔ | Из архива. Только заголовки: три направления билда, теорикрафт |
| [Neng Miao — Sage SS14 (Bilibili)](https://www.bilibili.com/video/BV1wnpj6VEvG/) | 13.10.2026 | 🔁 | Проверил сам: видео 11.10, документ гайда обещан после блюпоста — ждать |
| [Marcus_Nordstrom — Q&A (YouTube)](https://youtu.be/Eahxy8XL42Q) | 13.10.2026 | 🔁 | Из архива. Цены билдов Youga 3/Bing 2/Iris 2, Rosa 2 vs Rehan 2 — ответы только в видео |
| [KaidGames2 — тир-лист SS13 (YouTube)](https://www.youtube.com/watch?v=-w8exoAJOTU) | 13.10.2026 | ⛔ | Из архива. Прошлый сезон, сами тиры недоступны |
| [Enzee5 — TLI Resource Links](https://docs.google.com/spreadsheets/d/1Vg6PbMnkWC2K7FXL9ojFwK7RQ-28gkeDzPDnwcKhiwo/edit) | 13.10.2026 | 🔁 | Из архива. Каталог гайдов сообщества (Bmlegolas, Shad0ws, Shadybroker, Fataouille, miakitten_, Corealis) — проверять каждый на актуальность |
| [tlicompendium — гайды и статьи](https://tlicompendium.com/en/build-guides) | 13.10.2026 | 🔁 | Сайт рендерится скриптом — читать через браузер. Статья R3plic про стартеры SS14 (вес 2), гайды: BmLegolas (Erika 1 Thunder Spike), Shad0ws (Erika 1 Corrosive Throw, WIP), ShadyBroker (Youga 2), AgroMorph (Rehan 2, Rosa 2), DonTheCrown (Sage, Selena 2), Allie (Selena 2), ItsAdiar (Selena 1, SS12). Новости и патчноуты тоже там |
| [tlidb — герои](https://tlidb.com/en/Hero) | 13.10.2026 | ✅ | Названия трейтов, портреты (`cdn.tlidb.com/.../Portrait/<Hero>/UI_Portrait_<Hero>_0N_128.webp`) |
| [ProGameGuides tier list](https://progameguides.com/torchlight/torchlight-infinite-tier-list-best-characters-builds-ranked/) | 13.10.2026 | ⛔ | Без даты, сезон неясен |
| [FandomWire classes tier list](https://fandomwire.com/torchlight-infinite-classes-tier-list/) | 13.10.2026 | ⛔ | Сезон Lunaria (SS12), устарел |
| [TreyexGaming — Lunaria builds](https://www.treyexgaming.com/torchlight-infinite-top-builds-for-lunaria-season/) | 13.10.2026 | ⛔ | SS12, устарел |
| gfinity, gamepressure, itemlevel, sportskeeda, dotesports, pocketgamer | 13.10.2026 | ⛔ | Старые сезоны (2023–2025) |
| maxroll.gg build-guides TLI | 13.10.2026 | 🚫 | Редирект 302, гайдов по текущим сезонам нет |
| 9game, toutiao, wywyx, soft168, 7723 | 13.10.2026 | ⛔ | Тиры S2–S11, устарели |

## Что не получается

- **Видео Bilibili и YouTube** — содержимое недоступно, только названия и описания. Искать текстовые статьи-колонки Bilibili, описания с кодами билдов, 17173, NGA, TapTap.
- **Поиск Bilibili** через API требует cookies — не работает.

## Где искать в первую очередь после старта SS14

1. musabots (обещали обновить через неделю)
2. minmaxed S14 — новые гайды
3. 17173 / 233leyuan — китайские разборы и коды билдов
4. Новые тир-листы IGGM / mmoexp по SS14
