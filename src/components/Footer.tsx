import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const logoPath = "/atende_express_logo_sem_hamburguer.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-blue border-t border-vibrant-blue/20">
      {/* Main Footer Content - Mobile Optimized */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/logo.png" 
                alt="Atende Express" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                Atende Express
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Transformamos atendimento digital em experiências rápidas, inteligentes e encantadoras.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white h-8 w-8 sm:h-10 sm:w-10">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white h-8 w-8 sm:h-10 sm:w-10">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white h-8 w-8 sm:h-10 sm:w-10">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre Nós', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Projetos', id: 'projetos' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm sm:text-base text-white/70 hover:text-vibrant-blue transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Nossos Serviços</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">
              <li>Sites Responsivos</li>
              <li>Agentes de IA</li>
              <li>Consultoria UX/UI</li>
              <li>Experiência do Cliente</li>
            </ul>
          </div>

          {/* Contact & Newsletter - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-white/70">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-vibrant-blue flex-shrink-0" />
                <span>(33) 99944-1548</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-white/70">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-vibrant-blue flex-shrink-0 mt-0.5" />
                <span className="break-all">contato.atendeexpress@gmail.com</span>
              </div>
            </div>
            
            {/* Newsletter - Mobile Optimized */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-sm sm:text-base font-medium text-white">Newsletter</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="flex-1 bg-navy-blue-light border-vibrant-blue/30 text-white placeholder:text-white/50 text-sm sm:text-base"
                />
                <Button size="icon" className="bg-energetic-orange hover:bg-energetic-orange/90 text-white border-0 h-9 w-9 sm:h-10 sm:w-10 self-start sm:self-auto">
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/50">
                Receba novidades e dicas sobre atendimento digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />
      
      {/* Bottom Footer - Mobile Optimized */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
            © 2024 Atende Express. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-white/70">
            <button className="hover:text-vibrant-blue transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-vibrant-blue transition-colors">
              Termos de Uso
            </button>
            <button className="hover:text-vibrant-blue transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;