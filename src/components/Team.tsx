import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamClaudi from "@/assets/team-claudi.jpeg";
import teamMattia from "@/assets/team-mattia.jpeg";
import teamMarco from "@/assets/team-marco.jpeg";

interface Member {
  name: string;
  role: string;
  level: "founder" | "senior" | "junior" | "aspirante";
  photo?: string;
}

const team: Member[] = [
  { name: "Marco \"Mellow\" Mellozzini", role: "Istruttore Senior", level: "senior", photo: teamMarco },
  { name: "Giammarco", role: "Istruttore Senior", level: "senior" },
  { name: "Mattia", role: "Istruttore Junior", level: "junior", photo: teamMattia },
  { name: "Claudia", role: "Istruttore Junior", level: "junior", photo: teamClaudi },
  { name: "Giuseppe", role: "Pietra Miliare — Fondatore e riferimento dell'Accademia. Non insegna, mostra.", level: "founder" },
];

const levelStyles: Record<string, string> = {
  founder: "border-accent bg-accent/5",
  senior: "border-border",
  junior: "border-border",
  aspirante: "border-dashed border-border",
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Chi Siamo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Il nostro team</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`border p-8 ${levelStyles[m.level]} ${m.level === "founder" ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              {m.photo && (
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img
                    src={m.photo}
                    alt={`${m.name} — ${m.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
              {m.name === "Claudia" && (
                <div className="mt-4">
                  <iframe
                    src="https://www.instagram.com/reel/DRroR04DJmc/embed"
                    className="w-full rounded"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allow="encrypted-media"
                    title="Reel Claudi — Istruttrice di arrampicata"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-card to-accent/10 p-10 md:p-14 shadow-[0_8px_30px_-10px_hsl(var(--accent)/0.3)] hover:shadow-[0_16px_40px_-10px_hsl(var(--accent)/0.45)] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out cursor-default"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Diventa Istruttore</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trasforma la tua passione in una carriera
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diventa Istruttore nell'Accademia che ha fatto la storia del verticale a Roma. 
              Il nostro programma formativo ti guida dalla padronanza del metodo KataClimb alla gestione autonoma di corsi per bambini, ragazzi e adulti. 
              Non cerchiamo solo scalatori esperti, ma educatori capaci di vedere l'altro. 
              Unisciti a un team con 30 anni di esperienza e 75+ KataCamp all'attivo. 
              La tua carriera inizia qui.
            </p>
            <ul className="text-left text-sm text-muted-foreground space-y-3 mb-8 max-w-xl mx-auto">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Non serve essere un "campione" di arrampicata:</strong> Cerchiamo persone capaci di ascoltare e comunicare, non solo di scalare gradi estremi.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Aperto a tutti (anche neofiti):</strong> Puoi candidarti anche se non hai mai scalato; la tua formazione parte dalle basi, con un approccio pedagogico unico.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Ti formiamo da zero col Metodo KataClimb:</strong> Imparerai un sistema codificato in 30 anni di esperienza, basato su presenza, allineamento e responsabilità.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Teoria e Pratica in parete:</strong> Un percorso concreto che va dai nodi di sicurezza alla gestione psicologica del gruppo e della paura.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Crescita professionale garantita:</strong> Dalla figura di Aspirante alla gestione autonoma di corsi per Bambini, Ragazzi e Adulti.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">✅</span><span><strong className="text-foreground">Entra in un network internazionale:</strong> Avrai l'opportunità di partecipare e supportare l'organizzazione dei nostri KataCamp in tutto il mondo.</span></li>
            </ul>
            <a
              href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20informazioni%20sul%20percorso%20per%20diventare%20istruttore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Candidati ora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
