# EMPV — Pagine commerciali SEO (bozza di implementazione)

Stato: **draft, non pubblicare**. Obiettivo: integrare contenuti SEO senza modificare la grafica.

## Inventario verificato
- `/it/cosa-facciamo/` e `/en/what-we-do/` sono già gestiti da `ServicesPage.tsx`.
- `/it/automazione-processi-aziendali/` e `/en/business-process-automation/` sono già gestiti da `ProcessPage`: **non duplicare**.
- `src/seo.ts`, `src/seo-manifest.json` e `scripts/seo-build.mjs` gestiscono route, canonical, hreflang, HTML statico e sitemap.
- Il sito supporta italiano e inglese. Le nuove route richiedono entrambe le lingue, con contenuti realmente tradotti.

## Pagine da aggiungere
1. **Software su misura**: `/it/sviluppo-software-su-misura/` e `/en/custom-software-development/`.
2. **AI locale**: `/it/intelligenza-artificiale-locale-aziende/` e `/en/on-premise-ai-business/`.
3. **Automazione**: aggiornare la pagina esistente senza creare una seconda URL.

## Copy editoriale proposto
### Software su misura
**Title:** Sviluppo software su misura a Bergamo | EMPV

**Description:** EMPV sviluppa software aziendali su misura, dashboard e integrazioni per semplificare il lavoro. Partiamo dai processi, non da soluzioni preconfezionate.

**H1:** Il software deve adattarsi alla tua azienda. Non il contrario.

Ogni azienda lavora in modo diverso. Quando i software non comunicano, informazioni e attività finiscono per essere gestite fra Excel, email e operazioni ripetitive. EMPV studia i processi esistenti e realizza software, dashboard e integrazioni adatti al lavoro quotidiano.

**Sezioni:** problemi che risolviamo; software e dashboard; integrazione con gestionali esistenti; metodo di discovery; esempi applicativi chiaramente etichettati; CTA «Parliamo del tuo progetto».

### AI locale
**Title:** Intelligenza artificiale locale per aziende | EMPV

**Description:** Valuta AI on-premise, infrastruttura, riservatezza dei dati e integrazione con i sistemi aziendali. EMPV parte dalla fattibilità tecnica ed economica.

**H1:** L'intelligenza artificiale, anche all'interno della tua azienda.

L'AI locale può eseguire modelli su infrastrutture controllate dall'organizzazione. Non è automaticamente più sicura, economica o conforme: la scelta dipende dai dati, dai casi d'uso, dalle prestazioni e dai costi di gestione. EMPV aiuta a valutare cloud, locale e soluzioni ibride.

**Sezioni:** cosa significa AI locale; quando conviene; confronto con cloud; hardware e prestazioni; integrazioni e sicurezza; studio di fattibilità; CTA «Richiedi una valutazione AI locale».

### Automazione processi (pagina esistente)
Rafforzare contenuti su preventivi, email, CRM, ERP, approvazioni e controllo umano. Evitare promesse di integrazioni senza prima verificare API e vincoli tecnici. CTA «Scopri cosa puoi automatizzare».

## Vincoli di accettazione
- Nessuna modifica ai colori, font, animazioni, layout globali o componenti visivi esistenti.
- Non dichiarare come consegnati esempi ipotetici o prototipi.
- Contenuti italiani e inglesi coerenti; canonical e hreflang reciproci.
- HTML prerenderizzato e sitemap aggiornati tramite il build SEO esistente.
- Link da Cosa facciamo e dai progetti pertinenti; nessuna duplicazione della pagina automazioni.
- Test build `npm run build`, link, responsive e metadati prima del merge.
- Nessun merge o deploy senza revisione esplicita.
