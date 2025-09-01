import { Globe, Bot, Settings, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Globe,
      title: "Sites Responsivos",
      subtitle: "Design Moderno & Conversão",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para conversão, focados na experiência do usuário e performance.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Máxima", "Conversão Focada"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Bot,
      title: "Agentes de IA",
      subtitle: "Atendimento Inteligente 24/7",
      description: "Implementamos chatbots inteligentes que automatizam o atendimento e melhoram drasticamente a satisfação do cliente.",
      features: ["IA Avançada", "Atendimento 24/7", "Integração Total", "Aprendizado Contínuo"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Users,
      title: "Consultoria UX/UI",
      subtitle: "Experiência do Cliente",
      description: "Otimizamos a jornada do cliente através de design centrado no usuário e análise comportamental avançada.",
      features: ["Design Centrado", "Análise UX", "Testes A/B", "Otimização CRO"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            Nossos Serviços
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-2">
            Soluções <span className="text-primary">Completas</span> para seu Negócio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Transformamos seu atendimento digital com tecnologia de ponta, design excepcional e inteligência artificial avançada
          </p>
        </div>
        
        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-2 hover:${service.borderColor} hover:-translate-y-1 sm:hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50`}>
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    Premium
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">Principais Benefícios:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    onClick={() => {
                      if (index === 0) {
                        navigate('/sites-responsivos');
                      } else if (index === 1) {
                        navigate('/agentes-ia');
                      } else {
                        scrollToContact();
                      }
                    }}
                  >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20 mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 px-2">
            Pronto para Transformar seu Atendimento?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Entre em contato conosco e descubra como podemos revolucionar a experiência dos seus clientes
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-6 py-3"
          >
            Fale Conosco Agora
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;