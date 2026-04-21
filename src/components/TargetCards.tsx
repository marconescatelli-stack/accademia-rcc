import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import targetAdults from "@/assets/target-adults.jpg";
import targetKids from "@/assets/target-kids.jpg";
import targetTeens from "@/assets/target-teens.jpg";

const targets = [
  {
    label: "Adulti",
    title: "Gestire la paura, assumersi responsabilità",
    desc: "Un corso di arrampicata a Roma per adulti che vogliono confrontarsi con i propri limiti. L'arrampicata diventa uno specchio in cui riconoscere paure, schemi e risorse. Non serve essere atletici: serve essere presenti.",
    image: targetAdults,
    alt: "Corso di arrampicata per adulti con metodo KataClimb nella palestra RCC a Roma",
  },
  {
    label: "Bambini",
    title: "Il gioco strutturato che costruisce",
    desc: "Arrampicata Roma bambini: per i più piccoli, arrampicare è un gioco naturale. Lo strutturiamo con metodo, creando un ambiente sicuro in cui sviluppare coordinazione, fiducia e capacità di problem-solving attraverso il corpo.",
    image: targetKids,
    alt: "Lezione di arrampicata metodo KataClimb per bambini a Roma",
  },
  {
    label: "Ragazzi",
    title: "L'energia che trova la sua direzione",
    desc: "Adolescenti pieni di energia e bisogno di sfida. L'arrampicata offre un contesto dove canalizzare quella forza, misurarsi con obiettivi concreti e costruire relazioni autentiche nel gruppo.",
    image: targetTeens,
    alt: "Corso di arrampicata per ragazzi adolescenti nella palestra di Roma",
  },
];

const TargetCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="percorsi" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Percorsi</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Per ogni età, un percorso verticale
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targets.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border border-border hover:border-accent/50 transition-colors overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{t.label}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-3 mb-4">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetCards;
