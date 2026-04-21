import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Onboarding from "@/components/Onboarding";
import TargetCards from "@/components/TargetCards";
import Stats from "@/components/Stats";
import KataCamp from "@/components/KataCamp";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Founder from "@/components/Founder";
import SchoolProjects from "@/components/SchoolProjects";
import SeoStructuredData from "@/components/SeoStructuredData";

const Index = () => {
  return (
    <>
      <SeoStructuredData />
      <Layout>
        <Hero />
        <Approach />
        <Onboarding />
        <TargetCards />
        <Stats />
        <KataCamp />
        <Testimonials />
        <Founder />
        <Team />
        <SchoolProjects />
      </Layout>
    </>
  );
};

export default Index;
