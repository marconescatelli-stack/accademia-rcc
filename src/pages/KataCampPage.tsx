import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import KataCamp from "@/components/KataCamp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Mountain } from "lucide-react";

const highlights = [
  { icon: Calendar, title: "Dal 1992", desc: "Oltre 75 camp internazionali organizzati in 30+ anni di storia." },
  { icon: MapPin, title: "8 Paesi", desc: "Italia, Spagna, Norvegia, Francia, Grecia, Svizzera, Croazia, Turchia." },
  { icon: Users, title: "Comunità", desc: "Settimane di vita comunitaria, condivisione e crescita nel gruppo." },
  { icon: Mountain, title: "Falesia", desc: "Arrampicata outdoor nelle pareti naturali più belle d'Europa." },
];

const KataCampPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>KataCamp — Arrampicata all'Estero | Camp Internazionali RCC</title>
        <meta name="description" content="KataCamp: settimane intensive di arrampicata all'estero con il metodo KataClimb. Italia, Spagna, Norvegia, Francia e oltre. Camp dal 1992." />
        <link rel="canonical" href="https://kata-climb-flow.lovable.app/katacamp-arrampicata-estero" />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-card">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">KataCamp</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Arrampicata all'Estero
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Dal 1992, i KataCamp portano il{" "}
              <Link to="/metodo-kataclimb" className="text-accent hover:underline font-medium">
                metodo KataClimb
              </Link>{" "}
              in contesti naturali straordinari. Settimane intensive di arrampicata, formazione e vita comunitaria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border rounded-full">
                  <h.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <KataCamp />

      {/* Esperienza approfondita */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              L'esperienza KataCamp
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Un KataCamp non è una vacanza. È un'immersione totale nell'arrampicata e nella vita di gruppo.
              Ogni giornata è scandita dalla parete, dalla condivisione dei pasti, dal confronto serale.
              Si dorme vicini alla falesia, si scala insieme, si cresce insieme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I camp sono aperti a tutti i livelli: dai principianti che vogliono la loro prima esperienza
              outdoor, agli scalatori esperti che cercano nuove sfide. L'unico requisito è la voglia di mettersi in gioco.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vuoi prepararti per un KataCamp? Inizia con i{" "}
              <Link to="/percorsi-arrampicata-adulti" className="text-accent hover:underline font-medium">
                percorsi in palestra
              </Link>{" "}
              per costruire le basi tecniche e la sicurezza necessaria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/5">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vuoi partecipare a un KataCamp?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contattaci per scoprire le prossime date e destinazioni.
          </p>
          <a
            href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20informazioni%20sui%20prossimi%20KataCamp."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Informazioni KataCamp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default KataCampPage;
