import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Approach from "@/components/Approach";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MetodoPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Metodo KataClimb | Arrampicata Educativa a Roma — Accademia RCC</title>
        <meta name="description" content="Il metodo KataClimb integra movimento, consapevolezza e progressione. Oltre 30 anni di esperienza nell'arrampicata come strumento di crescita personale a Roma." />
        <link rel="canonical" href="https://kata-climb-flow.lovable.app/metodo-kataclimb" />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-card">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Il Metodo</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Metodo KataClimb
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Non è allenamento muscolare. È un'esperienza incarnata: il corpo che impara a stare in verticale,
              a gestire la gravità, a trovare equilibrio nella relazione con la parete e con l'altro.
            </p>
          </motion.div>
        </div>
      </section>

      <Approach />

      {/* Filosofia approfondita */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Oltre la tecnica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Il metodo KataClimb nasce dall'osservazione che l'arrampicata è molto più di uno sport.
                È un laboratorio dove il corpo parla prima della mente, dove la paura diventa materiale
                di lavoro, dove la relazione con l'altro — chi assicura, chi osserva, chi accompagna —
                è parte integrante dell'esperienza.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dal 1992, Marco Nescatelli ha sviluppato questo approccio lavorando con migliaia di persone
                di ogni età, trasformando ogni lezione in un'occasione di crescita autentica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Per chi è pensato
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Il metodo si applica a tutti i{" "}
                <Link to="/percorsi-arrampicata-adulti" className="text-accent hover:underline font-medium">
                  percorsi dell'Accademia
                </Link>
                : dai bambini che scoprono il gioco verticale, ai ragazzi che cercano sfide autentiche,
                agli adulti che vogliono confrontarsi con i propri limiti.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La stessa filosofia guida anche i{" "}
                <Link to="/katacamp-arrampicata-estero" className="text-accent hover:underline font-medium">
                  KataCamp internazionali
                </Link>
                , dove il metodo si esprime nella sua forma più intensa: settimane di vita comunitaria
                e arrampicata in falesia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* CTA */}
      <section className="section-padding bg-accent/5">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prova il metodo KataClimb
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            La prima lezione è a 15€. Scopri come l'arrampicata può diventare strumento di crescita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
            >
              Prenota su WhatsApp
            </a>
            <Link
              to="/percorsi-arrampicata-adulti"
              className="border border-border text-foreground px-8 py-3 rounded font-medium hover:bg-muted transition-colors"
            >
              Scopri i Percorsi
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MetodoPage;
