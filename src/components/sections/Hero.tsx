
import { ArrowDown } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-thinkless-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-thinkless-orange/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <AnimatedText
          animation="fade-in-down"
          className="mb-2"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-thinkless-blue/10 text-thinkless-blue font-medium text-sm">
            Soluções Tech Inovadoras
          </span>
        </AnimatedText>

        <AnimatedText
          animation="fade-in"
          delay={300}
          className="heading-xl max-w-4xl mb-6"
        >
          Soluções Tech que resolvem problemas de forma{" "}
          <span className="text-thinkless-blue">efetiva</span>
        </AnimatedText>

        <AnimatedText
          animation="fade-in-up"
          delay={600}
          className="paragraph max-w-2xl mb-10"
        >
          Da concepção à execução, transformamos ideias complexas em soluções tecnológicas 
          personalizadas que impulsionam o crescimento do seu negócio.
        </AnimatedText>

        <AnimatedText
          animation="fade-in-up"
          delay={900}
        >
          <a href="#services" className="btn-primary">
            Conheça nossos serviços
          </a>
        </AnimatedText>

        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-10 w-10 text-thinkless-blue opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
