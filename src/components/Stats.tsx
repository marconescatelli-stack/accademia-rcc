import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "30+", label: "Anni di esperienza" },
  { value: "7", label: "Strutture costruite" },
  { value: "75+", label: "KataCamp internazionali" },
  { value: "1992", label: "Anno di fondazione" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-foreground" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-6xl font-bold text-accent mb-2">{s.value}</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
