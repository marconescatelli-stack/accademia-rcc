import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["Tutti", "Adulti", "Bambini", "Ragazzi", "Camp"];

const testimonials = [
  { name: "Laura M.", cat: "Adulti", text: "Ho scoperto che la paura del vuoto era la paura di lasciarmi andare. L'arrampicata me l'ha fatto capire con il corpo, non con le parole." },
  { name: "Federico P.", cat: "Adulti", text: "A 45 anni ho iniziato senza nessuna esperienza. Dopo un anno, non è cambiato solo il mio fisico ma il modo in cui affronto le sfide." },
  { name: "Mamma di Tommaso", cat: "Bambini", text: "Mio figlio ha trovato qui una disciplina che lo appassiona davvero. Ha imparato a concentrarsi e a fidarsi degli altri." },
  { name: "Sofia, 14 anni", cat: "Ragazzi", text: "All'inizio avevo paura. Ora salgo vie che non avrei mai immaginato. Il gruppo mi ha dato una forza che non sapevo di avere." },
  { name: "Marco R.", cat: "Camp", text: "Il KataCamp in Norvegia è stata l'esperienza più intensa della mia vita. Falesia, comunità e silenzio. Indimenticabile." },
  { name: "Giulia T.", cat: "Camp", text: "Una settimana in Spagna con il gruppo RCC mi ha cambiato la prospettiva sull'arrampicata e su me stessa." },
];

const Testimonials = () => {
  const [active, setActive] = useState("Tutti");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "Tutti" ? testimonials : testimonials.filter((t) => t.cat === active);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Testimonianze</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Voci dalla verticale
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors border ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t, i) => (
            <motion.blockquote
              key={t.name + t.cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border p-6"
            >
              <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <footer className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{t.name}</span>
                <span className="text-xs text-accent uppercase tracking-wider">{t.cat}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
