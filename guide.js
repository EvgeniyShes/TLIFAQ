// Текст гайда tlicompendium без браузера: node guide.js <slug>
// Новый формат хранит текст в contentJson (html-блоки), старый — в полях introduction/skillsText/...
const slug = process.argv[2];
if (!slug) { console.log("node guide.js <slug>"); process.exit(1); }
const strip = s => s.replace(/<\/(p|h\d|li|div)>|<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n\s*\n+/g, "\n").trim();

fetch("https://api.tlicompendium.com/api/buildguides/by-slug/" + slug).then(r => r.json()).then(g => {
  const c = g.creatorInfo || {};
  console.log(`${g.title} | ${g.userDisplayName} | ${g.patchVersion} | ${String(g.publishDate).slice(0, 10)} → ${String(g.lastEditedDate).slice(0, 10)} | ${g.language}`);
  console.log([c.youtubeUrl, c.twitchUrl, g.youtubeLink, g.inGameBuildCode].filter(Boolean).join(" | "));
  const out = [];
  for (const k of ["introduction", "heroTraitsText", "skillsText", "talentTreeText", "gearText", "divinityText", "pactspiritsText", "statsPriorityText"])
    if (g[k]) out.push(`[${k}] ` + strip(g[k]));
  let cj = g.contentJson;
  if (cj) {
    if (typeof cj === "string") cj = JSON.parse(cj);
    (function walk(o) {
      if (Array.isArray(o)) o.forEach(walk);
      else if (o && typeof o === "object") Object.values(o).forEach(walk);
      else if (typeof o === "string" && /<\w/.test(o)) { const t = strip(o); if (t) out.push(t); }
    })(cj);
  }
  console.log("---\n" + (out.join("\n") || "(текста нет — гайд «только планер»)"));
});
