import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-lg px-6">
        <h1 className="font-display text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-xl text-foreground font-display font-semibold mb-2">Pagina non trovata</p>
        <p className="text-muted-foreground mb-8">
          La pagina che cerchi non esiste. Scopri i nostri percorsi di arrampicata a Roma.
        </p>
        <nav className="flex flex-col sm:flex-row gap-3 justify-center" aria-label="Navigazione percorsi">
          <Link to="/percorsi-arrampicata-adulti" className="bg-accent text-accent-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Scopri i Percorsi
          </Link>
          <Link to="/metodo-kataclimb" className="border border-border text-foreground px-6 py-3 rounded text-sm font-medium hover:bg-muted transition-colors">
            Il Metodo KataClimb
          </Link>
          <Link to="/" className="text-sm text-muted-foreground underline hover:text-foreground transition-colors py-3">
            Torna alla Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
