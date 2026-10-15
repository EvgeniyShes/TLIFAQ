# TLI FAQ — тир-листы Torchlight: Infinite

Сайт: https://tlifaq.pages.dev (Cloudflare Pages, деплоится сам из ветки `main` за ~1 минуту).

## Файлы

- `template.html` — шаблон главной (вёрстка + скрипт интерактива)
- `render.js` — общая отрисовка и тексты интерфейса RU/EN (`I18N`), работает в браузере и в сборке
- `style.css` — стили всех страниц
- `votes.js` — голоса источников за тиры: `node votes.js` считает итоговые тиры по методике из `SOURCES.md` и показывает расхождения с `data.js`
- `build.js` — сборка: `node build.js` генерирует `index.html` (EN, основная), `ru/`, `hero/`, `sitemap.xml` (для поисковиков — текст есть без JS). **Сгенерированные файлы руками не править.**
- `robots.txt` — правила для поисковых роботов
- `data.js` — все данные: герои, тир-листы, билды, ссылки на гайды, изменения сезона, источники. **Тиры правятся здесь.**
- `img/` — портреты героев (cdn.tlidb.com)
- `functions/api/stats.js` — лайки и уникальные просмотры (Cloudflare Pages Function + база D1, привязка `DB`)
- `functions/api/contact.js` — форма «Сотрудничество и реклама» (кнопка в подвале открывает окно; разметка — `contactBlock` в `build.js`, логика — `contact.js`): Turnstile, лимит 3 сообщения в час с IP, сохранение в D1 (таблица `contacts`) и пересылка в Telegram. Секреты в Cloudflare Pages: `TURNSTILE_SECRET`, `TG_BOT_TOKEN`, `TG_CHAT_ID`; публичный ключ Turnstile — `TURNSTILE_SITEKEY` в `build.js`
- `SOURCES.md` — журнал проверенных источников
- `guide.js` — текст гайда tlicompendium по slug (`node guide.js <slug>`)

## Правила

- Китайский текст на сайте не использовать.
- Любой новый текст в `data.js` — на двух языках: `{ ru: "...", en: "..." }`.
- Время для русской версии — по МСК.
- Ник автора нигде на сайте не светить, давать ссылку только на tlifaq.pages.dev.
- Авторов материалов указываем для защиты от претензий, а не для продвижения: у ссылки на гайд третий элемент — имя автора (`links: [[текст, url, "Автор"]]`), каналы автора (YouTube/Twitch) — один раз в `authors` в `data.js`. Они выводятся мелко под гайдом, в таблице «Гайды по билдам» и в блоке «Используемые материалы авторов». Текст и коды чужих гайдов не копируем — только пересказ и ссылка.

## Как обновлять тир-листы

1. Прочитать `SOURCES.md` — проверять только новые источники и помеченные 🔁. Тир считать по методике взвешивания оттуда же (веса источников, пороги S/A/B/C), расчёт записывать в журнал.
2. Поправить тиры и билды в `data.js`; все 28 трейтов должны быть в обоих тир-листах (иначе `build.js` упадёт).
3. Поменять `season.updatedAt` (ISO, UTC) — по нему сайт показывает дату обновления,
   а хук `~/.claude/hooks/tlifaq-reminder.sh` напоминает об обновлении, если прошло больше 12 часов.
4. Дописать в `SOURCES.md`, что проверено.
   Крупное обновление содержимого (тиры, билды, гайды, источники) — запись в `changelog` в `data.js` (страница `/changelog/`): только английский, кратко, новые сверху. Заметные посетителю улучшения удобства тоже пишем; SEO и мелкую вёрстку — нет.
5. Запустить `node build.js` и закоммитить сгенерированные файлы вместе с `data.js`.

## Как добавлять билды

Формат записи — комментарий над `builds` в `data.js` (поля `hero, name, skill, tier, stage, budget, diff, trend, pros, cons, src, links, codes`). Новый автор — в `authors` (каналы берутся из `creatorInfo` гайда). Перед добавлением — `grep` slug'а по `data.js`, чтобы не задвоить.

Берём только **доделанные и информативные** гайды: текст в нескольких разделах (трейты, скиллы, гир, питомцы) или видео/код билда. Гайд «только планер» (на странице «Start writing…», есть только сборка) и гайды из одного абзаца не берём — пишем в `SOURCES.md`, почему.

### tlicompendium — через API, без браузера

Сайт — SPA (curl отдаёт пустую страницу), но API открыт:

- `https://api.tlicompendium.com/api/buildguides?sortBy=newest&page=1&pageSize=80` — гайды игроков
- `https://api.tlicompendium.com/api/buildguides/creator?sortBy=newest&page=1&pageSize=20` — гайды авторов
- `https://api.tlicompendium.com/api/buildguides/by-slug/<slug>` — полный гайд (в списке текст бывает пустым)

Поля: `title, slug, publishDate, lastEditedDate, patchVersion` (SS14), `userDisplayName`, `creatorInfo` (YouTube/Twitch), `youtubeLink`, `inGameBuildCode`, `cost, damage`, тексты в HTML: `introduction, heroTraitsText, skillsText, talentTreeText, gearText, divinityText, pactspiritsText, statsPriorityText, faqItems`. **Пустые текстовые поля в API ещё не значат пустой гайд**: в новом формате текст лежит в `contentJson` (html-блоки), а сжатый `compressedBuildData` — только сборка (lz-string, без текста автора). Текст гайда: `node guide.js <slug>`, браузер не нужен. `heroId` — UUID; героя и трейт видно по `<title>` страницы гайда в браузере («Erika (Wind Stalker) …») или по названию.
Новости — только в браузере: `https://tlicompendium.com/en/news`.

### Другие площадки

- minmaxed: `https://minmaxedarpg.com/games/tli/seasons/s14` — в браузере, ссылки `/guides/…`.
- Reddit: встроенный браузер его не открывает → Claude in Chrome или RSS `https://www.reddit.com/r/TorchlightInfinite/new/.rss` через `curl` с браузерным User-Agent (при частых запросах 429).
- Автор и название YouTube-видео: `https://www.youtube.com/oembed?url=<ссылка>&format=json`.
- Свежие видео и их описания (ссылки, коды) — `curl` с браузерным User-Agent: поиск `https://www.youtube.com/results?search_query=torchlight+infinite+ss14+build&sp=CAISBAgCEAE%253D` (за сегодня; `ytInitialData` → `videoRenderer`), описание — `ytInitialPlayerResponse.videoDetails.shortDescription` на странице `watch?v=…`. Если YouTube отвечает проверкой «не бот» (так было вечером 15.10), описание берётся из встроенного браузера на youtube.com: `fetch('/youtubei/v1/next', {method:'POST', body: JSON.stringify({context: ytcfg.get('INNERTUBE_CONTEXT'), videoId})})` → `videoSecondaryInfoRenderer.attributedDescription.content`, полные ссылки — в `urlEndpoint.url` (параметр `q`). Тир-лист из видео: в браузере перемотать к концу, нарисовать кадр `<video>` на canvas поверх страницы и увеличить нужный кусок.
- Google Docs/Sheets: `…/export?format=txt`, `…/export?format=csv&gid=<лист>`; список листов — в `…/htmlview`.

## Открытые задачи

- [x] Google Search Console подключён (тег в `VERIFY` в build.js), sitemap отправлен.
- [ ] Яндекс Вебмастер — ждём код `yandex-verification` от владельца (у Яндекса были техработы), добавить в `VERIFY` в build.js.

- [x] Ссылка на чаевые (CloudTips) — скромная текстовая, рядом с «Нравится».
- [ ] После первой недели SS14 (старт 16.10.2026) — обновить тиры по реальным данным.
