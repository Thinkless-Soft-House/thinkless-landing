
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ArrowRight } from "lucide-react";

const CasesSection = () => {
  return (
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
  );
};

export default CasesSection;
