# EMPV — Audit autorevolezza esterna, backlink e citazioni
**Data:** 4 novembre 2026 · **Stato:** prima verifica pubblica, baseline backlink numerica **NON disponibile**.

## Obiettivo e vincoli

Analizzare chi rimanda realmente a EMPV e costruire un percorso di autorevolezza coerente con software su misura, automazioni, integrazioni, AI applicata e ricerca locale. Sono ammessi solo collegamenti editoriali, istituzionali o di partner con una relazione reale, verificabile e pertinente. Non acquistare link per ranking, non distribuire anchor text ottimizzate, non inventare clienti o riconoscimenti.

**Non confondere:**
- **Backlink**: una pagina esterna con un link HTML verso `empv.it` (da verificare sorgente, target, canonical, `rel` e indicizzabilità).
- **Menzione senza link**: può aiutare il riconoscimento del brand, ma non va contabilizzata come backlink.
- **Profilo**: presenza social o repository controllato da EMPV; utile per identità, non sostituisce una citazione indipendente.
- **Citazione AI**: menzione o fonte in una risposta AI. Non equivale a backlink, né a una visita proveniente da un assistente.
- **`sameAs` Organization**: identificazione dei profili ufficiali; non è un sistema per generare link esterni né una garanzia di ranking.

## Fonti ed evidenze raccolte

| Fonte | Evidenza verificata | Cosa non dimostra |
| --- | --- | --- |
| Bing Webmaster — raccomandazione fornita dall'utente | «Your site lacks inbound links from high-quality domains», severity **Moderate**, un avviso globale, nessun URL specifico | Non fornisce numeri di domini, backlink, qualità misurata o elenco dei siti colleganti |
| Bing Webmaster — AI Performance | **0 citazioni** e **0 cited pages** per il periodo 3M selezionato (screenshot utente, 4/11) | Non misura tutte le risposte di ChatGPT, Gemini o Claude; non è un report backlink |
| Web search pubblico: query esatta `"empv.it" -site:empv.it`, query brand/nome dei fondatori | I risultati non hanno individuato un elenco verificabile di backlink editoriali indipendenti. Sono emersi un elenco LinkedIn con riferimento a «Michele Valleri — EMPV» e un aggregatore di domini sul medesimo IP | Non è una scansione completa del grafo dei link; **non attribuire zero backlink** |
| Repository pubblico `github.com/empv26/EMPV` | README di `main` prima dell'intervento riportava ancora «first creative prototype», clienti nominati non coerenti con le schede oggi pubbliche, default grafico dichiarato obsoleto e **nessun collegamento esplicito alla homepage canonica** | Non è un giudizio sul valore del codice o sul posizionamento |
| GitHub metadata repository | Campo homepage attualmente `http://empv.it/`, non la homepage HTTPS canonica `https://empv.it/it/` | Non è possibile aggiornare questo campo mediante modifica al README; richiede intervento nelle impostazioni repository |
| JSON-LD pubblico | `Organization.sameAs` già identifica LinkedIn e X; l'account `github.com/empv26` è usato come fonte ufficiale del progetto | L'aggiunta GitHub al `sameAs` è segnale di identità, non un nuovo backlink |

Le ricerche pubbliche possono essere incomplete o includere omonimi/acronimi non collegati a EMPV. Verificare sempre che una menzione faccia riferimento alla realtà di Bergamo e non a un'azienda diversa.

## Baseline quantitativa: cosa recuperare prima di parlare di «link building»

**Bing Webmaster Tools, proprietà `https://empv.it/` → Backlinks → Backlinks for your site:**
1. **Domains → Download all**: referring domain, conteggio e dettagli per dominio;
2. **Pages → Download all**: pagina sorgente, pagina target, anchor text;
3. **Anchor texts → Download all**: distribuzione ancore e domini;
4. **Backlinks to any site**: confronto con **al massimo due concorrenti diretti** rilevanti per il servizio commerciale che stiamo valutando (non competitor scelti solo per grande dimensione).

Conservare data di esportazione, finestra del report, eventuali filtri e limitazioni; la documentazione Bing specifica che i risultati di backlink sono **un campione rappresentativo**, non il profilo completo. Documentazione primaria: https://www.bing.com/webmasters/help/backlinks-c3a334e8

**Ahrefs Free:** account esistente confermato da email di benvenuto. `Site Explorer` / `Backlinks` può essere usato nei limiti del piano; le metriche e gli export non sono stati letti da questo progetto. L'app Ahrefs non risulta collegata alla conversazione e Windsor.ai non ha un account Ahrefs autorizzato: non dichiarare backlink misurati.

**Google Search Console → Links → External links:** integrare il campione Bing con i domini principali e le pagine di destinazione effettive; GSC attualmente collegata per Performance ma non per il report Links attraverso il connettore.

### Schema dati di verifica (per ogni backlink)
`source_domain | source_url | target_url | anchor | first_seen | last_seen | status_http | rel | indexed_assessment | editorial_context | relevance | relation_to_empv | action | proof_url`.

**Priorità difensive**: rimuovere/rifiutare in modo selettivo solo collegamenti realmente problematici e dimostrati, non ricorrere automaticamente a disavow per backlink sconosciuti o una raccomandazione generica.

## Backlog proposto per autorevolezza reale

### P0 — identità ufficiale coerente (sotto controllo EMPV)
- Aggiornare README pubblico con homepage IT/EN canoniche, servizi, quattro progetti già pubblici e separazione AI Lab/Research Notes. **Implementato in PR, non ancora confermato online**.
- Esplicitare `https://github.com/empv26` tra i profili `Organization.sameAs` del JSON-LD, come account ufficiale del repository. Non aggiungere piattaforme o organizzazioni senza verifica. **Implementato in PR**.
- **Da fare fuori dalla PR**: aggiornare il campo homepage del repository GitHub da `http://empv.it/` a `https://empv.it/it/`; controllare nei profili LinkedIn aziendale e X che il sito riportato sia canonico, evitando un redirect intermedio quando possibile.
- Nessun dato societario o indirizzo civico da inventare: Bergamo è già supportato dal contesto pubblico; evitare false qualifiche, sedi, certificazioni e premi.

### P1 — collaborazione e pubblicazione con consenso
1. **Progetti reali già documentati:** valutare con i rispettivi referenti una storia congiunta su un problema concreto, processi prima/dopo, limiti e risultati verificabili. Se il cliente ritiene utile citarla sul proprio sito, lasciargli libera scelta di un link contestuale verso la scheda EMPV. Autorizzazioni e privacy prima di qualsiasi nome, logo, dato o risultato.
2. **Partner tecnologici e integratori con cui esiste un rapporto effettivo:** possibilità di articolo tecnico congiunto (integrazioni ERP, AI locale) e riferimento alle fonti, **non** scambio obbligatorio di link. Non presentarsi come partner certificati senza verifica.
3. **Comunità professionali Bergamo:** individuare occasioni di workshop, contributi pratici o pubblicazioni tecniche. Il PID della Camera di commercio di Bergamo sostiene iniziative sulla digitalizzazione: https://bg.camcom.it/promozione/sostegno-all-impresa/pid-punto-impresa-digitale. **È una pista da valutare**, non una partnership esistente e non una promessa di pubblicazione/link.
4. **Contenuto tecnico originale**: usare Research Notes per spiegare procedura di valutazione, condizioni e limiti riproducibili (es. integrazione ERP senza sostituzione, AI on-premise vs cloud). Proporlo solo a pubblicazioni tecniche che trattano il tema: non distribuire comunicati in massa o generare contenuti AI per farsi linkare.

### P2 — profili e directory
Verificare prima l'identità legale e il tipo di attività. Profili professionali selezionati possono aiutare reperibilità e coerenza, ma **non** creare indiscriminatamente directory, false recensioni, schede locali senza sede verificata o elenchi di keyword. Google considera spam molti schemi di link su directory di bassa qualità: https://developers.google.com/search/docs/essentials/spam-policies

## Misurazione (mensile, senza obiettivi inventati)

| Indicatore | Baseline oggi | Prossima verifica |
| --- | --- | --- |
| Referring domains esterni, con contesto editoriale | **Non disponibile** | CSV Bing Backlinks Domains + GSC Links |
| URL sorgente → URL target, `rel`, presenza link reale | **Non disponibile** | CSV Pages + controllo manuale dei siti principali |
| Menzioni del brand su altre pubblicazioni | Ricerca esplorativa non esaustiva | Monitoraggio query brand + nomi fondatori e documentazione |
| Click referral / richieste qualificate | Da ricavare da GA4 per fonte e pagina | Sessioni e `contact_click`; non assimilare click a lead |
| Citazioni AI Microsoft | 0 nel report 3M caricato dall'utente | Bing AI Performance nel periodo successivo |
| Citazioni ChatGPT, Gemini, Claude | **Non misurate** | Matrice prompt definita nell'audit domanda SEO/GEO |

## Fonti primarie
- Microsoft Bing, Backlinks Report: https://www.bing.com/webmasters/help/backlinks-c3a334e8
- Google Search Central, Search position FAQ: https://developers.google.com/search/help/site-position-in-search-faq
- Google Search Central, spam policies / link spam: https://developers.google.com/search/docs/essentials/spam-policies
- Google Search Central, Organization structured data / `sameAs`: https://developers.google.com/search/docs/appearance/structured-data/organization
- Camera di commercio di Bergamo, PID: https://bg.camcom.it/promozione/sostegno-all-impresa/pid-punto-impresa-digitale

## Release constraints

La PR di questa fase cambia README e `Organization.sameAs` e introduce questo audit; **non modifica** Hero, Team, footer, Glass Card, animazioni, palette, UX, CTA, contenuti dei progetti, Research Notes o AI Lab. La modifica è minima e reversibile. Prima del merge eseguire build, controllo del JSON-LD in IT/EN e verifica del differenziale; dopo il merge verificare GitHub Pages e gli artefatti, senza dichiarare crescita di ranking o backlink acquisiti.
