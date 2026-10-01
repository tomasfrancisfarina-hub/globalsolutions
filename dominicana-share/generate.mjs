import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const sourceRoot = join(root, "..", "dominicana-dossier");
const contentOut = join(root, "content");

const RESPONSIVE = `
<meta name="robots" content="noindex,nofollow,noarchive">
<meta name="referrer" content="no-referrer">
<style id="share-responsive">
html,body{max-width:100%;overflow-x:hidden}
.page:not(.hero){overflow:visible;overflow-x:hidden}
img,video{max-width:100%}
.btn,.hero-play,.professional-links a{min-height:44px}
.hero-play{z-index:4;touch-action:manipulation}
@media(max-width:850px){
  h1{font-size:clamp(28px,8.4vw,48px)!important;max-width:100%}
  h2{font-size:clamp(24px,6.6vw,40px)!important}
  .sub,.lead,.closing-copy{font-size:clamp(17px,4.3vw,22px)!important}
  .page{padding:12vw 5vw}
  .hero.page{
    display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;
    padding:148px 5vw 48px;min-height:100svh;overflow:visible
  }
  .hero .section{display:contents}
  .hero .kicker{order:1;position:relative;z-index:5;display:block;max-width:100%;margin:8px 0 18px;padding-bottom:12px;white-space:normal;overflow-wrap:break-word;line-height:1.55;letter-spacing:.14em}
  .hero-play{order:2;position:relative!important;z-index:4;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;transform:none!important;align-self:flex-start;margin:4px 0 24px}
  .hero h1,.hero .sub,.hero .hero-summary,.hero .hero-actions{position:relative;z-index:4}
  .hero h1{order:3}.hero .sub{order:4}.hero .hero-summary{order:5}.hero .hero-actions{order:6}
  .gain-banner{flex-wrap:wrap}
  .gain-banner b{white-space:normal;font-size:clamp(22px,7vw,36px);line-height:1.1}
  .brand{left:auto!important;right:12px!important;max-width:min(240px,70vw)!important;width:min(240px,70vw)!important;height:auto!important;max-height:96px;object-fit:contain}
  .hero-actions{flex-direction:column;align-items:stretch}
  .hero-actions .btn{width:100%}
  .money-card .number,.term .number{font-size:clamp(26px,8vw,43px)}
  .formula{align-items:flex-start}
  .money-flow,.terms,.metric-grid,.return-flow,.calc-grid,.nda-grid,.split,.valuation{grid-template-columns:1fr!important}
}
@media(max-width:430px){
  .page{padding:88px 16px 48px}
  .hero.page{padding:148px 16px 40px}
  .card,.calc-card,.security-panel{padding:22px}
  .hero-play{padding:12px 16px}
  .brand{width:min(188px,62vw)!important;right:12px!important;left:auto!important}
}
@media(max-width:360px){
  h1{font-size:clamp(24px,8vw,34px)!important}
  .hero-topbar{height:84px}
  .hero-video,.hero:after{top:84px;height:calc(100% - 84px)}
  .hero.page{padding:124px 16px 36px}
  .hero .kicker{letter-spacing:.12em}
}
</style>`;

const COPY = {
  es: {
    title: "Oportunidad hotelera en Samaná — dossier informativo",
    description:
      "Dossier informativo de una oportunidad hotelera en Samaná, República Dominicana.",
    closing:
      "Para solicitar más información, contacte con la persona que le compartió este dossier.",
    notice:
      "Este documento tiene carácter exclusivamente informativo y no constituye una oferta pública, recomendación de inversión ni asesoramiento financiero o legal. Las cifras, valoraciones y proyecciones deberán verificarse mediante documentación independiente antes de adoptar cualquier decisión.",
  },
  en: {
    title: "Hotel opportunity in Samaná — information dossier",
    description: "Information dossier for a hotel opportunity in Samaná, Dominican Republic.",
    closing:
      "To request more information, please contact the person who shared this dossier with you.",
    notice:
      "This document is provided for information purposes only and does not constitute a public offering, investment recommendation, or financial or legal advice. All figures, valuations and projections must be verified through independent documentation before any decision is made.",
  },
};

function closingHtml(locale) {
  const copy = COPY[locale];
  return `
    <section class="page band">
    <div class="section reveal">
      <img class="footer-logo" src="/api/dominicana-share/assets/images/brand.webp" alt="Global Solutions Worldwide" srcset="/api/dominicana-share/assets/images/brand-w800.webp 800w, /api/dominicana-share/assets/images/brand.webp 1260w" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 900px" loading="lazy" decoding="async">
      <p class="closing-copy">${copy.closing}</p>
      <p class="notice" style="color:#9fb0ac;border-color:rgba(255,255,255,.14)">${copy.notice}</p>
    </div>
  </section>`;
}

function transform(locale) {
  const copy = COPY[locale];
  let html = readFileSync(join(sourceRoot, "content", `${locale}.html`), "utf8");
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${copy.title}</title>
  <meta name="description" content="${copy.description}">
  <meta property="og:title" content="${copy.title}">
  <meta property="og:description" content="${copy.description}">
  <meta property="og:type" content="website">`,
  );
  html = html.replace(/<meta name="robots"[^>]*>/, RESPONSIVE.trim());
  html = html.replace(/\/api\/dominicana-dossier\/assets\//g, "/api/dominicana-share/assets/");
  html = html.replace(
    /\s*<section class="page band">\s*<div class="section founder-close[\s\S]*?<\/section>/,
    closingHtml(locale),
  );
  html = html.replace(/founder-copy/g, "closing-copy");
  return html;
}

const BLOCKED = [
  "Tomás",
  "Tomas F",
  "Fariña",
  "Farina",
  "41265629",
  "wa.me",
  "founder.webp",
  "mailto:",
  "tel:+49",
  "WhatsApp",
  "tomasfrancisfarina",
  "CEO &amp; Marketing Director",
];

mkdirSync(contentOut, { recursive: true });

for (const locale of ["es", "en"]) {
  const html = transform(locale);
  const hits = BLOCKED.filter((needle) => html.toLowerCase().includes(needle.toLowerCase()));
  if (hits.length) {
    throw new Error(`Share HTML (${locale}) still contains: ${hits.join(", ")}`);
  }
  if (!html.includes("/api/dominicana-share/assets/")) {
    throw new Error(`Share HTML (${locale}) is missing public asset prefix`);
  }
  writeFileSync(join(contentOut, `${locale}.html`), html);
}

console.log("Generated public Samaná dossier HTML.");
