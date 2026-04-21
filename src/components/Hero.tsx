import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-climbing.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arrampicata su roccia con il metodo KataClimb all'Accademia RCC di Roma"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-6 font-body"
        >
          Dal 1992
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Accademia di
          <br />
          ArrampiKata RCC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto mb-10 font-body"
        >
          Stare in verticale, elevandosi.
          <br />
          Corpo. Relazione. Direzione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#onboarding"
            className="bg-accent text-accent-foreground px-8 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Prenota la Prima Lezione
          </a>
          <Link
            to="/percorsi-arrampicata-adulti"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Scopri i Percorsi
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-primary-foreground/30" />
      </motion.div>
    </section>
  );
};

export default Hero;
