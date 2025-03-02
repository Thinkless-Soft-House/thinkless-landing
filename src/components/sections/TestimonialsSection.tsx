
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";

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
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText animation="fade-in" className="heading-md text-center mb-4 text-thinkless-blue">
          O que nossos clientes dizem
        </AnimatedText>
        
        <AnimatedText animation="fade-in-up" delay={300} className="heading-lg text-center max-w-3xl mx-auto mb-16">
          Parcerias que fazem a diferença
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard 
              key={index} 
              animation="fade-in-up" 
              delay={400 + index * 200} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4 items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-thinkless-blue">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.quote}"
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
