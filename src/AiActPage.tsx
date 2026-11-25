import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Languages } from "lucide-react";
import type { SiteLang } from "./detailContent";
import { aiActContent } from "./aiActContent";
import { siteHref } from "./seo";
import SiteFooter from "./SiteFooter";

export default function AiActPage({ lang }: { lang: SiteLang }) {
  const c = aiActContent[lang];
  const otherLang = lang === "it" ? "en" : "it";
  const servicesHref = siteHref({ kind: "servicesPage", lang }) + "#consulenza-ai-act";
  const email = "mailto:hello@empv.it?subject=" + encodeURIComponent("EMPV — AI Act");
  useEffect(() => {
    document.documentElement.lang = lang;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [lang]);

  return (
    <div className="detail-shell services-page">
      <header className="topbar detail-topbar">
        <a className="wordmark" href={siteHref({ kind: "home", lang })} aria-label="EMPV home">EMPV</a>
        <a className="detail-nav-back" href={servicesHref}><ArrowLeft size={15} strokeWidth={1.5} />{c.back}</a>
        <a className="lang-switch" href={siteHref({ kind: "aiActPage", lang: otherLang })} hrefLang={otherLang} aria-label={lang === "it" ? "View in English" : "Leggi in italiano"}><Languages size={15} strokeWidth={1.6} /> {otherLang.toUpperCase()}</a>
      </header>
      <main>
        <section className="notes-index-hero"><div className="notes-index-hero-inner">
          <div className="eyebrow">EMPV / AI ACT</div>
          <h1>{c.title}</h1>
          {c.intro.map(p => <p key={p}>{p}</p>)}
        </div></section>
        <section className="detail-blocks section-pad">
          <article className="detail-block"><div className="eyebrow">EMPV / AI ACT</div><div className="detail-block-main">
            <h2>{c.startTitle}</h2>{c.start.map(p => <p key={p}>{p}</p>)}
            <p><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj">{c.source}</a></p>
          </div></article>
        </section>
        <section className="detail-blocks section-pad" aria-labelledby="ai-act-steps">
          <div className="section-head"><h2 id="ai-act-steps">{c.stepsTitle}</h2></div>
          {c.steps.map(([title, body], index) => <article className="detail-block" key={title}>
            <div className="eyebrow">{String(index + 1).padStart(2, "0")}</div>
            <div className="detail-block-main"><h3>{title}</h3><p>{body}</p></div>
          </article>)}
          <article className="detail-block"><div className="eyebrow">EMPV / AI ACT</div><div className="detail-block-main">
            <h2>{c.supportTitle}</h2>{c.support.map(p => <p key={p}>{p}</p>)}<p>{c.scope}</p>
          </div></article>
        </section>
        <section className="detail-blocks section-pad" aria-labelledby="ai-act-faq">
          <div className="section-head"><h2 id="ai-act-faq">{c.faqTitle}</h2></div>
          {c.faq.map(([question, answer]) => <article className="detail-block" key={question}><div className="eyebrow">FAQ</div><div className="detail-block-main"><h3>{question}</h3><p>{answer}</p></div></article>)}
        </section>
        <section className="process-contact section-pad" aria-labelledby="ai-act-contact">
          <div className="section-code">EMPV / AI ACT</div><div className="process-contact-main">
            <h2 id="ai-act-contact">{c.contactTitle}</h2><p>{c.contact}</p>
            <div className="process-contact-actions">
              <a href={email} data-contact-placement="services_page">{c.contactLabel}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></a>
              <a href="https://wa.me/393792438705" data-contact-placement="services_page">{c.whatsapp}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main><SiteFooter lang={lang} />
    </div>
  );
}
