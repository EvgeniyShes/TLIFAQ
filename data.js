// Данные сайта. Правь здесь — страница перерисуется сама.
// trend: "up" — бафф/новинка в SS14, "down" — нерф в SS14, "" — без изменений.
window.DATA = {
  season: {
    code: "SS14",
    name: "Tartarus",
    start: "2026-10-16T02:00:00Z", // 05:00 МСК
    startRu: "16 октября, 05:00 МСК",
    updated: "13.10.2026",
    note: "Сезон ещё не стартовал: оценки — сводный прогноз по итогам SS13 и патчноутам SS14. Обновим после первой недели сезона."
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
      title: "Старт сезона",
      hint: "Кампания и ранний Netherrealm без шмота, бюджет, скорость прогресса",
      rows: {
        S: [
          ["youga_02", "", "Бюджетный убийца боссов, DoT от Twisted Spacetime"],
          ["erika_01", "", "Самый быстрый фарм валюты на старте; хрупкая"],
          ["youga_03", "up", "Новый трейт SS14: на Bilibili — «с нуля до U8», «K8 за день»"],
          ["thea_03",  "", "Erosion-урон, сильна в начале и середине"]
        ],
        A: [
          ["gemma_02",  "up", "Заморозка упрощает старт; нерф freeze её не задел"],
          ["selena_02", "down", "Была S в SS13; ground-скиллы −20% и нерф Thorns/Tidal"],
          ["iris_01",   "", "Саммонер, доводит до T8, хорош для фарма Flame Elementium"],
          ["iris_02",   "", "Стабильный и удобный"],
          ["carino_02", "", "Надёжный проджектайл-стартер"]
        ],
        B: [
          ["sage_01",  "down", "«Главная жертва» блюпоста SS14: нерф эликсиров и саммонов"],
          ["moto_02",  "down", "Самоподрыв войск; задет нерфами SS14"],
          ["rehan_02", "down", "Бонус ярости урезан: 20–44% → 10–34%"],
          ["bing_01",  "", "Раскрывается после вложений в шмот"],
          ["gemma_03", "", "Нужны вложения"],
          ["rosa_01",  "", "Быстро валит боссов, но требует скилла"]
        ],
        C: [
          ["rosa_02",   "down", "Не для старта: нужны редкие перчатки из Deep Space"],
          ["gemma_01",  "", "Много деталей, собирается долго"],
          ["youga_01",  "", "Играбельно, но Youga 2/3 делают то же лучше"],
          ["moto_01",   "", "Слабее Moto 2"],
          ["carino_01", "", "Слабее Carino 2"]
        ]
      }
    },
    endgame: {
      title: "Эндгейм",
      hint: "Частота в топах Divine Ascent и Supreme Showdown, фарм и урон по боссам",
      rows: {
        S: [
          ["bing_01",  "", "Blast Nova: связки бомб, топ фарм"],
          ["iris_02",  "", "Vigilant Breeze: стабильный урон по боссам"],
          ["gemma_02", "up", "Frostbitten Heart: единственный freeze, не задетый нерфом"]
        ],
        A: [
          ["rosa_02",  "down", "Был S; бонус Silver stance урезан 20–48% → 10–34%"],
          ["sage_01",  "down", "Был S; нерф эликсиров (100–180% → 30–70%)"],
          ["youga_03", "up", "Новинка: потолок ещё неизвестен, хайп у стримеров"],
          ["erika_01", "", "Не нужно пересобираться к эндгейму"],
          ["erika_03", "", "Vendetta's Sting"],
          ["bing_02",  "", "Creative Genius: спеллбёрсты"]
        ],
        B: [
          ["selena_02", "down", "Отлично чистила карты, но нерф ground-скиллов"],
          ["rehan_02",  "down", "Нерф ярости"],
          ["moto_02",   "down", "Нерф в блюпосте SS14"],
          ["thea_03",   "", "Сильна до мид-гейма, потолок ниже"],
          ["youga_02",  "", "Стартер, в эндгейме уступает"]
        ],
        C: [
          ["thea_02", "", "Хуже всех в Divine Ascent по данным SS13"]
        ]
      }
    }
  },

  // Билды. stage: start | end | both; budget: 1–3; diff: 1–3
  builds: [
    { hero: "youga_03", name: "Охотничьи клыки", skill: "Spell Tangle + Clockwork Core", tier: "S", stage: "both", budget: 2, diff: 2, trend: "up",
      pros: "Автокаст заклинаний, крит сокращает кулдауны; по словам автора — с нуля до U8", cons: "Новый трейт, цифры не проверены на живом сезоне", src: "Bilibili" },
    { hero: "youga_03", name: "Династия", skill: "Spacetime Dictator, снаряды", tier: "S", stage: "start", budget: 1, diff: 2, trend: "up",
      pros: "«K8 за день», снаряды пробивают и возвращаются от стен, 70% урона по тебе откладывается", cons: "Облачный билд до старта сезона", src: "Bilibili" },
    { hero: "youga_02", name: "Spacetime Elapse DoT", skill: "Mind Control + Channeled Depths", tier: "S", stage: "start", budget: 1, diff: 1, trend: "",
      pros: "Дешёвый, сильный по боссам, +2 стака канала", cons: "Позже съедает слот саппорта", src: "IGGM, musabots" },
    { hero: "erika_01", name: "Wind Stalker", skill: "Lightning Shot", tier: "S", stage: "both", budget: 2, diff: 3, trend: "",
      pros: "Очень быстрая, не нужно пересобираться к эндгейму", cons: "Хрупкая, частые смерти у новичков", src: "IGGM, musabots, TreyexGaming" },
    { hero: "thea_03", name: "Blasphemer Erosion", skill: "Haunting Abomination / Mind Control", tier: "S", stage: "start", budget: 1, diff: 2, trend: "",
      pros: "Топ в начале и середине сезона", cons: "Erosion и Ruinous Star понерфлены ещё в SS13, потолок ниже", src: "IGGM, musabots" },
    { hero: "gemma_02", name: "Frost Core / ледяные осколки", skill: "Frost Core, Chromatic Shot (Cold Tangle)", tier: "S", stage: "both", budget: 1, diff: 1, trend: "up",
      pros: "Контроль заморозкой, «всё T2 — стабильные 200E», нерф freeze в SS14 не задел", cons: "Энтанглмент-версия ослаблена (убран лимит стаков)", src: "minmaxed, Bilibili, 233leyuan" },
    { hero: "bing_01", name: "Blast Nova", skill: "Бомбы-проджектайлы", tier: "S", stage: "end", budget: 3, diff: 2, trend: "",
      pros: "Несколько бомб за каст, топ фарма", cons: "Нужны вложения, на старте средне", src: "musabots, IGGM" },
    { hero: "iris_02", name: "Vigilant Breeze", skill: "Spirit Magus", tier: "S", stage: "end", budget: 2, diff: 2, trend: "",
      pros: "Стабильный урон по боссам", cons: "—", src: "musabots" },
    { hero: "iris_01", name: "Growing Breeze Summoner", skill: "Spirit Magi", tier: "A", stage: "start", budget: 1, diff: 1, trend: "",
      pros: "Дотягивает до T8, хорош для фарма Flame Elementium", cons: "Не самый быстрый", src: "IGGM" },
    { hero: "selena_02", name: "Ground Autowalk", skill: "Thorns Domain / Tidal Spring / Meteor", tier: "A", stage: "both", budget: 1, diff: 1, trend: "down",
      pros: "Дешёвый «автобег» по картам; Meteor в SS14 бафнут", cons: "Трейт: ground-урон +0–20% → −20–0%, Thorns и Tidal понерфлены", src: "IGGM, патчноут SS14" },
    { hero: "sage_01", name: "Licorice Note Elixirs", skill: "Эликсиры + саммоны", tier: "A", stage: "end", budget: 2, diff: 2, trend: "down",
      pros: "Хорошая защита, саммоны забирают урон", cons: "Главная жертва нерфов SS14", src: "musabots, Bilibili, патчноут SS14" },
    { hero: "rosa_02", name: "Unsullied Blade", skill: "Mana stacking", tier: "A", stage: "end", budget: 3, diff: 3, trend: "down",
      pros: "Один из самых высоких потолков в игре", cons: "Дорогие перчатки из Deep Space, нерф Silver stance", src: "musabots, IGGM" },
    { hero: "bing_02", name: "Creative Genius Spellburst", skill: "Spell Burst", tier: "A", stage: "end", budget: 3, diff: 2, trend: "",
      pros: "Синергия спеллбёрста и питомцев", cons: "Шмот дорожает из-за популярности", src: "ProGameGuides, musabots" },
    { hero: "carino_02", name: "Lethal Flash", skill: "Проджектайлы, Deflection", tier: "A", stage: "start", budget: 1, diff: 2, trend: "",
      pros: "Надёжный и удобный", cons: "Медленнее S-стартеров", src: "musabots" },
    { hero: "moto_02", name: "Самоподрыв двух генералов", skill: "Synthetic Troop, самоподрыв", tier: "B", stage: "start", budget: 1, diff: 1, trend: "down",
      pros: "Импорт кода билда, «пятиугольный боец»", cons: "Задет нерфами SS14", src: "233leyuan, Bilibili" },
    { hero: "moto_01", name: "Паучий танк без затрат", skill: "Synthetic Troop", tier: "C", stage: "start", budget: 1, diff: 1, trend: "",
      pros: "Почти бесплатный", cons: "Слабее Moto 2", src: "233leyuan" },
    { hero: "rehan_02", name: "Seething Silhouette", skill: "Whirlwind / Berserking Blade", tier: "B", stage: "both", budget: 2, diff: 2, trend: "down",
      pros: "Без штрафа к скорости атаки, быстрый темп", cons: "Нерф ярости, у Whirlwind и Berserking Blade убрана ловкость", src: "IGGM, патчноут SS14" },
    { hero: "gemma_01", name: "Ice-Fire Fusion", skill: "Скиллы + шмот + таланты", tier: "C", stage: "end", budget: 3, diff: 3, trend: "",
      pros: "Силён в полной сборке", cons: "Долго и сложно собирается", src: "IGGM" }
  ],

  // Изменения SS14
  changes: [
    { type: "up",   text: "Youga 3 «The Ultimate One»: новый трейт. Заклинания на Clockwork Core кастуются сами, крит сокращает кулдауны, ветки Dictator / Conqueror / Overlord" },
    { type: "up",   text: "Meteor: базовый урон 332–616 → 465–863" },
    { type: "up",   text: "Electric Overload: бонус молнии 15% → 16%" },
    { type: "down", text: "Rehan: бонус ярости 20–44% → 10–34%, Berserk 50–78% → 40–68%" },
    { type: "down", text: "Selena: ground-урон трейта +0–20% → −20–0%; второй трейт даёт −30% скорости бега" },
    { type: "down", text: "Rosa: бонусы стихий 5–9% → 4–8% (кап 50–90% → 40–80%), Silver stance 20–48% → 10–34%" },
    { type: "down", text: "Sage: ослаблены листья и споры, эффект эликсиров 100–180% → 30–70%" },
    { type: "down", text: "Thorns Domain, Tidal Spring, Hand of the Abyss, Thunderstorm Zone: урон снижен" },
    { type: "down", text: "Whirlwind / Berserking Blade: ловкость больше не основной атрибут; Arrow Rain: бонус от скорости снаряда ограничен 200%" },
    { type: "down", text: "Freeze-билды: нерф колец на заморозку (Gemma 2 по тестам не задета)" },
    { type: "new",  text: "Тюрьма Tartarus: 16 камер, заключённые поглощают друг друга и растут, в конце бунт с лутом" },
    { type: "new",  text: "Followers: наёмники из заключённых. Связка «шесть проклятий» через Поэта (цепная молния → паралич → проклятия)" },
    { type: "new",  text: "Divine Ascent: 150 этажей, прыжки до 5 этажей, награда Pactspirit перенесена с 35 на 50 этаж" }
  ],

  sources: [
    ["musabots — SS14 Tier List (11.10.2026)", "https://musabots.com/blog/torchlight-infinite-tier-list"],
    ["IGGM — SS13 Starter Tier List", "https://www.iggm.com/news/torchlight-infinite-ss13-afterlight-starter-build-tier-list-for-fast-leveling"],
    ["Официальный патчноут SS14", "https://torchlight.xd.com/ss14pn/"],
    ["PCGamesN — Tartarus season", "https://www.pcgamesn.com/torchlight-infinite/update-tartarus-season"],
    ["17173 — превью SS14, наёмники и шесть проклятий", "https://news.17173.com/content/10112026/143712170.shtml"],
    ["Bilibili — превью S14, Youga 3", "https://www.bilibili.com/video/BV1eWph6qEfM/"],
    ["233leyuan — билды SS13", "https://www.233leyuan.com/post-detail/2077457185859616768"],
    ["minmaxed — гайды S14", "https://minmaxedarpg.com/games/tli/seasons/s14"],
    ["tlidb — база героев (портреты)", "https://tlidb.com/en/Hero"]
  ]
};
