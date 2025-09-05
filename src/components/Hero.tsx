import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Sparkles, Zap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logoPath = "/atende_express_logo_sem_hamburguer.png";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Inteligente', 'Automatizado', 'Personalizado'];
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Muda a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-modern via-slate-800 to-slate-modern-dark relative overflow-hidden"
    >
      {/* Modern Background with Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-corporate/10 via-emerald-accent/10 to-slate-modern/10 opacity-50" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-blue-corporate/20 rounded-full backdrop-blur-sm"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-4 h-full relative z-10 pt-20">
        <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-6 justify-center"
            >
              <Badge className="bg-blue-corporate/20 text-blue-corporate-light border-blue-corporate/30 px-4 py-2 text-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                +100 projetos entregues
              </Badge>
              <Badge className="bg-emerald-accent/20 text-emerald-accent-light border-emerald-accent/30 px-4 py-2 text-sm backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Especialistas em IA
              </Badge>
              <Badge className="bg-neutral-warm/20 text-neutral-warm border-neutral-warm/30 px-4 py-2 text-sm backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2 fill-current" />
                5.0 Avaliação
              </Badge>
            </motion.div>

            {/* Main Headline - Mobile Optimized */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-1 sm:mb-2">Atendimento</span>
                <span className="block bg-gradient-to-r from-blue-corporate to-emerald-accent bg-clip-text text-transparent mb-1 sm:mb-2 transition-all duration-500 ease-in-out">
                  {words[currentWord]}
                </span>
                <span className="block text-white/90 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium">
                  que Vende Mais
                </span>
              </h1>
            </div>
              
            {/* Description - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl">
              Transformamos seu atendimento com <span className="text-white font-semibold">IA avançada</span> e 
              <span className="text-white font-semibold">sites de alta conversão</span>. 
              Resultados comprovados em mais de 100 projetos.
            </p>
            
            {/* CTA Buttons - Centralized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-0 w-full sm:w-auto"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>

            {/* Stats - Centralized */}
            <div className="flex flex-wrap gap-4 sm:gap-8 pt-6 justify-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-corporate/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-corporate font-bold text-sm sm:text-lg">98%</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Satisfação</div>
                  <div className="text-white/60 text-xs sm:text-sm">dos clientes</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-accent font-bold text-sm sm:text-lg">24/7</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Atendimento</div>
                  <div className="text-white/60 text-xs sm:text-sm">automatizado</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-modern-light/20 rounded-full flex items-center justify-center">
                  <span className="text-neutral-warm font-bold text-sm sm:text-lg">+300%</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Conversões</div>
                  <div className="text-white/60 text-xs sm:text-sm">em média</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Variant 2 Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-emerald-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;