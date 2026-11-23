export type CommercialSlug = "software" | "local-ai";
export const commercialCopy = {
  it: {
    software: {
      title: "Il software deve adattarsi alla tua azienda. Non il contrario.",
      intro: "Quando dati e attività sono sparsi tra Excel, email e gestionali, il lavoro si complica. EMPV progetta software su misura partendo dai processi che usi ogni giorno.",
      sections: [
        {title:"Software e dashboard su misura", text:"Realizziamo strumenti per organizzare clienti, offerte, commesse e attività, con accessi adeguati ai diversi ruoli."},
        {title:"Integrazione con i sistemi esistenti", text:"Prima di sostituire un gestionale, verifichiamo se è possibile collegarlo agli altri strumenti e ridurre i reinserimenti manuali."},
        {title:"Partiamo dalla discovery", text:"Analizziamo flussi, vincoli e obiettivi prima di definire lo sviluppo. Un esempio possibile è organizzare le richieste di preventivo ricevute via email mantenendo la verifica del commerciale."}
      ],
      cta:"Parliamo del tuo progetto", related:"Scopri anche l'automazione dei processi"
    },
    "local-ai": {
      title:"L'intelligenza artificiale, anche all'interno della tua azienda.",
      intro:"L'AI locale permette di eseguire alcuni modelli su infrastrutture controllate dall'organizzazione. Valutiamo se conviene davvero rispetto al cloud.",
      sections:[
        {title:"AI locale, cloud o ibrida?",text:"La scelta dipende dai casi d'uso, dalla sensibilità dei dati, dalle prestazioni e dai costi. Locale non significa automaticamente più sicuro o conforme."},
        {title:"Documenti e sistemi aziendali",text:"Valutiamo assistenti per consultare procedure e informazioni interne, rispettando autorizzazioni, controlli e limiti dei sistemi esistenti."},
        {title:"Fattibilità prima dell'investimento",text:"Analizziamo modelli, hardware, infrastruttura, manutenzione e integrazioni prima di proporre acquisti o sviluppi."}
      ],
      cta:"Richiedi una valutazione AI locale",related:"Scopri anche l'automazione dei processi"
    }
  },
  en: {
    software:{
      title:"Software should fit your business. Not the other way around.",
      intro:"When data and work are scattered across spreadsheets, email and business systems, operations become harder. EMPV designs tailored software around your actual workflows.",
      sections:[
        {title:"Custom software and dashboards",text:"We build tools to manage customers, quotes, jobs and tasks with role-appropriate access."},
        {title:"Integrate existing systems",text:"Before replacing an ERP, we check whether it can be connected to other tools to reduce duplicate data entry."},
        {title:"Discovery comes first",text:"We map workflows, constraints and goals before defining development. For example, quote requests from email can be structured while commercial decisions remain with your team."}
      ],
      cta:"Discuss your project",related:"Explore process automation"
    },
    "local-ai":{
      title:"Artificial intelligence, also within your business.",
      intro:"Local AI can run selected models on infrastructure controlled by your organization. We assess when it makes sense compared with cloud services.",
      sections:[
        {title:"Local, cloud or hybrid?",text:"The right choice depends on use cases, data sensitivity, performance and cost. On-premise is not automatically more secure or compliant."},
        {title:"Internal documents and systems",text:"We assess assistants for internal knowledge and workflows with suitable permissions, controls and system boundaries."},
        {title:"Feasibility before investment",text:"We evaluate models, hardware, infrastructure, maintenance and integrations before recommending purchases or development."}
      ],
      cta:"Request a local AI assessment",related:"Explore process automation"
    }
  }
} as const;
