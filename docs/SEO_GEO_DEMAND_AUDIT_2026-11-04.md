# EMPV — Audit domanda SEO e visibilità nei motori AI
**Baseline: 4 novembre 2026 · Stato: ricerca e piano operativo, non evidenza di ranking ottenuto**

## Scopo e perimetro

Valutare **per quali richieste commerciali abbia senso essere trovati** e quali condizioni tecniche/editoriali permettano a Google, Bing/Microsoft Copilot, ChatGPT Search, Gemini e Claude di scoprire, capire e talvolta citare EMPV.

L'audit **non autorizza** nuove pagine, titoli professionali, claim, modifiche alla Hero, variazioni grafiche o estensioni automatiche delle Glass Card. Restano invariati gli URL IT/EN approvati, il design, la privacy e le regole editoriali Research Notes.

**Gradi di prova**:
- **DATO EMPV**: sorgenti collegate Search Console e GA4, periodo dichiarato.
- **OSSERVAZIONE SERP**: risultato di ricerche pubbliche esplorative; non volume, ranking riproducibile locale o quota di mercato.
- **DOCUMENTAZIONE PRIMARIA**: norme pubblicate dal provider.
- **IPOTESI**: opportunità da misurare, non risultato acquisito.

## 1. Baseline quantitativa — DATO EMPV

Google Search Console, 1 ottobre–2 novembre 2026:
- 273 impressioni, 11 click complessivi, CTR circa 4,0%, posizione media circa 10,6 nella lettura aggregata precedente.
- Query **«empv»**: 106 impressioni, **9 click**. Le query esplicitate da Search Console non esauriscono tutte le impressioni: Google oscura/aggrega parte dei termini. Non calcolare la domanda del mercato dalla loro somma.
- Pagina IT **/it/automazione-processi-aziendali/**: 21 impressioni, 1 click; il click della query-page disponibile è su **«empv»** e non su «automazione ...».
- Segnali non-brand senza click (volumi di visualizzazione EMPV, **non** volumi mensili della keyword):
  - «visibilità commesse officina su commessa»: 4 impressioni, posizione media 27,25;
  - «how can i evaluate whether an on-premise llm is ready for production in a regulated environment?»: 3 impressioni, posizione media 3;
  - «on premise ai vs cloud ai»: 2 impressioni, posizione media 77;
  - «on-premise vs cloud ai»: 1 impressione, posizione media 29;
  - «how to erp with chat gpt»: 2 impressioni, posizione media 28,5;
  - «automazione dei processi interni aziendali»: 1 impressione, posizione media 44.
- Alcune pagine con impressioni ma nessun click: **/en/research-notes/integrating-an-erp-without-replacing-it/** (29), **/it/progetti/richieste-preventivi/** (23), **/en/lab/local-ai/** (16).

GA4 stesso periodo:
- 87 sessioni per canale: Direct 49, Organic Social 20, AI Assistant 15, Referral 2, Organic Search 1.
- **7 eventi `contact_click`**, **0 eventi chiave** nel report collegato. Un click su un link mail/WhatsApp è un'intenzione di contatto, **non un lead confermato**.
- Il canale **AI Assistant** non è una misura di citazioni, raccomandazioni o posizionamento negli assistenti. Search Console e GA4 misurano fenomeni diversi e non devono essere sommati o resi direttamente confrontabili.

**Non attribuire variazioni alle PR #43/#44/#45 del 4 novembre**: questo periodo termina prima dei loro effetti di ricrawl.

## 2. Ricerca della domanda: insiemi di query candidati

**Nota metodologica**: i cluster sotto sono suggeriti da Search Console e dalle pagine trovate nei risultati pubblici il 4 novembre 2026. **Volumi mensili, difficoltà keyword, CPC, stagionalità e SERP geolocalizzate a Bergamo NON sono ancora disponibili**. Verificarli tramite Keyword Planner, Ahrefs/Semrush o dati equivalenti prima di creare una nuova landing.

| Cluster | Query da verificare (varianti, non volumi misurati) | Intento prevalente da verificare | Pagina EMPV attuale | Priorità strategica (qualitativa) |
| --- | --- | --- | --- | --- |
| Software custom locale | software su misura Bergamo; software gestionale su misura Bergamo; sviluppo gestionale personalizzato | ricerca fornitore, commerciale | /it/cosa-facciamo/#software-su-misura | Alta: servizio centrale e presenza di fornitori locali |
| Integrazione ERP | integrare gestionale esistente; integrare ERP senza sostituirlo; collegare gestionale ad altri software | soluzione problema / commerciale | /it/automazione-processi-aziendali/; note su ERP | Alta: corrispondenza con progetti documentati |
| Preventivi/commesse | automatizzare richieste preventivo; software gestione commesse; digitalizzazione officina | caso d'uso / commerciale | progetti richeste-preventivi, commesse-posa; pagina Processo | Alta: evidenze di lavoro concreto |
| AI locale | AI locale per aziende; intelligenza artificiale on premise; assistente documenti aziendali privato | valutazione/fornitore | /it/cosa-facciamo/#ai-locale-privata; Research Notes on-premise | Media-alta: differenziazione, domanda non quantificata |
| AI e processi | automazione processi aziendali Bergamo; AI per gestionali | commerciale / informativo misto | pagina Processo; Cosa facciamo | Media: verificare sovrapposizioni |
| Discovery | analisi processi aziendali; assessment digitalizzazione; mappatura workflow | servizio preliminare | EMPV Discovery | Media: «EMPV Discovery» è un nome di metodo, non una keyword di mercato con domanda dimostrata |
| Inglese specialistico | local LLM evaluation; on-premise vs cloud AI; ERP integration without replacement | tecnico / ricerca | Research Notes IT/EN | Editoriale: possibile fonte AI, non necessariamente lead locale |

**Fase di verifica quantitativa**: estrarre 12 mesi di volumi per provincia/città Bergamo (se disponibili), Lombardia e Italia; associare CPC, difficoltà, trend e URL dei concorrenti; segmentare per intenzione. Se una keyword ha 0/volumi troppo bassi non eliminarla automaticamente: valutare cluster e valore potenziale del singolo contratto, ma non spacciare basso volume per alta domanda.

## 3. SERP esplorativa e concorrenti — OSSERVAZIONE, non classifica

Campione di fonti emerse in ricerche pubbliche non personalizzate; risultati variabili nel tempo, dispositivo e posizione:
- **Software custom Bergamo**: [Agentix – gestionali](https://agentixai.it/sviluppo-gestionali-bergamo/), [Agentix – sviluppo software](https://agentixai.it/sviluppo-software-bergamo/), [DFN Development](https://dfndevelopment.it/), [Almaware](https://almaware.net/).
- **Automazione e gestione processi**: [PCLab – automazione processi aziendali](https://pclab.bs.it/servizi-informatici/automazione-processi-aziendali/), oltre a pagine su gestionali e integrazioni di vari fornitori.
- **AI on-premise**: [Hexagon – AI locale](https://hexagonsistemi.it/ai-locale/), [KAPPA404 – AI locale](https://www.kappa404.it/soluzioni-ai/ai-locale), [Dabryx – AI locale aziende](https://dabryx.com/ai-locale-aziende).
- **Ricerca sui costi**: [SicDev](https://sicdev.it/blog/quanto-costa-gestionale-su-misura), [Sydus](https://www.sydus.it/blog/quanto-costa-sviluppare-un-gestionale), [Automatia](https://automatia.it/guide/quanto-costa-un-gestionale-su-misura).

**Gap editoriale osservato**: molte pagine concorrenti rispondono direttamente a domande *cosa si sviluppa, per chi, quando serve, configurare vs integrare vs ricostruire, compatibilità ERP, costi e supporto*. EMPV ha contenuti forti sul metodo e sui casi, ma il servizio di software su misura è ancora descritto in una card di un hub generale. **Non copiare** listini, promesse, testimonianze, FAQ o qualifiche dei concorrenti. L'eventuale pagina di approfondimento va giustificata dal cluster quantitativo e da informazioni verificabili su EMPV.

**Cache di ricerca**: il 4 novembre alcune copie dei risultati web pubblici mostravano ancora l'AI Lab in homepage, mentre gli artefatti di produzione GitHub della PR #44 mostravano già «Cosa facciamo». È un indizio di ritardo nel ricrawl, **non** una prova che la produzione sia tornata al vecchio layout.

## 4. Esposizione su ChatGPT, Gemini, Claude e Copilot — DOCUMENTAZIONE PRIMARIA

| Superficie | Meccanismo/condizione documentata | Stato osservato in codice EMPV | Misura da collegare |
| --- | --- | --- | --- |
| ChatGPT Search | Permettere a **OAI-SearchBot** di leggere le pagine; risultati/citazioni non garantiti. Gli indirizzi del bot non devono essere bloccati da CDN/hosting. | Regola esplicita Allow / in robots generato. **Risposta HTTP effettiva del crawler non testata**. | Referrals + audit citazioni per prompt |
| Gemini / AI Mode / AI Overviews | Googlebot, indicizzazione Google e idoneità snippet; nessun markup speciale necessario. **Google-Extended** è controllo distinto su training e alcuni usi Gemini grounding, non leva di ranking Google Search. | Sitemap, prerender, canonical, hreflang, robots `*` consentiti; Search Console mostra impressioni. | Search Console; report AI ove disponibile |
| Claude | Anthropic distingue **Claude-SearchBot** (ricerca), **Claude-User** (richieste utente) e ClaudeBot (training). | Claude-SearchBot esplicito; Claude-User coperto da `User-agent: *`; non abbiamo verificato accessi reali. | Test ripetuti con citazioni/URL, log crawler se disponibili |
| Copilot / Bing | Indicizzazione Bing, Bingbot, sitemap e IndexNow; AI Performance può mostrare citazioni, grounding queries, topic e citation share (con limiti). | `User-agent: *` consente Bingbot, IndexNow presente nel workflow; **Bing Webmaster non collegato**. | Bing Webmaster Tools AI Performance / Topics Portfolio |

Fonti:
- [OpenAI – ChatGPT Search, OAI-SearchBot](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Google Search Central – AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [Google – guide to AI optimization](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google – Googlebot e Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Anthropic – crawler ClaudeBot/Claude-User/Claude-SearchBot](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Bing Webmaster – AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)
- [Bing – Intents, Topics, Citation Share](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/)
- [Bing – Topics Portfolio beta, ottobre 2026](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/)

**Avvertenza importante**: `llms.txt` è presente nel repository, ma non è un requisito ufficiale per essere inclusi nelle esperienze AI Google. Evitare iniziative di chunking, markup artificiale, menzioni finte o reti di citazioni.

## 5. Prompt di monitoraggio AI (griglia da eseguire senza forzare il nome EMPV)

Registrare data, lingua, paese, prodotto/versione se visibile, prompt **identico**, risposta, URL citati, se EMPV appare e in quale ruolo (fonte / semplice menzione / raccomandazione), eventuale link. Ripetere a intervalli omogenei; le risposte sono variabili, un singolo test non prova stabilmente visibilità o invisibilità.

### Commerciale locale (IT)
1. «Cerco una software house a Bergamo per un gestionale su misura: quali fornitori potrei valutare e perché?»
2. «Quali aziende nella provincia di Bergamo sviluppano software collegato a gestionali esistenti?»
3. «Come automatizzare le richieste di preventivo senza lasciare la decisione all'AI?»
4. «Chi può sviluppare un software per collegare sopralluoghi, commesse e produzione in Lombardia?»

### Problema/decisione (IT)
5. «Meglio integrare il gestionale attuale o svilupparne uno nuovo per una PMI?»
6. «Come scegliere un fornitore per automatizzare ordini ricevuti via email?»
7. «Quando conviene un modello AI on-premise rispetto al cloud per un'azienda?»
8. «Cosa dovrebbe contenere una valutazione tecnica prima di installare AI privata sui documenti aziendali?»

### Technical discovery (EN)
9. «How do I evaluate a local LLM for enterprise production use?»
10. «How should a business integrate an ERP rather than replace it?»
11. «What are the tradeoffs between on-premise and cloud AI for business documents?»
12. «How can quote intake be automated without automating the approval decision?»

**Non modificare i prompt per inserire EMPV**: questo trasformerebbe il controllo in ricerca brand e falserebbe il risultato. Distinguere un test di presenza da una verifica di correttezza dei contenuti citati.

## 6. Backlog ordinato per evidenza e rischio

1. **P0 / NOW:** verifica automatica continuativa della preparazione dei file locali per crawling: robots, sitemap, canonical, hreflang, contenuto prerenderizzato, link alle pagine commerciali; test in `scripts/check-seo-geo-readiness.mjs`. **Non certifica HTTP live o posizionamento**.
2. **P0 / ACCESSI:** verificare lo stato di **Bing Webmaster Tools** e le sezioni AI Performance / Topics Portfolio; acquisire dati reali, se la proprietà è già configurata. Se non accessibile, non inventare citazioni. Verificare accesso effettivo dei bot da log/CDN dove disponibili.
3. **P0 / KEYWORDS:** ottenere 12 mesi di Keyword Planner/Ahrefs/Semrush su 4 cluster prioritari, Italia/Lombardia/Bergamo, e 5–10 competitor reali. Senza tale base la valutazione di volumi e difficoltà rimane *non validata*.
4. **P1 / EDITORIALE:** solo dopo la validazione, valutare una pagina molto focalizzata su **software gestionale su misura a Bergamo**, con differenza tra adattare, integrare, sviluppare, i casi EMPV, i limiti, la privacy e le domande essenziali. Evitare duplicazione/cannibalizzazione con `/it/cosa-facciamo/` e Processo.
5. **P1 / GEO:** pubblicare quando disponibile **evidenza originale** da lavoro EMPV: caso documentato, mappa dei passaggi prima/dopo con dati autorizzati, checklist ERP e confronto local/cloud con workload riproducibili, senza numeri inventati.
6. **P1 / MISURA:** contrassegnare `contact_click` come evento chiave GA4 **solo dopo** aver deciso che il click è la proxy conversion desiderata; meglio distinguere richieste effettive se esiste una conferma. Segmentare le fonti ChatGPT/Bing/Google/Claude senza pretendere attribution di ogni citazione.
7. **P2 / ENTITÀ:** verificare la coerenza pubblica di brand EMPV, Bergamo, canali aziendali, profili e case studies. Non creare indirizzi, qualifiche, dati societari o recensioni non presenti nel materiale ufficiale.

### Regole di decisione per nuove pagine
Una nuova landing richiede: **(a)** domanda valida, **(b)** intento diverso da pagine esistenti, **(c)** informazioni originali e prove disponibili, **(d)** percorso di contatto pertinente, **(e)** controllo di cannibalizzazione e IT/EN, **(f)** baseline e KPI. In assenza di questi punti preferire migliorare il contenuto esistente o aspettare dati.

## 7. KPI e checkpoint

| KPI | Baseline al 2/11 | Periodicità/interpretazione |
| --- | --- | --- |
| Impressioni/click query non-brand GSC | 2 click non riconducibili alla query «empv» nella serie aggregata; query sensibili non sempre esposte | Ogni 28 giorni su periodi comparabili |
| Pagina Processo IT: impressioni/click | 21 / 1 (click «empv» nei dati query-page) | Ogni 28 giorni; controllare anche nuove query |
| Click `contact_click` | 7 eventi, non lead confermati | Ogni 28 giorni, per canale e pagina |
| Citazioni AI Bing/Copilot | **Non disponibile**: non collegato | Iniziare quando disponibile Bing AI Performance |
| Citazioni ChatGPT/Gemini/Claude | **Non misurate** | Campionamento ripetuto sui 12 prompt, mantenendo output e URL |
| Accesso bot reale / status HTTP del dominio | **Non verificato da questo ambiente** | Verificare da un browser/crawler e, se presenti, log CDN/server |

**Soglie di successo**: non imporre obiettivi percentuali su volumi così piccoli. Il primo criterio è la presenza stabile per richieste non-brand pertinenti e l'aumento di interazioni qualificate, non gonfiare la copertura su query irrilevanti.

**Stato alla redazione**: audit basato sui dati e fonti citate; il test verifica un artefatto generato e non rappresenta la misura delle citazioni nei modelli.
