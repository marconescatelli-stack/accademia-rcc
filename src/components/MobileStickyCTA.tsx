import { motion } from "framer-motion";

const MobileStickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-bottom"
    >
      <a
        href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-accent text-accent-foreground text-center py-3 rounded font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        Prenota Prima Lezione — 15€
      </a>
    </motion.div>
  );
};

export default MobileStickyCTA;
