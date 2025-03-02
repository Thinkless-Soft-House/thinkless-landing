
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText animation="fade-in-left" className="mb-3">
              <span className="inline-block py-1 px-3 rounded-full bg-thinkless-blue/10 text-thinkless-blue font-medium text-sm">
                Sobre a Thinkless
              </span>
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={200} className="heading-lg mb-6">
              Transformando problemas em soluções efetivas
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={400} className="paragraph mb-6">
              A Thinkless é uma software house especializada em desenvolver soluções tecnológicas 
              personalizadas que atendem às necessidades específicas de cada cliente. Nossa abordagem 
              combina expertise técnica com uma compreensão profunda dos desafios de negócio.
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={600} className="paragraph mb-8">
              Desde landing pages até sistemas completos, nossa equipe está comprometida 
              com a qualidade, eficiência e inovação em cada projeto que desenvolvemos.
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="btn-primary">
                  Nossos serviços
                </a>
                <a href="#contact" className="btn-secondary">
                  Fale conosco
                </a>
              </div>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutCards.map((card, index) => (
              <AnimatedCard 
                key={card.title} 
                animation="fade-in-up"
                delay={index * 200}
                className="glass-card p-6"
              >
                <div className="mb-4 text-thinkless-blue">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    title: "Experiência",
    description: "Anos de experiência em desenvolvimento de soluções personalizadas para diversos setores.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    title: "Inovação",
    description: "Sempre em busca das tecnologias mais recentes para oferecer soluções de ponta.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    title: "Qualidade",
    description: "Compromisso com a excelência e a qualidade em cada linha de código que escrevemos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    title: "Eficiência",
    description: "Processos otimizados que garantem entregas rápidas sem comprometer a qualidade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
      </svg>
    ),
  },
];

export default About;
