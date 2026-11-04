import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Languages } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { SiteLang } from "./detailContent";
import { services, servicesPageCopy } from "./servicesContent";
import { siteHref } from "./seo";
import SiteFooter from "./SiteFooter";
import { selected } from "./homeContent";

export default function ServicesPage({ lang }: { lang: SiteLang }) {
  const c = servicesPageCopy[lang];
  const reducedMotion = useReducedMotion();
  const homeHref = siteHref({ kind: "home", lang });
  const processHref = siteHref({ kind: "processPage", lang });
  const alternateLang: SiteLang = lang === "it" ? "en" : "it";
  const emailSubject = lang === "it"
    ? "EMPV — Parliamo di un processo aziendale"
    : "EMPV — Let's discuss a business process";
  const emailHref = "mailto:hello@empv.it?subject=" + encodeURIComponent(emailSubject);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (window.location.hash) {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      window.requestAnimationFrame(() => {
        document.getElementById(slug)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [lang]);

  return (
    <div className="detail-shell services-page">
      <header className="topbar detail-topbar">
        <a className="wordmark" href={homeHref} aria-label="EMPV home">EMPV</a>
        <a className="detail-nav-back" href={homeHref + "#services"}>
          <ArrowLeft size={15} strokeWidth={1.5} />
          {c.backLabel}
        </a>
        <a
          className="lang-switch"
          href={siteHref({ kind: "servicesPage", lang: alternateLang })}
          hrefLang={alternateLang}
          aria-label={lang === "it" ? "View in English" : "Leggi in italiano"}
        >
          <Languages size={15} strokeWidth={1.6} /> {alternateLang.toUpperCase()}
        </a>
      </header>

      <main>
        <section className="notes-index-hero">
          <motion.div
            className="notes-index-hero-inner"
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow">{c.kicker}</div>
            <h1>{c.title}</h1>
            <p>{c.intro}</p>
          </motion.div>
        </section>

        <section className="detail-blocks section-pad" aria-label={lang === "it" ? "Servizi EMPV" : "EMPV services"}>
          {services[lang].map((service, index) => (
            <motion.article
              key={service.slug}
              id={service.slug}
              className="detail-block"
              aria-labelledby={"service-" + service.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
            >
              <div className="eyebrow">{service.index} / {service.kind}</div>
              <div className="detail-block-main">
                <h2 id={"service-" + service.slug}>{service.name}</h2>
                <p>{service.description}</p>
                <ul>
                  <li><strong>{service.whenLabel}:</strong> {service.when}</li>
                  <li><strong>{service.whatLabel}:</strong> {service.what}</li>
                </ul>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="process-related section-pad" aria-labelledby="services-evidence-title">
          <div className="section-code">EMPV / {c.evidenceLabel}</div>
          <h2 id="services-evidence-title">{c.evidenceTitle}</h2>
          <p className="process-related-intro">{c.evidenceIntro}</p>
          <div className="process-related-list">
            {selected[lang].map((project) => (
              <a
                className="process-related-item"
                key={project.slug}
                href={siteHref({ kind: "detail", lang, detailKind: "project", slug: project.slug })}
              >
                <span>
                  <strong>{project.name}</strong>
                  <small>{project.description}</small>
                </span>
                <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="process-related section-pad" aria-labelledby="services-related-title">
          <div className="section-code">EMPV / {c.relatedLabel}</div>
          <h2 id="services-related-title">{c.relatedTitle}</h2>
          <p className="process-related-intro">{c.relatedText}</p>
          <div className="process-related-list">
            <a className="process-related-item" href={processHref}>
              <span><strong>{c.relatedLink}</strong></span>
              <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="process-contact section-pad" aria-labelledby="services-contact-title">
          <div className="section-code">EMPV / {c.contactLabel}</div>
          <div className="process-contact-main">
            <h2 id="services-contact-title">{c.contactTitle}</h2>
            <p>{c.contactText}</p>
            <div className="process-contact-actions">
              <a href={emailHref} data-contact-placement="services_page">
                {c.emailLabel}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a href="https://wa.me/393792438705" data-contact-placement="services_page">
                {c.whatsappLabel}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
