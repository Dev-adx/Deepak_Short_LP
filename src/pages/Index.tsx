import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import WorkshopDaysSection from "@/components/WorkshopDaysSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => (
  <div className="min-h-screen bg-background pb-20" id="register">
    <HeroSection />
    <TestimonialsSection />
    <AboutSection />
    <WhatYouLearnSection />
    <WorkshopDaysSection />
    <FAQSection />
    <StickyCTA />
  </div>
);

export default Index;
