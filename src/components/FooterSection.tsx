import { Mail, Phone, BookOpen } from "lucide-react";
import copertinaLibro from "@/assets/copertina-libro.jpeg";

const FooterSection = () => {
  return (
    <footer id="contatti" className="section-padding bg-foreground">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Segreteria */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">Segreteria</p>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Roberta</h3>
            <p className="text-sm text-primary-foreground/60 mb-6 max-w-sm">
              Per iscrizioni, informazioni sui corsi e qualsiasi domanda, Roberta è il tuo punto di riferimento.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@palestra-arrampicata-roma.it"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@palestra-arrampicata-roma.it
              </a>
              <a
                href="tel:+393318743953"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                +39 331 874 3953
              </a>
              <p className="text-xs text-primary-foreground/50 mt-3">
                Orari: Lun–Ven, 17:00–20:30
              </p>
            </div>
          </div>

          {/* Book */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">Il Libro</p>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Scalare l'Impossibile</h3>
            <a
              href="https://amzn.to/3NmlLM8"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6 max-w-[240px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={copertinaLibro} alt="Copertina del libro Scalare l'Impossibile di Marco Nescatelli" className="w-full h-auto" />
            </a>
            <p className="text-sm text-primary-foreground/60 mb-6 max-w-sm">
              Il libro di Marco Nescatelli che racconta il metodo, la filosofia e le storie dietro 30 anni di arrampicata educativa.
            </p>
            <a
              href="https://amzn.to/3NmlLM8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              <BookOpen size={16} />
              Acquista su Amazon →
            </a>
          </div>
        </div>

        {/* About SEO Section */}
        <div className="border-t border-primary-foreground/10 pt-12 mb-12">
          <h3 className="font-display text-lg font-semibold text-primary-foreground mb-4">
            About Accademia RCC
          </h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-3xl">
            L'Accademia di ArrampiKata RCC è tra le <strong className="text-primary-foreground/80">migliori palestre arrampicata Roma</strong>, attiva dal 1992. 
            La nostra <strong className="text-primary-foreground/80">palestra arrampicata Roma nord</strong> — vicina a <strong className="text-primary-foreground/80">Olgiata</strong>, <strong className="text-primary-foreground/80">La Storta</strong>, <strong className="text-primary-foreground/80">Formello</strong> e <strong className="text-primary-foreground/80">Le Rughe</strong> — offre 
            corsi di verticalità per adulti, bambini e ragazzi con il metodo KataClimb. 
            Cerchi <strong className="text-primary-foreground/80">arrampicata Roma vicino a me</strong>? Siamo il punto di riferimento per chi cerca un <strong className="text-primary-foreground/80">corso arrampicata Roma</strong>, 
            percorsi di crescita personale attraverso la verticalità e esperienze outdoor con i KataCamp internazionali. 
            Oltre 30 anni di esperienza nell'insegnamento dell'arrampicata come strumento educativo e di sviluppo.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm font-bold text-primary-foreground">
            Accademia di ArrampiKata RCC
          </p>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
