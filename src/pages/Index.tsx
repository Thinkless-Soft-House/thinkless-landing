
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MotivationSection from "@/components/sections/MotivationSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import CasesSection from "@/components/sections/CasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoffeeSection from "@/components/sections/CoffeeSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection scrollPosition={scrollPosition} />
      <MotivationSection />
      <TimelineSection />
      <SolutionsSection />
      <CasesSection />
      <TestimonialsSection />
      <CoffeeSection />
      <FooterSection />
    </div>
  );
};

export default Index;
