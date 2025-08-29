import { Globe, Bot, Settings, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
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
      icon: Settings,
      title: "Automação Omnichannel",
      subtitle: "Integração Completa",
      description: "Integramos todos os canais de comunicação para uma experiência unificada, eficiente e sem atritos.",
      features: ["Multi-canais", "Automação Total", "Fluxos Inteligentes", "Métricas Avançadas"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
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
    <section id="servicos" className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Soluções <span className="text-primary">Completas</span> para seu Negócio
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Transformamos seu atendimento digital com tecnologia de ponta, design excepcional e inteligência artificial avançada
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-2 hover:${service.borderColor} hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-black font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Premium
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-black leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Principais Benefícios:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Transformar seu Atendimento?
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos revolucionar a experiência dos seus clientes
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Fale Conosco Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;