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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Atende Express" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">
                Atende Express
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Transformamos atendimento digital em experiências rápidas, inteligentes e encantadoras.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-vibrant-blue/30 text-vibrant-blue hover:bg-vibrant-blue hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre Nós', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Projetos', id: 'projetos' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-vibrant-blue transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Nossos Serviços</h3>
            <ul className="space-y-3 text-white/70">
              <li>Sites Responsivos</li>
              <li>Agentes de IA</li>
              
              <li>Consultoria UX/UI</li>
              <li>Experiência do Cliente</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-4 w-4 text-vibrant-blue" />
                <span>(33) 99944-1548</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-4 w-4 text-vibrant-blue" />
                <span>contato.atendeexpress@gmail.com</span>
              </div>

            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium text-white">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="flex-1 bg-navy-blue-light border-vibrant-blue/30 text-white placeholder:text-white/50"
                />
                <Button size="icon" className="bg-energetic-orange hover:bg-energetic-orange/90 text-white border-0">
                  <Send className="h-4 w-4" />
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
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/70">
            © 2024 Atende Express. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-white/70">
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