import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import katacampImage from "@/assets/katacamp.jpg";

const locations = [
  "Italia", "Spagna", "Norvegia", "Francia", "Grecia", "Svizzera", "Croazia", "Turchia",
];

const KataCamp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="katacamp" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 overflow-hidden"
        >
          <img
            src={katacampImage}
            alt="KataCamp arrampicata outdoor: gruppo di scalatori durante un camp internazionale"
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
            width={1200}
            height={320}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">KataCamp</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              L'arrampicata oltre i confini
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Dal 1992, i KataCamp portano il metodo in contesti naturali straordinari.
              Settimane intensive di arrampicata, formazione e vita comunitaria nelle
              falesie più belle del Mediterraneo e del Nord Europa.
            </p>
            <div className="border-t border-border pt-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Marco Nescatelli</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fondatore dell'Accademia e ideatore del metodo KataClimb. Oltre 30 anni dedicati
                all'insegnamento dell'arrampicata come strumento di crescita personale. Autore del libro
                "Scalare l'Impossibile".
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Location internazionali</p>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 py-3 border-b border-border"
                >
                  <MapPin size={14} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{loc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KataCamp;
