import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, ShoppingCart, MessageCircle, TrendingUp, Clock, Users, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agente Virtual – Clínica Médica",
      subtitle: "Sistema de Agendamento Inteligente",
      description: "Sistema de agendamento automatizado com IA para otimizar consultas médicas e reduzir tempo de espera em 70%.",
      image: "/placeholder-project-1.jpg",
      link: "#",
      icon: Calendar,
      category: "IA & Automação",
      technologies: ["React", "Node.js", "IA", "WhatsApp API"],
      results: [
        { label: "Redução no tempo de espera", value: "70%" },
        { label: "Agendamentos automatizados", value: "95%" },
        { label: "Satisfação do cliente", value: "4.8/5" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      title: "E-commerce Responsivo – Loja Fashion",
      subtitle: "Plataforma de Vendas Otimizada",
      description: "Plataforma completa de vendas online com UX otimizada que aumentou as conversões em 150% e o ticket médio em 80%.",
      image: "/placeholder-project-2.jpg", 
      link: "#",
      icon: ShoppingCart,
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "Tailwind", "Analytics"],
      results: [
        { label: "Aumento nas conversões", value: "150%" },
        { label: "Crescimento do ticket médio", value: "80%" },
        { label: "Tempo de carregamento", value: "<2s" }
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      title: "Chatbot Omnichannel – Empresa de Logística",
      subtitle: "Atendimento Integrado 24/7",
      description: "Integração inteligente entre WhatsApp, site e telefone para atendimento 24/7 automatizado com 90% de resolução.",
      image: "/placeholder-project-3.jpg",
      link: "#",
      icon: MessageCircle,
      category: "Automação",
      technologies: ["Python", "WhatsApp", "Telegram", "CRM"],
      results: [
        { label: "Taxa de resolução", value: "90%" },
        { label: "Redução de custos", value: "60%" },
        { label: "Tempo de resposta", value: "<30s" }
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Projetos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Casos de <span className="text-primary">Sucesso</span> Comprovados
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Projetos reais que transformaram negócios e geraram resultados excepcionais para nossos clientes
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2 bg-white overflow-hidden">
              {/* Project Header */}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs font-medium">
                    {project.category}
                  </Badge>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black font-medium mb-4">
                    {project.subtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-black leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    Resultados Alcançados:
                  </h4>
                  <div className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center text-sm">
                        <span className="text-black">{result.label}:</span>
                        <span className="font-bold text-primary">{result.value}</span>
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
                  Ver Mais Detalhes
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-black">Projetos Entregues</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-sm text-black">Taxa de Satisfação</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
            <div className="text-sm text-black">Tempo de Resposta</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-sm text-black">Anos de Experiência</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para o Próximo Projeto de Sucesso?
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua ideia em um projeto de sucesso comprovado
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Iniciar Meu Projeto
            <Star className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;