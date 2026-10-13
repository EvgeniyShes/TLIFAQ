// Данные сайта. Правь здесь — страница перерисуется сама.
// Текст на двух языках: { ru: "...", en: "..." }. Если en нет — покажется ru.
// links: [[{ ru, en }, "url"], ...] — прямые ссылки на гайды; ссылка на поиск YouTube добавляется сама.
// trend: "up" — бафф/новинка в SS14, "down" — нерф в SS14, "new" — переработан (только в тир-листах), "" — без изменений.
window.DATA = {
  season: {
    code: "SS14",
    name: "Tartarus",
    start: "2026-10-16T02:00:00Z", // 05:00 МСК
    startLabel: { ru: "16 октября, 05:00 МСК", en: "Oct 15, 7:00 PM PDT / Oct 16, 02:00 UTC" },
    updatedAt: "2026-10-13T17:44:00Z", // время последнего обновления тиров (UTC) — менять при каждом обновлении
    note: {
      ru: "Сезон ещё не стартовал: оценки — сводный прогноз по итогам SS13 и патчноутам SS14. Обновим после первой недели сезона.",
      en: "The season hasn't started yet: ratings are a combined forecast based on SS13 results and SS14 patch notes. We'll update after the first week."
    }
  },

  // Герои и трейты. id = имя файла портрета в img/
  heroes: {
    rehan_01:  { hero: "Rehan",  n: 1, trait: "Anger" },
    rehan_02:  { hero: "Rehan",  n: 2, trait: "Seething Silhouette" },
    carino_01: { hero: "Carino", n: 1, trait: "Ranger of Glory" },
    carino_02: { hero: "Carino", n: 2, trait: "Lethal Flash" },
    carino_03: { hero: "Carino", n: 3, trait: "Zealot of War" },
    erika_01:  { hero: "Erika",  n: 1, trait: "Wind Stalker" },
    erika_02:  { hero: "Erika",  n: 2, trait: "Lightning Shadow" },
    erika_03:  { hero: "Erika",  n: 3, trait: "Vendetta's Sting" },
    bing_01:   { hero: "Bing",   n: 1, trait: "Blast Nova" },
    bing_02:   { hero: "Bing",   n: 2, trait: "Creative Genius" },
    gemma_01:  { hero: "Gemma",  n: 1, trait: "Ice-Fire Fusion" },
    gemma_02:  { hero: "Gemma",  n: 2, trait: "Frostbitten Heart" },
    gemma_03:  { hero: "Gemma",  n: 3, trait: "Flame of Pleasure" },
    thea_01:   { hero: "Thea",   n: 1, trait: "Wisdom of The Gods" },
    thea_02:   { hero: "Thea",   n: 2, trait: "Incarnation of The Gods" },
    thea_03:   { hero: "Thea",   n: 3, trait: "Blasphemer" },
    youga_01:  { hero: "Youga",  n: 1, trait: "Spacetime Illusion" },
    youga_02:  { hero: "Youga",  n: 2, trait: "Spacetime Elapse" },
    youga_03:  { hero: "Youga",  n: 3, trait: "The Ultimate One" },
    moto_01:   { hero: "Moto",   n: 1, trait: "Order Calling" },
    moto_02:   { hero: "Moto",   n: 2, trait: "Charge Calling" },
    rosa_01:   { hero: "Rosa",   n: 1, trait: "High Court Chariot" },
    rosa_02:   { hero: "Rosa",   n: 2, trait: "Unsullied Blade" },
    iris_01:   { hero: "Iris",   n: 1, trait: "Growing Breeze" },
    iris_02:   { hero: "Iris",   n: 2, trait: "Vigilant Breeze" },
    selena_01: { hero: "Selena", n: 1, trait: "Sing with the Tide" },
    selena_02: { hero: "Selena", n: 2, trait: "Dance of the Deep" },
    sage_01:   { hero: "Sage",   n: 1, trait: "Licorice Note" }
  },

  // Тир-листы героев: [id, trend, комментарий]
  tiers: {
    starter: {
      title: { ru: "Старт лиги", en: "League start" },
      icon: "🚀",
      desc: { ru: "Билд «с нуля»: пройти кампанию и ранний Netherrealm без шмота и заработать первую валюту. Потом на неё собирают эндгейм-билд.", en: "A from-scratch build: clear the campaign and early Netherrealm with no gear and farm your first currency. Then use it to gear an endgame build." },
      hint: { ru: "Кампания и ранний Netherrealm без шмота, бюджет, скорость прогресса", en: "Campaign and early Netherrealm with no gear, budget, progression speed" },
      rows: {
        S: [
          ["youga_03", "up", { ru: "Новый трейт SS14, прогноз: минимум 4 автора на Bilibili разбирают его в трёх вариантах (автобег, мобильность, ручная игра), обещают «с нуля до U8»", en: "New SS14 trait, forecast: at least 4 Bilibili creators break it down in three variants (auto-run, mobility, manual), claiming \"zero to U8\"" }],
          ["erika_01", "", { ru: "Самый быстрый фарм валюты на старте; хрупкая", en: "Fastest early currency farming; fragile" }]
        ],
        A: [
          ["selena_01", "", { ru: "Прогноз: Lao Ke ставит во второй по силе уровень; хороша на актах и первых картах — Tide под врагами усиливает урон", en: "Forecast: Lao Ke puts her in the second-highest tier; good for acts and early maps — Tide under enemies amplifies damage" }],
          ["iris_02", "", { ru: "Быстрая и живучая, проходит акты через Thunder или Fire Magus. Но дорогие питомцы и сложная механика", en: "Fast and tanky, clears acts with Thunder or Fire Magus. But pricey pets and complex mechanics" }],
          ["youga_02", "", { ru: "Бюджетный убийца боссов, DoT от Twisted Spacetime", en: "Budget boss killer, DoT from Twisted Spacetime" }],
          ["bing_02", "", { ru: "Нужен питомец на спеллбёрсты, играется надёжно", en: "Needs a Spell Burst pet, plays reliably" }],
          ["gemma_02", "up", { ru: "Заморозка упрощает старт; нерф freeze её не задел", en: "Freeze makes the start easy; the freeze nerf didn't hit her" }],
          ["thea_01", "new", { ru: "Трейт переработан в SS14, реальная сила станет ясна после старта", en: "Trait reworked in SS14, real strength unknown until launch" }],
          ["sage_01", "down", { ru: "«Главная жертва» блюпоста SS14: нерф эликсиров и саммонов", en: "Biggest loser of the SS14 blue post: elixirs and summons nerfed" }],
          ["rosa_02", "down", { ru: "Lao Ke и DonTheCrown ставят в топ сезона; для полного раскрытия нужны дорогие перчатки", en: "Lao Ke and DonTheCrown put her at the top of the season; needs expensive gloves to fully come online" }],
          ["carino_02", "", { ru: "Надёжный, но Lao Ke ставит ниже: «хороший, просто нет места»", en: "Reliable, but Lao Ke rates it lower: \"good, just no room\"" }],
          ["rehan_02", "down", { ru: "Ярость понерфлена, но DonTheCrown ждёт его в числе самых популярных", en: "Rage was nerfed, but DonTheCrown expects it among the most popular" }],
          ["erika_02", "", { ru: "Очень плавная игра и скорость; главный минус — дорогая", en: "Very smooth play and speed; the main downside is cost" }],
          ["carino_01", "", { ru: "Игрок на Reddit до старта убивал Traveler на ~T2 через Ice Lances; Lao Ke пока наблюдает", en: "A Reddit player killed the Traveler on ~T2 with Ice Lances pre-season; Lao Ke is still watching" }],
          ["bing_01", "", { ru: "Недорогой билд против боссов, по картам можно автобегом", en: "Cheap bossing build, maps can be auto-run" }],
          ["carino_03", "", { ru: "Lao Ke: уровень «демон»; на ПК силён, на телефоне нет автобега", en: "Lao Ke: \"demon\" tier; strong on PC, no auto-run on mobile" }],
          ["thea_03", "", { ru: "Erosion-урон, сильна в начале и середине", en: "Erosion damage, strong early and mid game" }]
        ],
        B: [
          ["erika_03", "", { ru: "Lao Ke: «демон»; холодный старт слабее из-за нерфа колец на заморозку", en: "Lao Ke: \"demon\"; the cold start is weaker due to the freeze ring nerf" }],
          ["youga_01", "", { ru: "Играбельно, но Youga 2/3 делают то же лучше", en: "Playable, but Youga 2/3 do it better" }],
          ["iris_01", "", { ru: "Саммонер, доводит до T8, хорош для фарма Flame Elementium", en: "Summoner, carries to T8, good for Flame Elementium farming" }],
          ["moto_02", "down", { ru: "Самоподрыв войск; задет нерфами SS14", en: "Self-destructing troops; hit by SS14 nerfs" }],
          ["rehan_01", "down", { ru: "Нерф Berserk в SS14, но есть подробный гайд Travic — от кампании до 250M урона через Whirlwind", en: "Berserk nerfed in SS14, but Travic has a detailed guide — campaign to 250M damage with Whirlwind" }],
          ["selena_02", "down", { ru: "Была S в SS13; ground-скиллы −20% и нерф Thorns/Tidal", en: "Was S in SS13; ground skills −20%, Thorns/Tidal nerfed" }],
          ["gemma_01", "", { ru: "Много деталей, собирается долго", en: "Many moving parts, slow to assemble" }],
          ["thea_02", "", { ru: "Lao Ke: «демон» — Tenacity-билд, но упирается в ожерелье и бюджет", en: "Lao Ke: \"demon\" — Tenacity build, but limited by the necklace and budget" }],
          ["gemma_03", "", { ru: "Нужны вложения", en: "Needs investment" }]
        ],
        C: [
          ["rosa_01", "", { ru: "Быстро валит боссов, но требует скилла", en: "Kills bosses fast but demands skill" }],
          ["moto_01", "", { ru: "Слабее Moto 2", en: "Weaker than Moto 2" }]
        ]
      }
    },
    endgame: {
      title: { ru: "Эндгейм", en: "Endgame" },
      icon: "💎",
      desc: { ru: "Куда пересаживаются на заработанную валюту: Profound, Deep Space, Divine Ascent, Supreme Showdown. Нужны вложения, зато самый высокий потолок.", en: "What you switch to with the farmed currency: Profound, Deep Space, Divine Ascent, Supreme Showdown. Needs investment, but has the highest ceiling." },
      hint: { ru: "Частота в топах Divine Ascent и Supreme Showdown, фарм и урон по боссам", en: "Presence in top Divine Ascent and Supreme Showdown ranks, farming and boss damage" },
      rows: {
        S: [
          ["youga_03", "up", { ru: "Lao Ke: единственный «бог» SS14; результатов на живом сезоне ещё нет", en: "Lao Ke: the only \"god\" of SS14; no live-season results yet" }],
          ["gemma_02", "up", { ru: "Frostbitten Heart: единственный freeze, не задетый нерфом", en: "Frostbitten Heart: the only freeze build untouched by the nerf" }]
        ],
        A: [
          ["rosa_02", "down", { ru: "Был S; бонус Silver stance урезан 20–48% → 10–34%", en: "Was S; Silver stance bonus cut 20–48% → 10–34%" }],
          ["sage_01", "down", { ru: "Сильнейший класс SS13 (100+ на 4000-м этаже), но с нерфами SS14 часть авторов ставит его ниже", en: "Strongest class of SS13 (100+ on floor 4000), but with SS14 nerfs some creators rate it lower" }],
          ["iris_02", "", { ru: "Стабильный урон по боссам, доходит до Profound и Deep Space. Потолок урона ниже, чем у Rosa и Rehan", en: "Steady boss damage, reaches Profound and Deep Space. Lower damage ceiling than Rosa and Rehan" }],
          ["bing_02", "", { ru: "Creative Genius: спеллбёрсты", en: "Creative Genius: Spell Bursts" }],
          ["selena_01", "", { ru: "Прогноз: Lao Ke высоко оценивает на SS14, но в SS13 почти никто не играл", en: "Forecast: Lao Ke rates her highly for SS14, but almost nobody played her in SS13" }],
          ["erika_01", "", { ru: "На 4000-м этаже в конце SS13 — единицы игроков; уступает Rosa 2", en: "Only a handful on floor 4000 at the end of SS13; behind Rosa 2" }],
          ["rehan_02", "down", { ru: "Нерф ярости", en: "Rage nerfed" }],
          ["thea_01", "new", { ru: "Трейт переработан в SS14, набирал игроков ещё в SS13", en: "Trait reworked in SS14, was gaining players in SS13" }],
          ["youga_02", "", { ru: "Стартер, в эндгейме уступает", en: "Starter, falls behind in endgame" }],
          ["bing_01", "", { ru: "Blast Nova: связки бомб, топ фарм", en: "Blast Nova: bomb bundles, top farming" }],
          ["carino_02", "", { ru: "Стартер, в эндгейме уступает Carino 3", en: "Starter, behind Carino 3 in endgame" }],
          ["erika_02", "", { ru: "100+ игроков на 4000-м этаже в SS13; дорогая", en: "100+ players on floor 4000 in SS13; expensive" }],
          ["carino_03", "", { ru: "В топе на 3-й день SS13, но до 4000-го этажа дошли единицы; Lao Ke — «демон»", en: "Top tier on SS13 day 3, but few reached floor 4000; Lao Ke: \"demon\"" }],
          ["erika_03", "", { ru: "Vendetta's Sting", en: "Vendetta's Sting" }]
        ],
        B: [
          ["youga_01", "", { ru: "Набирал игроков в SS13, популярный гайд Chain Lightning", en: "Gained players in SS13, popular Chain Lightning guide" }],
          ["thea_03", "", { ru: "Больше урона, чем у Youga 2, но дорогой предмет памяти", en: "More damage than Youga 2, but an expensive memory item" }],
          ["carino_01", "", { ru: "Терял игроков в SS13", en: "Lost players in SS13" }],
          ["gemma_01", "", { ru: "Силён в полной сборке, но терял игроков", en: "Strong when complete, but lost players" }],
          ["moto_02", "down", { ru: "Понерфлен до сезона, но в SS13 результаты лучше ожиданий (51 игрок на 4000-м этаже)", en: "Nerfed pre-season, but SS13 results beat expectations (51 players on floor 4000)" }],
          ["rehan_01", "down", { ru: "Набирал игроков, но Berserk понерфлен", en: "Gained players, but Berserk nerfed" }],
          ["gemma_03", "", { ru: "Терял игроков в SS13", en: "Lost players in SS13" }],
          ["thea_02", "", { ru: "В SS13 слабая, Lao Ke ждёт роста в SS14 (Tenacity-билд)", en: "Weak in SS13, Lao Ke expects growth in SS14 (Tenacity build)" }],
          ["selena_02", "down", { ru: "Отлично чистила карты, но нерф ground-скиллов", en: "Great map clear, but ground skills nerfed" }]
        ],
        C: [
          ["rosa_01", "", { ru: "Терял игроков, Rosa 2 сильнее", en: "Lost players, Rosa 2 is stronger" }],
          ["iris_01", "", { ru: "Фармит до T8, дальше уступает Iris 2", en: "Farms up to T8, then behind Iris 2" }],
          ["moto_01", "", { ru: "Слабее Moto 2", en: "Weaker than Moto 2" }]
        ]
      }
    }
  },

  // Билды. stage: start | end | both; budget: 1–3; diff: 1–3
  // links: [[{ ru, en }, "url", "Автор"], ...] — ссылки на гайды; каналы автора — в authors
  // codes: [[{ ru, en } или "", "КОД"], ...] — коды билда для импорта в игре (с указанием автора в links/src)
  builds: [
    { hero: "youga_03", name: { ru: "Охотничьи клыки", en: "Hound Fangs" }, skill: "Spell Tangle + Clockwork Core", tier: "S", stage: "both", budget: 2, diff: 2, trend: "up",
      pros: { ru: "Автокаст заклинаний, крит сокращает кулдауны; по словам автора — с нуля до U8", en: "Auto-cast spells, crits reduce cooldowns; author claims zero to U8" },
      cons: { ru: "Новый трейт, цифры не проверены на живом сезоне", en: "New trait, numbers not yet tested on live" },
      src: "Bilibili",
      links: [
        [{ ru: "Разбор трейта (Bilibili)", en: "Trait breakdown (Bilibili)" }, "https://www.bilibili.com/video/BV1eWph6qEfM/", "Ruguo Bu Shi Qi"],
        [{ ru: "Первый геймплей Youga 3 от Qingzi Tan (Bilibili)", en: "Youga 3 first gameplay by Qingzi Tan (Bilibili)" }, "https://www.bilibili.com/video/BV1BHHS6oEyh/", "Qingzi Tan"]
      ] },
    { hero: "youga_03", name: { ru: "Династия", en: "Dynasty" }, skill: { ru: "Spacetime Dictator, снаряды", en: "Spacetime Dictator, projectiles" }, tier: "S", stage: "start", budget: 1, diff: 2, trend: "up",
      pros: { ru: "«K8 за день», снаряды пробивают и возвращаются от стен, 70% урона по тебе откладывается", en: "\"K8 in a day\", projectiles pierce and bounce off walls, 70% of damage taken is delayed" },
      cons: { ru: "Облачный билд до старта сезона", en: "Theorycraft before the season starts" },
      src: "Bilibili",
      links: [
        [{ ru: "Разбор трейта (Bilibili)", en: "Trait breakdown (Bilibili)" }, "https://www.bilibili.com/video/BV1eWph6qEfM/", "Ruguo Bu Shi Qi"]
      ] },
    { hero: "youga_01", name: "Chain Lightning", skill: "Chain Lightning", tier: "B", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Популярный гайд на minmaxed, три стартовых варианта", en: "Popular minmaxed guide, three starter versions" },
      cons: { ru: "Youga 2/3 сильнее на старте", en: "Youga 2/3 are stronger starters" },
      src: "minmaxed",
      links: [
        [{ ru: "Гайд: Chain Lightning", en: "Guide: Chain Lightning" }, "https://minmaxedarpg.com/guides/youga-1-spacetime-illusion-chain-lightning-vpun6p", "fragmentations"],
        [{ ru: "Гайд: 3 стартовых варианта", en: "Guide: 3 starter versions" }, "https://minmaxedarpg.com/guides/youga-1-starters-4w5cuw", "fragmentations"]
      ] },
    { hero: "selena_01", name: "Howling Gale", skill: { ru: "Howling Gale, заморозка", en: "Howling Gale, freeze" }, tier: "A", stage: "start", budget: 1, diff: 1, trend: "",
      pros: { ru: "Безопасный и комфортный старт: с 20 уровня автоматизация прямо в наборе умений, замораживающий клир на весь экран", en: "Safe, comfy start: built-in automation from level 20, screen-wide freezing clear" },
      cons: { ru: "Тяжело заходит в Profound, TM 8 придётся фармить дольше, чем другими героями", en: "Struggles to break into Profound; you'll farm TM 8 longer than with other heroes" },
      src: { ru: "R3plic (tlicompendium), гайд ItsAdiar (SS12)", en: "R3plic (tlicompendium), ItsAdiar's guide (SS12)" },
      links: [
        [{ ru: "Гайд ItsAdiar: Howling Gale, стартер (SS12, tlicompendium)", en: "ItsAdiar's guide: Howling Gale starter (SS12, tlicompendium)" }, "https://tlicompendium.com/en/build-guides/itsadiar-selena-howling-gale-league-starter-s12", "ItsAdiar"]
      ] },
    { hero: "erika_01", name: "Corrosive Throw", skill: "Corrosive Throw", tier: "S", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Как Thunder Spike от BmLegolas, но с дистанции; билд не понерфили в SS14", en: "Like BmLegolas' Thunder Spike but ranged; the build was not nerfed in SS14" },
      cons: { ru: "Гайд пока помечен автором как незаконченный (WIP)", en: "The guide is still marked work-in-progress by its author" },
      src: { ru: "Shad0ws, R3plic (tlicompendium)", en: "Shad0ws, R3plic (tlicompendium)" },
      links: [
        [{ ru: "Гайд Shad0ws: Corrosive Throw (tlicompendium)", en: "Shad0ws' guide: Corrosive Throw (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/erika-1-corrosive-throw-ss13", "Shad0ws"]
      ] },
    { hero: "youga_01", name: { ru: "Ice Lances: от кампании до Profound", en: "Ice Lances: campaign to Profound" }, skill: "Ice Lances", tier: "B", stage: "both", budget: 1, diff: 1, trend: "",
      pros: { ru: "Автокаст уже с 75 уровня за счёт трейта (I'm an Illusion) — удобно на телефоне, дорогие активаторы не нужны. Этапы до Profound, до ~5T урона", en: "Auto-cast from level 75 via the trait (I'm an Illusion) — great on mobile, no pricey activation mediums needed. Stages up to Profound, up to ~5T damage" },
      cons: { ru: "В SS14 понерфили кольца на Frostbite — в T8 станет тяжелее", en: "SS14 nerfed Frostbite rings — T8 gets harder" },
      src: { ru: "гайд SephGoesGaming (tlicompendium, 10.10.2026)", en: "SephGoesGaming's guide (tlicompendium, Oct 10, 2026)" },
      links: [
        [{ ru: "Гайд: Youga 1 Ice Lances, кампания → Profound (tlicompendium)", en: "Guide: Youga 1 Ice Lances, campaign → Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/youga1-ice-lances-campaign-to-profound-s14", "SephGoesGaming"],
        [{ ru: "Видео: сборки на S14 (YouTube)", en: "Video: S14 builds (YouTube)" }, "https://www.youtube.com/watch?v=0hBikw3DX68", "SephGoesGaming"]
      ] },
    { hero: "youga_02", name: "Spacetime Elapse DoT", skill: "Mind Control + Channeled Depths", tier: "A", stage: "start", budget: 1, diff: 1, trend: "",
      pros: { ru: "Дешёвый, сильный по боссам, +2 стака канала", en: "Cheap, strong vs bosses, +2 channel stacks" },
      cons: { ru: "Позже съедает слот саппорта", en: "Costs a support slot later" },
      src: "IGGM, musabots",
      links: [
        [{ ru: "Гайд ShadyBroker: Mind Control, стартер (tlicompendium)", en: "ShadyBroker's guide: Mind Control starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/mind-control-youga-2-league-starter", "ShadyBroker"]
      ] },
    { hero: "erika_01", name: "Wind Stalker", skill: "Lightning Shot / Thunder Spike", tier: "S", stage: "both", budget: 2, diff: 3, trend: "",
      pros: { ru: "Очень быстрая, не нужно пересобираться к эндгейму. По тесту игрока до старта: с Thunder Jawbone Thunder Spike — быстрый стартер, а Farewell Desire примерно удваивает урон", en: "Very fast, no respec needed for endgame. A pre-season player test: Thunder Spike with Thunder Jawbone is a fast starter, and Farewell Desire roughly doubles damage" },
      cons: { ru: "Хрупкая, частые смерти у новичков. Farewell Desire до старта стоила 90+ FE — цена на живом рынке будет другой", en: "Fragile, frequent deaths for new players. Farewell Desire cost 90+ FE pre-season — live market price will differ" },
      src: { ru: "IGGM, musabots, TreyexGaming, тест игрока на Reddit", en: "IGGM, musabots, TreyexGaming, player test on Reddit" },
      links: [
        [{ ru: "Тесты стартеров игроками (Reddit)", en: "Players' starter tests (Reddit)" }, "https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/", "Reddit"],
        [{ ru: "Гайд BmLegolas: Thunder Spike от 1 уровня до эндгейма (tlicompendium)", en: "BmLegolas' guide: Thunder Spike from level 1 to endgame (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/erika1-lvl1-to-ss20-ultimate-guide", "BmLegolas"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "~15T урона (Мия / BmLegolas)", en: "~15T damage (Mia / BmLegolas)" }, "fDE/Q5s2EfG78gAAAAAAMw=="]
      ] },
    { hero: "carino_01", name: "Ice Lances / Chromatic Shot", skill: "Ice Lances, Chromatic Shot", tier: "A", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "По тесту игрока до старта: Ice Lances с Marksman bracers, Grudge и Control Spell убивает Traveler примерно на T2-шмоте; Chromatic Shot может быть ещё лучше", en: "A pre-season player test: Ice Lances with Marksman bracers, Grudge and Control Spell kills the Traveler on roughly T2 gear; Chromatic Shot may be even better" },
      cons: { ru: "Один непроверенный отзыв до старта; Carino 2 остаётся надёжнее", en: "A single unverified pre-season report; Carino 2 is still more reliable" },
      src: { ru: "тест игрока на Reddit", en: "player test on Reddit" },
      links: [
        [{ ru: "Тесты стартеров игроками (Reddit)", en: "Players' starter tests (Reddit)" }, "https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/", "Reddit"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "Tangles — общий код для Carino 1/2/3", en: "Tangles — shared code for Carino 1/2/3" }, "VKaEwoGiEfG27wAAAAAA6A=="]
      ] },
    { hero: "thea_03", name: "Blasphemer Erosion", skill: "Haunting Abomination / Mind Control", tier: "A", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Топ в начале и середине сезона", en: "Top tier early and mid season" },
      cons: { ru: "Erosion и Ruinous Star понерфлены ещё в SS13, потолок ниже", en: "Erosion and Ruinous Star nerfed in SS13, lower ceiling" },
      src: "IGGM, musabots" },
    { hero: "gemma_02", name: { ru: "Frost Core / ледяные осколки", en: "Frost Core / Ice Shards" }, skill: "Frost Core, Chromatic Shot (Cold Tangle)", tier: "S", stage: "both", budget: 1, diff: 1, trend: "up",
      pros: { ru: "Контроль заморозкой, «всё T2 — стабильные 200E», нерф freeze в SS14 не задел", en: "Freeze control, \"full T2 gear — stable 200E\", untouched by the SS14 freeze nerf" },
      cons: { ru: "Энтанглмент-версия ослаблена (убран лимит стаков)", en: "Entanglement version weakened (stack cap removed)" },
      src: "minmaxed, Bilibili, 233leyuan",
      links: [
        [{ ru: "Гайд: кампания на Frost Core", en: "Guide: Frost Core campaign" }, "https://minmaxedarpg.com/guides/campaign-gemma-2-frostbitten-heart-frost-core-guide-5ujbsm", "minmaxed"],
        [{ ru: "Гайд: Cold Tangle Chromatic Shot (Tartarus)", en: "Guide: Cold Tangle Chromatic Shot (Tartarus)" }, "https://minmaxedarpg.com/guides/gemma-2-cold-tangle-chromatic-shot-tartarus-u3h9dl", "minmaxed"]
      ] },
    { hero: "bing_01", name: "Blast Nova", skill: { ru: "Бомбы-проджектайлы", en: "Projectile bombs" }, tier: "A", stage: "end", budget: 3, diff: 2, trend: "",
      pros: { ru: "Несколько бомб за каст, топ фарма", en: "Multiple bombs per cast, top farming" },
      cons: { ru: "Нужны вложения, на старте средне", en: "Needs investment, average at start" },
      src: "musabots, IGGM" },
    { hero: "iris_02", name: { ru: "Vigilant Breeze: от кампании до Deep Space", en: "Vigilant Breeze: campaign to Deep Space" }, skill: { ru: "Слияние с Магусом, ульта Магуса (Thunder или Fire Magus на актах)", en: "Merge with a Magus, Magus ultimate (Thunder or Fire Magus for acts)" }, tier: "A", stage: "both", budget: 3, diff: 3, trend: "",
      pros: { ru: "Быстрая, хорошая защита, стабильный урон по боссам. Проверенный путь до Profound и Deep Space: автор гайда был в топе Iris на прогрессии SS13. На актах два варианта: Thunder Magus быстрее, Fire Magus стабильнее", en: "Fast, solid defense, steady boss damage. Proven path to Profound and Deep Space: the guide author was a top Iris on SS13 progression. Two act variants: Thunder Magus is faster, Fire Magus is steadier" },
      cons: { ru: "Дорогие питомцы (Anubis на максимуме примерно удваивает урон), сложная механика Магусов, урон растёт хуже, чем у Rosa и Rehan; ловкость и сила должны быть равны", en: "Expensive pets (maxed Anubis roughly doubles damage), complex Magus mechanics, damage scales worse than Rosa and Rehan; Dexterity and Strength must stay equal" },
      src: { ru: "musabots, гайд instinct (SS13)", en: "musabots, instinct's guide (SS13)" },
      links: [
        [{ ru: "Гайд instinct: прогрессия Iris 2 (Google Docs)", en: "instinct's guide: Iris 2 progression (Google Docs)" }, "https://docs.google.com/document/d/1ZvE5EIwXpxn1Ta5Zi8qDGuKBDS1TEDlNggbTgI1X6o8/edit", "instinct"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "билд instinct (в игре: Instinct#5138)", en: "instinct's build (in game: Instinct#5138)" }, "eW8BDIGgEfG5tQAAAAAAPg=="]
      ] },
    { hero: "iris_02", name: { ru: "Erosion Magus: от кампании до Profound", en: "Erosion Magus: campaign to Profound" }, skill: "Summon Erosion / Fire / Frost Magus", tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Более автоматическая игра — удобно на телефоне (легче, чем Rock Magus). Этапы: кампания, T7, T8, Profound; до ~1T урона. Автор прошёл с ним SS13 до убийства на SS20", en: "More automated playstyle — great on mobile (easier than Rock Magus). Stages: campaign, T7, T8, Profound; up to ~1T damage. The author took it through SS13 to an SS20 kill" },
      cons: { ru: "Питомец Scale of Original Sin обязателен — сила и ловкость должны быть равны. Магусы теряют здоровье, нужен сильный реген", en: "The Scale of Original Sin pact spirit is a must — Strength and Dexterity must be equal. Magi lose life, so you need strong regen" },
      src: { ru: "гайд SephGoesGaming (tlicompendium, 10.10.2026)", en: "SephGoesGaming's guide (tlicompendium, Oct 10, 2026)" },
      links: [
        [{ ru: "Гайд: Iris 2 Erosion Magus, кампания → Profound (tlicompendium)", en: "Guide: Iris 2 Erosion Magus, campaign → Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/iris2-erosion-magus-campaign-to-profound-s14", "SephGoesGaming"],
        [{ ru: "Видео: сборки на S14 (YouTube)", en: "Video: S14 builds (YouTube)" }, "https://www.youtube.com/watch?v=0hBikw3DX68", "SephGoesGaming"]
      ] },
    { hero: "iris_01", name: "Growing Breeze Summoner", skill: "Spirit Magi", tier: "B", stage: "start", budget: 1, diff: 1, trend: "",
      pros: { ru: "Дотягивает до T8, хорош для фарма Flame Elementium", en: "Reaches T8, good for Flame Elementium farming" },
      cons: { ru: "Не самый быстрый", en: "Not the fastest" },
      src: "IGGM" },
    { hero: "selena_02", name: "Ground Autowalk", skill: "Thorns Domain / Tidal Spring / Meteor", tier: "B", stage: "both", budget: 1, diff: 1, trend: "down",
      pros: { ru: "Дешёвый «автобег» по картам; Meteor в SS14 бафнут", en: "Cheap auto-walk map clearing; Meteor buffed in SS14" },
      cons: { ru: "Трейт: ground-урон +0–20% → −20–0%, Thorns и Tidal понерфлены", en: "Trait: ground damage +0–20% → −20–0%, Thorns and Tidal nerfed" },
      src: { ru: "IGGM, патчноут SS14", en: "IGGM, SS14 patch notes" },
      links: [
        [{ ru: "Гайд DonTheCrown: Frost Terra, стартер (tlicompendium)", en: "DonTheCrown's guide: Frost Terra starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/frost-terra-selena-2-season-starter", "DonTheCrown"],
        [{ ru: "Гайд Allie: стартер Selena 2 (tlicompendium)", en: "Allie's guide: Selena 2 starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/allies-selena-2-s13-starter-guide", "Allie"]
      ] },
    { hero: "sage_01", name: "Licorice Note Elixirs", skill: { ru: "Эликсиры + саммоны", en: "Elixirs + summons" }, tier: "A", stage: "end", budget: 2, diff: 2, trend: "down",
      pros: { ru: "Хорошая защита, саммоны забирают урон", en: "Good defense, summons absorb damage" },
      cons: { ru: "Главная жертва нерфов SS14", en: "Biggest loser of SS14 nerfs" },
      src: { ru: "musabots, Bilibili, патчноут SS14", en: "musabots, Bilibili, SS14 patch notes" },
      links: [
        [{ ru: "Разбор Sage на SS14 от Neng Miao (Bilibili; документ обещан после блюпоста)", en: "Sage SS14 breakdown by Neng Miao (Bilibili; document promised after the blue post)" }, "https://www.bilibili.com/video/BV1wnpj6VEvG/", "Neng Miao"],
        [{ ru: "Гайд DonTheCrown: Chromatic Shot Sage, стартер (tlicompendium)", en: "DonTheCrown's guide: Chromatic Shot Sage starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/chromatic-shot-sage-season-starter", "DonTheCrown"]
      ] },
    { hero: "rosa_02", name: "Unsullied Blade", skill: "Mana stacking", tier: "A", stage: "end", budget: 3, diff: 3, trend: "down",
      pros: { ru: "Один из самых высоких потолков в игре", en: "One of the highest ceilings in the game" },
      cons: { ru: "Дорогие перчатки из Deep Space, нерф Silver stance", en: "Expensive Deep Space gloves, Silver stance nerfed" },
      src: "musabots, IGGM",
      links: [
        [{ ru: "Гайд AgroMorph: прокачка Rosa 2 в кампании (tlicompendium)", en: "AgroMorph's guide: Rosa 2 campaign leveling (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-campaign-leveling", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Spectral Slash, Traveler T7 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T7 Traveler (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-spectral-slash-t7-traveler-setup", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Spectral Slash, T8 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T8 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-spectral-slash-t8-1-outlaw-setup", "AgroMorph"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "~500B после нерфа, без дорогих призм", en: "~500B after the nerf, without pricey prisms" }, "JDx2V4maEfGTbQAAAAADNg=="]
      ] },
    { hero: "bing_02", name: "Creative Genius Spellburst", skill: "Spell Burst", tier: "A", stage: "end", budget: 3, diff: 2, trend: "",
      pros: { ru: "Синергия спеллбёрста и питомцев", en: "Spell Burst and pet synergy" },
      cons: { ru: "Шмот дорожает из-за популярности", en: "Gear prices rise with popularity" },
      src: "ProGameGuides, musabots" },
    { hero: "carino_03", name: { ru: "Zealot of War: коды билда", en: "Zealot of War: build codes" }, skill: { ru: "смотрите код билда", en: "see the build code" }, tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "satu1kaa рекомендует как стартер; два кода — для ~45B и ~900B урона", en: "satu1kaa recommends it as a starter; two codes — for ~45B and ~900B damage" },
      cons: { ru: "Подробного текстового гайда пока нет — только коды и видео", en: "No written guide yet — only codes and the video" },
      src: { ru: "satu1kaa, описание видео (11.10.2026)", en: "satu1kaa, video description (Oct 11, 2026)" },
      links: [
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "Tangles — общий код для Carino 1/2/3", en: "Tangles — shared code for Carino 1/2/3" }, "VKaEwoGiEfG27wAAAAAA6A=="],
        [{ ru: "~45B урона", en: "~45B damage" }, "2VYAicQCEfGcWQAAAAAAFQ=="],
        [{ ru: "~900B урона", en: "~900B damage" }, "KUGqvrj3EfGcUAAAAAAAFQ=="]
      ] },
    { hero: "selena_01", name: "Scorching Beam (Ignite)", skill: "Scorching Beam", tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Гайд с фармом Deep Space; satu1kaa рекомендует Selena как стартер", en: "Guide that goes up to Deep Space farming; satu1kaa recommends Selena as a starter" },
      cons: { ru: "Гайд обновлён 05.09.2026 (прошлый сезон) — сверяйте с патчем SS14", en: "Guide last updated Sep 5, 2026 (previous season) — check against the SS14 patch" },
      src: { ru: "гайд Smith (tlicompendium), рекомендация satu1kaa", en: "Smith's guide (tlicompendium), satu1kaa's recommendation" },
      links: [
        [{ ru: "Гайд Smith: Scorching Beam, фарм Deep Space (tlicompendium)", en: "Smith's guide: Scorching Beam, Deep Space farming (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/scorching-ignite-deep-space-mapping", "Smith"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ] },
    { hero: "carino_02", name: "Lethal Flash", skill: { ru: "Проджектайлы, Deflection", en: "Projectiles, Deflection" }, tier: "A", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Надёжный и удобный", en: "Reliable and comfortable" },
      cons: { ru: "Медленнее S-стартеров", en: "Slower than S-tier starters" },
      src: "musabots",
      links: [
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "Tangles — общий код для Carino 1/2/3", en: "Tangles — shared code for Carino 1/2/3" }, "VKaEwoGiEfG27wAAAAAA6A=="]
      ] },
    { hero: "moto_02", name: { ru: "Самоподрыв двух генералов", en: "Twin Generals Self-Destruct" }, skill: { ru: "Synthetic Troop, самоподрыв", en: "Synthetic Troop, self-destruct" }, tier: "B", stage: "start", budget: 1, diff: 1, trend: "down",
      pros: { ru: "Импорт кода билда, сбалансирован во всём", en: "Importable build code, well-rounded" },
      cons: { ru: "Задет нерфами SS14", en: "Hit by SS14 nerfs" },
      src: "233leyuan, Bilibili",
      links: [
        [{ ru: "Гайд с кодом билда (233leyuan)", en: "Guide with build code (233leyuan)" }, "https://www.233leyuan.com/post-detail/2077457185859616768", "233leyuan"]
      ] },
    { hero: "moto_01", name: { ru: "Паучий танк без затрат", en: "Zero-Cost Spider Tank" }, skill: "Synthetic Troop", tier: "C", stage: "start", budget: 1, diff: 1, trend: "",
      pros: { ru: "Почти бесплатный", en: "Almost free" },
      cons: { ru: "Слабее Moto 2", en: "Weaker than Moto 2" },
      src: "233leyuan" },
    { hero: "rehan_01", name: { ru: "Whirlwind: от кампании до 250M", en: "Whirlwind: campaign to 250M" }, skill: "Groundshaker → Savage Charge → Whirlwind", tier: "B", stage: "start", budget: 2, diff: 2, trend: "",
      pros: { ru: "Пошаговый гайд из 4 этапов: Groundshaker и Savage Charge в кампании, переход на Whirlwind с 60 уровня (~50k DPS), 250M DPS к 89 уровню с двуручным мечом. На каждом этапе снаряжение, скиллы, трейты, питомцы и таланты", en: "Step-by-step guide in 4 setups: Groundshaker and Savage Charge in the campaign, Whirlwind from level 60 (~50k DPS), 250M DPS by level 89 with a two-handed sword. Each setup lists gear, skills, traits, pact spirits and talents" },
      cons: { ru: "Это первая часть — эндгейм выйдет позже. В SS14 Whirlwind больше не использует ловкость: строки с Dexterity в снаряжении автор советует заменить на урон. Талант Indifference требует 200+ свободной энергии", en: "This is Part 1 — endgame comes later. In SS14 Whirlwind no longer uses Dexterity: the author advises replacing Dexterity gear lines with damage. The Indifference talent needs 200+ unspent Energy" },
      src: { ru: "гайд Travic (ред. 1, 12.10.2026); благодарности автора: Medicated, Brokugin, Marcus Nordstrom", en: "Travic's guide (rev. 1, Oct 12, 2026); author's credits: Medicated, Brokugin, Marcus Nordstrom" },
      links: [
        [{ ru: "Видео-гайд: Whirlwind от кампании до 250M", en: "Video guide: Whirlwind, campaign to 250M" }, "https://www.youtube.com/watch?v=vUBZlHRlEZo", "Travic"]
      ] },
    { hero: "rehan_01", name: { ru: "Anger: код билда от Адемки", en: "Anger: build code by Ademka" }, skill: { ru: "смотрите код билда", en: "see the build code" }, tier: "B", stage: "start", budget: 2, diff: 2, trend: "",
      pros: { ru: "satu1kaa рекомендует Rehan 1 как стартер; готовый код билда для импорта", en: "satu1kaa recommends Rehan 1 as a starter; a ready-made build code to import" },
      cons: { ru: "Только код — пошаговый разбор смотрите в гайде Travic выше", en: "Code only — for a step-by-step walkthrough see Travic's guide above" },
      src: { ru: "Адемка (t.me/torchdwg), из подборки satu1kaa (11.10.2026)", en: "Ademka (t.me/torchdwg), via satu1kaa's list (Oct 11, 2026)" },
      links: [
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "билд Адемки", en: "Ademka's build" }, "nnCFv5bgEfG9+AAAAAAAKQ=="]
      ] },
    { hero: "rehan_02", name: "Seething Silhouette", skill: "Whirlwind / Berserking Blade", tier: "A", stage: "both", budget: 2, diff: 2, trend: "down",
      pros: { ru: "Без штрафа к скорости атаки, быстрый темп", en: "No attack speed penalty, fast pace" },
      cons: { ru: "Нерф ярости, у Whirlwind и Berserking Blade убрана ловкость", en: "Rage nerfed, Dexterity removed from Whirlwind and Berserking Blade" },
      src: { ru: "IGGM, патчноут SS14", en: "IGGM, SS14 patch notes" },
      links: [
        [{ ru: "Гайд AgroMorph: Spectral Slash, фарм T8 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T8 farming (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan-2-spectral-slash-8-1-any-farm", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Thunder Spike, прокачка и Traveler T7 (tlicompendium)", en: "AgroMorph's guide: Thunder Spike, leveling and T7 Traveler (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan-2-thunder-spike-leveling-and-t7-traveler-setup", "AgroMorph"]
      ] },
    { hero: "gemma_01", name: "Ice-Fire Fusion", skill: { ru: "Скиллы + шмот + таланты", en: "Skills + gear + talents" }, tier: "B", stage: "end", budget: 3, diff: 3, trend: "",
      pros: { ru: "Силён в полной сборке", en: "Strong when fully assembled" },
      cons: { ru: "Долго и сложно собирается", en: "Slow and hard to assemble" },
      src: "IGGM" }
  ],

  // Каналы авторов гайдов — только для указания авторства (мелкой строкой под гайдом)
  authors: {
    Travic: { youtube: "https://www.youtube.com/@Travic_", twitch: "https://www.twitch.tv/travic" },
    instinct: { twitch: "https://www.twitch.tv/instinct_t" },
    "Адемка": { url: "https://t.me/torchdwg" },
    MinMaxedARPG: { youtube: "https://www.youtube.com/@MinMaxedARPG" },
    SephGoesGaming: { youtube: "https://www.youtube.com/@SephGoesGaming", twitch: "https://www.twitch.tv/sephgoesgaming" },
    satu1kaa: { youtube: "https://www.youtube.com/@satu1kaa", twitch: "https://www.twitch.tv/satu1kaa" },
    DonTheCrown: { youtube: "https://www.youtube.com/@DonTheCrown" },
    Pat404: { youtube: "https://www.youtube.com/@Pat404Games" },
    Little_practice: { youtube: "https://www.youtube.com/@Little_practice232" },
    "Marcus Nordstrom": { youtube: "https://www.youtube.com/@marcusnordstrom9251" },
    // без найденного канала — ссылка на сам материал
    "Lao Ke": { url: "https://www.bilibili.com/video/BV1yqpL6kEYK/" },
    // площадки, а не авторы — в список авторов не выводятся
    Reddit: { site: true }, "233leyuan": { site: true },
    R3plic: { url: "https://tlicompendium.com/en/news/5-1-battle-tested-starters-for-season-14-tartarus" }
  },

  // Изменения SS14
  changes: [
    { type: "up", text: {
      ru: "Youga 3 «The Ultimate One»: новый трейт. Заклинания на Clockwork Core кастуются сами, крит сокращает кулдауны, ветки Dictator / Conqueror / Overlord",
      en: "Youga 3 \"The Ultimate One\": new trait. Spells on the Clockwork Core auto-cast, crits reduce cooldowns, Dictator / Conqueror / Overlord branches" } },
    { type: "up", text: { ru: "Meteor: базовый урон 332–616 → 465–863", en: "Meteor: base damage 332–616 → 465–863" } },
    { type: "up", text: { ru: "Electric Overload: бонус молнии 15% → 16%", en: "Electric Overload: lightning bonus 15% → 16%" } },
    { type: "down", text: { ru: "Rehan: бонус ярости 20–44% → 10–34%, Berserk 50–78% → 40–68%", en: "Rehan: rage bonus 20–44% → 10–34%, Berserk 50–78% → 40–68%" } },
    { type: "down", text: { ru: "Selena: ground-урон трейта +0–20% → −20–0%; ещё один её талант даёт −30% скорости бега (к какому трейту он относится, пока не подтверждено)", en: "Selena: trait ground damage +0–20% → −20–0%; another of her talents adds −30% movement speed (which trait it belongs to is unconfirmed)" } },
    { type: "down", text: { ru: "Rosa: бонусы стихий 5–9% → 4–8% (кап 50–90% → 40–80%), Silver stance 20–48% → 10–34%", en: "Rosa: elemental bonus 5–9% → 4–8% (cap 50–90% → 40–80%), Silver stance 20–48% → 10–34%" } },
    { type: "down", text: { ru: "Sage: ослаблены листья и споры, эффект эликсиров 100–180% → 30–70%", en: "Sage: leaves and spores weakened, elixir effect 100–180% → 30–70%" } },
    { type: "down", text: { ru: "Thorns Domain, Tidal Spring, Hand of the Abyss, Thunderstorm Zone: урон снижен", en: "Thorns Domain, Tidal Spring, Hand of the Abyss, Thunderstorm Zone: damage reduced" } },
    { type: "down", text: { ru: "Whirlwind / Berserking Blade: ловкость больше не основной атрибут; Arrow Rain: бонус от скорости снаряда ограничен 200%", en: "Whirlwind / Berserking Blade: Dexterity no longer a main attribute; Arrow Rain: projectile speed bonus capped at 200%" } },
    { type: "down", text: { ru: "Freeze-билды: нерф колец на заморозку (Gemma 2 по тестам не задета)", en: "Freeze builds: freeze rings nerfed (Gemma 2 unaffected in tests)" } },
    { type: "new", text: { ru: "Тюрьма Tartarus: 16 камер, заключённые поглощают друг друга и растут, в конце бунт с лутом", en: "Tartarus prison: 16 cells, prisoners devour each other and grow, ending in a loot riot" } },
    { type: "new", text: { ru: "Followers: наёмники из заключённых. Связка «шесть проклятий» через Поэта (цепная молния → паралич → проклятия)", en: "Followers: mercenaries recruited from prisoners. \"Six curses\" combo via the Poet (chain lightning → paralysis → curses)" } },
    { type: "new", text: { ru: "Divine Ascent: 150 этажей, прыжки до 5 этажей, награда Pactspirit перенесена с 35 на 50 этаж", en: "Divine Ascent: 150 floors, skip up to 5 floors, Pactspirit reward moved from floor 35 to 50" } }
  ],

  sources: [
    [{ ru: "musabots — тир-лист SS14 (11.10.2026)", en: "musabots — SS14 Tier List (Oct 11, 2026)" }, "https://musabots.com/blog/torchlight-infinite-tier-list"],
    [{ ru: "mmoexp — тир-лист SS13 по данным 3-го дня", en: "mmoexp — SS13 tier list, day-3 data" }, "https://www.mmoexp.com/News/torchlight-infinite-ss13-afterlight-tier-list-10-best-builds-to-farm-faster-based-on-day-3-performance.html"],
    [{ ru: "IGGM — тир-лист стартеров SS13", en: "IGGM — SS13 Starter Tier List" }, "https://www.iggm.com/news/torchlight-infinite-ss13-afterlight-starter-build-tier-list-for-fast-leveling"],
    [{ ru: "Официальный патчноут SS14", en: "Official SS14 patch notes" }, "https://torchlight.xd.com/ss14pn/"],
    [{ ru: "PCGamesN — сезон Tartarus", en: "PCGamesN — Tartarus season" }, "https://www.pcgamesn.com/torchlight-infinite/update-tartarus-season"],
    [{ ru: "17173 — превью SS14, наёмники и шесть проклятий", en: "17173 — SS14 preview, followers and six curses" }, "https://news.17173.com/content/10112026/143712170.shtml"],
    [{ ru: "Bilibili — превью S14, Youga 3", en: "Bilibili — S14 preview, Youga 3" }, "https://www.bilibili.com/video/BV1eWph6qEfM/"],
    [{ ru: "233leyuan — билды SS13", en: "233leyuan — SS13 builds" }, "https://www.233leyuan.com/post-detail/2077457185859616768"],
    [{ ru: "minmaxed — гайды S14", en: "minmaxed — S14 guides" }, "https://minmaxedarpg.com/games/tli/seasons/s14"],
    [{ ru: "instinct — гайд по прогрессии Iris 2 (SS13)", en: "instinct — Iris 2 progression guide (SS13)" }, "https://docs.google.com/document/d/1ZvE5EIwXpxn1Ta5Zi8qDGuKBDS1TEDlNggbTgI1X6o8/edit"],
    [{ ru: "R3plic — 5 (+1) проверенных стартеров SS14 (tlicompendium)", en: "R3plic — 5 (+1) battle-tested SS14 starters (tlicompendium)" }, "https://tlicompendium.com/en/news/5-1-battle-tested-starters-for-season-14-tartarus"],
    [{ ru: "Travic — видео-гайд Rehan 1 (YouTube)", en: "Travic — Rehan 1 video guide (YouTube)" }, "https://www.youtube.com/watch?v=vUBZlHRlEZo"],
    [{ ru: "Pat404 — стартеры SS14: кого брать, а кого нет (YouTube)", en: "Pat404 — SS14 starters: who to pick (YouTube, Russian)" }, "https://www.youtube.com/watch?v=7y6-yvglxeQ"],
    [{ ru: "Little_practice — кем играть в лиге Tartarus (YouTube)", en: "Little_practice — who to play in Tartarus (YouTube, Russian)" }, "https://www.youtube.com/watch?v=s61o8_2aYN4"],
    [{ ru: "satu1kaa — лигстартеры SS14 и коды билдов (YouTube)", en: "satu1kaa — SS14 league starters and build codes (YouTube, Russian)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co"],
    [{ ru: "SephGoesGaming — гайды Iris 2 и Youga 1 на SS14 (tlicompendium)", en: "SephGoesGaming — Iris 2 and Youga 1 SS14 guides (tlicompendium)" }, "https://www.youtube.com/watch?v=0hBikw3DX68"],
    [{ ru: "MinMaxedARPG — META: тир-лист Tartarus SS14 (YouTube)", en: "MinMaxedARPG — META: Tartarus SS14 tier list (YouTube)" }, "https://www.youtube.com/watch?v=OACr2W8p1pE"],
    [{ ru: "DonTheCrown — прогноз тир-листа SS14 (YouTube)", en: "DonTheCrown — SS14 tier list prediction (YouTube)" }, "https://www.youtube.com/watch?v=WOTBgd06l2U"],
    [{ ru: "Lao Ke — тир-лист SS14 (Bilibili)", en: "Lao Ke — SS14 tier list (Bilibili)" }, "https://www.bilibili.com/video/BV1yqpL6kEYK/"],
    [{ ru: "DCInside — скриншоты тир-листа Lao Ke и статистика 4000-го этажа SS13", en: "DCInside — Lao Ke tier list screenshots and SS13 floor-4000 stats" }, "https://gall.dcinside.com/mgallery/board/view/?id=torchlightinfinite&no=142605"],
    [{ ru: "Reddit — тесты стартеров SS14 игроками", en: "Reddit — players' SS14 starter tests" }, "https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/"],
    [{ ru: "Qingzi Tan — первый геймплей Youga 3 (Bilibili)", en: "Qingzi Tan — Youga 3 first gameplay (Bilibili)" }, "https://www.bilibili.com/video/BV1BHHS6oEyh/"],
    [{ ru: "Neng Miao — разбор Sage на SS14 (Bilibili)", en: "Neng Miao — Sage SS14 breakdown (Bilibili)" }, "https://www.bilibili.com/video/BV1wnpj6VEvG/"],
    [{ ru: "Enzee5 — TLI Resource Links, каталог гайдов сообщества", en: "Enzee5 — TLI Resource Links, community guide index" }, "https://docs.google.com/spreadsheets/d/1Vg6PbMnkWC2K7FXL9ojFwK7RQ-28gkeDzPDnwcKhiwo/edit"],
    [{ ru: "tlidb — база героев (портреты)", en: "tlidb — hero database (portraits)" }, "https://tlidb.com/en/Hero"]
  ]
};
