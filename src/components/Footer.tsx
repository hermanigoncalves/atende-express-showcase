import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="bg-gradient-to-b from-slate-modern to-slate-modern-dark border-t border-blue-corporate/20">
      {/* Main Footer Content - Modern Design */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info - Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-corporate to-emerald-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">A</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                Atende Express
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-warm leading-relaxed">
              Transformamos atendimento digital em experiências rápidas, inteligentes e encantadoras.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="outline" size="icon" className="border-blue-corporate/30 text-blue-corporate hover:bg-blue-corporate hover:text-white h-8 w-8 sm:h-10 sm:w-10 backdrop-blur-sm">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-blue-corporate/30 text-blue-corporate hover:bg-blue-corporate hover:text-white h-8 w-8 sm:h-10 sm:w-10 backdrop-blur-sm">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-blue-corporate/30 text-blue-corporate hover:bg-blue-corporate hover:text-white h-8 w-8 sm:h-10 sm:w-10 backdrop-blur-sm">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links - Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
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
                    className="text-sm sm:text-base text-neutral-warm hover:text-blue-corporate transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">Nossos Serviços</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-warm">
              <li>Sites Responsivos</li>
              <li>Agentes de IA</li>
              <li>Consultoria UX/UI</li>
              <li>Experiência do Cliente</li>
            </ul>
          </motion.div>

          {/* Contact & Newsletter - Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-neutral-warm">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-accent flex-shrink-0" />
                <span>(33) 99944-1548</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-neutral-warm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                <span className="break-all">contato.atendeexpress@gmail.com</span>
              </div>
            </div>
            
            {/* Newsletter - Modern Design */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-sm sm:text-base font-medium text-white">Newsletter</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="flex-1 bg-slate-modern-light/50 border-blue-corporate/30 text-white placeholder:text-neutral-warm/70 text-sm sm:text-base backdrop-blur-sm"
                />
                <Button size="icon" className="bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white border-0 h-9 w-9 sm:h-10 sm:w-10 self-start sm:self-auto">
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <p className="text-xs text-neutral-warm/70">
                Receba novidades e dicas sobre atendimento digital.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-blue-corporate/20" />
      
      {/* Bottom Footer - Modern Design */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
        >
          <div className="text-xs sm:text-sm text-neutral-warm text-center sm:text-left">
            © 2024 Atende Express. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-neutral-warm">
            <button className="hover:text-blue-corporate transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-blue-corporate transition-colors">
              Termos de Uso
            </button>
            <button className="hover:text-blue-corporate transition-colors">
              Cookies
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;