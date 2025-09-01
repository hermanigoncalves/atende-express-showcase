import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, ShoppingCart, MessageCircle, TrendingUp, Clock, Users, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bella Estética – Clínica de Beleza",
      subtitle: "Desperte sua Beleza Natural",
      description: "Site completo para clínica de estética com mais de 10 anos de experiência, oferecendo tratamentos personalizados em ambiente acolhedor e sofisticado.",
      image: "/placeholder-project-1.jpg",
      link: "https://estetica.atendeexspress.com.br/",
      icon: Star,
      category: "Estética & Beleza",
      technologies: ["React", "Tailwind", "Responsive", "SEO"],
      results: [
        { label: "Anos de experiência", value: "10+" },
        { label: "Satisfação dos clientes", value: "4.9/5" },
        { label: "Tratamentos oferecidos", value: "15+" }
      ],
      color: "from-pink-500 to-rose-500",
      bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      title: "TechShop – Periféricos Gaming",
      subtitle: "Periféricos de Elite",
      description: "Loja online especializada em periféricos gaming e profissionais com coleção premium de teclados, mouses, headsets e monitores para elevar sua experiência.",
      image: "/placeholder-project-2.jpg", 
      link: "https://gamer-gear-gallery.lovable.app",
      icon: ShoppingCart,
      category: "E-commerce Gaming",
      technologies: ["React", "Tailwind", "E-commerce", "Responsive"],
      results: [
        { label: "Produtos disponíveis", value: "6+" },
        { label: "Ofertas limitadas", value: "25%" },
        { label: "Avaliação média", value: "4.8/5" }
      ],
      color: "from-blue-500 to-purple-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-purple-50"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projetos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            Nossos Projetos
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-2">
            Casos de <span className="text-primary">Sucesso</span> Comprovados
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Projetos reais que transformaram negócios e geraram resultados excepcionais para nossos clientes
          </p>
        </div>
        
        {/* Projects Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-1 sm:hover:-translate-y-2 bg-white overflow-hidden mx-2 sm:mx-0">
              {/* Project Header - Mobile Optimized */}
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Badge variant="outline" className="text-xs font-medium bg-green-50 text-green-700 border-green-200">
                    {project.category}
                  </Badge>
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-3 sm:mb-4">
                    {project.subtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {/* Description - Mobile Optimized */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-muted text-muted-foreground border border-border px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Results - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-slate-800 text-xs sm:text-sm flex items-center">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-500" />
                    Resultados Alcançados:
                  </h4>
                  <div className="space-y-1 sm:space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-muted-foreground">{result.label}:</span>
                        <span className="font-bold text-primary">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA - Mobile Optimized */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Ver Mais Detalhes
                  <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 mx-2 sm:mx-0">
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-blue-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projetos Entregues</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl border border-green-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Taxa de Satisfação</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl border border-purple-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">24h</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Tempo de Resposta</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl sm:rounded-2xl border border-orange-200 col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">5★</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Avaliação Média</div>
          </div>
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20 mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 px-2">
            Pronto para o Próximo Projeto de Sucesso?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Vamos conversar sobre como podemos transformar sua ideia em um projeto de sucesso comprovado
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-6 py-3"
          >
            Iniciar Meu Projeto
            <Star className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;