import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Percorsi", href: "/percorsi-arrampicata-adulti" },
  { label: "Metodo", href: "/metodo-kataclimb" },
  { label: "KataCamp", href: "/katacamp-arrampicata-estero" },
  { label: "Contatti", href: "/#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setOpen(false);
    // For hash links on the home page, scroll to section
    if (href.startsWith("/#") && isHomePage) {
      const el = document.querySelector(href.replace("/", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderLink = (link: { label: string; href: string }) => {
    const isHash = link.href.startsWith("/#");
    
    if (isHash) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={() => handleNavClick(link.href)}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => setOpen(false)}
        className={`text-sm font-medium transition-colors ${
          location.pathname === link.href
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          RCC
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(renderLink)}
          <a
            href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Prenota
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map(renderLink)}
              <a
                href="https://wa.me/393318743953?text=Ciao!%20Vorrei%20prenotare%20una%20lezione%20di%20prova."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded text-center hover:opacity-90 transition-opacity"
              >
                Prenota
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
