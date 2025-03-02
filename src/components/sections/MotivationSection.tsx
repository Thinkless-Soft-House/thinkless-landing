
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedCard from "@/components/ui/AnimatedCard";

const MotivationSection = () => {
  return (
    <section className="min-h-screen py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <AnimatedText 
          animation="fade-in" 
          className="heading-md text-center mb-4 text-thinkless-blue"
        >
          O que nos motiva
        </AnimatedText>
        
        <AnimatedText 
          animation="fade-in-up" 
          delay={300} 
          className="heading-lg text-center max-w-3xl mx-auto mb-16"
        >
          Nossa paixão por criar soluções que fazem a diferença
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard animation="fade-in-up" delay={400} className="bg-white p-8 h-full">
            <div className="w-16 h-16 rounded-full bg-thinkless-blue/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-blue">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Visão Clara</h3>
            <p className="text-muted-foreground">
              Enxergamos além do óbvio para encontrar soluções que realmente transformam a maneira como os negócios funcionam.
            </p>
          </AnimatedCard>
          
          <AnimatedCard animation="fade-in-up" delay={600} className="bg-white p-8 h-full">
            <div className="w-16 h-16 rounded-full bg-thinkless-orange/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-orange">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14Z"></path>
                <path d="M7 22V7H2.66a2 2 0 0 0-2 2.3l1.38 9A2 2 0 0 0 4.04 20H7Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Excelência</h3>
            <p className="text-muted-foreground">
              Não nos contentamos com o básico. Buscamos a excelência em cada linha de código e em cada interface que criamos.
            </p>
          </AnimatedCard>
          
          <AnimatedCard animation="fade-in-up" delay={800} className="bg-white p-8 h-full">
            <div className="w-16 h-16 rounded-full bg-thinkless-red/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thinkless-red">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Conexão Humana</h3>
            <p className="text-muted-foreground">
              Por trás de cada código está uma equipe apaixonada por criar soluções que conectam pessoas e transformam experiências.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
