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
| [Lao Ke — тир-лист SS14 (Bilibili)](https://www.bilibili.com/video/BV1yqpL6kEYK/) | 13.10.2026 | 🔁 | Из архива. Видео есть (11.10), сами тиры в описании не указаны — нужен просмотр/субтитры |
| [Qingzi Tan — первый геймплей Youga 3](https://www.bilibili.com/video/BV1BHHS6oEyh/) | 13.10.2026 | ✅ | Из архива. Ссылка в билде Youga 3 |
| Bilibili: Yin Ya, Ares, Zuiwu Canxue — Youga 3 (поиск, без прямых ссылок) | 13.10.2026 | ⛔ | Из архива. Только заголовки: три направления билда, теорикрафт |
| [Neng Miao — Sage SS14 (Bilibili)](https://www.bilibili.com/video/BV1wnpj6VEvG/) | 13.10.2026 | 🔁 | Проверил сам: видео 11.10, документ гайда обещан после блюпоста — ждать |
| [Marcus_Nordstrom — Q&A (YouTube)](https://youtu.be/Eahxy8XL42Q) | 13.10.2026 | 🔁 | Из архива. Цены билдов Youga 3/Bing 2/Iris 2, Rosa 2 vs Rehan 2 — ответы только в видео |
| [KaidGames2 — тир-лист SS13 (YouTube)](https://www.youtube.com/watch?v=-w8exoAJOTU) | 13.10.2026 | ⛔ | Из архива. Прошлый сезон, сами тиры недоступны |
| [Enzee5 — TLI Resource Links](https://docs.google.com/spreadsheets/d/1Vg6PbMnkWC2K7FXL9ojFwK7RQ-28gkeDzPDnwcKhiwo/edit) | 13.10.2026 | 🔁 | Из архива. Каталог гайдов сообщества (Bmlegolas, Shad0ws, Shadybroker, Fataouille, miakitten_, Corealis) — проверять каждый на актуальность |
| [tlicompendium — Erika 1 Corrosive Throw (Shad0ws, WIP)](https://tlicompendium.com/) | 13.10.2026 | 🔁 | Из архива. Гайд в работе |
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
