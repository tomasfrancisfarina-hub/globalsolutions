import type { Locale } from "@/types/locale";
import { toDossierLocale } from "@/dominicana-dossier/copy";

const COPY = {
  es: {
    title: "Captura no permitida",
    body: "Este dossier es confidencial. Las capturas de pantalla no están permitidas.",
  },
  en: {
    title: "Capture not allowed",
    body: "This dossier is confidential. Screenshots are not permitted.",
  },
} as const;

const RESPONSIVE_CSS = `
<style id="dossier-responsive">
html,body{max-width:100%;overflow-x:hidden}
.page:not(.hero){overflow:visible;overflow-x:hidden}
img,video{max-width:100%}
.btn,.hero-play,.professional-links a{min-height:44px}
.hero-play{z-index:4;touch-action:manipulation}
@media(max-width:850px){
  h1{font-size:clamp(28px,8.4vw,48px)!important;max-width:100%}
  h2{font-size:clamp(24px,6.6vw,40px)!important}
  .sub,.lead,.founder-copy{font-size:clamp(17px,4.3vw,22px)!important}
  .page{padding:12vw 5vw}
  .hero.page{
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:flex-start;
    padding:148px 5vw 48px;
    min-height:100svh;
    overflow:visible;
  }
  .hero .section{display:contents}
  .hero .kicker{
    order:1;
    position:relative;
    z-index:5;
    display:block;
    max-width:100%;
    margin:8px 0 18px;
    padding-bottom:12px;
    white-space:normal;
    overflow-wrap:break-word;
    line-height:1.55;
    letter-spacing:.14em;
  }
  .hero-play{
    order:2;
    position:relative!important;
    z-index:4;
    top:auto!important;
    left:auto!important;
    right:auto!important;
    bottom:auto!important;
    transform:none!important;
    align-self:flex-start;
    margin:4px 0 24px;
  }
  .hero h1,.hero .sub,.hero .hero-summary,.hero .hero-actions{position:relative;z-index:4}
  .hero h1{order:3}
  .hero .sub{order:4}
  .hero .hero-summary{order:5}
  .hero .hero-actions{order:6}
  .gain-banner{flex-wrap:wrap}
  .gain-banner b{white-space:normal;font-size:clamp(22px,7vw,36px);line-height:1.1}
  .brand{left:auto!important;right:12px!important;max-width:min(240px,70vw)!important;width:min(240px,70vw)!important;height:auto!important;max-height:96px;object-fit:contain}
  .hero-actions{flex-direction:column;align-items:stretch}
  .hero-actions .btn{width:100%}
  .founder-name{font-size:clamp(28px,9vw,52px)!important}
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

export function applyScreenshotGuard(html: string, locale: Locale): string {
  const copy = COPY[toDossierLocale(locale)];
  const block = `
${RESPONSIVE_CSS}
<style id="dossier-capture-guard">
  .dossier-capture-veil{position:fixed;inset:0;z-index:2147483646;display:none;align-items:center;justify-content:center;padding:32px;background:#071b1d;color:#f3efe8;text-align:center;pointer-events:auto}
  html.is-capture-blocked .dossier-capture-veil{display:flex}
  .dossier-capture-veil h2{font:400 28px/1.15 Georgia,serif;margin:0 0 12px}
  .dossier-capture-veil p{margin:0;max-width:420px;color:#cbd3d0;font:16px/1.5 Arial,Helvetica,sans-serif}
</style>
<div class="dossier-capture-veil" hidden aria-live="assertive">
  <div>
    <h2>${copy.title}</h2>
    <p>${copy.body}</p>
  </div>
</div>
<script>
(function(){
  var root=document.documentElement;
  var veil=document.querySelector(".dossier-capture-veil");
  var timer=null;
  function isDesktop(){
    return window.matchMedia("(hover:hover) and (pointer:fine)").matches
      && !window.matchMedia("(pointer:coarse)").matches;
  }
  function hideVeil(){
    root.classList.remove("is-capture-blocked");
    if(veil)veil.hidden=true;
    if(timer){clearTimeout(timer);timer=null}
  }
  function showVeil(){
    if(!isDesktop()||!veil)return;
    root.classList.add("is-capture-blocked");
    veil.hidden=false;
    if(timer)clearTimeout(timer);
    timer=setTimeout(hideVeil,1800);
  }
  if(veil){
    veil.addEventListener("click",hideVeil);
  }
  window.addEventListener("keyup",function(e){
    if(!isDesktop())return;
    if(e.key==="PrintScreen"||e.keyCode===44)showVeil();
  });
})();
</script>`;

  if (html.includes("</body>")) {
    return html.replace("</body>", `${block}\n</body>`);
  }
  return html + block;
}
