
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ArrowRight, MessageCircle } from "lucide-react";

const SolutionsSection = () => {
  return (
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
  );
};

export default SolutionsSection;
