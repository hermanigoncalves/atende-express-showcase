import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const logoPath = "/atende_express_logo_sem_hamburguer.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-navy-blue/95 backdrop-blur-md border-b border-vibrant-blue/20 shadow-lg" 
          : "bg-navy-blue/80 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Atende Express" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold text-white hidden sm:block">
                Atende Express
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-vibrant-blue transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-white/70">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>(33) 99944-1548</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>contato@atendeexpress.com</span>
                </div>
              </div>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => scrollToSection('contato')}
                className="bg-energetic-orange hover:bg-energetic-orange/90 text-white border-0"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-vibrant-blue transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="absolute inset-0 bg-navy-blue/95 backdrop-blur-md" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-medium text-white hover:text-vibrant-blue transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col items-center space-y-4 mt-8">
            <div className="flex items-center space-x-2 text-white/70">
              <Phone className="h-5 w-5" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <Mail className="h-5 w-5" />
              <span>contato@atendeexpress.com</span>
            </div>
            <Button 
              variant="default" 
              onClick={() => scrollToSection('contato')}
              className="bg-energetic-orange hover:bg-energetic-orange/90 text-white border-0 mt-4"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;