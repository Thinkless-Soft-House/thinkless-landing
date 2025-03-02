
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText animation="fade-in-up" className="mb-3">
            <span className="inline-block py-1 px-3 rounded-full bg-thinkless-blue/10 text-thinkless-blue font-medium text-sm">
              Nossos Serviços
            </span>
          </AnimatedText>

          <AnimatedText animation="fade-in-up" delay={200} className="heading-lg mb-6">
            Soluções completas para o seu negócio
          </AnimatedText>

          <AnimatedText animation="fade-in-up" delay={400} className="paragraph">
            Desenvolvemos desde landing pages até sistemas completos, sempre com foco 
            em performance, usabilidade e resultados.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.title}
              delay={index * 150}
              className="bg-white border border-gray-100 shadow-sm p-8 flex flex-col"
            >
              <div className="rounded-full bg-thinkless-blue/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-thinkless-blue mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos websites e aplicações web de alto desempenho que oferecem experiências excepcionais aos usuários.",
    features: [
      "Sites institucionais",
      "Landing pages",
      "E-commerce",
      "Aplicações web personalizadas"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "Aplicativos Móveis",
    description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android que se destacam pela performance e usabilidade.",
    features: [
      "Aplicativos iOS e Android",
      "Apps empresariais",
      "Integração com APIs",
      "UX/UI responsivo"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Sistemas Customizados",
    description: "Criamos sistemas sob medida que automatizam processos e aumentam a eficiência operacional da sua empresa.",
    features: [
      "ERPs personalizados",
      "CRMs sob medida",
      "Dashboards analíticos",
      "Sistemas de gestão"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    description: "Criamos interfaces intuitivas e atrativas que melhoram a experiência do usuário e aumentam as conversões.",
    features: [
      "Design de interfaces",
      "Protótipos interativos",
      "Testes de usabilidade",
      "Design systems"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Consultoria Tech",
    description: "Oferecemos consultoria especializada para ajudar sua empresa a tomar decisões tecnológicas estratégicas.",
    features: [
      "Análise de requisitos",
      "Definição de arquitetura",
      "Seleção de tecnologias",
      "Planejamento de projetos"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Suporte Contínuo",
    description: "Oferecemos suporte técnico e manutenção contínua para garantir que suas soluções funcionem perfeitamente.",
    features: [
      "Suporte técnico",
      "Manutenção preventiva",
      "Atualizações de segurança",
      "Monitoramento 24/7"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-thinkless-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"></path>
      </svg>
    ),
  },
];

export default Services;
