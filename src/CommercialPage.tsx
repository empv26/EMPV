import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Languages } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { SiteLang } from "./detailContent";
import { commercialCopy, type CommercialSlug } from "./commercialContent";
import { siteHref } from "./seo";
import SiteFooter from "./SiteFooter";
export default function CommercialPage({lang,slug}:{lang:SiteLang;slug:CommercialSlug}) {
 const c=commercialCopy[lang][slug], reduced=useReducedMotion();
 const other:SiteLang=lang==="it"?"en":"it";
 const home=siteHref({kind:"home",lang});
 const process=siteHref({kind:"processPage",lang});
 const email="mailto:hello@empv.it?subject="+encodeURIComponent(lang==="it"?"EMPV — Richiesta consulenza":"EMPV — Consultation request");
 useEffect(()=>{document.documentElement.lang=lang;window.scrollTo({top:0,behavior:"auto"});},[lang,slug]);
 return <div className="detail-shell services-page">
  <header className="topbar detail-topbar">
   <a className="wordmark" href={home} aria-label="EMPV home">EMPV</a>
   <a className="detail-nav-back" href={siteHref({kind:"servicesPage",lang})}><ArrowLeft size={15}/>{lang==="it"?"Cosa facciamo":"What we do"}</a>
   <a className="lang-switch" href={siteHref({kind:"commercial",lang:other,slug})} hrefLang={other}><Languages size={15}/>{other.toUpperCase()}</a>
  </header>
  <main>
   <section className="notes-index-hero"><motion.div className="notes-index-hero-inner" initial={reduced?false:{opacity:0,y:22}} animate={{opacity:1,y:0}}>
    <div className="eyebrow">EMPV / {slug==="software"?"SOFTWARE":"LOCAL AI"}</div><h1>{c.title}</h1><p>{c.intro}</p>
   </motion.div></section>
   <section className="detail-blocks section-pad">
    {c.sections.map((section,i)=><article className="detail-block" key={section.title}>
     <div className="eyebrow">0{i+1}</div><div className="detail-block-main"><h2>{section.title}</h2><p>{section.text}</p></div>
    </article>)}
   </section>
   <section className="process-related section-pad"><div className="process-related-list">
    <a className="process-related-item" href={process}><span><strong>{c.related}</strong></span><ArrowUpRight size={20}/></a>
   </div></section>
   <section className="process-contact section-pad"><div className="process-contact-main">
    <h2>{c.cta}</h2><div className="process-contact-actions">
     <a href={email} data-contact-placement="commercial_page">{lang==="it"?"Scrivici":"Email us"}<ArrowUpRight size={17}/></a>
     <a href="https://wa.me/393792438705" data-contact-placement="commercial_page">WhatsApp<ArrowUpRight size={17}/></a>
    </div></div></section>
  </main><SiteFooter lang={lang}/>
 </div>;
}
