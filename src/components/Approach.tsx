import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Smile, Users, Layers, Heart } from "lucide-react";
import approachImage from "@/assets/approach.jpg";

const principles = [
  { icon: Shield, title: "Sicurezza", desc: "La base da cui parte ogni percorso verticale." },
  { icon: TrendingUp, title: "Miglioramento", desc: "Progressione costante, mai forzata." },
  { icon: Smile, title: "Divertimento", desc: "Il piacere come motore dell'apprendimento." },
  { icon: Users, title: "Diversità", desc: "Ogni corpo, ogni storia, ogni percorso è unico." },
  { icon: Layers, title: "Integrazione", desc: "Corpo e mente in un unico gesto." },
  { icon: Heart, title: "Relazione", desc: "Il legame con l'altro come strumento di crescita." },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Il Nostro Approccio</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Metodo KataClimb
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Non è allenamento muscolare. È un'esperienza incarnata: il corpo che impara a stare in verticale,
              a gestire la gravità, a trovare equilibrio nella relazione con la parete e con l'altro.
              Il metodo KataClimb integra movimento, consapevolezza e progressione in un percorso che
              trasforma l'arrampicata in strumento di crescita personale.
            </p>
            <Link
              to="/metodo-kataclimb"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:underline"
            >
              Scopri il Metodo KataClimb →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={approachImage}
              alt="Istruttore KataClimb durante una lezione di arrampicata in palestra a Roma"
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <p.icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
