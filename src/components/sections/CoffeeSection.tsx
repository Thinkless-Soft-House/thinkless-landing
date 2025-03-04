
import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Coffee, MessageCircle, Calendar, ArrowRight, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const CoffeeSection = () => {
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  
  const contactCards = [
    {
      title: "Café Presencial",
      description: "Vamos marcar um encontro em um café ou restaurante de sua preferência para discutir seu projeto.",
      icon: Coffee,
      iconColor: "text-thinkless-blue",
      bgColor: "bg-thinkless-blue/10",
      hoverBgColor: "hover:bg-gradient-to-br from-thinkless-blue/20 to-thinkless-blue/5",
      textColor: "text-thinkless-blue",
      link: "tel:+5531995822494",
      linkText: "Ligar: (31) 99582-2494"
    },
    {
      title: "Café Virtual",
      description: "Agendamos uma reunião online por videochamada ou WhatsApp para conhecer melhor sua ideia.",
      icon: Video,
      iconColor: "text-thinkless-orange",
      bgColor: "bg-thinkless-orange/10",
      hoverBgColor: "hover:bg-gradient-to-br from-thinkless-orange/20 to-thinkless-orange/5",
      textColor: "text-thinkless-orange",
      link: "mailto:contato@thinkless.com.br",
      linkText: "contato@thinkless.com.br"
    },
    {
      title: "Chat Rápido",
      description: "Tem uma dúvida rápida? Podemos conversar por WhatsApp sem compromisso.",
      icon: MessageCircle,
      iconColor: "text-thinkless-red",
      bgColor: "bg-thinkless-red/10",
      hoverBgColor: "hover:bg-gradient-to-br from-thinkless-red/20 to-thinkless-red/5",
      textColor: "text-thinkless-red",
      link: "https://wa.me/5531995822494",
      linkText: "WhatsApp"
    }
  ];

  return (
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
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-thinkless-blue/20 to-thinkless-blue/5 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-1/2 h-1/2">
                  <div 
                    className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-700 hover:scale-110 hover:rotate-6 cursor-pointer"
                    onMouseEnter={() => setHoverCard(0)}
                    onMouseLeave={() => setHoverCard(null)}
                  >
                    <Coffee className={cn(
                      "h-8 w-8 text-thinkless-orange transition-all duration-300",
                      hoverCard === 0 && "scale-125"
                    )} />
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-700 hover:scale-110 hover:rotate-6 cursor-pointer"
                    onMouseEnter={() => setHoverCard(2)}
                    onMouseLeave={() => setHoverCard(null)}
                  >
                    <MessageCircle className={cn(
                      "h-8 w-8 text-thinkless-blue transition-all duration-300",
                      hoverCard === 2 && "scale-125"
                    )} />
                  </div>
                  <div 
                    className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-700 hover:scale-110 hover:rotate-6 cursor-pointer"
                    onMouseEnter={() => setHoverCard(1)}
                    onMouseLeave={() => setHoverCard(null)}
                  >
                    <Calendar className={cn(
                      "h-8 w-8 text-thinkless-red transition-all duration-300",
                      hoverCard === 1 && "scale-125"
                    )} />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
          
          {/* Right side - Contact options */}
          <AnimatedCard animation="fade-in-right" className="space-y-8">
            {contactCards.map((card, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-500 flex gap-6 items-center cursor-pointer",
                  card.hoverBgColor,
                  "hover:shadow-xl hover:translate-y-[-4px]",
                  hoverCard === index && "shadow-xl translate-y-[-4px]"
                )}
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500",
                  card.bgColor,
                  hoverCard === index && "scale-110"
                )}>
                  <card.icon className={cn(
                    "h-7 w-7 transition-all duration-500",
                    card.iconColor,
                    hoverCard === index && "scale-110"
                  )} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {card.description}
                  </p>
                  <a 
                    href={card.link} 
                    className={cn(
                      "text-sm font-medium flex items-center gap-1 transition-all duration-300",
                      card.textColor,
                      "hover:underline"
                    )}
                  >
                    {card.linkText}
                    <ArrowRight className={cn(
                      "h-3 w-3 transition-transform duration-300",
                      hoverCard === index ? "translate-x-1" : "translate-x-0"
                    )} />
                  </a>
                </div>
              </div>
            ))}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
