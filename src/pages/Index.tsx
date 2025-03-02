
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Coffee, MessageCircle, ArrowRight, MousePointer, Calendar, Navigation, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Process timeline steps
  const timelineSteps = [
    {
      title: "Coleta de Informações",
      description: "Entendemos o seu problema e coletamos todos os dados necessários para iniciar o processo de solução.",
      icon: <MessageCircle className="h-8 w-8 text-thinkless-blue" />,
    },
    {
      title: "Ideia Prototípica",
      description: "Desenvolvermos protótipos iniciais baseados nos dados coletados, buscando a melhor solução possível.",
      icon: <MousePointer className="h-8 w-8 text-thinkless-orange" />,
    },
    {
      title: "Alinhamento",
      description: "Refinamos a ideia em conjunto com você, garantindo que estamos no caminho certo para resolver seu problema.",
      icon: <Calendar className="h-8 w-8 text-thinkless-red" />,
    },
    {
      title: "Formulação Oficial",
      description: "Documentamos e estruturamos a solução final, preparando-a para o desenvolvimento.",
      icon: <Navigation className="h-8 w-8 text-thinkless-blue-dark" />,
    },
    {
      title: "Desenvolvimento e Lançamento",
      description: "Transformamos a ideia em código, testamos exaustivamente e entregamos a solução pronta para uso.",
      icon: <Video className="h-8 w-8 text-thinkless-orange-dark" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active timeline step based on scroll position
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (top < viewportHeight && top + height > 0) {
          const progress = Math.max(0, Math.min(1, 1 - (top / viewportHeight)));
          const stepIndex = Math.min(
            timelineSteps.length - 1,
            Math.floor(progress * timelineSteps.length)
          );
          setCurrentStep(stepIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - Split Layout with Animated Background */}
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
        
        {/* Hero Animated Visual */}
        <div 
          className="w-full lg:w-1/2 h-full flex items-center justify-center z-10 p-8 lg:p-16"
          style={parallaxStyle}
        >
          <div className="relative w-full max-w-lg aspect-square">
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
              <div className="w-1/3 h-1/3 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-thinkless-blue animate-float">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-thinkless-blue to-thinkless-blue-light">T</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* O Que Nos Motiva - Horizontal Scrolling Cards */}
      <section className="min-h-screen py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText 
            animation="fade-in" 
            className="heading-md text-center mb-4 text-thinkless-blue"
          >
            O que nos motiva
          </AnimatedText>
          
          <AnimatedText 
            animation="fade-in-up" 
            delay={300} 
            className="heading-lg text-center max-w-3xl mx-auto mb-16"
          >
            Nossa paixão por criar soluções que fazem a diferença
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard animation="fade-in-up" delay={400} className="bg-white p-8 h-full">
              <div className="w-16 h-16 rounded-full bg-thinkless-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-blue">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Visão Clara</h3>
              <p className="text-muted-foreground">
                Enxergamos além do óbvio para encontrar soluções que realmente transformam a maneira como os negócios funcionam.
              </p>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in-up" delay={600} className="bg-white p-8 h-full">
              <div className="w-16 h-16 rounded-full bg-thinkless-orange/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-orange">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14Z"></path>
                  <path d="M7 22V7H2.66a2 2 0 0 0-2 2.3l1.38 9A2 2 0 0 0 4.04 20H7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-muted-foreground">
                Não nos contentamos com o básico. Buscamos a excelência em cada linha de código e em cada interface que criamos.
              </p>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in-up" delay={800} className="bg-white p-8 h-full">
              <div className="w-16 h-16 rounded-full bg-thinkless-red/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-red">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Conexão Humana</h3>
              <p className="text-muted-foreground">
                Por trás de cada código está uma equipe apaixonada por criar soluções que conectam pessoas e transformam experiências.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Nossa Timeline Interativa */}
      <section id="nossa-timeline" ref={timelineRef} className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
            Nossa Metodologia
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
            Como transformamos problemas em soluções
          </AnimatedText>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Timeline visualization */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
                
                {/* Timeline nodes */}
                {timelineSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex gap-6 mb-12 transition-all duration-500",
                      index > currentStep ? "opacity-40" : "opacity-100"
                    )}
                  >
                    <div className="relative z-10">
                      <div 
                        className={cn(
                          "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
                          index === currentStep 
                            ? "bg-thinkless-blue text-white scale-110" 
                            : index < currentStep 
                              ? "bg-thinkless-blue/20 text-thinkless-blue"
                              : "bg-gray-100 text-gray-400"
                        )}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 
                        className={cn(
                          "text-xl font-bold mb-2 transition-all duration-500",
                          index === currentStep ? "text-thinkless-blue" : "text-foreground"
                        )}
                      >
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Illustration or animation */}
            <div className="order-1 lg:order-2 sticky top-32 h-[400px]">
              <div className="relative w-full h-full">
                <div 
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-16 h-16 bg-thinkless-blue/10 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-thinkless-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Entendemos seu problema</h3>
                    <p className="text-muted-foreground">
                      Nossa primeira etapa é entender profundamente o seu negócio e os desafios que você enfrenta. Esta fase de coleta é fundamental para construirmos a solução ideal.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === 1 ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-16 h-16 bg-thinkless-orange/10 rounded-full flex items-center justify-center mb-4">
                      <MousePointer className="h-8 w-8 text-thinkless-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Prototipamos rapidamente</h3>
                    <p className="text-muted-foreground">
                      Com base nos dados coletados, criamos protótipos funcionais que permitem visualizar e testar as possíveis soluções antes do desenvolvimento completo.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === 2 ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-16 h-16 bg-thinkless-red/10 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-thinkless-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Refinamos juntos</h3>
                    <p className="text-muted-foreground">
                      Trabalhamos colaborativamente, ajustando e refinando a solução com base no seu feedback e nas necessidades específicas do seu negócio.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === 3 ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-16 h-16 bg-thinkless-blue-dark/10 rounded-full flex items-center justify-center mb-4">
                      <Navigation className="h-8 w-8 text-thinkless-blue-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Documentamos tudo</h3>
                    <p className="text-muted-foreground">
                      Estruturamos e documentamos cuidadosamente cada aspecto da solução, garantindo uma base sólida para o desenvolvimento e futuras manutenções.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === 4 ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-16 h-16 bg-thinkless-orange-dark/10 rounded-full flex items-center justify-center mb-4">
                      <Video className="h-8 w-8 text-thinkless-orange-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Entregamos valor</h3>
                    <p className="text-muted-foreground">
                      Desenvolvemos, testamos e implementamos a solução final, garantindo que ela atenda perfeitamente às necessidades do seu negócio e gere valor real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossas Soluções - Carousel Cards */}
      <section className="min-h-screen py-24 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/3 -right-64 w-[800px] h-[800px] rounded-full bg-thinkless-blue/5"></div>
          <div className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] rounded-full bg-thinkless-orange/5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
            Nossas Soluções
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
            Tecnologia personalizada para resolver problemas reais
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={200} className="bg-white p-8 border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-thinkless-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-blue">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Landing Pages</h3>
              <p className="text-muted-foreground mb-6">
                Páginas de alto impacto que convertem visitantes em clientes, com design personalizado e foco em resultados.
              </p>
              <a href="#cafe" className="text-thinkless-blue font-medium flex items-center gap-1 group">
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedCard>
            
            <AnimatedCard delay={400} className="bg-white p-8 border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-thinkless-orange/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-orange">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sistemas Web</h3>
              <p className="text-muted-foreground mb-6">
                Aplicações robustas e personalizadas que automatizam processos e aumentam a eficiência do seu negócio.
              </p>
              <a href="#cafe" className="text-thinkless-orange font-medium flex items-center gap-1 group">
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedCard>
            
            <AnimatedCard delay={600} className="bg-white p-8 border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-thinkless-red/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-red">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Apps Mobile</h3>
              <p className="text-muted-foreground mb-6">
                Aplicativos nativos e híbridos que proporcionam experiências excepcionais e conectam você aos seus clientes.
              </p>
              <a href="#cafe" className="text-thinkless-red font-medium flex items-center gap-1 group">
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedCard>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#cafe" className="btn-primary inline-flex items-center gap-2">
              Vamos conversar sobre seu projeto
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Nossos Cases - Storytelling Approach */}
      <section className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
            Nossos Cases
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
            Histórias de transformação digital
          </AnimatedText>
          
          <div className="space-y-24">
            <AnimatedCard animation="fade-in-up" className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-20 h-1 bg-thinkless-blue mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4">Empresa de Logística</h3>
                  <p className="paragraph mb-6">
                    Desenvolvemos um sistema completo de gerenciamento de entregas que reduziu em 40% o tempo de processamento de pedidos e aumentou a precisão das entregas em 65%.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">Sistema Web</span>
                    <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">App Mobile</span>
                    <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">Integrações API</span>
                  </div>
                  <a href="#cafe" className="text-thinkless-blue font-medium flex items-center gap-1 group">
                    Ver detalhes do projeto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-thinkless-blue/20 to-thinkless-orange/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-blue">
                          <path d="M14 6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                          <path d="M22 6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
                          <path d="M14 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                          <path d="M22 20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in-up" className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-2">
                  <div className="w-20 h-1 bg-thinkless-orange mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4">Fintech Emergente</h3>
                  <p className="paragraph mb-6">
                    Criamos uma plataforma segura e intuitiva que permitiu à empresa escalar suas operações em 300% em apenas 6 meses, com zero incidentes de segurança.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">Desenvolvimento Web</span>
                    <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">Segurança</span>
                    <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">Dashboard</span>
                  </div>
                  <a href="#cafe" className="text-thinkless-orange font-medium flex items-center gap-1 group">
                    Ver detalhes do projeto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="order-1 lg:order-1">
                  <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-thinkless-orange/20 to-thinkless-red/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-orange">
                          <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                          <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                          <line x1="12" x2="12" y1="22" y2="13" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Testemunhos - Card Hover Effects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
            O que nossos clientes dizem
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
            Parcerias que fazem a diferença
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <AnimatedCard 
                key={index} 
                animation="fade-in-up" 
                delay={400 + index * 200} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-thinkless-blue">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">
                      {["Carlos Silva", "Marina Oliveira", "Ricardo Mendes"][index]}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {["CEO, Logística Express", "CTO, FinTech Brasil", "Diretor, Retail Solutions"][index]}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  {[
                    ""A Thinkless transformou nossa operação logística com uma solução que realmente entendeu nosso problema. Não só entregaram no prazo, como superaram nossas expectativas."",
                    ""Encontramos na Thinkless um parceiro que não só entendeu nossa visão, mas nos ajudou a aprimorá-la. A solução entregue permitiu que escalássemos com segurança e confiança."",
                    ""A abordagem personalizada e o comprometimento da equipe Thinkless fizeram toda a diferença. Eles realmente se importam com o sucesso do cliente.""
                  ][index]}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Café - Interactive */}
      <section id="cafe" className="min-h-screen py-24 relative bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-thinkless-blue/5 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-thinkless-orange/5 to-transparent rounded-tl-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
            Vamos tomar um café?
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-6">
            Queremos entender o seu desafio
          </AnimatedText>
          
          <AnimatedText animation="fade-in-up" delay={500} className="paragraph text-center max-w-2xl mx-auto mb-16">
            Seja virtual ou presencial, um bom café é sempre o começo de ótimas ideias. 
            Conte-nos o seu problema e vamos encontrar a solução ideal juntos.
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side - Visual */}
            <AnimatedCard animation="fade-in-left" className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-thinkless-blue/10 rounded-full animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-1/2 h-1/2">
                    <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Coffee className="h-8 w-8 text-thinkless-orange" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-thinkless-blue" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-thinkless-red" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            {/* Right side - Contact options */}
            <AnimatedCard animation="fade-in-right" className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-center">
                <div className="w-14 h-14 rounded-full bg-thinkless-blue/10 flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-thinkless-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Café Presencial</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Vamos marcar um encontro em nosso escritório ou em um café de sua preferência.
                  </p>
                  <a href="tel:+5511999999999" className="text-thinkless-blue text-sm font-medium flex items-center gap-1 hover:underline">
                    Ligar: (11) 99999-9999 
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-center">
                <div className="w-14 h-14 rounded-full bg-thinkless-orange/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-thinkless-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Café Virtual</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Prefere uma reunião online? Vamos marcar uma videochamada rápida.
                  </p>
                  <a href="mailto:contato@thinkless.com.br" className="text-thinkless-orange text-sm font-medium flex items-center gap-1 hover:underline">
                    contato@thinkless.com.br 
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-center">
                <div className="w-14 h-14 rounded-full bg-thinkless-red/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-thinkless-red" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Chat Rápido</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Tem uma dúvida rápida? Podemos conversar por WhatsApp.
                  </p>
                  <a href="https://wa.me/5511999999999" className="text-thinkless-red text-sm font-medium flex items-center gap-1 hover:underline">
                    WhatsApp 
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-thinkless-blue to-thinkless-blue-light">
                Thinkless
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                Soluções tecnológicas que transformam o seu negócio
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <a href="#hero" className="text-sm hover:text-thinkless-blue transition-colors">
                Início
              </a>
              <a href="#nossa-timeline" className="text-sm hover:text-thinkless-blue transition-colors">
                Timeline
              </a>
              <a href="#cafe" className="text-sm hover:text-thinkless-blue transition-colors">
                Contato
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Thinkless. Todos os direitos reservados.
            </p>
            
            <div className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-thinkless-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-thinkless-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-thinkless-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-thinkless-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
