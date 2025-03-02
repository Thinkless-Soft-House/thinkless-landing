
import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <AnimatedText animation="fade-in-left" className="mb-3">
              <span className="inline-block py-1 px-3 rounded-full bg-thinkless-blue/10 text-thinkless-blue font-medium text-sm">
                Contato
              </span>
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={200} className="heading-lg mb-6">
              Vamos conversar sobre o seu projeto
            </AnimatedText>

            <AnimatedText animation="fade-in-left" delay={400} className="paragraph mb-10">
              Estamos prontos para transformar suas ideias em soluções tecnológicas de alto impacto. 
              Entre em contato conosco para discutir como podemos ajudar a impulsionar o seu negócio.
            </AnimatedText>

            <div className="space-y-6">
              <AnimatedText animation="fade-in-left" delay={600} className="flex items-center gap-4">
                <div className="bg-thinkless-blue/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-thinkless-blue" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contato@thinkless.com.br</p>
                </div>
              </AnimatedText>

              <AnimatedText animation="fade-in-left" delay={700} className="flex items-center gap-4">
                <div className="bg-thinkless-blue/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-thinkless-blue" />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-muted-foreground">+55 11 9999-8888</p>
                </div>
              </AnimatedText>

              <AnimatedText animation="fade-in-left" delay={800} className="flex items-center gap-4">
                <div className="bg-thinkless-blue/10 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-thinkless-blue" />
                </div>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-muted-foreground">Av. Paulista, 1000, São Paulo - SP</p>
                </div>
              </AnimatedText>
            </div>
          </div>

          <AnimatedText animation="fade-in-right" delay={400}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-lg text-green-700">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thinkless-blue/50"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thinkless-blue/50"
                        placeholder="seu.email@exemplo.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thinkless-blue/50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thinkless-blue/50"
                        placeholder="Descreva seu projeto ou dúvida..."
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          "Enviar mensagem"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Contact;
