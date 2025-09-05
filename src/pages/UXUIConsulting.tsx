import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Users, Target, TrendingUp, ShoppingCart, Eye, CheckCircle, BarChart, MousePointer, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UXUIConsulting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10">
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
              O que uma <span className="bg-gradient-to-r from-blue-corporate to-emerald-accent bg-clip-text text-transparent">Consultoria de UX/UI</span> faz?
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Descubra como uma consultoria especializada pode transformar sua plataforma digital e alavancar suas vendas através de uma experiência excepcional.
            </p>
          </div>
        </div>
      </div>

      {/* Frentes de Trabalho */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frentes de Trabalho</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Uma consultoria de UX/UI trabalha de forma estratégica em diferentes áreas para otimizar a experiência do usuário
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Análise da Jornada do Usuário</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Mapeia como o seu cliente interage com o seu produto digital, identificando pontos de fricção, dificuldades e oportunidades de melhoria.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Pesquisa com o Usuário</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Coleta feedback diretamente de seus clientes para entender suas necessidades, comportamentos e expectativas através de entrevistas e testes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <MousePointer className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Melhoria da Usabilidade (UX)</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Foca em otimizar a funcionalidade, garantindo que o produto seja fácil de usar e que a navegação seja lógica e intuitiva.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Palette className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Otimização do Design (UI)</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Concentra-se na aparência visual, criando layouts, cores, tipografia e ícones atraentes e consistentes com sua marca.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Eye className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Identificação de Problemas</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Aponta os motivos pelos quais os clientes podem estar abandonando o carrinho ou não encontrando o que procuram.
            </p>
          </div>
        </div>
      </div>

      {/* Como Alavancar Vendas */}
      <div className="bg-gradient-to-b from-neutral-warm/20 to-slate-modern/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Como a Consultoria Pode Alavancar suas Vendas?</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A consultoria não aumenta as vendas por si só, mas cria as condições ideais para que o cliente realize a compra de forma mais fluida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Aumento da Taxa de Conversão</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Ao remover os obstáculos na jornada do cliente, a consultoria torna o processo de compra mais simples e rápido, levando a mais vendas concluídas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <ShoppingCart className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Redução do Abandono de Carrinho</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Simplifica o processo de checkout, removendo campos desnecessários e tornando o pagamento mais intuitivo e rápido.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-modern to-blue-corporate rounded-2xl p-8 text-white shadow-xl border border-blue-corporate/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Melhora da Credibilidade</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Um design profissional e fácil de usar transmite confiança, deixando o cliente mais à vontade para fornecer dados e realizar compras.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-corporate to-emerald-accent rounded-2xl p-8 text-white shadow-xl border border-emerald-accent/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <BarChart className="h-12 w-12 text-white/80 mr-4" />
                <h3 className="text-2xl font-bold text-white">Fidelização do Cliente</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Uma experiência positiva aumenta a probabilidade de retorno e novas compras, transformando compradores ocasionais em clientes fiéis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resumo Final */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-corporate/10 via-emerald-accent/10 to-slate-modern/10 rounded-2xl p-12 border border-blue-corporate/20 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-foreground mb-6">Resumo</h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Uma consultoria de UX/UI trabalha para que a sua plataforma digital não seja apenas bonita, mas funcional e focada em resolver os problemas dos seus clientes. Isso resulta em uma experiência melhor, que por sua vez se traduz em mais vendas e clientes mais satisfeitos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-blue-corporate hover:bg-blue-corporate-dark text-white px-8 py-3 text-lg"
            >
              Solicitar Consultoria
            </Button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="border-blue-corporate text-blue-corporate hover:bg-blue-corporate/10 px-8 py-3 text-lg"
            >
              Ver Outros Serviços
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXUIConsulting;