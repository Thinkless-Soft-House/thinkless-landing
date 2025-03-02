
import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Alexandre Santos",
    role: "CEO, TechInova",
    content: "A Thinkless transformou completamente nosso sistema de gestão. A solução que desenvolveram é intuitiva, eficiente e nos ajudou a reduzir custos operacionais em 30%.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    name: "Juliana Oliveira",
    role: "Diretora de Marketing, E-Shop Brasil",
    content: "Nossa nova landing page, desenvolvida pela Thinkless, aumentou nossa taxa de conversão em 45%. O resultado superou todas as nossas expectativas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    name: "Ricardo Mendes",
    role: "CTO, FinTech Solutions",
    content: "O aplicativo que a Thinkless desenvolveu para nossa empresa revolucionou a forma como nos comunicamos com nossos clientes. A equipe deles realmente entendeu nossas necessidades.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText animation="fade-in-up" className="mb-3">
            <span className="inline-block py-1 px-3 rounded-full bg-thinkless-blue/10 text-thinkless-blue font-medium text-sm">
              Depoimentos
            </span>
          </AnimatedText>

          <AnimatedText animation="fade-in-up" delay={200} className="heading-lg mb-6">
            O que nossos clientes dizem
          </AnimatedText>

          <AnimatedText animation="fade-in-up" delay={400} className="paragraph">
            Trabalhamos com diversas empresas que confiam em nossa capacidade
            de entregar soluções tecnológicas de alta qualidade.
          </AnimatedText>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <AnimatedCard
                    animation="scale"
                    className="glass-card p-8 md:p-10"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <Quote className="w-10 h-10 text-thinkless-blue/20 mb-4" />
                        <p className="text-lg italic mb-6">{testimonial.content}</p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === activeIndex ? "bg-thinkless-blue" : "bg-gray-200"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
