import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const logoPath = "/atende_express_logo_sem_hamburguer.png";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Inteligente', 'Automatizado', 'Personalizado'];

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
    <section id="hero" className="min-h-screen bg-gradient-to-r from-navy-blue via-navy-blue/90 to-vibrant-blue/20 relative overflow-hidden pt-20">
      {/* Variant 2: Horizontal Layout with Split Design */}
      <div className="absolute inset-0">
        {/* Geometric Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-vibrant-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-energetic-orange/5 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-vibrant-blue/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-energetic-orange/10 rounded-lg rotate-45 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Side - Content (8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Trust Indicators - Horizontal Layout */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-vibrant-blue/20 text-vibrant-blue border-vibrant-blue/30 px-4 py-2">
                ⚡ +100 projetos entregues
              </Badge>
              <Badge className="bg-energetic-orange/20 text-energetic-orange border-energetic-orange/30 px-4 py-2">
                🤖 Especialistas em IA
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">
                ⭐ 5.0 Avaliação
              </Badge>
            </div>

            {/* Main Headline - Variant 2 Style */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Atendimento</span>
                <span className="block bg-gradient-to-r from-vibrant-blue to-energetic-orange bg-clip-text text-transparent mb-2 transition-all duration-500 ease-in-out">
                  {words[currentWord]}
                </span>
                <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl font-medium">
                  que Vende Mais
                </span>
              </h1>
            </div>
              
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
              Transformamos seu atendimento com <span className="text-white/80 font-semibold">IA avançada</span> e 
              <span className="text-white/80 font-semibold">sites de alta conversão</span>. 
              Resultados comprovados em mais de 100 projetos.
            </p>
            
            {/* CTA Buttons - Variant 2 Style */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Button 
                size="lg"
                onClick={scrollToServices}
                className="bg-energetic-orange hover:bg-energetic-orange/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>

            {/* Stats - Horizontal Layout */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-vibrant-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-vibrant-blue font-bold text-lg">98%</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Satisfação</div>
                  <div className="text-white/60 text-sm">dos clientes</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-energetic-orange/20 rounded-full flex items-center justify-center">
                  <span className="text-energetic-orange font-bold text-lg">24/7</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Atendimento</div>
                  <div className="text-white/60 text-sm">automatizado</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+300%</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Conversões</div>
                  <div className="text-white/60 text-sm">em média</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual (4 columns) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Logo Container - Variant 2 Style */}
              <div className="relative bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 w-[425px] md:w-[510px]">
                <img 
                    src="/logo.png" 
                    alt="Atende Express" 
                    className="h-80 md:h-96 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/atende-express-logo.svg';
                  }}
                />
                
                {/* Floating Indicators */}
                <div className="absolute -top-6 -right-6 bg-vibrant-blue text-white p-5 rounded-full shadow-lg animate-pulse">
                  <Star className="h-8 w-8 fill-current" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-energetic-orange text-white p-5 rounded-full shadow-lg">
                  <Play className="h-8 w-8 fill-current" />
                </div>
              </div>
              
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-blue/10 to-energetic-orange/10 rounded-2xl blur-xl -z-10 scale-110"></div>
              <div className="absolute -inset-4 bg-white/5 rounded-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Variant 2 Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-energetic-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;