import { Globe, Bot, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites Responsivos",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para conversão, focados na experiência do usuário."
    },
    {
      icon: Bot,
      title: "Agentes de Atendimento com IA",
      description: "Implementamos chatbots inteligentes que automatizam o atendimento e melhoram a satisfação do cliente."
    },
    {
      icon: Settings,
      title: "Automação Omnichannel",
      description: "Integramos todos os canais de comunicação para uma experiência unificada e eficiente."
    },
    {
      icon: Users,
      title: "Consultoria em UX/UI e Experiência do Cliente",
      description: "Otimizamos a jornada do cliente através de design centrado no usuário e análise de comportamento."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossas <span className="text-neon">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu atendimento digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-neon/50 transition-all duration-300 hover:shadow-neon group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;