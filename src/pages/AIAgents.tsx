import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, MessageSquare, Phone, Mail, Users, Clock, Target, TrendingUp, Zap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIAgents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-warm/10 to-slate-modern/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-modern via-slate-modern/90 to-blue-corporate/20 text-white py-20">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            className="mb-8 text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Como Funciona um <span className="bg-gradient-to-r from-blue-corporate to-emerald-accent bg-clip-text text-transparent">Agente de IA</span> para Atendimento?
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Descubra como a inteligência artificial pode revolucionar seu atendimento ao cliente e impulsionar suas vendas 24 horas por dia.
            </p>
          </div>
        </div>
      </div>

      {/* Canais de Atendimento */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Canais de Interação</h2>
          <p className="text-xl text-neutral-warm max-w-3xl mx-auto">
            Um agente de IA pode interagir com seus clientes através de diferentes canais de comunicação
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Chatbots</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Mensagens de texto no seu site, WhatsApp, Instagram, Messenger e outras plataformas de comunicação.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Phone className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Assistentes de Voz</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Respostas a comandos de voz em chamadas telefônicas e sistemas de voz interativos.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Mail className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">E-mail Inteligente</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Respostas automáticas e personalizadas a e-mails de clientes com contexto e precisão.
            </p>
          </div>
        </div>
      </div>

      {/* Diferenciais da IA */}
      <div className="bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">O Poder do Processamento de Linguagem Natural</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A principal diferença entre um agente de IA e respostas pré-programadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Entende a Intenção</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Não se baseia apenas em palavras-chave. Compreende o contexto da pergunta e a real necessidade do cliente.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Aprende e Melhora</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Com o tempo e interação, a IA aprende e refina suas respostas, tornando-se cada vez mais precisa.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Zap className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Tarefas Complexas</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Verifica pedidos, agenda serviços, emite boletos e processa devoluções automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Como Impulsiona Vendas */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Como um Agente de IA Impulsiona as Vendas?</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Muito além de responder perguntas, a IA cria oportunidades diretas para aumentar suas vendas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Clock className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold text-white">Disponibilidade 24/7</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Atendimento instantâneo a qualquer hora, eliminando a frustração de esperar pelo horário comercial.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold text-white">Personalização em Escala</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Acessa histórico de compras e faz recomendações personalizadas durante a conversa.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold text-white">Qualificação de Leads</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Identifica clientes com maior potencial de compra e encaminha leads qualificados para vendedores.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold text-white">Otimização do Funil</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Conduz o cliente por todas as etapas do funil de vendas, do interesse à compra final.
            </p>
          </div>
        </div>
      </div>

      {/* Exemplo Prático */}
      <div className="bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Exemplo Prático</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Veja a diferença na prática: loja de roupas online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Sem IA</h3>
             <p className="text-neutral-warm leading-relaxed">
                Cliente pergunta: "Vocês têm jaquetas de couro preta?"<br/><br/>
                • Precisa esperar o próximo dia útil<br/>
                • Pode se frustrar e sair do site<br/>
                • Perde a oportunidade de venda<br/>
                • Experiência negativa do cliente
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">✅ Com IA</h3>
              <p className="text-white/90 leading-relaxed">
                Resposta instantânea: "Sim, temos! Qual é o seu tamanho?"<br/><br/>
                • Mostra fotos de modelos específicos<br/>
                • Sugere combinações com outras peças<br/>
                • Oferece cupom de desconto exclusivo<br/>
                • Encaminha direto para a compra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Em Resumo, um Agente de IA é Essencial porque:</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
              <p>Complementa o atendimento humano sem substituí-lo</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
              <p>Lida com tarefas repetitivas e simples automaticamente</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
              <p>Libera sua equipe para casos complexos e estratégicos</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
              <p>Foca em vendas personalizadas de alto valor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-modern via-slate-modern/90 to-blue-corporate/20 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Revolucionar seu Atendimento?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Implemente um agente de IA personalizado para seu negócio e veja suas vendas crescerem 24 horas por dia.
          </p>
          <Button 
            onClick={() => navigate('/')}
            size="lg" 
            className="bg-gradient-to-r from-blue-corporate to-emerald-accent hover:from-blue-corporate-dark hover:to-emerald-accent-dark text-white px-8 py-4 text-lg"
          >
            Fale Conosco Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;