# Журнал источников

Что уже проверено при обновлении тир-листов, чтобы не перечитывать одно и то же.
Перед обновлением: смотреть сюда, проверять только **новое** или помеченное «перепроверять».
После обновления: дописать строки и поменять `season.updatedAt` в `data.js`.

Статусы: ✅ полезно · 🔁 перепроверять (обновляется) · ⛔ пусто/устарело · 🚫 недоступно

## Как считаем тир (взвешивание источников)

Каждый источник ставит герою/билду оценку: **S = 4, A = 3, B = 2, C = 1**.
Итог — средневзвешенное по весам ниже, затем порог: **≥ 3,5 → S · ≥ 2,5 → A · ≥ 1,5 → B · иначе C**.
Частота: S также получает трейт, которому S поставили **≥ 50% веса** источников, а A и выше — **≥ 75%** (при среднем ≥ 3). Усреднение многих мнений сжимает лидеров к центру, и без этого правила S почти никто не набирал. Для нижних тиров частоту не используем: там мнения расходятся, и среднее честнее.

| Тип источника | Вес | Доля при равном числе |
|---|---|---|
| Статистика текущего сезона (ладдер, популярность в топах) | 3 | ~33% |
| Тир-лист эксперта/сайта по текущему сезону | 2 | ~22% |
| Гайд топ-игрока или стримера по конкретному герою (в т.ч. присланные владельцем) | 1,5 | ~17% |
| Тир-лист или данные прошлого сезона, прогноз до старта | 1 | ~11% |
| Заголовки видео, мнения без деталей | 0,5 | ~6% |

- Патчноут — не голос, а поправка: явный нерф −0,5, бафф/новинка +0,5 (и ▲/▼ на сайте). Поправка действует только на долю голосов источников прошлого сезона (`old: true` в votes.js): прогнозы SS14 патч уже учли, иначе нерф считается дважды.
- Гайд по одному герою влияет только на этого героя: он не сравнивает героев между собой.
- **Не используем** сайты, которые продают игровую валюту, предметы, аккаунты, бустинг (RMT) или ботов: ни как голос, ни как ссылку. Расчёты ниже до 14.10.2026 ещё учитывали их. Их голоса убраны из `votes.js`, но тиры по решению владельца **не сдвигали**: `node votes.js` показывает ≠ у rosa_01 (старт B), carino_03, erika_01, bing_01 (эндгейм) — это намеренно, пересматривать по новым данным SS14, а не «чинить» под формулу.
- Если у героя меньше 2 источников — тир помечаем как прогноз и пересматриваем первым.
- Если суммарный вес голосов у трейта меньше 2 — тир по формуле не меняем (оставляем прежнюю оценку, «мало данных»).
- **Голоса всех источников хранятся в `votes.js`.** `node votes.js` печатает расчёт по каждому трейту и расхождения с `data.js`. Новый источник: добавить в `votes.js` (вес + голоса), запустить, перенести изменения в `data.js`.
- Источник от владельца сайта: прочитать, пересказать своими словами (не копировать текст и коды билдов), **указать автора** в `src` билда и в списке источников, дать ссылку на оригинал.

### Расчёты по присланным источникам

- **13.10.2026, гайд instinct по Iris 2** (вес 1,5, SS13). Старт: удалённый источник A×2 + instinct A×1,5 → 3,0 → **A** (без изменений).
  Эндгейм: удалённый источник S×2 + удалённый источник S×2 + instinct A×1,5 → 3,73 → **S** (без изменений, но теперь 3 источника).
  Добавлено в билд Iris 2: путь от кампании до Deep Space, варианты Thunder/Fire Magus, плюсы/минусы, ссылки на гайд и Twitch.
- **13.10.2026, архив исследования от ChatGPT** (прислал владелец). Агрегатор: веса даются по исходным источникам внутри него, а не самому архиву.
  Важно: ChatGPT сам указывает, что видео **не смотрел** (Bilibili 412, YouTube ограничен) — только заголовки, описания и текстовые посты.
  - Carino 1, старт: удалённый источник C×2 + тест игрока на Reddit B×1 (не проверен мной: Reddit закрыт для меня) → 1,33 → **C** (без изменений). Добавлен билд Ice Lances / Chromatic Shot.
  - Erika 1, старт: удалённый источник S×2 + удалённый источник S×1 + Reddit S×1 → 4,0 → **S** (без изменений). В билд добавлены Thunder Spike, Thunder Jawbone, Farewell Desire (90+ FE — цена до старта).
  - Youga 3: ≥4 автора на Bilibili — это интерес, а не сила (вес 0,5 каждый). Тир S остаётся **прогнозом**, источников с результатами пока нет.
  - Тир-лист Lao Ke (Bilibili, 11.10), Q&A Marcus_Nordstrom (YouTube), SS13-тир KaidGames2: содержимое (сами тиры/цены) недоступно → на тиры не влияют, пометил 🔁.
- **13.10.2026, пересмотр Selena 1 (Sing with the Tide), старт** — по вопросу владельца («говорят, хороша на актах и первых картах»).
  Ошибка прошлой оценки: C стоял почти без данных, а нерф −30% скорости я ошибочно приписал Selena 1 — к какому трейту он относится, не подтверждено (поиск не нашёл), поэтому поправку −0,5 не применяю.
  Расчёт: тир-лист SS7 B×0,5 (старый сезон) + гайд maxroll «прокачка до T7» B×1 (гайд 2024, сейчас 404) + удалённый источник SS13 «теряла игроков» C×1 + мнение владельца без источника A×0,5 → (1+2+1+1,5)/3 = 1,83 → **B** (было C). Эндгейм остаётся **C** (слабый урон по боссам, зависимость от шмота).
- **13.10.2026, полный пересчёт всех 28 трейтов** после трёх новых источников (голоса — в `votes.js`):
  - **Lao Ke, тир-лист SS14** (вес 2, оба списка) — по 4 скриншотам из поста на DCInside (прислал владелец через ChatGPT). Уровни автора: «бог» и «бессмертный» → S, «демон» → A, «призрак» → B, «наблюдаем» — без голоса. Gemma 2 на скриншотах нет.
  - **DCInside, игроки на 4000-м этаже в конце SS13** (вес 1, только эндгейм): 100+ → S, 30–73 → A, 10–22 → B, меньше 10 → C.
  - **DonTheCrown, «NO BAIT TIER LIST … SS14»** (вес 2, оба списка, прислал владелец): Powerful and Popular → S, Strong Options → A, Less Played → B, Off Meta и Not Played → C.
  - Веса старых источников приведены к методике: удалённый источник, удалённый источник, удалённый источник — данные SS13 → вес 1 (раньше удалённый источник/удалённый источник считались с весом 2); удалённый источник и эндгейм удалённый источник — один и тот же источник, считается один раз.
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
- **13.10.2026, satu1kaa, «Вилкой в глаз или стартер раз? Лигстартеры SS14»** (YouTube, 11.10.2026; описание прочитано через Chrome владельца). Вес 2, только старт: Carino 3, Iris 2, Selena 1, Erika 1, Rosa 2 → S. Итог: Iris 2 и Selena 1 на старте A → S.
  Добавлены коды билдов: Iris 2 (instinct), Erika 1 15T (Мия / BmLegolas), Rosa 2 ~500B, Carino 3 ~45B и ~900B (новый билд), Selena 1 Scorching Beam — новый билд с гайдом Smith (tlicompendium, обновлён 05.09.2026).
  Владелец уточнил: «Рехан» = Rehan 1 (код Адемки, t.me/torchdwg — отдельный билд), «Карины Танглы» = общий код для Carino 1/2/3, «Роза» = Rosa 2. Голоса satu1kaa за Rehan 1, Carino 1, Carino 2 добавлены — тиры не изменились.
- **13.10.2026, SephGoesGaming** — видео «S14 Builds Are Ready!» (10.10.2026) и два гайда на tlicompendium: Iris 2 Erosion Magus и Youga 1 Ice Lances, оба «кампания → Profound». Вес 1,5, оба списка, голос A за каждый. Добавлены два билда. Итог: Iris 2 S → A на старте (3,46) и в эндгейме (3,45) — на волосок ниже порога S.
- **13.10.2026, MinMaxedARPG, «META: Tierlist Torchlight Infinite Tartarus Season 14»** (YouTube, скриншот от владельца). Вес 2, оба списка. Героев опознал по артам (сошлись все 28); «unsure» (Moto 1/2, Rosa 1, Iris 1) — без голоса.
  Изменения: старт — Carino 1, Carino 3, Thea 3 → A, Gemma 3 C → B, Erika 3 A → B, Selena 1 S → A (3,46); эндгейм — Gemma 2 A → S, Carino 3 и Thea 1 → A, Carino 1 C → B.
- **13.10.2026, CoffeeBns, «Tartarus Tier List SS14 | NEW KINGS ON TOP»** (YouTube, скриншот от владельца). Вес 2, оба списка, героев опознал по артам (сошлись все 28).
  Изменения: старт — Selena 1 A → S (3,53), Erika 3 B → A, Rosa 1 C → B, Thea 3 A → B; эндгейм — Gemma 2 S → A (3,40), Rosa 1 и Iris 1 C → B.
- **13.10.2026, пересмотр метода** (по замечанию владельца: в S эндгейма был один Youga 3). 1) Поправка патча считалась дважды — прогнозы SS14 нерф уже учли; теперь она действует только на долю источников прошлого сезона. 2) Добавлено правило частоты для S. Итог: S старта — Youga 3, Erika 1, Selena 1, Sage 1, Rosa 2, Rehan 2; S эндгейма — Youga 3, Rosa 2, Sage 1, Rehan 2, Erika 1. Selena 2 на старте B → A.
  Примечание: Selena 1 и Gemma 2 колеблются у порога 3,5 — каждый новый источник может сдвинуть их на тир.
- **15.10.2026, 7 новых тир-листов с YouTube** (голоса — в `votes.js`). Видео недоступны текстом: финальные кадры сняты в браузере (YouTube без входа местами просит подтвердить «не бот» — тогда Chrome владельца). Для доски на tiermaker без подписей (полноростовые арты) трейты опознаны по картинкам шаблона [tiermaker 18065698](https://tiermaker.com/create/torchlight-infinite-afterlight-season-13-characters-tierlist-18065698): в именах файлов — названия трейтов.
  - UncleJay «LEAGUE START TIER LIST UPDATED» — вес 2, старт; SSSSSSSSS → S, DNOPE → C.
  - Bmlegolas «TLI Season 14 Tier List» — вес 2, оба списка; «?» (Bing 1) без голоса.
  - FrostLex «SS14 - Tier List» (рус.) — вес 2, оба списка; F → C; Thea 1 закрыта вебкамерой.
  - Yamatsy «A TIER LIST F2P DEFINITIVA» (португ.) — вес 2, старт; «N Sei» без голоса.
  - BagashTorchlite «TOP 5 Starters» — вес 2, старт, S (Youga 3, Erika 1, Carino 3, Iris 2, Rosa 2, Rehan 2).
  - ItsAdiar «The BEST Tier List For New Players» — вес 1 (простота, а не сила), старт; Great → A, Solid → B, Avoid → C.
  - 파밍너드 (кор.) — вес 1 (подписи рядов не прямые тиры), старт; «추천» → S, «도망친 곳에 낙원은 없다» → A, «숙련자 전용» → B, «비추천» → C, «몰?루» без голоса.
  - Не учтены отдельно: DonTheCrown «TOP BUILDS» и ItsAdiar «Six Starters» — те же авторы, что уже в расчёте.
  - Патчноут перечитан: нерф ярости — только Rehan 2 (Seething Silhouette), поэтому поправка −0,5 у Rehan 1 убрана. Rosa 2 — Unsullied Blade, Selena 2 — Dance of the Deep, Sage — Licorice Note. В `changes` указаны трейты.
  - По формуле старт: S — Youga 3, Erika 1, Thea 1; Rosa 2 (3,48) и Selena 1 (3,40) — A. Эндгейм: Rehan 2 (3,20) — A, Rehan 1 (2,33) — B.
  - **Решение владельца поверх формулы:** старт — Rosa 2 и Selena 1 остаются S, Selena 2 и Thea 1 остаются A (Thea 1 по формуле — S), Moto 2 остаётся B (по формуле наоборот — 2,19 и 2,65); эндгейм — Rehan 2 остаётся S, Rehan 1 → A (билд через Spell Burst). Остальное — по формуле: старт — Moto 2 B → A, Rehan 2 и Sage S → A, Carino 1, Carino 3, Erika 2, Erika 3, Selena 2 A → B, Gemma 1 и Thea 2 B → C; эндгейм — Erika 3 A → B, Thea 2 B → C.
  - UncleJay упоминает свежие правки патча (бафф Youga 3, нерф Bing) — в патчноуте на 15.10 не нашёл, проверить после старта.

## Проверенные страницы

| Источник | Проверен | Статус | Что взято / почему нет |
|---|---|---|---|
| [Официальный патчноут SS14](https://torchlight.xd.com/ss14pn/) | 13.10.2026 | 🔁 | Нерфы Rehan/Selena/Rosa/Sage, скиллы. Могут выйти хотфиксы |
| [PCGamesN — Tartarus](https://www.pcgamesn.com/torchlight-infinite/update-tartarus-season) | 13.10.2026 | ✅ | Даты, механики, Youga 3, Thea 1 rework (без деталей) |
| [17173 — превью SS14](https://news.17173.com/content/10112026/143712170.shtml) | 13.10.2026 | ✅ | Наёмники, «шесть проклятий», Youga 3 Dictator |
| [Bilibili — превью S14 (BV1eWph6qEfM)](https://www.bilibili.com/video/BV1eWph6qEfM/) | 13.10.2026 | 🔁 | Только описание + список похожих видео. Автор обещал коды билдов после старта |
| [233leyuan — Moto 2 self-destruct](https://www.233leyuan.com/post-detail/2077457185859616768) | 13.10.2026 | ✅ | Гайд с кодом билда (SS13) |
| [233leyuan — что играть в SS13](https://www.233leyuan.com/post-detail/2076310819657379840) | 13.10.2026 | ⛔ | Только вступление, без тиров |
| [minmaxed — S14](https://minmaxedarpg.com/games/tli/seasons/s14) | 15.10.2026 | 🔁 | 8 гайдов. 15.10 добавлены: Fragmentations — Youga 1 Chain Lightning 8B → SS20 (новый билд); ShadyBroker — Youga 2 Mind Control TM1–7 (только планер, без текста — ссылкой к билду вместе с видео). Не взят: Seasonstart Void Chart (стратегия карты, не билд) |
| tlicompendium — гайды за 14–15.10.2026 (через API, `node guide.js`) | 15.10.2026 | 🔁 | Добавлены: CrimsonDead — Selena 1 Wilting Beam (новый билд, на русском) и Scorching Beam под SS14 (к билду Smith); Nirtas — Youga 3 Hound's Fangs в холод (новый билд, автор пишет «WIP, может быть байт») и Selena 2 Tidewell (SS13 + заметки о нерфах SS14, новый билд). Не взяты: Wisernage «Rosa 2 Guide» (Double Thrusts — только советы по кампании и тир-лист талантов, часть текста от гайда по Erika 3 — 🔁), AgroMorph Carino 3 Leveling ×2 (только планер), Francissss Rosa 2 Campanha (только планер; взято его видео), Shineray Early T8 Fire Spectral Slash и Masterxds T8 Early Frost Spike (короткие заметки), Jonyc Fraberg Gemma t7 (код без текста), FelpsBlast Thea 2 (теорикрафт без текста), kaki1, «dont play this» |
| tlicompendium и YouTube — вечер 15.10.2026 (21:00 МСК) | 15.10.2026 | 🔁 | Добавлены: Wuxia — Iris 2 Rock Magus с TM5 (новый билд, код и видео); AgroMorph — Carino 3 ×5 (пауки, Lightning Shot, Traveler T7, Chromatic Shot 8-1, Blazing Bullet Profound — новый билд, заметки на русском); Beast_hearth — Youga 3 Ice Lances Tangle (видео + таблица на русском, новый билд) вместе с видео KakiGaming (кор.); ссылками — видео ManMauzer и Nirtas (Youga 3) и письменные гайды Nirtas, видео и таблица satu1kaa (Erika 1 Thunder Spike), Bmlegolas Bing 2 Lightning Beam 0 → SS20 (обновлён под SS14, в тексте в основном питомцы). Не взяты: Salmoz «Icy Blade E3» (текст скопирован у Wisernage), Nevendar и Francissss Rosa 2 (только планер), EXMAGISTR Youga 3 и «Искатель в ночи» ТОП-13 (реклама FunPay — RMT), magno80 (подборка чужих видео), 두잇 Moto 2 (кор., неясно, какой вариант билда), обзоры сезона (Raxxanterax, simplyVizniz, UncleJay Voidchart, Malagant prep) |
| YouTube — видео за 14–15.10.2026 (поиск через `curl`, см. README) | 15.10.2026 | 🔁 | Взяты ссылками к билдам: ShadyBroker (Youga 2 Mind Control), CoffeeBns (Bing 2 Splitting Lightning Bolt + таблица с листами по Bing 2 — новый билд), DonTheCrown «Starting Selena F2P with Budget Wilting Beam», Marcus Nordstrom (план Selena 1), MinMaxedARPG (Gemma 2 Tangle), Francissss (Rosa 2 Frost Spike, португ.). Тир-листы учтены в расчёте 15.10 (см. выше): UncleJay, Bmlegolas, FrostLex, Yamatsy, ItsAdiar, BagashTorchlite, 파밍너드. Без голоса: DonTheCrown «TOP BUILDS» и ItsAdiar «Six Starters» (авторы уже в расчёте), Ben «F2P Starters» (только рекомендация атакеров: Erika 1, Rosa 2, Rehan 2), ChibaTTV (реакция на DonTheCrown). Не взяты: Malagant Rosa 2 → TM7 (коды после старта — 🔁), Exmagistr (Google Doc по Youga 3 из подборки Bagash — реклама FunPay, RMT), Sandstorm (отказался от билда), KKYU (Thea, кор.), Gooba03, Corealis (обзоры без конкретики), Kelsera Sage и ItsAdiar Carino 2 (SS13) |
| tlicompendium — гайды за 08–14.10.2026 (через API, см. README) | 14.10.2026 | 🔁 | Добавлены билдами (есть текст по разделам): VacaAlpha + BmLegolas (Youga 3 Splitting Lightning Bolt), DonTheCrown (Youga 3 кампания, Stasis Vault), HundeKoerper по Corealis (Youga 2 Fallen Star Ignite), ExileMind ×3 (Rehan 2 Frost Spike, коды), Vladislav Shalimov (Rehan 2 Spectral Slash, на русском). Видео Shad0ws по Erika 1 Corrosive Throw SS14 — ссылкой. Позже добавлены (текст был в `compressedBuildData`, API отдавал пустые поля): ManMauzer (Youga 3 Hound's Fangs), Crazycaps (Selena 2 Frost Terra), Lucas (Rosa 2 Frost Spike, португ.). Не взяты: Erika 3 True Flame от -NoName- (нет скиллов и талантов — 🔁), Rehan 1 early progression (короткая заметка), пустые «Start writing…» (Rosa 2 Ice Bond, Bing 2 ×2, Selena 1 Beam, Erika 1 тест, Thea 2, Gemma 2). На тиры не влияют: гайды по одному герою |
| [instinct — гайд по Iris 2 (Google Docs)](https://docs.google.com/document/d/1ZvE5EIwXpxn1Ta5Zi8qDGuKBDS1TEDlNggbTgI1X6o8/edit) · [Twitch](https://www.twitch.tv/instinct_t) | 13.10.2026 | 🔁 | Прислал владелец. Прогрессия Iris 2 до Profound/Deep (SS13): Thunder/Fire Magus на актах, питомцы, трейты, грейды. Автор обещал дополнять |
| [Reddit — Early SS14 League Start Ideas](https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/) | 15.10.2026 | ⛔ | Ссылка убрана из билдов 15.10 по замечанию владельца: это ветка обсуждений, а не гайд (голос в votes.js и строка в списке источников остались). Из архива ChatGPT. Тесты игроков: Carino 1 Ice Lances, Erika 1 Thunder Spike. Мне Reddit недоступен (403) — не проверено |
| [Reddit — r/TorchlightInfinite/new (RSS)](https://www.reddit.com/r/TorchlightInfinite/new/.rss) | 15.10.2026 | 🔁 | `curl` с браузерным User-Agent отдаёт RSS (JSON — нет), но при частых запросах 429. Встроенный браузер Reddit не открывает. 15.10: новых гайдов нет, только вопросы. Заметка на после старта: [tliherorank.com](https://tliherorank.com/) — статистика героев (возможный источник для тиров) |
| [Lao Ke — тир-лист SS14 (Bilibili)](https://www.bilibili.com/video/BV1yqpL6kEYK/) | 13.10.2026 | ✅ | Тиры расшифрованы по скриншотам из поста на DCInside (см. ниже). Вес 2, оба списка |
| [DonTheCrown — NO BAIT TIER LIST SS14 (YouTube)](https://www.youtube.com/watch?v=WOTBgd06l2U) | 13.10.2026 | 🔁 | Прислал владелец (скриншот тир-листа). Прогноз силы/популярности на SS14, все 28 трейтов. Вес 2 |
| [Pat404 — стартеры SS14 (YouTube)](https://www.youtube.com/watch?v=7y6-yvglxeQ) | 13.10.2026 | ✅ | Тир-лист стартеров с ценами сборок, все 28 трейтов. Вес 2 |
| [Little_practice — кем играть в Tartarus (YouTube)](https://www.youtube.com/watch?v=s61o8_2aYN4) | 13.10.2026 | ✅ | Тир-лист по шаблону DonTheCrown, все 28 трейтов. Вес 1 (похож на адаптацию Don) |
| [satu1kaa — лигстартеры SS14 (YouTube)](https://www.youtube.com/watch?v=CeWW7KZI9Co) | 13.10.2026 | ✅ | Рекомендации стартеров + коды билдов в описании. Описание YouTube видно только через браузер владельца (без входа — проверка «не бот») |
| [SephGoesGaming — S14 Builds Are Ready (YouTube)](https://www.youtube.com/watch?v=0hBikw3DX68) | 13.10.2026 | ✅ | Гайды Iris 2 Erosion Magus и Youga 1 Ice Lances (tlicompendium) |
| [MinMaxedARPG — META: Tierlist SS14 (YouTube)](https://www.youtube.com/watch?v=OACr2W8p1pE) | 13.10.2026 | ✅ | Тир-лист S/A/B/unsure, все 28 трейтов. Вес 2 |
| [CoffeeBns — Tartarus Tier List SS14 (YouTube)](https://www.youtube.com/watch?v=KtqpvLn2ANE) | 13.10.2026 | ✅ | Тир-лист S/A/B/C, все 28 трейтов. Вес 2 |
| [Smith — Selena 1 Scorching Beam (tlicompendium)](https://tlicompendium.com/en/build-guides/scorching-ignite-deep-space-mapping) | 13.10.2026 | 🔁 | Гайд SS13 (05.09.2026), фарм Deep Space |
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

1. Тир-листы авторов и стримеров (DonTheCrown, MinMaxedARPG, CoffeeBns, Lao Ke) — обновлённые после старта
2. minmaxed S14 — новые гайды
3. 17173 / 233leyuan — китайские разборы и коды билдов
4. Ладдеры и статистика популярности трейтов SS14
