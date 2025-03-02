
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Info, Briefcase, MessageSquare, Mail } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#hero", icon: <Home className="h-4 w-4" /> },
  { name: "Sobre", href: "#about", icon: <Info className="h-4 w-4" /> },
  { name: "Serviços", href: "#services", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Depoimentos", href: "#testimonials", icon: <MessageSquare className="h-4 w-4" /> },
  { name: "Contato", href: "#contact", icon: <Mail className="h-4 w-4" /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" className="relative z-50">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c35fd64b-39d6-4a44-9f86-27f63a52854a.png" 
              alt="Thinkless Logo" 
              className="h-10 w-auto"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-all duration-200 flex items-center space-x-2 py-2 px-3 rounded-md group",
                isScrolled ? "text-foreground" : "text-foreground/90",
                activeLink === link.href 
                  ? "text-thinkless-blue" 
                  : "hover:text-thinkless-blue hover:bg-blue-50/50"
              )}
            >
              <span className={cn(
                "transition-transform duration-300 transform group-hover:scale-110",
                activeLink === link.href ? "text-thinkless-blue" : ""
              )}>
                {link.icon}
              </span>
              <span className={cn(
                "relative inline-block",
                activeLink === link.href 
                  ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-thinkless-blue"
                  : "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-thinkless-blue after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left"
              )}>
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-foreground p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-3 text-2xl font-medium text-foreground hover:text-thinkless-blue transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-thinkless-blue">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
