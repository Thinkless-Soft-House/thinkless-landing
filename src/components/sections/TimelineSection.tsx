
import { useRef, useState, useEffect } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { MessageCircle, MousePointer, Calendar, Navigation, Video } from "lucide-react";
import { cn } from "@/lib/utils";

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

const TimelineSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
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

  return (
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
  );
};

export default TimelineSection;
