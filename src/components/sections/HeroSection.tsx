
import { useEffect, useState, useMemo } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Coffee, Star, Code, Lightbulb, Sparkles, Zap, Brain } from "lucide-react";
import { useParallax } from "@/hooks/use-scroll-animation";

interface HeroSectionProps {
  scrollPosition: number;
}

const HeroSection = ({ scrollPosition }: HeroSectionProps) => {
  // Use our new hook for more fluid parallax
  const parallax = useParallax(0.2);
  const slowParallax = useParallax(0.05);
  const reverseParallax = useParallax(-0.1);
  
  // For animated background blobs
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
    <section id="hero" className="min-h-screen relative flex flex-col lg:flex-row items-center overflow-hidden pt-20">
      {/* Enhanced Background Animation Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className={`absolute right-0 top-0 w-96 h-96 bg-thinkless-blue/20 rounded-full filter blur-3xl animate-pulse-slow transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.01}deg)`,
            animationDuration: '15s' 
          }}
        ></div>
        <div 
          className={`absolute left-20 bottom-20 w-80 h-80 bg-thinkless-orange/20 rounded-full filter blur-3xl animate-pulse-slow transition-opacity duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translateY(-${scrollPosition * 0.05}px)`,
            animationDuration: '20s',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className={`absolute left-1/3 top-1/3 w-64 h-64 bg-thinkless-red/10 rounded-full filter blur-3xl animate-pulse-slow transition-opacity duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translateX(${scrollPosition * 0.1}px)`,
            animationDuration: '25s',
            animationDelay: '1s'
          }}
        ></div>
      </div>
      
      {/* Hero Content with enhanced parallax */}
      <div className="w-full lg:w-1/2 h-full flex items-center z-10 p-8 lg:p-16" style={slowParallax.style}>
        <div className="max-w-xl">
          <AnimatedText 
            animation="fade-in" 
            className="text-sm lg:text-base text-thinkless-blue font-medium mb-4 tracking-wider"
            rootMargin="0px 0px -50px 0px"
          >
            BEM-VINDO À THINKLESS
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in" 
            delay={300}
            className="heading-xl mb-6"
            rootMargin="0px 0px -50px 0px"
          >
            <span className="relative">
              Transformando 
              <span className="absolute -right-3 -top-3 text-4xl text-thinkless-orange animate-pulse-slow">*</span>
            </span> 
            <br />
            ideias em 
            <span className="text-thinkless-blue"> soluções</span> reais
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in-up" 
            delay={600} 
            className="paragraph mb-8"
            rootMargin="0px 0px -50px 0px"
          >
            Somos mais que uma software house. Somos parceiros que pensam, 
            criam e desenvolvem tecnologia para resolver problemas 
            reais de forma eficiente e inovadora.
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in-up" 
            delay={900}
            rootMargin="0px 0px -50px 0px"
          >
            <div className="flex flex-wrap gap-4">
              <a href="#nossa-timeline" className="btn-primary flex items-center gap-2 group">
                Explore nossa jornada
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#cafe" className="btn-secondary flex items-center gap-2 group">
                Vamos tomar um café?
                <Coffee className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
              </a>
            </div>
          </AnimatedText>
        </div>
      </div>
      
      {/* Hero Animated Visual with enhanced floating icons and parallax */}
      <div 
        className="w-full lg:w-1/2 h-full flex items-center justify-center z-10 p-8 lg:p-16"
        style={parallax.style}
      >
        <div className="relative w-full max-w-lg aspect-square">
          {/* Add the floating icons with staggered entrance */}
          {floatingIcons.map((icon, index) => (
            <div 
              key={index}
              className={`absolute ${icon.animationPath} z-20 transition-all duration-1000`}
              style={{
                top: icon.initialPosition.top,
                left: icon.initialPosition.left,
                animationDuration: icon.animationDuration,
                animationDelay: `${index * 0.5}s`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'scale(1)' : 'scale(0.5)',
                transitionDelay: `${300 + index * 150}ms`
              }}
            >
              <div className={`p-2 bg-white rounded-full shadow-md ${icon.animationPath === 'floating-circle-1' ? 'animate-float' : ''}`}>
                <icon.Icon className={icon.color} size={icon.size} />
              </div>
            </div>
          ))}
          
          {/* Animated layers with staggered entrances */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-thinkless-blue-light to-transparent opacity-20 animate-spin" style={{animationDuration: '30s'}}></div>
          </div>
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-2/3 h-2/3 rounded-full border-4 border-thinkless-orange border-dashed opacity-30 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          </div>
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-thinkless-red to-transparent opacity-20 animate-pulse" style={{animationDuration: '4s'}}></div>
          </div>
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="w-1/3 h-1/3 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-thinkless-blue animate-float" style={{animationDuration: '6s'}}>
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
