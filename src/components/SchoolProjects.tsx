import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const SchoolProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="scuole" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Educazione</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Progetti scolastici</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border p-8 md:p-12 space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap size={24} className="text-accent" />
            <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium">Per le scuole</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            L'Accademia RCC sviluppa e propone progetti educativi dedicati alle scuole di Roma nord, portando l'arrampicata
            e il movimento verticale all'interno di percorsi formativi per bambini e ragazzi nella zona Olgiata, La Storta, Formello e Le Rughe.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Attraverso esperienze pratiche e guidate, gli studenti scoprono nuove capacità di coordinazione,
            attenzione e fiducia, imparando a mettersi alla prova in un ambiente sicuro e stimolante.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Negli anni l'Accademia ha collaborato con diverse realtà scolastiche, tra cui la{" "}
            <span className="text-foreground font-medium">Saint Dominique International School</span>,
            proponendo giornate educative, attività di avviamento all'arrampicata e percorsi esperienziali.
          </p>

          <div className="border-t border-border pt-6 mt-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Collaborazioni aperte</span> — L'Accademia RCC è aperta
              alla collaborazione con scuole e istituti educativi interessati a sviluppare progetti legati al movimento,
              alla relazione e alla crescita attraverso l'esperienza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolProjects;
