import { Palette, Brain, MessageSquare, ArrowRight, CheckCircle, Users, Target, Zap, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const HowWeHelp = () => {
  const helpAreas = [
    {
      icon: Palette,
      title: "Web Design de Impacto",
      subtitle: "Interfaces que Convertem",
      description: "Criamos interfaces visuais atrativas e funcionais que convertem visitantes em clientes fiéis através de UX/UI otimizado.",
      features: ["Design Responsivo", "UX Otimizada", "Conversão Focada", "Performance Máxima"],
      color: "from-blue-corporate to-emerald-accent",
      bgColor: "bg-blue-corporate/10"
    },
    {
      icon: Brain,
      title: "IA aplicada ao Atendimento", 
      subtitle: "Inteligência Artificial Avançada",
      description: "Desenvolvemos agentes inteligentes que entendem e respondem às necessidades dos seus clientes 24/7 com precisão.",
      features: ["Chatbots Inteligentes", "Processamento de Linguagem", "Aprendizado Contínuo", "Integração Total"],
      color: "from-slate-modern to-blue-corporate",
      bgColor: "bg-slate-modern/10"
    },
    {
      icon: MessageSquare,
      title: "Consultoria Personalizada",
      subtitle: "Estratégias Sob Medida",
      description: "Analisamos seu negócio para criar estratégias digitais sob medida que geram resultados reais e mensuráveis.",
      features: ["Análise Completa", "Estratégia Personalizada", "Implementação Guiada", "Suporte Contínuo"],
      color: "from-emerald-accent to-emerald-accent-light",
      bgColor: "bg-emerald-accent/10"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análise & Diagnóstico",
      description: "Entendemos seu negócio, objetivos e desafios atuais",
      icon: Target
    },
    {
      number: "02",
      title: "Estratégia & Planejamento",
      description: "Criamos um plano personalizado para suas necessidades",
      icon: Brain
    },
    {
      number: "03",
      title: "Desenvolvimento & Implementação",
      description: "Executamos a solução com tecnologia de ponta",
      icon: Zap
    },
    {
      number: "04",
      title: "Otimização & Suporte",
      description: "Monitoramos e otimizamos continuamente os resultados",
      icon: Users
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(33) 99944-1548",
      action: "tel:+5531999999999"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato.atendeexpress@gmail.com",
      action: "mailto:contato.atendeexpress@gmail.com"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Belo Horizonte, MG",
      action: "#"
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex: 8h às 18h",
      action: "#"
    }
  ];

  return (
    <>
      {/* How We Help Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-corporate/10 text-blue-corporate border-blue-corporate/20 backdrop-blur-sm">
              Como Ajudamos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformamos <span className="text-blue-corporate">Sua Empresa</span> Digitalmente
            </h2>
            <p className="text-lg text-neutral-warm max-w-3xl mx-auto">
              Três pilares fundamentais para revolucionar seu atendimento digital e acelerar o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {helpAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-corporate/30 hover:-translate-y-2 bg-gradient-to-br from-neutral-warm/50 to-slate-modern/5 text-center backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 bg-gradient-to-r ${area.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <area.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-corporate group-hover:text-foreground transition-colors mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-neutral-warm font-medium">
                    {area.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-neutral-warm leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Principais Benefícios:</h4>
                    <div className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-accent flex-shrink-0" />
                          <span className="text-sm text-neutral-warm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-emerald-accent/10 text-emerald-accent border-emerald-accent/20 backdrop-blur-sm">
              Nosso Processo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Como <span className="text-emerald-accent">Trabalhamos</span> com Você
            </h2>
            <p className="text-lg text-neutral-warm max-w-3xl mx-auto">
              Um processo estruturado e transparente para garantir o sucesso do seu projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-corporate/30 bg-gradient-to-br from-neutral-warm/50 to-slate-modern/5 backdrop-blur-sm">
                  <div className="mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-corporate rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-emerald-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-warm text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-neutral-warm" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-neutral-warm/10 to-slate-modern/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-slate-modern/10 text-foreground border-slate-modern/20 backdrop-blur-sm">
              Entre em Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vamos <span className="text-foreground">Conversar</span> sobre seu Projeto
            </h2>
            <p className="text-lg text-neutral-warm max-w-3xl mx-auto">
              Estamos prontos para transformar suas ideias em soluções digitais de sucesso
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Fale Conosco</h3>
                <p className="text-neutral-warm mb-8 leading-relaxed">
                  Nossa equipe está sempre disponível para esclarecer dúvidas e apresentar as melhores soluções para seu negócio.
                </p>
              </div>
              

            </div>
            
            {/* Contact Form */}
            <Card className="p-8 border-2 border-blue-corporate/20 bg-gradient-to-br from-neutral-warm/50 to-slate-modern/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicite um Orçamento</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" className="border-2 focus:border-blue-corporate backdrop-blur-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="border-2 focus:border-blue-corporate backdrop-blur-sm" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                    <Input placeholder="(00) 00000-0000" className="border-2 focus:border-blue-corporate backdrop-blur-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                    <Input placeholder="Nome da sua empresa" className="border-2 focus:border-blue-corporate backdrop-blur-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Serviço de Interesse</label>
                  <select className="w-full p-3 border-2 border-input rounded-md focus:border-blue-corporate focus:outline-none backdrop-blur-sm">
                    <option>Selecione um serviço</option>
                    <option>Site Responsivo</option>
                    <option>Agente de IA</option>

                    <option>Consultoria UX/UI</option>
                    <option>Todos os Serviços</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <textarea 
                    className="w-full p-3 border-2 border-input rounded-md focus:border-blue-corporate focus:outline-none min-h-[120px] backdrop-blur-sm" 
                    placeholder="Conte-nos mais sobre seu projeto e objetivos..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Solicitação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeHelp;