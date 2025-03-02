
import { useRef, useState, useEffect } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { MessageCircle, MousePointer, Calendar, Navigation, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// Process timeline steps
const timelineSteps = [
  {
    title: "Coleta de Informações",
    description: "Entendemos o seu problema e coletamos todos os dados necessários para iniciar o processo de solução.",
    icon: <MessageCircle className="h-8 w-8" />,
    bgColor: "from-blue-500 to-purple-600",
    textColor: "text-blue-500"
  },
  {
    title: "Ideia Prototípica",
    description: "Desenvolvermos protótipos iniciais baseados nos dados coletados, buscando a melhor solução possível.",
    icon: <MousePointer className="h-8 w-8" />,
    bgColor: "from-orange-400 to-pink-600",
    textColor: "text-orange-500"
  },
  {
    title: "Alinhamento",
    description: "Refinamos a ideia em conjunto com você, garantindo que estamos no caminho certo para resolver seu problema.",
    icon: <Calendar className="h-8 w-8" />,
    bgColor: "from-cyan-400 to-blue-500",
    textColor: "text-cyan-500"
  },
  {
    title: "Formulação Oficial",
    description: "Documentamos e estruturamos a solução final, preparando-a para o desenvolvimento.",
    icon: <Navigation className="h-8 w-8" />,
    bgColor: "from-emerald-400 to-teal-600",
    textColor: "text-emerald-500"
  },
  {
    title: "Desenvolvimento e Lançamento",
    description: "Transformamos a ideia em código, testamos exaustivamente e entregamos a solução pronta para uso.",
    icon: <Video className="h-8 w-8" />,
    bgColor: "from-purple-500 to-indigo-600",
    textColor: "text-purple-500"
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
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-50 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-purple-600">
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
              <div className="absolute left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 rounded-full"></div>
              
              {/* Timeline nodes */}
              {timelineSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex gap-8 mb-16 transition-all duration-500",
                    index > currentStep ? "opacity-40" : "opacity-100"
                  )}
                >
                  <div className="relative z-10">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg",
                        index === currentStep 
                          ? `bg-gradient-to-br ${step.bgColor} text-white scale-110 rotate-6` 
                          : index < currentStep 
                            ? `bg-gradient-to-br ${step.bgColor} text-white opacity-80 rotate-0`
                            : "bg-white text-gray-300 shadow-sm"
                      )}
                    >
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 
                      className={cn(
                        "text-xl font-bold mb-3 transition-all duration-500",
                        index === currentStep ? step.textColor : "text-foreground"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                    
                    {index === currentStep && (
                      <div className="w-12 h-1 mt-4 bg-gradient-to-r rounded-full from-transparent via-purple-500 to-transparent"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Illustration or animation */}
          <div className="order-1 lg:order-2 sticky top-32 h-[500px]">
            <div className="relative w-full h-full">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute transition-all duration-1000 inset-0 flex items-center justify-center",
                    currentStep === index ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                  )}
                >
                  <div className="relative w-full max-w-sm mx-auto">
                    <div 
                      className={`w-full p-12 rounded-2xl shadow-xl bg-gradient-to-br ${step.bgColor} text-white`}
                    >
                      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center transform rotate-6">
                        {step.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 mt-2">{step.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="text-white/90 leading-relaxed">
                        {index === 0 && "Nossa primeira etapa é entender profundamente o seu negócio e os desafios que você enfrenta. Esta fase de coleta é fundamental para construirmos a solução ideal."}
                        {index === 1 && "Com base nos dados coletados, criamos protótipos funcionais que permitem visualizar e testar as possíveis soluções antes do desenvolvimento completo."}
                        {index === 2 && "Trabalhamos colaborativamente, ajustando e refinando a solução com base no seu feedback e nas necessidades específicas do seu negócio."}
                        {index === 3 && "Estruturamos e documentamos cuidadosamente cada aspecto da solução, garantindo uma base sólida para o desenvolvimento e futuras manutenções."}
                        {index === 4 && "Desenvolvemos, testamos e implementamos a solução final, garantindo que ela atenda perfeitamente às necessidades do seu negócio e gere valor real."}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-white/10"></div>
                      <div className="absolute top-1/2 right-12 w-4 h-4 rounded-full bg-white/20"></div>
                      <div className="absolute bottom-12 left-12 w-6 h-6 rounded-full bg-white/15"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
