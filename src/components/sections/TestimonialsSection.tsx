
import { useState, useEffect } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, Logística Express",
      quote: "A Thinkless transformou nossa operação logística com uma solução que realmente entendeu nosso problema. Não só entregaram no prazo, como superaram nossas expectativas."
    },
    {
      name: "Marina Oliveira",
      role: "CTO, FinTech Brasil",
      quote: "Encontramos na Thinkless um parceiro que não só entendeu nossa visão, mas nos ajudou a aprimorá-la. A solução entregue permitiu que escalássemos com segurança e confiança."
    },
    {
      name: "Ricardo Mendes",
      role: "Diretor, Retail Solutions",
      quote: "A abordagem personalizada e o comprometimento da equipe Thinkless fizeram toda a diferença. Eles realmente se importam com o sucesso do cliente."
    },
    {
      name: "Fernanda Santos",
      role: "VP de Operações, TechVision",
      quote: "A capacidade da Thinkless de transformar requisitos complexos em soluções elegantes e intuitivas é impressionante. Eles entregaram muito além do prometido."
    },
    {
      name: "Paulo Guedes",
      role: "Diretor de TI, EduTech",
      quote: "Em 15 anos gerenciando projetos de TI, nunca trabalhei com uma equipe tão competente e comprometida como a da Thinkless. Recomendo com total confiança."
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIdx(index);
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
          O que nossos clientes dizem
        </AnimatedText>
        
        <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
          Parcerias que fazem a diferença
        </AnimatedText>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel buttons */}
          <button 
            onClick={handlePrev} 
            className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button 
            onClick={handleNext} 
            className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-[350px]" 
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4 flex items-center justify-center"
                >
                  <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-thinkless-blue to-thinkless-blue-light flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <svg className="h-8 w-8 text-thinkless-blue mb-4 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-2.8 0-5 2.2-5 5v9h9v-9h-4.6c0-1 0.8-1.4 1.4-1.4h2.2c0.6 0 1-0.4 1-1V9c0-0.6-0.4-1-1-1h-3z M22 8c-2.8 0-5 2.2-5 5v9h9v-9h-4.6c0-1 0.8-1.4 1.4-1.4h2.2c0.6 0 1-0.4 1-1V9c0-0.6-0.4-1-1-1h-3z"></path>
                        </svg>
                        
                        <p className="text-lg text-muted-foreground italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIdx === index 
                    ? "bg-thinkless-blue scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
