
import { useEffect, useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ArrowRight, MessageCircle, Layout, Database, Smartphone } from "lucide-react";
import { useParallax } from "@/hooks/use-scroll-animation";

const SolutionsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const parallaxSlow = useParallax(0.03);
  const parallaxFast = useParallax(0.08);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('solutions-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const solutions = [
    {
      title: "Landing Pages",
      description: "Páginas de alto impacto que convertem visitantes em clientes, com design personalizado e foco em resultados.",
      icon: <Layout className="text-thinkless-blue" />,
      color: "bg-thinkless-blue/10",
      textColor: "text-thinkless-blue",
      delay: 200
    },
    {
      title: "Sistemas Web",
      description: "Aplicações robustas e personalizadas que automatizam processos e aumentam a eficiência do seu negócio.",
      icon: <Database className="text-thinkless-orange" />,
      color: "bg-thinkless-orange/10",
      textColor: "text-thinkless-orange",
      delay: 400
    },
    {
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos que proporcionam experiências excepcionais e conectam você aos seus clientes.",
      icon: <Smartphone className="text-thinkless-red" />,
      color: "bg-thinkless-red/10",
      textColor: "text-thinkless-red",
      delay: 600
    }
  ];

  return (
    <section id="solutions-section" className="min-h-screen py-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-1/3 -right-64 w-[800px] h-[800px] rounded-full bg-thinkless-blue/5 transition-transform duration-1000"
          style={{ ...parallaxSlow.style }}
        ></div>
        <div 
          className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] rounded-full bg-thinkless-orange/5 transition-transform duration-1000"
          style={{ ...parallaxFast.style }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText 
          animation="fade-in" 
          className="heading-md text-center mb-4 text-thinkless-blue"
          rootMargin="0px 0px -50px 0px"
        >
          Nossas Soluções
        </AnimatedText>
        
        <AnimatedText 
          animation="fade-in-up" 
          delay={300} 
          className="heading-lg text-center max-w-3xl mx-auto mb-16"
          rootMargin="0px 0px -50px 0px"
        >
          Tecnologia personalizada para resolver problemas reais
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedCard 
              key={index}
              delay={solution.delay} 
              className="bg-white p-8 border border-gray-100 group transition-all duration-500"
              rootMargin="0px 0px -50px 0px"
            >
              <div className={`w-16 h-16 rounded-full ${solution.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>
              <a href="#cafe" className={`${solution.textColor} font-medium flex items-center gap-1 group`}>
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <AnimatedText 
            animation="fade-in-up" 
            delay={800}
            rootMargin="0px 0px -50px 0px"
          >
            <a href="#cafe" className="btn-primary inline-flex items-center gap-2 group">
              Vamos conversar sobre seu projeto
              <MessageCircle className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
            </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
