import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com métricas claras e objetivos mensuráveis."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Utilizamos as mais recentes tecnologias em IA e desenvolvimento web."
    },
    {
      icon: Users,
      title: "Experiência Humanizada",
      description: "Tecnologia avançada com toque humano para melhor experiência do cliente."
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Mais de 10 anos transformando negócios através da tecnologia."
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-2">
              Sobre a <span className="text-primary">Atende Express</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Somos especialistas em transformar atendimento digital através de tecnologia de ponta
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            {/* Content - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Nossa Missão
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Transformamos atendimento digital em experiências <span className="text-primary font-semibold">rápidas, inteligentes e encantadoras</span>. 
                  Nossa missão é unir design, tecnologia e inteligência artificial para gerar resultados reais.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Nossa Expertise
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Com mais de uma década de experiência em desenvolvimento web e automação inteligente, 
                  criamos soluções que conectam marcas aos seus clientes de forma única e eficiente.
                </p>
              </div>

              {/* Stats - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 mx-2 sm:mx-0">
                <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">+100</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projetos Entregues</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                  <div className="flex justify-center">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;