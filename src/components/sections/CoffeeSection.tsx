
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Coffee, MessageCircle, Calendar, ArrowRight, Video } from "lucide-react";

const CoffeeSection = () => {
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
  );
};

export default CoffeeSection;
