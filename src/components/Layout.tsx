import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCTA from "@/components/MobileStickyCTA";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="scroll-smooth">
      <Navbar />
      {children}
      <FooterSection />
      <WhatsAppButton />
      <MobileStickyCTA />
    </main>
  );
};

export default Layout;
