const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kata-climb-flow.lovable.app/#business",
      "name": "Accademia di ArrampiKata RCC",
      "description": "Scuola di arrampicata a Roma dal 1992. Corsi per adulti, bambini e ragazzi con il metodo KataClimb.",
      "url": "https://kata-climb-flow.lovable.app",
      "telephone": "+39 331 874 3953",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Roma",
        "addressRegion": "RM",
        "addressCountry": "IT"
      },
      "foundingDate": "1992",
      "founder": {
        "@type": "Person",
        "name": "Marco Nescatelli"
      },
      "priceRange": "€€",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": []
    },
    {
      "@type": "Person",
      "@id": "https://kata-climb-flow.lovable.app/#marco",
      "name": "Marco Nescatelli",
      "jobTitle": "Fondatore e ideatore del metodo KataClimb",
      "description": "Oltre 30 anni dedicati all'insegnamento dell'arrampicata come strumento di crescita personale. Autore del libro 'Scalare l'Impossibile'.",
      "worksFor": { "@id": "https://kata-climb-flow.lovable.app/#business" },
      "knowsAbout": ["Arrampicata sportiva", "Metodo KataClimb", "Crescita personale", "Formazione outdoor"]
    },
    {
      "@type": "Person",
      "@id": "https://kata-climb-flow.lovable.app/#giuseppe",
      "name": "Giuseppe",
      "jobTitle": "Pietra Miliare — Fondatore e guida dell'Accademia",
      "worksFor": { "@id": "https://kata-climb-flow.lovable.app/#business" },
      "knowsAbout": ["Arrampicata", "Istruzione sportiva"]
    },
    {
      "@type": "Course",
      "name": "Corso Open — Arrampicata Base",
      "description": "Il primo livello del metodo KataClimb. Impari le basi dell'arrampicata in un gruppo guidato a Roma.",
      "provider": { "@id": "https://kata-climb-flow.lovable.app/#business" },
      "coursePrerequisites": "Nessuna esperienza richiesta",
      "offers": {
        "@type": "Offer",
        "price": "15",
        "priceCurrency": "EUR",
        "description": "Prima lezione di prova"
      }
    },
    {
      "@type": "Course",
      "name": "Corso Advance — Arrampicata Avanzata",
      "description": "Livello avanzato del metodo KataClimb per scalatori con esperienza che vogliono progredire.",
      "provider": { "@id": "https://kata-climb-flow.lovable.app/#business" },
      "coursePrerequisites": "Completamento del Corso Open"
    },
    {
      "@type": "Course",
      "name": "Corso Intro — Arrampicata in Corda Adulti",
      "description": "Corso di corda per adulti: assicurazione, nodi e manovre base per scalare in sicurezza con il metodo KataClimb a Roma.",
      "provider": { "@id": "https://kata-climb-flow.lovable.app/#business" }
    },
    {
      "@type": "Course",
      "name": "Corso Evo — Gestione della caduta e sincronizzazione di cordata",
      "description": "Il corso EVO è il livello in cui la cordata impara a gestire davvero la caduta. Procedure, sicura dinamica e sincronizzazione con il metodo KataClimb a Roma.",
      "provider": { "@id": "https://kata-climb-flow.lovable.app/#business" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto costa la prima lezione di arrampicata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La prima lezione di prova costa 15€. Nessun vincolo, nessun abbonamento. Puoi prenotarla contattando la segreteria su WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Serve esperienza per iniziare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, non serve alcuna esperienza. Il Corso Open è pensato per chi parte da zero. L'importante è essere presenti e motivati."
          }
        },
        {
          "@type": "Question",
          "name": "Devo portare attrezzatura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per la prima lezione non serve portare nulla di speciale. L'attrezzatura tecnica (scarpette, imbrago) viene fornita dall'Accademia."
          }
        },
        {
          "@type": "Question",
          "name": "Quali sono i percorsi disponibili?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I percorsi sono: Open (base), Advance (avanzato) per adulti; Intro e Evo sono i corsi di corda per adulti. Ogni livello ha obiettivi chiari e verificabili."
          }
        },
        {
          "@type": "Question",
          "name": "Cos'è il KataCamp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I KataCamp sono settimane intensive di arrampicata in contesti naturali internazionali (Italia, Spagna, Norvegia, Francia e altri). Dal 1992, oltre 75 camp realizzati."
          }
        }
      ]
    }
  ]
};

const SeoStructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
);

export default SeoStructuredData;
