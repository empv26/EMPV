import type { SiteLang } from "./detailContent";

export type ServiceCard = {
  slug: string;
  index: string;
  kind: string;
  name: string;
  description: string;
  whenLabel: string;
  when: string;
  whatLabel: string;
  what: string;
};

export const services: Record<SiteLang, ServiceCard[]> = {
  it: [
    {
      slug: "empv-discovery",
      index: "01",
      kind: "Metodo",
      name: "EMPV Discovery",
      description: "Analizziamo come lavora un'azienda, quali strumenti utilizza e dove le informazioni si perdono, si ripetono o rallentano le attività.",
      whenLabel: "Quando serve",
      when: "Prima di scegliere cosa sviluppare o automatizzare.",
      whatLabel: "Cosa definiamo",
      what: "Problemi, vincoli e priorità di intervento.",
    },
    {
      slug: "software-su-misura",
      index: "02",
      kind: "Sviluppo",
      name: "Software su misura",
      description: "Progettiamo applicazioni, gestionali e piattaforme costruiti intorno ai processi, ai ruoli e alle esigenze operative dell'azienda.",
      whenLabel: "Quando serve",
      when: "Quando gli strumenti esistenti non coprono il lavoro da svolgere.",
      whatLabel: "Cosa realizziamo",
      what: "Applicazioni interne, piattaforme e sistemi gestionali.",
    },
    {
      slug: "automazioni-integrazioni",
      index: "03",
      kind: "Integrazioni",
      name: "Automazioni e integrazioni",
      description: "Colleghiamo software e informazioni per ridurre attività ripetitive, reinserimenti manuali e passaggi tra strumenti che non comunicano.",
      whenLabel: "Dove interveniamo",
      when: "Email, documenti, fogli di calcolo e gestionali.",
      whatLabel: "Cosa verifichiamo",
      what: "Integrazioni disponibili, qualità dei dati e controlli necessari.",
    },
    {
      slug: "ai-per-le-aziende",
      index: "04",
      kind: "AI applicata",
      name: "AI per le aziende",
      description: "Sviluppiamo funzioni AI per elaborare documenti, consultare informazioni e supportare attività operative, mantenendo verifiche umane dove necessarie.",
      whenLabel: "Quando serve",
      when: "Quando regole e software tradizionali non bastano a gestire informazioni complesse.",
      whatLabel: "Come lavoriamo",
      what: "Test, valutazione degli errori e supervisione.",
    },
    {
      slug: "ai-locale-privata",
      index: "05",
      kind: "AI locale",
      name: "AI locale e privata",
      description: "Progettiamo e valutiamo soluzioni AI su infrastrutture controllate, quando la gestione dei dati e l'autonomia dal cloud sono requisiti importanti.",
      whenLabel: "Quando serve",
      when: "In presenza di esigenze specifiche di riservatezza, controllo o operatività.",
      whatLabel: "Cosa valutiamo",
      what: "Modelli, infrastruttura, sicurezza, prestazioni e costi.",
    },
  ],
  en: [
    {
      slug: "empv-discovery",
      index: "01",
      kind: "Method",
      name: "EMPV Discovery",
      description: "We examine how a business operates, which tools it uses and where information gets lost, duplicated or slows down everyday work.",
      whenLabel: "When it helps",
      when: "Before deciding what to build or automate.",
      whatLabel: "What we define",
      what: "Problems, constraints and implementation priorities.",
    },
    {
      slug: "software-su-misura",
      index: "02",
      kind: "Development",
      name: "Custom software",
      description: "We design applications, business platforms and management systems around an organization's workflows, responsibilities and operational needs.",
      whenLabel: "When it helps",
      when: "When existing tools cannot adequately support the work.",
      whatLabel: "What we build",
      what: "Internal applications, platforms and management systems.",
    },
    {
      slug: "automazioni-integrazioni",
      index: "03",
      kind: "Integrations",
      name: "Automation & integrations",
      description: "We connect software and information to reduce repetitive tasks, manual data entry and handoffs between disconnected tools.",
      whenLabel: "Where we work",
      when: "Email, documents, spreadsheets and business software.",
      whatLabel: "What we check",
      what: "Available integrations, data quality and necessary controls.",
    },
    {
      slug: "ai-per-le-aziende",
      index: "04",
      kind: "Applied AI",
      name: "AI for business",
      description: "We build AI capabilities to process documents, retrieve information and support operational tasks, with human review where needed.",
      whenLabel: "When it helps",
      when: "When traditional rules and software cannot adequately handle complex information.",
      whatLabel: "How we work",
      what: "Testing, error evaluation and supervision.",
    },
    {
      slug: "ai-locale-privata",
      index: "05",
      kind: "Local AI",
      name: "Private & on-premise AI",
      description: "We design and evaluate AI solutions on controlled infrastructure when data handling and reduced cloud dependence are important requirements.",
      whenLabel: "When it helps",
      when: "When privacy, control or operational requirements call for a different deployment approach.",
      whatLabel: "What we assess",
      what: "Models, infrastructure, security, performance and costs.",
    },
  ],
};

export const servicesPageCopy = {
  it: {
    kicker: "EMPV / Cosa facciamo",
    title: "Dall'analisi dei processi ai sistemi che li supportano.",
    intro: "Analizziamo il lavoro, sviluppiamo software su misura, colleghiamo strumenti esistenti e valutiamo dove l'intelligenza artificiale può essere utile. Non tutto deve essere ricostruito da zero.",
    relatedLabel: "Il metodo",
    relatedTitle: "Prima il processo, poi la tecnologia.",
    relatedText: "Un intervento parte da una situazione concreta: persone, strumenti, dati e passaggi operativi. L'approfondimento sui processi mostra come valutiamo integrazioni, automazioni e controlli prima di sviluppare.",
    relatedLink: "Come affrontiamo l'automazione dei processi aziendali",
    contactLabel: "Parliamone",
    contactTitle: "Da quale processo partiamo?",
    contactText: "Raccontaci come lavorate oggi e cosa vorreste migliorare. Valutiamo insieme se e come intervenire.",
    emailLabel: "Raccontaci il processo",
    whatsappLabel: "Scrivici su WhatsApp",
    backLabel: "Torna a Cosa facciamo",
  },
  en: {
    kicker: "EMPV / What we do",
    title: "From understanding workflows to building the systems that support them.",
    intro: "We analyze how work gets done, build custom software, connect existing tools and assess where AI can add value. Not everything needs to be rebuilt from scratch.",
    relatedLabel: "Our approach",
    relatedTitle: "The workflow comes before the technology.",
    relatedText: "Every project starts from a specific situation: people, tools, data and operational handoffs. Our process guide explains how we assess integrations, automation and controls before building.",
    relatedLink: "How we approach business process automation",
    contactLabel: "Let's talk",
    contactTitle: "Which process should we start with?",
    contactText: "Tell us how your team works today and what you would like to improve. We'll assess together whether and how we can help.",
    emailLabel: "Tell us about the process",
    whatsappLabel: "Message us on WhatsApp",
    backLabel: "Back to What we do",
  },
} as const;
