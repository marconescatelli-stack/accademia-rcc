import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Prima Lezione", desc: "La tua porta d'ingresso. Una lezione di prova a 15€ per scoprire il metodo e la struttura.", highlight: "15€" },
  { num: "02", title: "Corso Open", desc: "Il primo livello. Impari le basi dell'arrampicata con il metodo KataClimb in un gruppo guidato." },
  { num: "03", title: "Frequenza Regolare", desc: "La costanza costruisce competenza. Frequentando regolarmente acquisisci sicurezza e autonomia." },
  { num: "04", title: "Progressione", desc: "Da Open ad Advance, da Intro a Evo. Ogni livello ha obiettivi chiari e verificabili." },
  { num: "05", title: "Frequenza Libera", desc: "Il traguardo. La libertà è il risultato della competenza, non il punto di partenza." },
];

const Onboarding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="onboarding" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Come si entra</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Il percorso inizia qui
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Cinque passi per passare da principiante a scalatore autonomo.
            Ogni tappa ha un senso preciso.
          </p>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-6 md:gap-10 py-8 border-t border-border last:border-b group"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-accent/30 group-hover:text-accent transition-colors flex-shrink-0 w-16">
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 flex items-center gap-3">
                  {step.title}
                  {step.highlight && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 font-medium">
                      {step.highlight}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground max-w-xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Prenota */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Prenota la tua prima lezione
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Cerchi arrampicata Roma prezzi accessibili? Una lezione di prova a <span className="text-accent font-semibold">15€</span> per scoprire il metodo KataClimb. Nessun vincolo, nessun abbonamento.
          </p>
          <a
            href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Prenota su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Onboarding;
