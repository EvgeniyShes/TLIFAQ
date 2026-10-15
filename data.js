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
    updatedAt: "2026-10-15T08:24:00Z", // время последнего обновления тиров (UTC) — менять при каждом обновлении
    note: {
      ru: "Сезон ещё не стартовал: оценки — сводный прогноз по итогам SS13, патчноутам SS14, тир-листам, гайдам и видео авторов.",
      en: "The season hasn't started yet: ratings are a combined forecast based on SS13 results, SS14 patch notes, tier lists, guides and creators' videos."
    }
  },

  // Журнал крупных обновлений содержимого (страница /changelog/): только EN, кратко, новые сверху.
  // Тиры, билды, гайды, источники; заметные посетителю улучшения удобства — тоже (решение владельца). SEO и мелкие правки вёрстки не писать.
  changelog: [
    ["2026-10-15", [
      "Usability: a clear League start / Endgame switch for the tier lists; build cards with a tier-colored header, guides and videos as large tiles at the top, bigger build codes; an opened row in the builds table now reads as one block; removed the auto YouTube search links that showed random videos.",
      "New builds: Iris 2 Rock Magus swap from TM5 with build code (Wuxia), Carino 3 leveling → T7 → 8-1 → Profound (AgroMorph), Youga 3 Ice Lances Tangle (Beast_hearth, KakiGaming). New videos and guides: ManMauzer and Nirtas (Youga 3), satu1kaa (Erika 1 Thunder Spike day one), Bmlegolas (Bing 2 Lightning Beam 0 → SS20).",
      "Tiers recalculated with 7 new tier lists: UncleJay, Bmlegolas, FrostLex, Yamatsy, ItsAdiar, BagashTorchlite, 파밍너드. League start: Rehan 2 and Sage down to A; Carino 1, Carino 3, Erika 2, Erika 3 down to B; Gemma 1, Thea 2 down to C. Endgame: Rehan 1 up to A (Spell Burst build); Erika 3 down to B, Thea 2 down to C.",
      "SS14 changes now name the exact trait: the Rage nerf hits Rehan 2 only (Rehan 1 unchanged), the elemental nerf hits Rosa 2, the Terra nerf hits Selena 2.",
      "New builds: Selena 1 Wilting Beam starter (CrimsonDead), Youga 3 cold Hound's Fangs (Nirtas), Selena 2 Frost Terra → Tidewell (Nirtas), Youga 1 Chain Lightning 8B → SS20 (Fragmentations), Bing 2 Splitting Lightning Bolt (CoffeeBns).",
      "Selena 1 Scorching Beam: added CrimsonDead's SS14 guide. New videos: ShadyBroker (Youga 2 Mind Control), MinMaxedARPG (Gemma 2), DonTheCrown and Marcus Nordstrom (Selena 1), Francissss (Rosa 2)."
    ]],
    ["2026-10-14", [
      "New builds: Youga 3 Splitting Lightning Bolt (VacaAlpha, BmLegolas) and Stasis Vault campaign (DonTheCrown), Youga 2 Fallen Star Ignite (Corealis), Rehan 2 Frost Spike campaign → Profound with build codes (ExileMind) and Spectral Slash SS14 endgame.",
      "Erika 1 Corrosive Throw: added Shad0ws' SS14 video guide.",
      "New builds: Youga 3 physical Hound's Fangs (ManMauzer), Selena 2 Frost Terra start → early Profound (Crazycaps), Rosa 2 Frost Spike level 1 → Profound (Lucas)."
    ]],
    ["2026-10-13", [
      "Launch: SS14 Tartarus tier lists for league start and endgame (all 28 traits), builds, SS14 changes and sources.",
      "Tiers recalculated from weighted sources: Lao Ke, DonTheCrown, R3plic, MinMaxedARPG, CoffeeBns, Pat404, Little_practice, SS13 floor-4000 stats.",
      "New guides: Travic (Rehan 1 Whirlwind), SephGoesGaming (Iris 2, Youga 1), instinct (Iris 2), Smith (Selena 1 Scorching Beam).",
      "In-game build codes from satu1kaa, instinct and Ademka."
    ]]
  ],

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
    youga_03:  { hero: "Youga",  n: 3, trait: "The Ultimate One", pricey: true }, // pricey — значок $ слева на карточке: скорее всего будет дорогим
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
      desc: { ru: "Билд «с нуля»: пройти кампанию и ранний Netherrealm без шмота, без больших вложений убить первого тревелера — босса Сириуса — и заработать первую валюту. Потом на неё собирают эндгейм-билд.", en: "A from-scratch build: clear the campaign and early Netherrealm with no gear, kill the first Traveler boss (Sirius) without big investment, and farm your first currency. Then use it to gear an endgame build." },
      hint: { ru: "Кампания, ранний Netherrealm и первый тревелер (Сириус) без больших вложений, бюджет, скорость прогресса", en: "Campaign, early Netherrealm and the first Traveler (Sirius) without big investment, budget, progression speed" },
      rows: {
        S: [
          ["youga_03", "up", { ru: "Новый трейт SS14, прогноз: минимум 4 автора на Bilibili разбирают его в трёх вариантах (автобег, мобильность, ручная игра), обещают «с нуля до U8»", en: "New SS14 trait, forecast: at least 4 Bilibili creators break it down in three variants (auto-run, mobility, manual), claiming \"zero to U8\"" }],
          ["erika_01", "", { ru: "Самый быстрый фарм валюты на старте; хрупкая", en: "Fastest early currency farming; fragile" }],
          ["selena_01", "", { ru: "Lao Ke, R3plic и satu1kaa: надёжный стартер — замораживающий клир на весь экран и автоматизация с 20 уровня; хуже заходит в Profound", en: "Lao Ke, R3plic and satu1kaa: a reliable starter — screen-wide freezing clear and automation from level 20; struggles to break into Profound" }],
          ["rosa_02", "down", { ru: "Lao Ke и DonTheCrown ставят в топ сезона; для полного раскрытия нужны дорогие перчатки", en: "Lao Ke and DonTheCrown put her at the top of the season; needs expensive gloves to fully come online" }]
        ],
        A: [
          ["thea_01", "new", { ru: "Трейт переработан в SS14, реальная сила станет ясна после старта", en: "Trait reworked in SS14, real strength unknown until launch" }],
          ["bing_02", "", { ru: "Нужен питомец на спеллбёрсты, играется надёжно", en: "Needs a Spell Burst pet, plays reliably" }],
          ["iris_02", "", { ru: "Быстрая и живучая, проходит акты через Thunder или Fire Magus. Но дорогие питомцы и сложная механика", en: "Fast and tanky, clears acts with Thunder or Fire Magus. But pricey pets and complex mechanics" }],
          ["gemma_02", "up", { ru: "Заморозка упрощает старт; нерф freeze её не задел", en: "Freeze makes the start easy; the freeze nerf didn't hit her" }],
          ["youga_02", "", { ru: "Бюджетный убийца боссов, DoT от Twisted Spacetime", en: "Budget boss killer, DoT from Twisted Spacetime" }],
          ["carino_02", "", { ru: "Надёжный, но Lao Ke ставит ниже: «хороший, просто нет места»", en: "Reliable, but Lao Ke rates it lower: \"good, just no room\"" }],
          ["bing_01", "", { ru: "Недорогой билд против боссов, по картам можно автобегом", en: "Cheap bossing build, maps can be auto-run" }],
          ["rehan_02", "down", { ru: "Ярость понерфлена, но DonTheCrown ждёт его в числе самых популярных", en: "Rage was nerfed, but DonTheCrown expects it among the most popular" }],
          ["sage_01", "down", { ru: "«Главная жертва» блюпоста SS14: нерф эликсиров и саммонов", en: "Biggest loser of the SS14 blue post: elixirs and summons nerfed" }],
          ["selena_02", "down", { ru: "Была S в SS13; ground-скиллы −20% и нерф Thorns/Tidal", en: "Was S in SS13; ground skills −20%, Thorns/Tidal nerfed" }]
        ],
        B: [
          ["rehan_01", "", { ru: "Трейт в SS14 не менялся (нерф ярости — у Rehan 2); подробный гайд Travic — от кампании до 250M урона через Whirlwind", en: "Trait unchanged in SS14 (the Rage nerf hit Rehan 2); Travic has a detailed guide — campaign to 250M damage with Whirlwind" }],
          ["iris_01", "", { ru: "Саммонер, доводит до T8, хорош для фарма Flame Elementium", en: "Summoner, carries to T8, good for Flame Elementium farming" }],
          ["thea_03", "", { ru: "Erosion-урон, сильна в начале и середине", en: "Erosion damage, strong early and mid game" }],
          ["youga_01", "", { ru: "Играбельно, но Youga 2/3 делают то же лучше", en: "Playable, but Youga 2/3 do it better" }],
          ["gemma_03", "", { ru: "Нужны вложения", en: "Needs investment" }],
          ["rosa_01", "", { ru: "Быстро валит боссов, но требует скилла", en: "Kills bosses fast but demands skill" }],
          ["carino_01", "", { ru: "Игрок на Reddit до старта убивал Traveler на ~T2 через Ice Lances; Lao Ke пока наблюдает", en: "A Reddit player killed the Traveler on ~T2 with Ice Lances pre-season; Lao Ke is still watching" }],
          ["carino_03", "", { ru: "Lao Ke: уровень «демон»; на ПК силён, на телефоне нет автобега", en: "Lao Ke: \"demon\" tier; strong on PC, no auto-run on mobile" }],
          ["erika_02", "", { ru: "Очень плавная игра и скорость; главный минус — дорогая", en: "Very smooth play and speed; the main downside is cost" }],
          ["erika_03", "", { ru: "Lao Ke: «демон»; холодный старт слабее из-за нерфа колец на заморозку", en: "Lao Ke: \"demon\"; the cold start is weaker due to the freeze ring nerf" }],
          ["moto_02", "down", { ru: "Самоподрыв войск; задет нерфами SS14", en: "Self-destructing troops; hit by SS14 nerfs" }]
        ],
        C: [
          ["moto_01", "", { ru: "Слабее Moto 2", en: "Weaker than Moto 2" }],
          ["gemma_01", "", { ru: "Много деталей, собирается долго", en: "Many moving parts, slow to assemble" }],
          ["thea_02", "", { ru: "Lao Ke: «демон» — Tenacity-билд, но упирается в ожерелье и бюджет", en: "Lao Ke: \"demon\" — Tenacity build, but limited by the necklace and budget" }]
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
          ["rosa_02", "down", { ru: "Был S; бонус Silver stance урезан 20–48% → 10–34%", en: "Was S; Silver stance bonus cut 20–48% → 10–34%" }],
          ["sage_01", "down", { ru: "Сильнейший класс SS13 (100+ на 4000-м этаже), но с нерфами SS14 часть авторов ставит его ниже", en: "Strongest class of SS13 (100+ on floor 4000), but with SS14 nerfs some creators rate it lower" }],
          ["rehan_02", "down", { ru: "Нерф ярости", en: "Rage nerfed" }],
          ["erika_01", "", { ru: "На 4000-м этаже в конце SS13 — единицы игроков; уступает Rosa 2", en: "Only a handful on floor 4000 at the end of SS13; behind Rosa 2" }]
        ],
        A: [
          ["gemma_02", "up", { ru: "Frostbitten Heart: единственный freeze, не задетый нерфом", en: "Frostbitten Heart: the only freeze build untouched by the nerf" }],
          ["bing_02", "", { ru: "Creative Genius: спеллбёрсты", en: "Creative Genius: Spell Bursts" }],
          ["iris_02", "", { ru: "Стабильный урон по боссам, доходит до Profound и Deep Space. Потолок урона ниже, чем у Rosa и Rehan", en: "Steady boss damage, reaches Profound and Deep Space. Lower damage ceiling than Rosa and Rehan" }],
          ["selena_01", "", { ru: "Прогноз: Lao Ke высоко оценивает на SS14, но в SS13 почти никто не играл", en: "Forecast: Lao Ke rates her highly for SS14, but almost nobody played her in SS13" }],
          ["thea_01", "new", { ru: "Трейт переработан в SS14, набирал игроков ещё в SS13", en: "Trait reworked in SS14, was gaining players in SS13" }],
          ["erika_02", "", { ru: "100+ игроков на 4000-м этаже в SS13; дорогая", en: "100+ players on floor 4000 in SS13; expensive" }],
          ["youga_02", "", { ru: "Стартер, в эндгейме уступает", en: "Starter, falls behind in endgame" }],
          ["carino_03", "", { ru: "В топе на 3-й день SS13, но до 4000-го этажа дошли единицы; Lao Ke — «демон»", en: "Top tier on SS13 day 3, but few reached floor 4000; Lao Ke: \"demon\"" }],
          ["bing_01", "", { ru: "Blast Nova: связки бомб, топ фарм", en: "Blast Nova: bomb bundles, top farming" }],
          ["carino_02", "", { ru: "Стартер, в эндгейме уступает Carino 3", en: "Starter, behind Carino 3 in endgame" }],
          ["rehan_01", "", { ru: "Набирал игроков в SS13, трейт в SS14 не тронут; в эндгейме — билд через Spell Burst", en: "Gained players in SS13, trait untouched in SS14; endgame via a Spell Burst build" }]
        ],
        B: [
          ["selena_02", "down", { ru: "Отлично чистила карты, но нерф ground-скиллов", en: "Great map clear, but ground skills nerfed" }],
          ["moto_02", "down", { ru: "Понерфлен до сезона, но в SS13 результаты лучше ожиданий (51 игрок на 4000-м этаже)", en: "Nerfed pre-season, but SS13 results beat expectations (51 players on floor 4000)" }],
          ["youga_01", "", { ru: "Набирал игроков в SS13, популярный гайд Chain Lightning", en: "Gained players in SS13, popular Chain Lightning guide" }],
          ["carino_01", "", { ru: "Терял игроков в SS13", en: "Lost players in SS13" }],
          ["thea_03", "", { ru: "Больше урона, чем у Youga 2, но дорогой предмет памяти", en: "More damage than Youga 2, but an expensive memory item" }],
          ["gemma_03", "", { ru: "Терял игроков в SS13", en: "Lost players in SS13" }],
          ["iris_01", "", { ru: "Фармит до T8, дальше уступает Iris 2", en: "Farms up to T8, then behind Iris 2" }],
          ["gemma_01", "", { ru: "Силён в полной сборке, но терял игроков", en: "Strong when complete, but lost players" }],
          ["rosa_01", "", { ru: "Терял игроков, Rosa 2 сильнее", en: "Lost players, Rosa 2 is stronger" }],
          ["erika_03", "", { ru: "Vendetta's Sting", en: "Vendetta's Sting" }]
        ],
        C: [
          ["moto_01", "", { ru: "Слабее Moto 2", en: "Weaker than Moto 2" }],
          ["thea_02", "", { ru: "В SS13 слабая, Lao Ke ждёт роста в SS14 (Tenacity-билд)", en: "Weak in SS13, Lao Ke expects growth in SS14 (Tenacity build)" }]
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
    { hero: "youga_03", name: { ru: "Hound's Fangs: физический урон через Trauma", en: "Hound's Fangs: physical Trauma" }, skill: { ru: "Hound's Fangs, ветка I Meet the Selves", en: "Hound's Fangs, I Meet the Selves branch" }, tier: "S", stage: "both", budget: 2, diff: 3, trend: "up",
      pros: { ru: "Подробный разбор механики: I Meet the Selves с +40% скорости кулдаунов даёт Hound's Fangs +80% урона за каждый стак Trauma (до 3 стаков через Open Wounds). Вместо дорогого Malign Embrace — шлем Ralph's Dreadcrest с Laceration: ещё до ~+477% физического урона. Версии билда на старт (огонь, физика, Shackles) и середину игры", en: "A detailed mechanics breakdown: I Meet the Selves with +40% cooldown recovery gives Hound's Fangs +80% damage per Trauma stack (up to 3 via Open Wounds). Instead of the pricey Malign Embrace — the Ralph's Dreadcrest helmet with Laceration: up to ~+477% more physical damage. Build versions for league start (fire, physical, Shackles) and mid game" },
      cons: { ru: "Теорикрафт: Laceration — новый эффект, до сезона его не проверить. На 30 стаках билд получает ~3000 чистого урона в секунду — нужен большой запас здоровья, реген и Life Tonic для сброса стаков. Коды билдов — только в игре (Pro Builds → Creator → ManMauzer)", en: "Theorycraft: Laceration is a new effect that can't be tested before the season. At 30 stacks the build takes ~3000 true damage per second — needs a big life pool, regen and Life Tonic to clear stacks. Build codes are in-game only (Pro Builds → Creator → ManMauzer)" },
      src: { ru: "гайд ManMauzer (tlicompendium, 12.10.2026)", en: "ManMauzer's guide (tlicompendium, Oct 12, 2026)" },
      links: [
        [{ ru: "Гайд ManMauzer: Hound's Fangs, стартеры Youga 3 (tlicompendium)", en: "ManMauzer's guide: Hound's Fangs, Youga 3 starters (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/youga-3-manmauzer", "ManMauzer"],
        [{ ru: "Видео ManMauzer: чистая физика через Ralph's Dreadcrest — механики (YouTube)", en: "ManMauzer's video: pure physical via Ralph's Dreadcrest — mechanics (YouTube)" }, "https://www.youtube.com/watch?v=kPlzTOYL0ro", "ManMauzer"]
      ] },
    { hero: "youga_03", name: "Splitting Lightning Bolt", skill: "Splitting Lightning Bolt + Gale", tier: "S", stage: "start", budget: 1, diff: 2, trend: "up",
      pros: { ru: "Стартовое заклинание Youga 3, бюджет 0 FE. Ветка I Meet the Selves: чем больше снарядов, тем больше урона (до +120%), I Need Not Lift a Finger автоматизирует каст. Разобраны саппорты, таланты, таблички, питомцы и FAQ. Клир быстрее, чем у Hound's Fangs. У BmLegolas: кампания на Chromatic Shot, переход на Splitting Lightning Bolt с TM8", en: "Youga 3's starting spell, 0 FE budget. I Meet the Selves branch: more projectiles means more damage (up to +120%), I Need Not Lift a Finger automates casting. Supports, talents, slates, pact spirits and an FAQ are covered. Faster clear than Hound's Fangs. BmLegolas: Chromatic Shot in the campaign, switch to Splitting Lightning Bolt at TM8" },
      cons: { ru: "Теорикрафт до старта; по словам VacaAlpha, у Hound's Fangs урон выше. Код билда автор обещал позже, Malign Embrace для капа танглов будет очень дорогим", en: "Pre-season theorycraft; VacaAlpha says Hound's Fangs has higher damage. The build code is promised later, and Malign Embrace for the tangle cap will be very expensive" },
      src: { ru: "гайды VacaAlpha и BmLegolas (tlicompendium, 13.10.2026)", en: "VacaAlpha's and BmLegolas' guides (tlicompendium, Oct 13, 2026)" },
      links: [
        [{ ru: "Гайд VacaAlpha: Splitting Lightning Bolt, стартер (tlicompendium)", en: "VacaAlpha's guide: Splitting Lightning Bolt starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/vaca-splitting-lightning-bolt-youga3-starter-ss14", "VacaAlpha"],
        [{ ru: "Видео VacaAlpha (YouTube)", en: "VacaAlpha's video (YouTube)" }, "https://www.youtube.com/watch?v=SgVXD6_ivPc", "VacaAlpha"],
        [{ ru: "Гайд BmLegolas: Splitting Lightning Bolt (tlicompendium)", en: "BmLegolas' guide: Splitting Lightning Bolt (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/youga3-splitting-lightning-bolt-league-starter", "BmLegolas"],
        [{ ru: "Видео BmLegolas (YouTube)", en: "BmLegolas' video (YouTube)" }, "https://youtu.be/Yy6TWm9MWIo", "BmLegolas"]
      ] },
    { hero: "youga_03", name: { ru: "Кампания до T7: Stasis Vault", en: "Campaign to T7: Stasis Vault" }, skill: { ru: "Homing Frost Bolt, Stasis Vault (ветка I Hold All in My Grasp)", en: "Homing Frost Bolt, Stasis Vault (I Hold All in My Grasp branch)" }, tier: "S", stage: "start", budget: 1, diff: 2, trend: "up",
      pros: { ru: "Кампания до Traveler T7, три варианта главного скилла. Купол Stasis Vault вокруг столба возвращает снаряды во врагов. Разобраны все трейты, вещи из сокровищниц кампании, питомцы (Witch of the Night ускоряет кулдауны) и статы: интеллект, крит, Frostbite", en: "Campaign to the T7 Traveler, three main-skill variants. The Stasis Vault dome around the pillar bounces projectiles back into enemies. Covers every trait, campaign trove items, pact spirits (Witch of the Night speeds up cooldowns) and stats: Intelligence, crit, Frostbite" },
      cons: { ru: "Содержимое сокровищниц автор угадывает — до старта оно неизвестно. I Will Hunt You Down вдвое режет скорость каста, без прыжков и пробивания урона нет", en: "The author is guessing trove contents — unknown before launch. I Will Hunt You Down halves cast speed, so without jumps and penetration there's no damage" },
      src: { ru: "гайд DonTheCrown (tlicompendium, 14.10.2026)", en: "DonTheCrown's guide (tlicompendium, Oct 14, 2026)" },
      links: [
        [{ ru: "Гайд DonTheCrown: кампания Youga 3, 3 варианта (tlicompendium)", en: "DonTheCrown's guide: Youga 3 campaign, 3 variants (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/youga-3-campaign-guide-3-variations", "DonTheCrown"]
      ] },
    { hero: "youga_03", name: { ru: "Hound's Fangs в холод: кампания → Profound", en: "Cold Hound's Fangs: campaign → Profound" }, skill: { ru: "Hound's Fangs (до него — Chromatic Shot или Splitting Lightning Bolt)", en: "Hound's Fangs (Chromatic Shot or Splitting Lightning Bolt before it)" }, tier: "S", stage: "both", budget: 2, diff: 3, trend: "up",
      pros: { ru: "Семь этапов: кампания, TM4, TM7, TM8, Profound. Физический урон конвертируется в холод через Prophet (Extreme Coldness), дальше Marksman (Gale) — скорость снарядов становится уроном. Разобраны все четыре ветки трейта, приоритеты легендарных талантов для плит, бюджетные уники (Blind Vision, Old Grudge, Undying Faith) и печать аур 4 × 50% через Lich", en: "Seven stages: campaign, TM4, TM7, TM8, Profound. Physical damage is converted to cold via Prophet (Extreme Coldness), then Marksman (Gale) turns projectile speed into damage. Covers all four trait branches, legendary talent priorities for slates, budget uniques (Blind Vision, Old Grudge, Undying Faith) and sealing 4 × 50% auras via Lich" },
      cons: { ru: "Автор сам пишет «в работе, может оказаться байтом». По словам разработчиков, Hound's Fangs даёт только 1 стак за каст — автор допускает, что Blazing Meteor окажется лучше. Malign Embrace и Dawn Break дорогие", en: "The author says it's a work in progress and \"could be 100% bait\". Per the devs, Hound's Fangs only gives 1 stack per cast — the author thinks Blazing Meteor might be better. Malign Embrace and Dawn Break are expensive" },
      src: { ru: "гайд Nirtas (tlicompendium, 15.10.2026)", en: "Nirtas' guide (tlicompendium, Oct 15, 2026)" },
      links: [
        [{ ru: "Гайд Nirtas: Youga 3 (tlicompendium)", en: "Nirtas' guide: Youga 3 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/nirtas-youga-3-guide", "Nirtas"],
        [{ ru: "Видео Nirtas: план старта на Youga 3 (YouTube)", en: "Nirtas' video: Youga 3 league start plan (YouTube)" }, "https://www.youtube.com/watch?v=oY4iAwHoRM8", "Nirtas"],
        [{ ru: "Письменные гайды Nirtas (Google Docs)", en: "Nirtas' written guides (Google Docs)" }, "https://docs.google.com/document/d/1FJsDClP6rImdOgeY_0mSwuREpJWnvvTL/edit", "Nirtas"]
      ] },
    { hero: "youga_03", name: { ru: "Ice Lances + Tangle: с актов до Profound", en: "Ice Lances + Tangle: acts to Profound" }, skill: "Ice Lances (Tangle)", tier: "S", stage: "both", budget: 1, diff: 3, trend: "up",
      pros: { ru: "Ice Lances сразу с актов: у него больше базовый урон и эффективность добавленного урона (палка с +100 холода даёт ~229), встроенный +1 Jump. Нерф Chromatic Shot и нерф шотгана на Ice Lances этот билд не задевают. Автор ждёт 300–600M урона к Traveler T7 без вложений, выход в Profound — за несколько тысяч FE. Автор три сезона играл Gemma 2 Tangle Ice Lances (топ-1 Dragon на старте SS13, Traveler в топ-3) и считает, что у Youga 3 урона больше. В таблице — подробный разбор механик", en: "Ice Lances right from the acts: higher base damage and added-damage effectiveness (a staff with +100 cold gives ~229), built-in +1 Jump. The Chromatic Shot nerf and the Ice Lances shotgun nerf don't affect this build. The author expects 300–600M damage by the T7 Traveler with zero investment, Profound for a few thousand FE. The author played Gemma 2 Tangle Ice Lances for three seasons (top-1 Dragon at SS13 start, Traveler in the top 3) and says Youga 3 has more damage. The spreadsheet breaks down the mechanics in detail" },
      cons: { ru: "Теорикрафт до старта — автор сам пишет, что не все механики могут подтвердиться. Rebound (Magnificent) на Ice Lances работает хуже. Таблица на русском. Последователей (followers) автор не расписывает", en: "Pre-season theorycraft — the author warns not every mechanic may hold up. Rebound (Magnificent) works worse on Ice Lances now. The spreadsheet is in Russian. Followers aren't covered" },
      src: { ru: "видео и таблица Beast_hearth (15.10.2026), видео KakiGaming", en: "Beast_hearth's video and spreadsheet (Oct 15, 2026), KakiGaming's video" },
      links: [
        [{ ru: "Видео Beast_hearth: старт на Youga 3, Ice Lances Tangle (YouTube)", en: "Beast_hearth's video: Youga 3 start, Ice Lances Tangle (YouTube)" }, "https://www.youtube.com/watch?v=CxqnpLDVPT0", "Beast_hearth"],
        [{ ru: "Таблица Beast_hearth: гайд и механики (Google Sheets, на русском)", en: "Beast_hearth's spreadsheet: guide and mechanics (Google Sheets, in Russian)" }, "https://docs.google.com/spreadsheets/d/1HATk_pdoY57KfXoDz4OTGKltMaMiYjcBbVmiRhFfrDQ/edit", "Beast_hearth"],
        [{ ru: "Видео KakiGaming: стартер Youga 3 на ледяных снарядах, позже Psionic Missile (YouTube, на корейском)", en: "KakiGaming's video: Youga 3 ice projectile starter, later Psionic Missile (YouTube, in Korean)" }, "https://www.youtube.com/watch?v=X1gfZKfqafk", "KakiGaming"],
        [{ ru: "Сборка KakiGaming (планер tlicompendium)", en: "KakiGaming's setup (tlicompendium planner)" }, "https://tlicompendium.com/ko/build-planner?code=pxHkN9AtQrGp0-gNAwkVn7S-5ANT3zeV", "KakiGaming"]
      ] },
    { hero: "youga_01", name: "Chain Lightning", skill: "Chain Lightning", tier: "B", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Популярный гайд на minmaxed, три стартовых варианта", en: "Popular minmaxed guide, three starter versions" },
      cons: { ru: "Youga 2/3 сильнее на старте", en: "Youga 2/3 are stronger starters" },
      src: "minmaxed",
      links: [
        [{ ru: "Гайд: Chain Lightning", en: "Guide: Chain Lightning" }, "https://minmaxedarpg.com/guides/youga-1-spacetime-illusion-chain-lightning-vpun6p", "fragmentations"],
        [{ ru: "Гайд: 3 стартовых варианта", en: "Guide: 3 starter versions" }, "https://minmaxedarpg.com/guides/youga-1-starters-4w5cuw", "fragmentations"]
      ] },
    { hero: "youga_01", name: { ru: "Chain Lightning: от 8B до SS20", en: "Chain Lightning: 8B to SS20" }, skill: "Chain Lightning", tier: "B", stage: "end", budget: 3, diff: 3, trend: "",
      pros: { ru: "Продолжение стартового гайда: пошаговые апгрейды по бюджету — 8B, T8 (20B), SS12, SS14, SS16, комфортный фарм Profound (1T), SS18 и SS20 (15T). Для каждого этапа — гир, таланты, плиты, призмы, кисметы. Сюда же переходят с Ice Lances и Chromatic Shot. По словам автора, билд проходит весь эндгейм, есть видео боссов", en: "Follow-up to the starter guide: step-by-step upgrades by budget — 8B, T8 (20B), SS12, SS14, SS16, comfy Profound farming (1T), SS18 and SS20 (15T). Gear, talents, slates, prisms and kismets for each step. Also the swap target from Ice Lances and Chromatic Shot. The author says it clears all endgame content, with boss videos" },
      cons: { ru: "Дорогой: верхние этапы — триллионы. Видео боссов сняты в SS13", en: "Expensive: the top steps cost trillions. Boss videos were recorded in SS13" },
      src: { ru: "гайд Fragmentations (minmaxed, 14.10.2026)", en: "Fragmentations' guide (minmaxed, Oct 14, 2026)" },
      links: [
        [{ ru: "Гайд Fragmentations: Chain Lightning, мид → эндгейм (minmaxed)", en: "Fragmentations' guide: Chain Lightning, mid → endgame (minmaxed)" }, "https://minmaxedarpg.com/guides/youga-1-spacetime-illusions-middle-to-endgame-hhs8em", "fragmentations"]
      ] },
    { hero: "selena_01", name: "Howling Gale", skill: { ru: "Howling Gale, заморозка", en: "Howling Gale, freeze" }, tier: "S", stage: "start", budget: 1, diff: 1, trend: "",
      pros: { ru: "Безопасный и комфортный старт: с 20 уровня автоматизация прямо в наборе умений, замораживающий клир на весь экран", en: "Safe, comfy start: built-in automation from level 20, screen-wide freezing clear" },
      cons: { ru: "Тяжело заходит в Profound, TM 8 придётся фармить дольше, чем другими героями", en: "Struggles to break into Profound; you'll farm TM 8 longer than with other heroes" },
      src: { ru: "R3plic (tlicompendium), гайд ItsAdiar (SS12)", en: "R3plic (tlicompendium), ItsAdiar's guide (SS12)" },
      links: [
        [{ ru: "Гайд ItsAdiar: Howling Gale, стартер (SS12, tlicompendium)", en: "ItsAdiar's guide: Howling Gale starter (SS12, tlicompendium)" }, "https://tlicompendium.com/en/build-guides/itsadiar-selena-howling-gale-league-starter-s12", "ItsAdiar"]
      ] },
    { hero: "selena_01", name: { ru: "Wilting Beam: старт до T8", en: "Wilting Beam: league start to T8" }, skill: { ru: "Wilting Beam (эрозия, DoT, Reap)", en: "Wilting Beam (Erosion DoT, Reap)" }, tier: "S", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "По словам автора, приятнее и быстрее Howling Gale: урон DoT дешевле набрать до T8, комфортный урон на Traveler T7 — 200M. Цель — дойти до T8 и накопить на Scorching Beam (переход без нового персонажа). Две прокачки на выбор: сразу в луч или Howling Gale до скипетров. Разобраны точки апгрейда по актам и тирам, стаки поддержания и Reap, саппорты, уники, таланты Pedigree of Gods и питомцы", en: "The author says it's smoother and faster than Howling Gale: DoT damage is cheaper to build up to T8, comfy damage for the T7 Traveler is 200M. The goal is to reach T8 and farm for Scorching Beam (swap without a new character). Two leveling options: straight into the beam, or Howling Gale until scepters. Covers upgrade points by act and tier, sustain stacks and Reap, supports, uniques, Pedigree of Gods talents and pact spirits" },
      cons: { ru: "В эндгейм не масштабируется (автор пробовал). Control Spell больше не работает на Wilting Beam. Нужно докупить Malevolent Hand и Decaying Blessing", en: "Doesn't scale into endgame (the author tried). Control Spell no longer works on Wilting Beam. You'll need to buy Malevolent Hand and Decaying Blessing" },
      src: { ru: "гайд CrimsonDead (tlicompendium, обновлён 14.10.2026), видео DonTheCrown и Marcus Nordstrom", en: "CrimsonDead's guide (tlicompendium, updated Oct 14, 2026), DonTheCrown's and Marcus Nordstrom's videos" },
      links: [
        [{ ru: "Гайд CrimsonDead: Wilting Beam, стартер (tlicompendium, на русском)", en: "CrimsonDead's guide: Wilting Beam starter (tlicompendium, in Russian)" }, "https://tlicompendium.com/en/build-guides/crimsondead-selena-1-wilting-beam-starter", "CrimsonDead"],
        [{ ru: "Видео DonTheCrown: бюджетный старт Selena на Wilting Beam (YouTube)", en: "DonTheCrown's video: budget F2P Selena start with Wilting Beam (YouTube)" }, "https://www.youtube.com/watch?v=ukjygagwrmo", "DonTheCrown"],
        [{ ru: "Видео Marcus Nordstrom: план Selena 1 — Howling Gale → Wilting Beam (T4–T7) → Scorching Beam (T8+) (YouTube)", en: "Marcus Nordstrom's video: Selena 1 plan — Howling Gale → Wilting Beam (T4–T7) → Scorching Beam (T8+) (YouTube)" }, "https://www.youtube.com/watch?v=ctD1ZOmLsjM", "Marcus Nordstrom"]
      ] },
    { hero: "erika_01", name: "Corrosive Throw", skill: "Corrosive Throw", tier: "S", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Как Thunder Spike от BmLegolas, но с дистанции; билд не понерфили в SS14", en: "Like BmLegolas' Thunder Spike but ranged; the build was not nerfed in SS14" },
      cons: { ru: "Текстовый гайд автор пометил как незаконченный (WIP); полный разбор под SS14 — в его видео", en: "The written guide is marked work-in-progress by its author; the full SS14 breakdown is in the author's video" },
      src: { ru: "Shad0ws, R3plic (tlicompendium)", en: "Shad0ws, R3plic (tlicompendium)" },
      links: [
        [{ ru: "Гайд Shad0ws: Corrosive Throw (tlicompendium)", en: "Shad0ws' guide: Corrosive Throw (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/erika-1-corrosive-throw-ss13", "Shad0ws"],
        [{ ru: "Видео-гайд Shad0ws: Corrosive Throw под SS14 (YouTube)", en: "Shad0ws' video guide: Corrosive Throw for SS14 (YouTube)" }, "https://www.youtube.com/watch?v=TZAC-HcZuNk", "Shad0ws"]
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
      src: { ru: "гайд ShadyBroker (tlicompendium)", en: "ShadyBroker's guide (tlicompendium)" },
      links: [
        [{ ru: "Гайд ShadyBroker: Mind Control, стартер (tlicompendium)", en: "ShadyBroker's guide: Mind Control starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/mind-control-youga-2-league-starter", "ShadyBroker"],
        [{ ru: "Видео ShadyBroker: Mind Control под SS14 — прокачка, после кампании, изменения Tartarus (YouTube)", en: "ShadyBroker's video: Mind Control for SS14 — leveling, post-campaign, Tartarus changes (YouTube)" }, "https://www.youtube.com/watch?v=evySCx9zis4", "ShadyBroker"],
        [{ ru: "Планер ShadyBroker: прокачка и TM1–7 (minmaxed)", en: "ShadyBroker's planner: leveling and TM1–7 (minmaxed)" }, "https://minmaxedarpg.com/guides/youga-2-mind-control-leveling-timemark-1-7-guide-4ac45z", "ShadyBroker"]
      ] },
    { hero: "youga_02", name: "Fallen Star Ignite", skill: { ru: "Fallen Star, поджог (автобомбер)", en: "Fallen Star, Ignite (auto-bomber)" }, tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Сводка по 5 видео Corealis (в SS13 убил босса на SS20): старт, ранние карты и середина игры. Подробно: легендарки с лучшими модами, рарки по слотам, кисметы, pedigree, таблички и питомцы", en: "A summary of Corealis' 5 videos (SS20 boss kill in SS13): league start, early mapping and mid game. Detailed legendaries with best mods, rares per slot, kismets, pedigree, slates and pact spirits" },
      cons: { ru: "Не полный гайд — автор сам отсылает к видео Corealis. На старте Corealis советует Mind Control от ShadyBroker, пока не соберёте скиллы Fallen Star, Activation Medium: Rhythm, Sun's Embrace и Kismet: Volcano (переход примерно после 58 уровня). Таланты и таблица — из SS13", en: "Not a full guide — the author points to Corealis' videos. Corealis recommends ShadyBroker's Mind Control at league start until you collect the Fallen Star skills, Activation Medium: Rhythm, Sun's Embrace and Kismet: Volcano (switch after roughly level 58). Talents and the sheet are from SS13" },
      src: { ru: "HundeKoerper по видео Corealis (tlicompendium, 12.10.2026)", en: "HundeKoerper, based on Corealis' videos (tlicompendium, Oct 12, 2026)" },
      links: [
        [{ ru: "Гайд HundeKoerper: Fallen Star Ignite (tlicompendium)", en: "HundeKoerper's guide: Fallen Star Ignite (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/youga2-fallen-star-ignite", "HundeKoerper"],
        [{ ru: "Видео Corealis: разбор после убийства на SS20 (YouTube)", en: "Corealis' video: post-SS20 deep dive (YouTube)" }, "https://www.youtube.com/watch?v=rX6ST8Zan4U", "Corealis"],
        [{ ru: "Таблица Corealis: таланты Youga 2 (Google Sheets)", en: "Corealis' sheet: Youga 2 talents (Google Sheets)" }, "https://docs.google.com/spreadsheets/d/1U4kyxoi4XxH8xay8IjsjoKXy_YNbz_GF2Xmb6D0gy1Y/edit", "Corealis"]
      ] },
    { hero: "erika_01", name: "Wind Stalker", skill: "Lightning Shot / Thunder Spike", tier: "S", stage: "both", budget: 2, diff: 3, trend: "",
      pros: { ru: "Очень быстрая, не нужно пересобираться к эндгейму. По тесту игрока до старта: с Thunder Jawbone Thunder Spike — быстрый стартер, а Farewell Desire примерно удваивает урон", en: "Very fast, no respec needed for endgame. A pre-season player test: Thunder Spike with Thunder Jawbone is a fast starter, and Farewell Desire roughly doubles damage" },
      cons: { ru: "Хрупкая, частые смерти у новичков. Farewell Desire до старта стоила 90+ FE — цена на живом рынке будет другой", en: "Fragile, frequent deaths for new players. Farewell Desire cost 90+ FE pre-season — live market price will differ" },
      src: { ru: "TreyexGaming, тест игрока на Reddit", en: "TreyexGaming, player test on Reddit" },
      links: [
        [{ ru: "Тесты стартеров игроками (Reddit)", en: "Players' starter tests (Reddit)" }, "https://www.reddit.com/r/TorchlightInfinite/comments/1wlfdhn/early_ss14_league_start_ideas_thread/", "Reddit"],
        [{ ru: "Гайд BmLegolas: Thunder Spike от 1 уровня до эндгейма (tlicompendium)", en: "BmLegolas' guide: Thunder Spike from level 1 to endgame (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/erika1-lvl1-to-ss20-ultimate-guide", "BmLegolas"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"],
        [{ ru: "Видео satu1kaa: Thunder Spike в первый день — прокачка через Spider Tank, дерево, скиллы, шмот, Pedigree (YouTube)", en: "satu1kaa's video: Thunder Spike on day one — Spider Tank leveling, tree, skills, gear, Pedigree (YouTube)" }, "https://www.youtube.com/watch?v=43hFTRuzWe4", "satu1kaa"],
        [{ ru: "Таблица satu1kaa: план Erika 1 на старт (Google Sheets)", en: "satu1kaa's spreadsheet: Erika 1 league start plan (Google Sheets)" }, "https://docs.google.com/spreadsheets/d/1o9lEwtiGqxzp4Fuuw6-0qG6XkpjzhMBnulFvAbVBgIg/edit", "satu1kaa"]
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
    { hero: "gemma_02", name: { ru: "Frost Core / ледяные осколки", en: "Frost Core / Ice Shards" }, skill: "Frost Core, Chromatic Shot (Cold Tangle)", tier: "A", stage: "both", budget: 1, diff: 1, trend: "up",
      pros: { ru: "Контроль заморозкой, «всё T2 — стабильные 200E», нерф freeze в SS14 не задел", en: "Freeze control, \"full T2 gear — stable 200E\", untouched by the SS14 freeze nerf" },
      cons: { ru: "Энтанглмент-версия ослаблена (убран лимит стаков)", en: "Entanglement version weakened (stack cap removed)" },
      src: "minmaxed, Bilibili, 233leyuan",
      links: [
        [{ ru: "Гайд: кампания на Frost Core", en: "Guide: Frost Core campaign" }, "https://minmaxedarpg.com/guides/campaign-gemma-2-frostbitten-heart-frost-core-guide-5ujbsm", "minmaxed"],
        [{ ru: "Гайд: Cold Tangle Chromatic Shot (Tartarus)", en: "Guide: Cold Tangle Chromatic Shot (Tartarus)" }, "https://minmaxedarpg.com/guides/gemma-2-cold-tangle-chromatic-shot-tartarus-u3h9dl", "minmaxed"],
        [{ ru: "Видео: лёгкий и дешёвый старт Gemma 2 на Tangle (YouTube)", en: "Video: easy and cheap Gemma 2 Tangle league start (YouTube)" }, "https://www.youtube.com/watch?v=IjQJswgxxTY", "MinMaxedARPG"]
      ] },
    { hero: "iris_02", name: { ru: "Vigilant Breeze: от кампании до Deep Space", en: "Vigilant Breeze: campaign to Deep Space" }, skill: { ru: "Слияние с Магусом, ульта Магуса (Thunder или Fire Magus на актах)", en: "Merge with a Magus, Magus ultimate (Thunder or Fire Magus for acts)" }, tier: "A", stage: "both", budget: 3, diff: 3, trend: "",
      pros: { ru: "Быстрая, хорошая защита, стабильный урон по боссам. Проверенный путь до Profound и Deep Space: автор гайда был в топе Iris на прогрессии SS13. На актах два варианта: Thunder Magus быстрее, Fire Magus стабильнее", en: "Fast, solid defense, steady boss damage. Proven path to Profound and Deep Space: the guide author was a top Iris on SS13 progression. Two act variants: Thunder Magus is faster, Fire Magus is steadier" },
      cons: { ru: "Дорогие питомцы (Anubis на максимуме примерно удваивает урон), сложная механика Магусов, урон растёт хуже, чем у Rosa и Rehan; ловкость и сила должны быть равны", en: "Expensive pets (maxed Anubis roughly doubles damage), complex Magus mechanics, damage scales worse than Rosa and Rehan; Dexterity and Strength must stay equal" },
      src: { ru: "гайд instinct (SS13)", en: "instinct's guide (SS13)" },
      links: [
        [{ ru: "Гайд instinct: прогрессия Iris 2 (Google Docs)", en: "instinct's guide: Iris 2 progression (Google Docs)" }, "https://docs.google.com/document/d/1ZvE5EIwXpxn1Ta5Zi8qDGuKBDS1TEDlNggbTgI1X6o8/edit", "instinct"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "билд instinct (в игре: Instinct#5138)", en: "instinct's build (in game: Instinct#5138)" }, "eW8BDIGgEfG5tQAAAAAAPg=="]
      ] },
    { hero: "iris_02", name: { ru: "Rock Magus: переход с TM5", en: "Rock Magus: swap from TM5" }, skill: { ru: "Summon Rock Magus, Dirty Tricks (5 видов ailment на миньонах)", en: "Summon Rock Magus, Dirty Tricks (5 ailment types on minions)" }, tier: "A", stage: "both", budget: 2, diff: 3, trend: "",
      pros: { ru: "Качаетесь на огне или молнии, а около TM5, когда можно скрафтить трость с модами T4–T3, переходите на этот билд. Через Dirty Tricks миньоны вешают 5 видов ailment: Trauma, Wilt, Numbed, Scorched и холод. Isomorphic Arms (God of Machine) отдаёт миньонам оружие, поэтому на трости крафтят как можно больше плоского урона. Есть видео и код билда", en: "Level with fire or lightning, then around TM5, once you can craft a cane with T4–T3 mods, swap to this build. Via Dirty Tricks your minions apply 5 ailment types: Trauma, Wilt, Numbed, Scorched and cold. Isomorphic Arms (God of Machine) hands your weapon to the minions, so craft as much flat damage on the cane as possible. Video and build code included" },
      cons: { ru: "Автор не советует играть без питомца. Нужна ветка Machinist (ради мода +10–10 базового урона ailment миньонам) — сама по себе она слабая. Текст гайда короткий, основное — в видео", en: "The author advises against playing it without the pet. Needs the Machinist tree (for +10–10 base ailment damage to minions), which is weak on its own. The written guide is short, the main content is in the video" },
      src: { ru: "гайд и видео Wuxia (tlicompendium, 15.10.2026)", en: "Wuxia's guide and video (tlicompendium, Oct 15, 2026)" },
      links: [
        [{ ru: "Гайд Wuxia: переход на Rock Magus с TM5 (tlicompendium)", en: "Wuxia's guide: Rock Magus swap from TM5 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/timemark5-erosion-magus-swap", "Wuxia"],
        [{ ru: "Видео Wuxia: прокачка и переход (YouTube)", en: "Wuxia's video: leveling and swap (YouTube)" }, "https://www.youtube.com/watch?v=CrIZSM8wOrs", "Wuxia"]
      ],
      codes: [
        [{ ru: "TM5+, Rock Magus (Wuxia)", en: "TM5+, Rock Magus (Wuxia)" }, "VEeq+McCEfGcXAAAAAAAFQ=="]
      ] },
    { hero: "iris_02", name: { ru: "Erosion Magus: от кампании до Profound", en: "Erosion Magus: campaign to Profound" }, skill: "Summon Erosion / Fire / Frost Magus", tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Более автоматическая игра — удобно на телефоне (легче, чем Rock Magus). Этапы: кампания, T7, T8, Profound; до ~1T урона. Автор прошёл с ним SS13 до убийства на SS20", en: "More automated playstyle — great on mobile (easier than Rock Magus). Stages: campaign, T7, T8, Profound; up to ~1T damage. The author took it through SS13 to an SS20 kill" },
      cons: { ru: "Питомец Scale of Original Sin обязателен — сила и ловкость должны быть равны. Магусы теряют здоровье, нужен сильный реген", en: "The Scale of Original Sin pact spirit is a must — Strength and Dexterity must be equal. Magi lose life, so you need strong regen" },
      src: { ru: "гайд SephGoesGaming (tlicompendium, 10.10.2026)", en: "SephGoesGaming's guide (tlicompendium, Oct 10, 2026)" },
      links: [
        [{ ru: "Гайд: Iris 2 Erosion Magus, кампания → Profound (tlicompendium)", en: "Guide: Iris 2 Erosion Magus, campaign → Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/iris2-erosion-magus-campaign-to-profound-s14", "SephGoesGaming"],
        [{ ru: "Видео: сборки на S14 (YouTube)", en: "Video: S14 builds (YouTube)" }, "https://www.youtube.com/watch?v=0hBikw3DX68", "SephGoesGaming"]
      ] },
    { hero: "selena_02", name: { ru: "Frost Terra: старт до раннего Profound", en: "Frost Terra: league start to early Profound" }, skill: { ru: "Frost Terra, Reap (DoT)", en: "Frost Terra, Reap (DoT)" }, tier: "A", stage: "both", budget: 2, diff: 3, trend: "down",
      pros: { ru: "Этапы: кампания, TM5, T7, T8, T8-1, Profound. Приоритеты крафта оружия и брони, порядок легендарок (Restless Glacier → Crimson Gash → …), формула кулдауна Reap и таблица брейкпоинтов, лут-фильтр до T7. Вариант быстрой кампании через паучьи танки Moto (если в сезоне можно перекинуть скиллы)", en: "Stages: campaign, TM5, T7, T8, T8-1, Profound. Weapon and armor crafting priorities, legendary order (Restless Glacier → Crimson Gash → …), a Reap cooldown formula with a breakpoint sheet, loot filter up to T7. A faster campaign option with Moto's Spider Tanks (if skill muling still works this season)" },
      cons: { ru: "Расчёт Reap сделан под питомцев: фиолетовый/синий холодный и Abyssal King Soul 1 уровня. Selena 2 понерфлена в SS14; автор сам пишет, что ещё осваивает героя. Видео прохождения обещано позже", en: "Reap math assumes specific pact spirits: a purple/blue cold one and level-1 Abyssal King Soul. Selena 2 was nerfed in SS14; the author says they're still learning the hero. A run video is promised later" },
      src: { ru: "гайд Crazycaps (tlicompendium, 13.10.2026)", en: "Crazycaps' guide (tlicompendium, Oct 13, 2026)" },
      links: [
        [{ ru: "Гайд Crazycaps: Frost Terra до раннего Profound (tlicompendium)", en: "Crazycaps' guide: Frost Terra to early Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/selena-2-frost-terra-guide-season-starter-till-early-profound", "Crazycaps"]
      ] },
    { hero: "selena_02", name: { ru: "Frost Terra → Tidewell: до SS20 и DA35", en: "Frost Terra → Tidewell: up to SS20 and DA35" }, skill: { ru: "Frost Terra на прокачке, затем Tidewell", en: "Frost Terra for leveling, then Tidewell" }, tier: "B", stage: "both", budget: 3, diff: 3, trend: "down",
      pros: { ru: "Самый полный гайд по Selena 2: 10 сборок от кампании через TM4, Traveler 7, TM8 и Profound до эндгейма 5T+, точных копий SS20 и Divine Ascent 35 и дешёвого Profound. Для каждой ветки трейта — плюсы и минусы, точки перехода на Tidewell. Разработчики говорят, что трейт хорошо масштабируется от Followers", en: "The most complete Selena 2 guide: 10 setups from the campaign through TM4, Traveler 7, TM8 and Profound to 5T+ endgame, exact SS20 and Divine Ascent 35 copies, and a cheap Profound. Pros and cons for every trait branch, when to swap to Tidewell. The devs say the trait scales well with Followers" },
      cons: { ru: "Сборки — прошлого сезона. В SS14 Tidewell ослаблен примерно на 27%, а Dance of the Deep на 1 уровне трейта даёт −20% урона: ранняя прогрессия станет тяжелее. Переход на Tidewell сначала даёт потерю урона, нужно хорошее оружие", en: "Setups are from last season. In SS14 Tidewell is nerfed by ~27% and Dance of the Deep has −20% damage at trait level 1: early progression gets harder. Swapping to Tidewell costs damage at first and needs a good weapon" },
      src: { ru: "гайд Nirtas (tlicompendium, SS13, заметки о SS14 — 14.10.2026)", en: "Nirtas' guide (tlicompendium, SS13, SS14 notes — Oct 14, 2026)" },
      links: [
        [{ ru: "Гайд Nirtas: Selena 2 (tlicompendium)", en: "Nirtas' guide: Selena 2 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/nirtas-selena-guide", "Nirtas"]
      ] },
    { hero: "selena_02", name: "Ground Autowalk", skill: "Thorns Domain / Tidal Spring / Meteor", tier: "A", stage: "both", budget: 1, diff: 1, trend: "down",
      pros: { ru: "Дешёвый «автобег» по картам; Meteor в SS14 бафнут", en: "Cheap auto-walk map clearing; Meteor buffed in SS14" },
      cons: { ru: "Трейт: ground-урон +0–20% → −20–0%, Thorns и Tidal понерфлены", en: "Trait: ground damage +0–20% → −20–0%, Thorns and Tidal nerfed" },
      src: { ru: "патчноут SS14", en: "SS14 patch notes" },
      links: [
        [{ ru: "Гайд DonTheCrown: Frost Terra, стартер (tlicompendium)", en: "DonTheCrown's guide: Frost Terra starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/frost-terra-selena-2-season-starter", "DonTheCrown"],
        [{ ru: "Гайд Allie: стартер Selena 2 (tlicompendium)", en: "Allie's guide: Selena 2 starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/allies-selena-2-s13-starter-guide", "Allie"]
      ] },
    { hero: "sage_01", name: "Licorice Note Elixirs", skill: { ru: "Эликсиры + саммоны", en: "Elixirs + summons" }, tier: "S", stage: "end", budget: 2, diff: 2, trend: "down",
      pros: { ru: "Хорошая защита, саммоны забирают урон", en: "Good defense, summons absorb damage" },
      cons: { ru: "Главная жертва нерфов SS14", en: "Biggest loser of SS14 nerfs" },
      src: { ru: "Bilibili, патчноут SS14", en: "Bilibili, SS14 patch notes" },
      links: [
        [{ ru: "Разбор Sage на SS14 от Neng Miao (Bilibili; документ обещан после блюпоста)", en: "Sage SS14 breakdown by Neng Miao (Bilibili; document promised after the blue post)" }, "https://www.bilibili.com/video/BV1wnpj6VEvG/", "Neng Miao"],
        [{ ru: "Гайд DonTheCrown: Chromatic Shot Sage, стартер (tlicompendium)", en: "DonTheCrown's guide: Chromatic Shot Sage starter (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/chromatic-shot-sage-season-starter", "DonTheCrown"]
      ] },
    { hero: "rosa_02", name: { ru: "Frost Spike: от 1 уровня до Profound", en: "Frost Spike: level 1 to Profound" }, skill: "Frost Spike", tier: "S", stage: "both", budget: 2, diff: 2, trend: "down",
      pros: { ru: "Пошаговая прокачка (уровни 1–55, 56 → Traveler T7), сетапы T8, T8-2 с 75% количества и Profound. Советы: не отставать по уровню, на что тратить Embers (Precious и Matchless — только на вещи T7), какие карты брать с T4, порядок крафта: оружие → кольца с Max Frostbite. Питомцы: Red Umbrella + Azure Gunslinger, третий — под маппинг или боссов", en: "Step-by-step leveling (levels 1–55, 56 → T7 Traveler), setups for T8, T8-2 with 75% quantity and Profound. Tips: don't fall behind in level, where to spend Embers (Precious and Matchless only on T7 items), which map cards to run from T4, crafting order: weapons → Max Frostbite rings. Pact spirits: Red Umbrella + Azure Gunslinger, the third for mapping or bossing" },
      cons: { ru: "Гайд на португальском (последняя заметка продублирована на английском). Profound-комбо не закончено; из-за бага планера оружие в нём показано кинжалами и когтями — на деле нужны мечи", en: "The guide is in Portuguese (the final note is duplicated in English). The Profound combo setup is unfinished; due to a planner bug the weapons show as daggers and claws — you actually need swords" },
      src: { ru: "гайд Lucas (tlicompendium, 13.10.2026)", en: "Lucas' guide (tlicompendium, Oct 13, 2026)" },
      links: [
        [{ ru: "Гайд Lucas: Rosa 2 Frost Spike (tlicompendium, на португальском)", en: "Lucas' guide: Rosa 2 Frost Spike (tlicompendium, in Portuguese)" }, "https://tlicompendium.com/en/build-guides/minha-build-ss14", "Lucas"],
        [{ ru: "Видео Francissss: Frost Spike от кампании до Traveler TM7 (YouTube, на португальском)", en: "Francissss' video: Frost Spike from campaign to Traveler TM7 (YouTube, in Portuguese)" }, "https://youtu.be/40MpTkuOdjo", "Francissss"]
      ] },
    { hero: "rosa_02", name: "Unsullied Blade", skill: "Mana stacking", tier: "S", stage: "end", budget: 3, diff: 3, trend: "down",
      pros: { ru: "Один из самых высоких потолков в игре", en: "One of the highest ceilings in the game" },
      cons: { ru: "Дорогие перчатки из Deep Space, нерф Silver stance", en: "Expensive Deep Space gloves, Silver stance nerfed" },
      src: { ru: "гайды AgroMorph, коды satu1kaa", en: "AgroMorph's guides, satu1kaa's codes" },
      links: [
        [{ ru: "Гайд AgroMorph: прокачка Rosa 2 в кампании (tlicompendium)", en: "AgroMorph's guide: Rosa 2 campaign leveling (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-campaign-leveling", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Spectral Slash, Traveler T7 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T7 Traveler (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-spectral-slash-t7-traveler-setup", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Spectral Slash, T8 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T8 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rosa-2-spectral-slash-t8-1-outlaw-setup", "AgroMorph"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ],
      codes: [
        [{ ru: "~500B после нерфа, без дорогих призм", en: "~500B after the nerf, without pricey prisms" }, "JDx2V4maEfGTbQAAAAADNg=="]
      ] },
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
    { hero: "selena_01", name: "Scorching Beam (Ignite)", skill: "Scorching Beam", tier: "S", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Гайд с фармом Deep Space; satu1kaa рекомендует Selena как стартер. У CrimsonDead (под SS14) — переход из Wilting Beam и этапы до Deep Space: два канвас-саппорта Immolate и Supercharge (взрыв каждые 3 стака), базовый урон поджога на скипетрах, Starfire на Pedigree of Gods, затем Torturer's Touch с Broken Sun Ring и Valerie's Night Stroll", en: "Guide that goes up to Deep Space farming; satu1kaa recommends Selena as a starter. CrimsonDead (for SS14) covers the swap from Wilting Beam and steps to Deep Space: two canvas supports, Immolate and Supercharge (a blast every 3 stacks), base ignite damage on scepters, Starfire on Pedigree of Gods, then Torturer's Touch with Broken Sun Ring and Valerie's Night Stroll" },
      cons: { ru: "Сам себя не фармит — основной гир добывают другим билдом (Wilting Beam). Без мода на базовый урон поджога на скипетрах урона не будет. Гайд Smith — прошлого сезона (05.09.2026)", en: "Can't farm its own gear — get the core items with another build (Wilting Beam). Without base ignite damage on the scepters there's no damage. Smith's guide is from last season (Sep 5, 2026)" },
      src: { ru: "гайды Smith и CrimsonDead (tlicompendium), рекомендация satu1kaa", en: "Smith's and CrimsonDead's guides (tlicompendium), satu1kaa's recommendation" },
      links: [
        [{ ru: "Гайд CrimsonDead: Scorching Beam под SS14 (tlicompendium, на русском)", en: "CrimsonDead's guide: Scorching Beam for SS14 (tlicompendium, in Russian)" }, "https://tlicompendium.com/en/build-guides/crimsondead-selena-1-scorching-beam", "CrimsonDead"],
        [{ ru: "Гайд Smith: Scorching Beam, фарм Deep Space (tlicompendium)", en: "Smith's guide: Scorching Beam, Deep Space farming (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/scorching-ignite-deep-space-mapping", "Smith"],
        [{ ru: "Обзор стартеров SS14 с кодами билдов (YouTube)", en: "SS14 starters overview with build codes (YouTube)" }, "https://www.youtube.com/watch?v=CeWW7KZI9Co", "satu1kaa"]
      ] },
    { hero: "carino_03", name: { ru: "Прокачка → T7 → 8-1 → Profound (AgroMorph)", en: "Leveling → T7 → 8-1 → Profound (AgroMorph)" }, skill: { ru: "Spiders / Lightning Shot на прокачке, Chromatic Shot, затем Blazing Bullet", en: "Spiders / Lightning Shot for leveling, Chromatic Shot, then Blazing Bullet" }, tier: "B", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Пять сборок от одного автора под SS14: прокачка на пауках (и запасной вариант на Lightning Shot, если пауков понерфят), версия только для убийства Traveler T7, Chromatic Shot для комфортного 8-1 и фарма на следующий билд, Blazing Bullet с запасом урона под Profound. Для каждой — гибкие слоты, бюджетные замены дорогих вещей и варианты талантов для Pedigree of Gods", en: "Five setups from one author for SS14: Spider leveling (with a Lightning Shot fallback if spiders get nerfed), a version just for killing the T7 Traveler, Chromatic Shot for a comfy 8-1 and farming toward the next build, and Blazing Bullet with overkill damage for Profound. Each lists flex slots, budget swaps for pricey items and Pedigree of Gods talent options" },
      cons: { ru: "Тексты короткие и на русском — это заметки к сборкам в планере. Для Blazing Bullet обязательна призма Ethereal Prism: Sweeping Fury, а для Death's Touch нужен именно крит-урон", en: "The notes are short and in Russian — annotations to planner setups. Blazing Bullet requires Ethereal Prism: Sweeping Fury, and Death's Touch must roll crit damage" },
      src: { ru: "гайды AgroMorph (tlicompendium, 15.10.2026)", en: "AgroMorph's guides (tlicompendium, Oct 15, 2026)" },
      links: [
        [{ ru: "Прокачка на пауках (tlicompendium)", en: "Spider leveling (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/carino-3-leveling-guide-spiders", "AgroMorph"],
        [{ ru: "Прокачка на Lightning Shot, если пауков понерфят (tlicompendium)", en: "Lightning Shot leveling if spiders get nerfed (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/carino-3-leveling-guide-lightning-shot-if-spiders-nerf", "AgroMorph"],
        [{ ru: "Chromatic Shot: убийство Traveler T7 (tlicompendium)", en: "Chromatic Shot: T7 Traveler kill (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/carino-3-traveler-kill", "AgroMorph"],
        [{ ru: "Chromatic Shot: закрытие 8-1 (tlicompendium)", en: "Chromatic Shot: clearing 8-1 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/carino-3-chromatic-shot-8-1-clear", "AgroMorph"],
        [{ ru: "Blazing Bullet: Profound (tlicompendium)", en: "Blazing Bullet: Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/carino-3-blazing-bullet-profound", "AgroMorph"]
      ] },
    { hero: "bing_02", name: { ru: "Splitting Lightning Bolt: гир до Profound", en: "Splitting Lightning Bolt: gearing to Profound" }, skill: { ru: "Splitting Lightning Bolt (с 14 уровня), подходит любой снарядный скилл", en: "Splitting Lightning Bolt (from level 14), any projectile skill works" }, tier: "A", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Стартер автора на SS14. Список нужных модов для любого снарядного Bing: благословения Focus и Agility, Frail, паралич, Blur, +1 к уровню скилла на плитах. Порядок покупок: 30–100 FE в первый день хватает до T8 (коррапт-версия вещи — до Deep Space), первая покупка за 1000+ FE — для урона и автоматизации. Есть ветки трейта, прокачка и варианты на Blazing Meteor, Fire Burst и Lightning Beam", en: "The author's SS14 starter. A list of mods every projectile Bing needs: Focus and Agility blessings, Frail, Paralysis, Blur, +1 skill level slates. A shopping order: 30–100 FE on day one gets you to T8 (a corrupted version carries you to Deep Space), the first 1000+ FE purchase is for damage and automation. Trait choices, leveling, and Blazing Meteor, Fire Burst and Lightning Beam variants" },
      cons: { ru: "Вещи из сокровищниц кампании все под огонь — для молнии придётся обходиться без них. Гайд — видео и таблица, без пошагового текста", en: "Campaign trove items are all fire-based — the lightning version has to do without them. The guide is a video plus a spreadsheet, no step-by-step text" },
      src: { ru: "видео и таблица CoffeeBns (15.10.2026)", en: "CoffeeBns' video and spreadsheet (Oct 15, 2026)" },
      links: [
        [{ ru: "Видео CoffeeBns: Bing 2, стартер SS14 (YouTube)", en: "CoffeeBns' video: Bing 2 SS14 starter (YouTube)" }, "https://www.youtube.com/watch?v=TNzOALQ-XUQ", "CoffeeBns"],
        [{ ru: "Таблица CoffeeBns: гайды SS14, Bing 2 и коды билдов (Google Sheets)", en: "CoffeeBns' spreadsheet: SS14 guides, Bing 2 and build codes (Google Sheets)" }, "https://docs.google.com/spreadsheets/d/1u0wFwTbKT35XlwHf0D5VDur67d-Nl7SsnQ9C41lqgJk/edit?usp=sharing", "CoffeeBns"],
        [{ ru: "Гайд BmLegolas: вариант на Lightning Beam от 0 до SS20 (tlicompendium, обновлён под SS14)", en: "BmLegolas' guide: Lightning Beam variant from 0 to SS20 (tlicompendium, updated for SS14)" }, "https://tlicompendium.com/en/build-guides/bing2-lightning-beam-0-to-ss20-guide", "BmLegolas"]
      ] },
    { hero: "carino_02", name: "Lethal Flash", skill: { ru: "Проджектайлы, Deflection", en: "Projectiles, Deflection" }, tier: "A", stage: "start", budget: 1, diff: 2, trend: "",
      pros: { ru: "Надёжный и удобный", en: "Reliable and comfortable" },
      cons: { ru: "Медленнее S-стартеров", en: "Slower than S-tier starters" },
      src: "satu1kaa",
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
    { hero: "rehan_02", name: "Seething Silhouette", skill: "Whirlwind / Berserking Blade", tier: "S", stage: "both", budget: 2, diff: 2, trend: "down",
      pros: { ru: "Без штрафа к скорости атаки, быстрый темп", en: "No attack speed penalty, fast pace" },
      cons: { ru: "Нерф ярости, у Whirlwind и Berserking Blade убрана ловкость", en: "Rage nerfed, Dexterity removed from Whirlwind and Berserking Blade" },
      src: { ru: "патчноут SS14", en: "SS14 patch notes" },
      links: [
        [{ ru: "Гайд AgroMorph: Spectral Slash, фарм T8 (tlicompendium)", en: "AgroMorph's guide: Spectral Slash, T8 farming (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan-2-spectral-slash-8-1-any-farm", "AgroMorph"],
        [{ ru: "Гайд AgroMorph: Thunder Spike, прокачка и Traveler T7 (tlicompendium)", en: "AgroMorph's guide: Thunder Spike, leveling and T7 Traveler (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan-2-thunder-spike-leveling-and-t7-traveler-setup", "AgroMorph"]
      ] },
    { hero: "rehan_02", name: { ru: "Frost Spike: от кампании до Profound", en: "Frost Spike: campaign to Profound" }, skill: "Groundshaker → Frost Spike + Spiral Strike", tier: "S", stage: "both", budget: 2, diff: 2, trend: "",
      pros: { ru: "Серия ExileMind: кампания на двух Groundshaker по очереди (из-за Demolition Charge), затем T1–T7 на бюджетном гире с упором на быстрые боссы, затем эндгейм на 200–300B урона для раннего Profound (~5000 FE). Есть видео и коды билдов для обоих этапов", en: "ExileMind's series: campaign alternating two Groundshakers (thanks to Demolition Charge), then T1–T7 on budget gear focused on fast boss kills, then an endgame setup at 200–300B damage for early Profound (~5000 FE). Videos and build codes for both stages" },
      cons: { ru: "Для эндгейма нужно оружие 100 уровня с нужными аффиксами и обязательное кольцо Broken Sun; выживать придётся позиционированием", en: "Endgame needs level-100 weapons with the right affixes and a mandatory Broken Sun ring; survival relies on positioning" },
      src: { ru: "гайды ExileMind (tlicompendium, 12.10.2026)", en: "ExileMind's guides (tlicompendium, Oct 12, 2026)" },
      links: [
        [{ ru: "Гайд ExileMind: Groundshaker, быстрая кампания (tlicompendium)", en: "ExileMind's guide: Groundshaker, fast campaign (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan-2-groundshake-leveling-guide-fast-campaign", "ExileMind"],
        [{ ru: "Гайд ExileMind: Frost Spike, T1–T7 (tlicompendium)", en: "ExileMind's guide: Frost Spike, T1–T7 (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/rehan2-frost-spike-t1-t7-progressing-build", "ExileMind"],
        [{ ru: "Гайд ExileMind: Frost Spike, эндгейм и Profound (tlicompendium)", en: "ExileMind's guide: Frost Spike, endgame and Profound (tlicompendium)" }, "https://tlicompendium.com/en/build-guides/frostspike-rehan-endgame-profound-guide-250b-dps", "ExileMind"],
        [{ ru: "Видео: Frost Spike от T1 до Profound (YouTube)", en: "Video: Frost Spike, T1 to Profound (YouTube)" }, "https://www.youtube.com/watch?v=SXsJggPwNKY", "ExileMind"],
        [{ ru: "Видео: прокачка на Groundshaker (YouTube)", en: "Video: Groundshaker leveling (YouTube)" }, "https://www.youtube.com/watch?v=jB3xpfFnY3g", "ExileMind"]
      ],
      codes: [
        [{ ru: "T1–T7 (ExileMind)", en: "T1–T7 (ExileMind)" }, "zHQTTsZlEfGg0AAAAAAACw=="],
        [{ ru: "эндгейм ~250B (ExileMind)", en: "endgame ~250B (ExileMind)" }, "+QpLvcZlEfGg0AAAAAAACw=="]
      ] },
    { hero: "rehan_02", name: { ru: "Spectral Slash: эндгейм под SS14", en: "Spectral Slash: SS14 endgame" }, skill: "Spectral Slash + Seething Spirit", tier: "S", stage: "end", budget: 2, diff: 2, trend: "",
      pros: { ru: "Гайд на русском: билд AgroMorph, пересобранный под SS14. Разобрано, что поменял патч, трейты по уровням (на 45 — Fury's Onslaught, а не Ritual of Offering), ауры отдельно для карт и боссов, гир, таблички, pedigree и FAQ. Вход в эндгейм ~5000 FE", en: "A Russian-language guide: AgroMorph's build reworked for SS14. Covers the patch changes, traits per level (Fury's Onslaught at 45, not Ritual of Offering), separate auras for mapping and bossing, gear, slates, pedigree and an FAQ. Endgame entry ~5000 FE" },
      cons: { ru: "Мили — надо стоять у босса. Чувствителен к резерву аур и мане: для карт нужен 3% Seal Mana Compensation. Призма из SS13 пропала, пока ставится любая с крит-уроном", en: "Melee — you have to stand next to the boss. Sensitive to aura reservation and mana: mapping needs 3% Seal Mana Compensation. The SS13 prism is gone, any crit-damage prism for now" },
      src: { ru: "гайд Vladislav Shalimov на основе билда AgroMorph (tlicompendium, 12.10.2026)", en: "Vladislav Shalimov's guide based on AgroMorph's build (tlicompendium, Oct 12, 2026)" },
      links: [
        [{ ru: "Гайд: Rehan 2 Spectral Slash, эндгейм SS14 (tlicompendium, на русском)", en: "Guide: Rehan 2 Spectral Slash, SS14 endgame (tlicompendium, in Russian)" }, "https://tlicompendium.com/en/build-guides/rehan-2-spectral-slash-endgame-melee-ss14-tartarus-mapping-bossing", "Vladislav Shalimov"]
      ] }
  ],

  // Каналы авторов гайдов — только для указания авторства (мелкой строкой под гайдом)
  authors: {
    Travic: { youtube: "https://www.youtube.com/@Travic_", twitch: "https://www.twitch.tv/travic" },
    instinct: { twitch: "https://www.twitch.tv/instinct_t" },
    "Адемка": { url: "https://t.me/torchdwg" },
    CoffeeBns: { youtube: "https://www.youtube.com/@CoffeeBns" },
    MinMaxedARPG: { youtube: "https://www.youtube.com/@MinMaxedARPG" },
    SephGoesGaming: { youtube: "https://www.youtube.com/@SephGoesGaming", twitch: "https://www.twitch.tv/sephgoesgaming" },
    satu1kaa: { youtube: "https://www.youtube.com/@satu1kaa", twitch: "https://www.twitch.tv/satu1kaa" },
    DonTheCrown: { youtube: "https://www.youtube.com/@DonTheCrown" },
    Pat404: { youtube: "https://www.youtube.com/@Pat404Games" },
    Little_practice: { youtube: "https://www.youtube.com/@Little_practice232" },
    "Marcus Nordstrom": { youtube: "https://www.youtube.com/@marcusnordstrom9251" },
    VacaAlpha: { youtube: "https://www.youtube.com/@VacaAlpha", twitch: "https://twitch.tv/VacaAlpha" },
    BmLegolas: { youtube: "https://www.youtube.com/@Bmlegolas", twitch: "https://twitch.tv/Bmlegolas" },
    ExileMind: { youtube: "https://www.youtube.com/@Ex1leMind" },
    Corealis: { youtube: "https://www.youtube.com/@Corealis73" },
    Shad0ws: { youtube: "https://www.youtube.com/@oftheShad0w" },
    ManMauzer: { youtube: "https://www.youtube.com/@ManMauzer", twitch: "https://twitch.tv/manmauzer" },
    Crazycaps: { youtube: "https://www.youtube.com/@crazycaps3934", twitch: "https://twitch.tv/crazycaps" },
    Lucas: { twitch: "https://www.twitch.tv/lucasgattii" },
    AgroMorph: { youtube: "https://www.youtube.com/@AgroMorphHighlights", twitch: "https://twitch.tv/agromorph" },
    Wuxia: { youtube: "https://www.youtube.com/@WuxiaTLI" },
    Beast_hearth: { url: "https://www.youtube.com/watch?v=CxqnpLDVPT0" },
    KakiGaming: { url: "https://nextkaki.kr/" },
    CrimsonDead: { youtube: "https://www.youtube.com/@Cr1msonDead", twitch: "https://twitch.tv/cr1msondead" },
    Nirtas: { youtube: "https://www.youtube.com/@Nirtas", twitch: "https://twitch.tv/N1rtas" },
    ShadyBroker: { twitch: "https://www.twitch.tv/shadybroker" },
    Francissss: { youtube: "https://www.youtube.com/@Yfrancissss", twitch: "https://www.twitch.tv/yfrancissss" },
    fragmentations: { url: "https://minmaxedarpg.com/author/fragmentations" },
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
    { type: "down", text: { ru: "Rehan 2 (Seething Silhouette): урон в Berserk +20–44% → +10–34%, Fury's Onslaught 50–78% → 40–68%. Rehan 1 не тронут", en: "Rehan 2 (Seething Silhouette): Berserk damage +20–44% → +10–34%, Fury's Onslaught 50–78% → 40–68%. Rehan 1 unchanged" } },
    { type: "down", text: { ru: "Selena 2 (Dance of the Deep): урон Terra-скиллов +0–20% → −20–0%; Silencing Severance: −30% скорости бега теперь только на 2 с после срабатывания", en: "Selena 2 (Dance of the Deep): Terra skill damage +0–20% → −20–0%; Silencing Severance: −30% movement speed now only for 2 s after it triggers" } },
    { type: "down", text: { ru: "Rosa 2 (Unsullied Blade): бонус стихийного урона 5–9% → 4–8% за врага (кап 50–90% → 40–80%), Born to Cleanse 20–48% → 10–34%", en: "Rosa 2 (Unsullied Blade): elemental damage 5–9% → 4–8% per enemy (cap 50–90% → 40–80%), Born to Cleanse 20–48% → 10–34%" } },
    { type: "down", text: { ru: "Sage (Licorice Note): ослаблены Razor Leaf и Scattered Spore, кап Everlasting Nectar 60–100% → 30–70%", en: "Sage (Licorice Note): Razor Leaf and Scattered Spore weakened, Everlasting Nectar cap 60–100% → 30–70%" } },
    { type: "down", text: { ru: "Thorns Domain, Tidal Spring, Hand of the Abyss, Thunderstorm Zone: урон снижен", en: "Thorns Domain, Tidal Spring, Hand of the Abyss, Thunderstorm Zone: damage reduced" } },
    { type: "down", text: { ru: "Whirlwind / Berserking Blade: ловкость больше не основной атрибут; Arrow Rain: бонус от скорости снаряда ограничен 200%", en: "Whirlwind / Berserking Blade: Dexterity no longer a main attribute; Arrow Rain: projectile speed bonus capped at 200%" } },
    { type: "down", text: { ru: "Freeze-билды: нерф колец на заморозку (Gemma 2 по тестам не задета)", en: "Freeze builds: freeze rings nerfed (Gemma 2 unaffected in tests)" } },
    { type: "new", text: { ru: "Тюрьма Tartarus: 16 камер, заключённые поглощают друг друга и растут, в конце бунт с лутом", en: "Tartarus prison: 16 cells, prisoners devour each other and grow, ending in a loot riot" } },
    { type: "new", text: { ru: "Followers: наёмники из заключённых. Связка «шесть проклятий» через Поэта (цепная молния → паралич → проклятия)", en: "Followers: mercenaries recruited from prisoners. \"Six curses\" combo via the Poet (chain lightning → paralysis → curses)" } },
    { type: "new", text: { ru: "Divine Ascent: 150 этажей, прыжки до 5 этажей, награда Pactspirit перенесена с 35 на 50 этаж", en: "Divine Ascent: 150 floors, skip up to 5 floors, Pactspirit reward moved from floor 35 to 50" } }
  ],

  sources: [
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
    [{ ru: "CoffeeBns — тир-лист Tartarus SS14 (YouTube)", en: "CoffeeBns — Tartarus SS14 tier list (YouTube)" }, "https://www.youtube.com/watch?v=KtqpvLn2ANE"],
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
