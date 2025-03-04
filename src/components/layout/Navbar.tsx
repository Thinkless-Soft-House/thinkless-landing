
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
        // Cast to HTMLElement to access offsetTop property
        const sectionTop = (section as HTMLElement).offsetTop;
        
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

  const handleNavLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
    
    // Ensure smooth scrolling to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" className="relative z-50">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c35fd64b-39d6-4a44-9f86-27f63a52854a.png" 
              alt="Thinkless Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
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
          className={cn(
            "md:hidden relative z-50 p-2 rounded-full transition-colors",
            mobileMenuOpen 
              ? "text-foreground bg-white shadow-md" 
              : isScrolled 
                ? "text-foreground hover:bg-white/80 hover:shadow-sm" 
                : "text-foreground hover:bg-white/60 hover:shadow-sm"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Mobile Menu - Redesigned */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out md:hidden",
            mobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24">
            <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="text-center mb-8">
                <img 
                  src="/lovable-uploads/c35fd64b-39d6-4a44-9f86-27f63a52854a.png" 
                  alt="Thinkless Logo" 
                  className="h-12 w-auto mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-700">Navegue pelo site</h3>
              </div>
              
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center space-x-4 p-3 rounded-xl transition-all duration-200",
                      activeLink === link.href
                        ? "bg-blue-50 text-thinkless-blue font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href);
                    }}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-lg",
                      activeLink === link.href
                        ? "bg-thinkless-blue text-white"
                        : "bg-gray-100 text-gray-500"
                    )}>
                      {link.icon}
                    </div>
                    <span className="text-base">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Thinkless</p>
              <p>Transformando ideias em soluções</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
