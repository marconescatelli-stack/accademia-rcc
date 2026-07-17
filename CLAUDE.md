# CLAUDE.md

Regole di lavoro per questo repository. Da rispettare sempre.

## Branch e deploy

- Il branch di lavoro **e** di produzione è `nuovo-sito`.
- `nuovo-sito` è collegato a Cloudflare Pages → **palestra-arrampicata-roma.it**.
- **Mai fare `push` senza conferma esplicita di Marco.** Il commit è consentito; il push richiede sempre un via libera diretto.

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
