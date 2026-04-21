import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import TargetCards from "@/components/TargetCards";
import Onboarding from "@/components/Onboarding";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PercorsiPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Percorsi Arrampicata Adulti, Bambini e Ragazzi a Roma | RCC</title>
        <meta name="description" content="Corsi di arrampicata a Roma per adulti, bambini e ragazzi. Dal livello Open al livello Advance con il metodo KataClimb. Prenota la prima lezione a 15€." />
        <link rel="canonical" href="https://kata-climb-flow.lovable.app/percorsi-arrampicata-adulti" />
      </Helmet>

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-card">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Percorsi</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Corsi di Arrampicata a Roma
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mb-6">
              Per ogni età un percorso verticale, strutturato con il{" "}
              <Link to="/metodo-kataclimb" className="text-accent hover:underline font-medium">
                metodo KataClimb
              </Link>
              . Dalla prima lezione alla frequenza libera: un cammino di crescita attraverso il corpo.
            </p>
          </motion.div>
        </div>
      </section>

      <Onboarding />
      <TargetCards />

      {/* Dettaglio livelli */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              I livelli del percorso
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Ogni livello ha obiettivi chiari e verificabili. La progressione è naturale, mai forzata.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Open",
                target: "Adulti principianti",
                desc: "Il primo livello per chi parte da zero. Impari le basi dell'arrampicata, la gestione dell'imbrago, i nodi fondamentali e i primi movimenti in parete. In un gruppo guidato con il metodo KataClimb.",
              },
              {
                title: "Advance",
                target: "Adulti con esperienza",
                desc: "Per chi ha completato il livello Open. Tecniche avanzate di progressione, gestione del lead, vie più impegnative. Il livello dove l'arrampicata diventa linguaggio del corpo.",
              },
              {
                title: "Intro",
                target: "Adulti — Corso di corda",
                desc: "Il primo approccio alla corda. Impari a gestire l'assicurazione, i nodi essenziali e le manovre base per scalare in sicurezza con un compagno. Il ponte tra il boulder e l'arrampicata in corda.",
              },
              {
                title: "Evo",
                target: "Adulti — Gestione della caduta e sincronizzazione di cordata",
                desc: "Il corso EVO è il livello in cui la cordata impara a gestire davvero la caduta. Non si lavora sul \"fare il volo\", ma sulle procedure e sui processi che permettono di gestirlo in sicurezza. Attraverso esercizi progressivi impari a leggere la dinamica della caduta, mantenere una sicura dinamica e smorzare il volo del compagno accompagnandone il movimento. L'obiettivo è sviluppare sincronizzazione, tempismo e sensibilità nella gestione della corda, trasformando la caduta da evento temuto a processo gestibile. Nel metodo KataClimb la sicurezza nasce dalla relazione: due persone che imparano a muoversi nello stesso sistema, sostenendosi nella progressione.",
              },
            ].map((level, i) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-border p-8 hover:border-accent/50 transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{level.target}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">{level.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA finale */}
      <section className="section-padding bg-accent/5">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inizia il tuo percorso
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Prenota la tua prima lezione a 15€. Nessun vincolo, nessun abbonamento.
          </p>
          <a
            href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Prenota su WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default PercorsiPage;
