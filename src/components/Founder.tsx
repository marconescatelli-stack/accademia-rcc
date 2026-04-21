import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import libroImg from "@/assets/libro-scalare-impossibile.jpeg";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fondatore" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Il Fondatore</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">Marco Nescatelli</h2>
          <p className="text-lg text-muted-foreground font-light">Fondatore dell'Accademia RCC e ideatore del metodo KataClimb</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Arrampicatore e formatore con oltre 33 anni di esperienza, ha partecipato alla{" "}
              <span className="text-foreground font-medium">Coppa del Mondo di Arrampicata</span> e nel corso
              della sua carriera ha progettato e gestito sette palestre di arrampicata a Roma, formando istruttori
              e accompagnando migliaia di persone nel mondo verticale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La sua esperienza nasce da una vita vissuta tra esplorazione, sport e lavoro in ambienti complessi:
              oltre 200 immersioni nel Mar Rosso, certificazioni subacquee tra cui Wreck Specialist e Search &
              Recovery Diver, brevetto internazionale di paracadutismo AFF con oltre 30 lanci, sci alpinismo e
              cascate di ghiaccio fino al VI grado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Ha inoltre lavorato nel settore dei lavori in elevazione e della formazione professionale su fune,
              collaborando con realtà come{" "}
              <span className="text-foreground font-medium">Ferrovie dello Stato, Ministero del Tesoro, Wind e Vodafone</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              È autore del libro{" "}
              <a href="https://amzn.to/3NmlLM8" target="_blank" rel="noopener noreferrer" className="text-accent font-medium italic hover:underline">
                Scalare l'Impossibile – La tua Vetta
              </a>{" "}
              e continua a sviluppare il metodo KataClimb attraverso l'Accademia RCC.
            </p>
            <a href="https://amzn.to/3NmlLM8" target="_blank" rel="noopener noreferrer" className="block mt-4 max-w-[200px] hover:opacity-90 transition-opacity">
              <img src={libroImg} alt="Scalare l'Impossibile — Libro di Marco Nescatelli" className="w-full rounded shadow-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
