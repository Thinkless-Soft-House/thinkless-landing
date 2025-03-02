
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="text-center max-w-lg">
        <div className="mb-8 relative">
          <div className="text-[150px] font-bold text-thinkless-blue/10">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold mb-2 text-foreground">Página não encontrada</h1>
            <p className="text-muted-foreground">O conteúdo que você está procurando não existe ou foi movido.</p>
          </div>
        </div>
        
        <a 
          href="/" 
          className="btn-primary inline-flex items-center justify-center mt-4"
        >
          Voltar para o início
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
