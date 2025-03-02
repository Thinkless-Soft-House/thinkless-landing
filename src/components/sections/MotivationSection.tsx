
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { EyeIcon, Sparkles, Verified } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MotivationSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    {
      title: "Visão Clara",
      description: "Enxergamos além do óbvio para encontrar soluções que realmente transformam a maneira como os negócios funcionam.",
      icon: <EyeIcon className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-purple-600 to-indigo-700"
    },
    {
      title: "Excelência",
      description: "Não nos contentamos com o básico. Buscamos a excelência em cada linha de código e em cada interface que criamos.",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-orange-500 to-pink-600"
    },
    {
      title: "Conexão Humana",
      description: "Por trás de cada código está uma equipe apaixonada por criar soluções que conectam pessoas e transformam experiências.",
      icon: <Verified className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-purple-500/5"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-blue-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText 
          animation="fade-in" 
          className="heading-md text-center mb-4 text-purple-600"
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
        
        {/* Interactive Card Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-full">
            {cards.map((card, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  activeCard === idx 
                    ? cn("text-white shadow-lg", card.color.replace("from-", "bg-").split(" ")[0]) 
                    : "text-gray-500 hover:bg-gray-200"
                )}
              >
                {card.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main animated card display */}
        <div className="relative h-[400px] w-full max-w-4xl mx-auto">
          {cards.map((card, idx) => (
            <AnimatedCard
              key={idx}
              animation={activeCard === idx ? "fade-in-up" : "fade-in"}
              className={cn(
                "absolute inset-0 transition-all duration-500 flex flex-col lg:flex-row items-center gap-8 p-8 rounded-2xl",
                activeCard === idx ? "opacity-100 z-10 transform-none" : "opacity-0 z-0 scale-95 pointer-events-none"
              )}
            >
              <div className={`${card.color} p-8 rounded-2xl shadow-xl w-full lg:w-1/3 aspect-square flex items-center justify-center`}>
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {card.icon}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-white/20"></div>
                  <div className="absolute top-1/2 left-4 w-3 h-3 rounded-full bg-white/20"></div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold mb-6">{card.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>
                <p className="text-lg leading-relaxed">
                  Na Thinkless, acreditamos que {idx === 0 ? "a clareza de propósito é fundamental para entregarmos soluções que realmente fazem sentido para seu negócio." : idx === 1 ? "apenas o melhor é suficiente, por isso nos dedicamos a aprimorar constantemente nossas habilidades e processos." : "a tecnologia deve servir às pessoas, e não o contrário. Nosso foco está sempre em criar experiências que conectam e facilitam a vida."}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
