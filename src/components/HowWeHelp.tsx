import { Palette, Brain, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowWeHelp = () => {
  const helpAreas = [
    {
      icon: Palette,
      title: "Web Design de Impacto",
      description: "Criamos interfaces visuais atrativas e funcionais que convertem visitantes em clientes fiéis."
    },
    {
      icon: Brain,
      title: "IA aplicada ao Atendimento", 
      description: "Desenvolvemos agentes inteligentes que entendem e respondem às necessidades dos seus clientes."
    },
    {
      icon: MessageSquare,
      title: "Consultoria Personalizada",
      description: "Analisamos seu negócio para criar estratégias digitais sob medida que geram resultados reais."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Como Podemos Ajudar <span className="text-neon">Sua Empresa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três pilares fundamentais para transformar seu atendimento digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {helpAreas.map((area, index) => (
            <Card key={index} className="bg-card border-border hover:border-neon/50 transition-all duration-300 hover:shadow-neon group text-center">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-neon transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;