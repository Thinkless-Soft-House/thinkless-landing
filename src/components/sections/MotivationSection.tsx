
import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { EyeIcon, Sparkles, Verified } from "lucide-react";
import { cn } from "@/lib/utils";

// Componente para o botão de seleção de cartão
const CardSelector = ({ active, index, title, onClick }: { 
  active: boolean; 
  index: number; 
  title: string; 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-2 text-sm rounded-full font-medium whitespace-nowrap transition-all duration-300",
      active 
        ? "bg-thinkless-blue text-white shadow-md" 
        : "text-gray-600 hover:bg-gray-200"
    )}
  >
    {title}
  </button>
);

// Componente para o ícone decorativo do cartão
const CardIcon = ({ icon, color }: { icon: React.ReactNode; color: string }) => (
  <div className={`${color} p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-xs mx-auto lg:w-1/3 aspect-square flex items-center justify-center`}>
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {icon}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-white/20"></div>
      <div className="absolute top-1/2 left-4 w-3 h-3 rounded-full bg-white/20"></div>
    </div>
  </div>
);

// Componente para o conteúdo do cartão
const CardContent = ({ title, description, index }: { 
  title: string; 
  description: string; 
  index: number 
}) => (
  <div className="lg:w-2/3 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h3>
    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
      {description}
    </p>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
      Na Thinkless, acreditamos que {
        index === 0 
          ? "a clareza de propósito é fundamental para entregarmos soluções que realmente fazem sentido para seu negócio." 
          : index === 1 
            ? "apenas o melhor é suficiente, por isso nos dedicamos a aprimorar constantemente nossas habilidades e processos." 
            : "a tecnologia deve servir às pessoas, e não o contrário. Nosso foco está sempre em criar experiências que conectam e facilitam a vida."
      }
    </p>
  </div>
);

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
    <section id="about" className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-purple-500/5"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-blue-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <AnimatedText 
          animation="fade-in" 
          className="heading-md text-center mb-4 text-purple-600"
        >
          O que nos motiva
        </AnimatedText>
        
        <AnimatedText 
          animation="fade-in-up" 
          delay={300} 
          className="heading-lg text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          Nossa paixão por criar soluções que fazem a diferença
        </AnimatedText>
        
        {/* Mobile-optimized Card Selector */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:flex-nowrap sm:space-x-2 p-1.5 bg-gray-100 rounded-full">
            {cards.map((card, idx) => (
              <CardSelector 
                key={idx}
                active={activeCard === idx}
                index={idx}
                title={card.title}
                onClick={() => setActiveCard(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* Responsive card display */}
        <div className="relative h-[550px] sm:h-[500px] md:h-[450px] lg:h-[400px] w-full max-w-4xl mx-auto">
          {cards.map((card, idx) => (
            <AnimatedCard
              key={idx}
              animation={activeCard === idx ? "fade-in-up" : "fade-in"}
              className={cn(
                "absolute inset-0 transition-all duration-500",
                activeCard === idx ? "opacity-100 z-10 transform-none" : "opacity-0 z-0 scale-95 pointer-events-none"
              )}
            >
              <div className="h-full w-full flex flex-col lg:flex-row items-center gap-4 md:gap-8 p-4 md:p-8 rounded-2xl overflow-hidden">
                <CardIcon icon={card.icon} color={card.color} />
                <CardContent title={card.title} description={card.description} index={idx} />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
