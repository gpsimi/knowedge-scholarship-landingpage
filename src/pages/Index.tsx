import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramHighlights from "@/components/ProgramHighlights";
import CurriculumGrid from "@/components/CurriculumGrid";
import ScholarshipCard from "@/components/ScholarshipCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProgramHighlights />
        <CurriculumGrid />
        <ScholarshipCard />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
