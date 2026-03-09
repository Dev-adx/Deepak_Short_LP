import HeroSection from "@/components/HeroSection";
import WhatYouLearn from "@/components/WhatYouLearn";
import PerfectFor from "@/components/PerfectFor";
import Testimonials from "@/components/Testimonials";
import AboutCoach from "@/components/AboutCoach";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBanner from "@/components/StickyBanner";

const Index = () => (
  <div className="min-h-screen bg-background pb-14">
    <HeroSection />
    <Testimonials />
    <WhatYouLearn />
    <PerfectFor />
    <CTABanner />
    <AboutCoach />
    <FAQ />
    <CTABanner />
    <Footer />
    <StickyBanner />
  </div>
);

export default Index;
