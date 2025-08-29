import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agente Virtual – Clínica Médica",
      description: "Sistema de agendamento automatizado com IA para otimizar consultas médicas e reduzir tempo de espera.",
      image: "/placeholder-project-1.jpg",
      link: "#"
    },
    {
      title: "E-commerce Responsivo – Loja Fashion",
      description: "Plataforma completa de vendas online com UX otimizada que aumentou as conversões em 150%.",
      image: "/placeholder-project-2.jpg", 
      link: "#"
    },
    {
      title: "Chatbot Omnichannel – Empresa de Logística",
      description: "Integração inteligente entre WhatsApp, site e telefone para atendimento 24/7 automatizado.",
      image: "/placeholder-project-3.jpg",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="text-accent">|</span> Explore alguns projetos que já desenvolvemos:
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Casos reais de sucesso que demonstram nosso compromisso com resultados excepcionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border-border hover:border-neon/50 transition-all duration-300 hover:shadow-neon group overflow-hidden">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm opacity-75">Imagem do Projeto</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" className="w-full group-hover:border-neon group-hover:text-neon">
                  Ver detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;