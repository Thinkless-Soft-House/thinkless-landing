import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";

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
          <AnimatedCard animation="fade-in-up" className="relative rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 p-8">
                <div className="w-20 h-1 bg-thinkless-blue mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">SaaS de Agendamento</h3>
                <p className="paragraph mb-6">
                  Desenvolvemos uma solução completa de agendamento como SaaS que permite aos prestadores de serviços gerenciar suas agendas, clientes e pagamentos em um só lugar. O sistema reduziu o tempo de gestão administrativa em 60% e aumentou a taxa de conversão de clientes em 45%.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">SaaS</span>
                  <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">Multi-tenant</span>
                  <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">Pagamentos</span>
                  <span className="px-3 py-1 bg-thinkless-blue/10 text-thinkless-blue text-sm rounded-full">Mobile-first</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-thinkless-blue/20 to-thinkless-orange/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-blue">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard animation="fade-in-up" className="relative rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-2 p-8">
                <div className="w-20 h-1 bg-thinkless-orange mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">Tay Training - Plataforma de Cursos</h3>
                <p className="paragraph mb-6">
                  Desenvolvemos uma solução complementar para a Tay Training, empresa especializada na venda de cursos de treinamento físico. Nosso aplicativo auxilia as alunas a acessarem corretamente os treinos necessários para seu programa, com vídeos demonstrativos e instruções detalhadas. A integração resultou em um aumento de 75% na retenção das alunas e melhorou significativamente a experiência do cliente final.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">App Mobile</span>
                  <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">Integração</span>
                  <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">E-learning</span>
                  <span className="px-3 py-1 bg-thinkless-orange/10 text-thinkless-orange text-sm rounded-full">Conteúdo Personalizado</span>
                </div>
              </div>
              <div className="order-1 lg:order-1">
                <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-thinkless-orange/20 to-thinkless-red/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-orange">
                        <path d="m6.5 6.5 11 11"></path>
                        <path d="m21 21-1-1"></path>
                        <path d="m3 3 1 1"></path>
                        <path d="m18 22 4-4"></path>
                        <path d="m2 6 4-4"></path>
                        <path d="m3 10 7-7"></path>
                        <path d="m14 21 7-7"></path>
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
