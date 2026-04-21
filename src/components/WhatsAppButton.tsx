import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/393318743953"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <MessageCircle size={28} fill="white" stroke="white" />
    </a>
  );
};

export default WhatsAppButton;
