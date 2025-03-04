
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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Initialize on mount
    handleScroll();
    handleResize();
    
    // This fixes a common mobile Safari issue where the vh unit is calculated incorrectly
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection scrollPosition={scrollPosition} />
      <MotivationSection />
      <TimelineSection isMobile={isMobile} />
      <SolutionsSection />
      <CasesSection />
      <TestimonialsSection />
      <CoffeeSection />
      <FooterSection />
    </div>
  );
};

export default Index;
