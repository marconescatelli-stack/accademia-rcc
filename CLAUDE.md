# CLAUDE.md

Regole di lavoro per questo repository. Da rispettare sempre.

## 🔒 REGOLA PRIMARIA — TRACCIA E ARCHIVIO (Marco, 18 ott 2026 — vale prima di tutte le altre)

Noi rappresentiamo lo storico: tutto quello che facciamo deve lasciare traccia.

1. **Esperienze date alle persone — si tengono sempre.** Pagine di edizioni, eventi e corsi già pubblicati, con una storia o persone dentro, NON si modificano e NON si sostituiscono: sono un riferimento per quelle persone, per Marco e per Claude. Il nuovo si AGGIUNGE accanto (nuova edizione = pagina nuova con la data nel nome, es. `essence-novembre-2026.html`); il vecchio resta online com'è.
2. **Sviluppo del progetto — memoria selettiva.** Scelte, passaggi decisivi ed errori vanno lasciati in memoria (commit chiari, documenti di registro) per orientarsi in futuro e non ricadere negli stessi problemi.
3. **Prima di cancellare o sostituire qualsiasi file o contenuto serve l'approvazione esplicita di Marco.** Si decide insieme cosa tenere e cosa no, e la decisione si mette a registro. Nel dubbio: chiedere, non procedere.

## Branch e deploy

- Il branch di lavoro **e** di produzione è `nuovo-sito`.
- `nuovo-sito` è collegato a Cloudflare Pages → **palestra-arrampicata-roma.it**.
- **Mai fare `push` senza conferma esplicita di Marco.** Il commit è consentito; il push richiede sempre un via libera diretto.
- **Allineamento automatico, senza interrompere Marco.** Prima della prima modifica a un file, eseguire `git pull --rebase origin nuovo-sito` in silenzio. Non chiedere conferma, non annunciarlo. Parlarne solo se il pull fallisce per un conflitto: in quel caso fermarsi, dire quale file e aspettare Marco.
- **Se il push viene rifiutato** perché su origin ci sono commit nuovi: `git pull --rebase`, poi push normale. Mai `--force`.
- **"Fine sessione"**: quando Marco lo dice, (1) verificare che non ci siano modifiche non committate, (2) se c'è un commit non pushato ricordarglielo e aspettare il suo ok, (3) `git pull --rebase`, (4) rispondere con una riga: branch, ultimo commit, allineato sì/no.

## Comunicazione

- **Rispondere sempre in italiano.**
- Consegnare modifiche **complete e verificabili**: niente lavori parziali o passaggi lasciati a metà.

## UI

- Testo: dimensione **minima 13px**.
- Bottoni di azione primari: **scuri, mai grigi**.

## Database (Supabase)

- Progetto Supabase: **`wbtougychlhnlcnonqge`**.
- **Mai inventare nomi di colonne o di tabelle.** Verificare sempre contro `information_schema` prima di scrivere query o codice che tocca il DB.
- La RPC per code/fasce si chiama **`imposta_coda_fascia`**.
