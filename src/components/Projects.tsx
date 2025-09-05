import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, ShoppingCart, MessageCircle, TrendingUp, Clock, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
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
      color: "from-blue-corporate to-emerald-accent",
      bgGradient: "bg-gradient-to-br from-blue-corporate/5 to-emerald-accent/5"
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
      color: "from-slate-modern to-blue-corporate",
      bgGradient: "bg-gradient-to-br from-slate-modern/5 to-blue-corporate/5"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projetos" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-neutral-warm/10 to-slate-modern/5">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header - Modern Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <Badge className="mb-3 sm:mb-4 bg-emerald-accent/10 text-emerald-accent border-emerald-accent/20 text-xs sm:text-sm backdrop-blur-sm">
            Nossos Projetos
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-2">
            Casos de <span className="bg-gradient-to-r from-blue-corporate to-emerald-accent bg-clip-text text-transparent">Sucesso</span> Comprovados
          </h2>
          <p className="text-base sm:text-lg text-neutral-warm max-w-3xl mx-auto px-4 sm:px-0">
            Projetos reais que transformaram negócios e geraram resultados excepcionais para nossos clientes
          </p>
        </motion.div>
        
        {/* Projects Grid - Modern Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-corporate/30 hover:-translate-y-1 sm:hover:-translate-y-2 bg-gradient-to-br from-neutral-warm/50 to-slate-modern/5 backdrop-blur-sm overflow-hidden mx-2 sm:mx-0">
              {/* Project Header - Mobile Optimized */}
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Badge variant="outline" className="text-xs font-medium bg-emerald-accent/10 text-emerald-accent border-emerald-accent/30">
                    {project.category}
                  </Badge>
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-corporate group-hover:text-foreground transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-warm font-medium mb-3 sm:mb-4">
                    {project.subtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {/* Description - Mobile Optimized */}
                <p className="text-sm sm:text-base text-neutral-warm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies - Modern Design */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-foreground text-xs sm:text-sm">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="text-xs bg-slate-modern/10 text-foreground border-slate-modern/20 px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Results - Modern Design */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-foreground text-xs sm:text-sm flex items-center">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-emerald-accent" />
                    Resultados Alcançados:
                  </h4>
                  <div className="space-y-1 sm:space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-neutral-warm">{result.label}:</span>
                        <span className="font-bold text-blue-corporate">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA - Modern Design */}
                <Button 
                  className="w-full bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Ver Mais Detalhes
                  <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Modern Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 mx-2 sm:mx-0"
        >
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-blue-corporate/10 to-blue-corporate/5 rounded-xl sm:rounded-2xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-corporate mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-neutral-warm">Projetos Entregues</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-emerald-accent/10 to-emerald-accent/5 rounded-xl sm:rounded-2xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-accent mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm text-neutral-warm">Taxa de Satisfação</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-modern/10 to-slate-modern/5 rounded-xl sm:rounded-2xl border border-slate-modern/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">24h</div>
            <div className="text-xs sm:text-sm text-neutral-warm">Tempo de Resposta</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-neutral-warm/20 to-neutral-warm/10 rounded-xl sm:rounded-2xl border border-neutral-warm/30 backdrop-blur-sm col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">5★</div>
            <div className="text-xs sm:text-sm text-neutral-warm">Avaliação Média</div>
          </div>
        </motion.div>

        {/* Bottom CTA - Modern Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-corporate/10 via-emerald-accent/10 to-slate-modern/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-corporate/20 mx-2 sm:mx-0 backdrop-blur-sm"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-blue-corporate mb-3 sm:mb-4 px-2">
            Pronto para o Próximo Projeto de Sucesso?
          </h3>
          <p className="text-sm sm:text-base text-neutral-warm mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Vamos conversar sobre como podemos transformar sua ideia em um projeto de sucesso comprovado
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-6 py-3"
          >
            Iniciar Meu Projeto
            <Star className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;