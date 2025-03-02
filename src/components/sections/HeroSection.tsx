
import { useEffect, useState, useMemo } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Coffee, Star, Code, Lightbulb, Sparkles, Zap, Brain } from "lucide-react";

interface HeroSectionProps {
  scrollPosition: number;
}

const HeroSection = ({ scrollPosition }: HeroSectionProps) => {
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  // Floating icons around the logo
  const floatingIcons = useMemo(() => [
    { 
      Icon: Code, 
      color: "text-thinkless-blue", 
      size: 20, 
      animationDuration: '15s',
      initialPosition: { top: '25%', left: '42%' },
      animationPath: 'floating-circle-1'
    },
    { 
      Icon: Lightbulb, 
      color: "text-thinkless-orange", 
      size: 24, 
      animationDuration: '18s',
      initialPosition: { top: '60%', left: '48%' },
      animationPath: 'floating-circle-2'
    },
    { 
      Icon: Sparkles, 
      color: "text-thinkless-red", 
      size: 18, 
      animationDuration: '20s',
      initialPosition: { top: '40%', left: '75%' },
      animationPath: 'floating-circle-3'
    },
    { 
      Icon: Zap, 
      color: "text-thinkless-blue-dark", 
      size: 22, 
      animationDuration: '17s',
      initialPosition: { top: '30%', left: '65%' },
      animationPath: 'floating-circle-4'
    },
    { 
      Icon: Brain, 
      color: "text-thinkless-orange-dark", 
      size: 26, 
      animationDuration: '22s',
      initialPosition: { top: '65%', left: '70%' },
      animationPath: 'floating-circle-5'
    },
    { 
      Icon: Star, 
      color: "text-thinkless-blue-light", 
      size: 16, 
      animationDuration: '12s',
      initialPosition: { top: '20%', left: '55%' },
      animationPath: 'floating-circle-6'
    },
  ], []);

  return (
    <section className="min-h-screen relative flex flex-col lg:flex-row items-center overflow-hidden pt-20">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute right-0 top-0 w-96 h-96 bg-thinkless-blue/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ 
            transform: `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.01}deg)`,
            animationDuration: '15s' 
          }}
        ></div>
        <div 
          className="absolute left-20 bottom-20 w-80 h-80 bg-thinkless-orange/20 rounded-full filter blur-3xl animate-pulse-slow" 
          style={{ 
            transform: `translateY(-${scrollPosition * 0.05}px)`,
            animationDuration: '20s',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute left-1/3 top-1/3 w-64 h-64 bg-thinkless-red/10 rounded-full filter blur-3xl animate-pulse-slow" 
          style={{ 
            transform: `translateX(${scrollPosition * 0.1}px)`,
            animationDuration: '25s',
            animationDelay: '1s'
          }}
        ></div>
      </div>
      
      {/* Hero Content */}
      <div className="w-full lg:w-1/2 h-full flex items-center z-10 p-8 lg:p-16">
        <div className="max-w-xl">
          <AnimatedText 
            animation="fade-in" 
            className="text-sm lg:text-base text-thinkless-blue font-medium mb-4 tracking-wider"
          >
            BEM-VINDO À THINKLESS
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in" 
            delay={300}
            className="heading-xl mb-6"
          >
            <span className="relative">
              Transformando 
              <span className="absolute -right-3 -top-3 text-4xl text-thinkless-orange">*</span>
            </span> 
            <br />
            ideias em 
            <span className="text-thinkless-blue"> soluções</span> reais
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in-up" 
            delay={600} 
            className="paragraph mb-8"
          >
            Somos mais que uma software house. Somos parceiros que pensam, 
            criam e desenvolvem tecnologia para resolver problemas 
            reais de forma eficiente e inovadora.
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={900}>
            <div className="flex flex-wrap gap-4">
              <a href="#nossa-timeline" className="btn-primary flex items-center gap-2">
                Explore nossa jornada
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#cafe" className="btn-secondary flex items-center gap-2">
                Vamos tomar um café?
                <Coffee className="h-4 w-4" />
              </a>
            </div>
          </AnimatedText>
        </div>
      </div>
      
      {/* Hero Animated Visual with floating icons */}
      <div 
        className="w-full lg:w-1/2 h-full flex items-center justify-center z-10 p-8 lg:p-16"
        style={parallaxStyle}
      >
        <div className="relative w-full max-w-lg aspect-square">
          {/* Add the floating icons */}
          {floatingIcons.map((icon, index) => (
            <div 
              key={index}
              className={`absolute ${icon.animationPath} z-20`}
              style={{
                top: icon.initialPosition.top,
                left: icon.initialPosition.left,
                animationDuration: icon.animationDuration,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className={`p-2 bg-white rounded-full shadow-md ${icon.animationPath === 'floating-circle-1' ? 'animate-float' : ''}`}>
                <icon.Icon className={icon.color} size={icon.size} />
              </div>
            </div>
          ))}
          
          {/* Animated layers */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-thinkless-blue-light to-transparent opacity-20 animate-spin" style={{animationDuration: '30s'}}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full border-4 border-thinkless-orange border-dashed opacity-30 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-thinkless-red to-transparent opacity-20 animate-pulse" style={{animationDuration: '4s'}}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-1/3 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-thinkless-blue">
              <img 
                src="/lovable-uploads/c35fd64b-39d6-4a44-9f86-27f63a52854a.png" 
                alt="Thinkless Logo" 
                className="w-full h-full object-contain p-2" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
