import { ArrowLeft, Smartphone, Tablet, Monitor, Zap, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ResponsiveWebsites = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Início
        </Button>
        
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            Sites Responsivos
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sites que se Adaptam a
            <span className="text-blue-600 block">Qualquer Dispositivo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos sites responsivos que oferecem uma experiência perfeita 
            em smartphones, tablets e desktops, garantindo que seus clientes tenham 
            acesso otimizado ao seu negócio em qualquer lugar.
          </p>
        </div>
      </div>

      {/* Devices Showcase */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-navy-blue to-vibrant-blue rounded-2xl p-8 text-white shadow-xl border border-navy-blue/20">
            <div className="flex items-center mb-6">
              <Smartphone className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Mobile First</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Priorizamos a experiência mobile, garantindo que seu site funcione perfeitamente em smartphones de todos os tamanhos.
            </p>
          </div>

          <div className="bg-gradient-to-r from-navy-blue to-vibrant-blue rounded-2xl p-8 text-white shadow-xl border border-vibrant-blue/20">
            <div className="flex items-center mb-6">
              <Tablet className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Tablets Otimizados</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Interface adaptada para tablets, aproveitando o espaço extra para uma navegação mais confortável e intuitiva.
            </p>
          </div>

          <div className="bg-gradient-to-r from-navy-blue to-vibrant-blue rounded-2xl p-8 text-white shadow-xl border border-navy-blue/20">
            <div className="flex items-center mb-6">
              <Monitor className="h-12 w-12 text-white/80 mr-4" />
              <h3 className="text-2xl font-bold">Desktop Completo</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Experiência completa em desktops, com todos os recursos e funcionalidades otimizadas para telas maiores.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que ter um Site Responsivo ajuda a Vender Mais?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             <div className="bg-gradient-to-br from-navy-blue/10 to-vibrant-blue/20 p-6 rounded-xl border border-vibrant-blue/30">
               <div className="bg-vibrant-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <Users className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-navy-blue mb-3">
                 Melhora a Experiência do Usuário
               </h3>
               <div className="space-y-2 text-navy-blue/80">
                 <p><strong>Navegação fácil:</strong> Clientes podem acessar seu site de qualquer lugar, a qualquer momento, sem ter que dar zoom ou rolar excessivamente.</p>
                 <p><strong>Maior tempo no site:</strong> Uma experiência agradável faz com que os visitantes permaneçam mais tempo no seu site, aumentando as chances de compra.</p>
               </div>
             </div>
 
             <div className="bg-gradient-to-br from-vibrant-blue/10 to-navy-blue/20 p-6 rounded-xl border border-navy-blue/30">
               <div className="bg-navy-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <TrendingUp className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-navy-blue mb-3">
                 Otimização para SEO
               </h3>
               <p className="text-navy-blue/80">
                 O Google e outros buscadores priorizam sites responsivos em seus resultados de pesquisa, especialmente em buscas feitas por dispositivos móveis. Isso significa que seu site tem mais chances de aparecer nas primeiras posições, atraindo mais tráfego orgânico e potenciais clientes.
               </p>
             </div>
 
             <div className="bg-gradient-to-br from-energetic-orange/10 to-vibrant-blue/20 p-6 rounded-xl border border-energetic-orange/30">
               <div className="bg-energetic-orange w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <Zap className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-navy-blue mb-3">
                 Aumento da Taxa de Conversão
               </h3>
               <p className="text-navy-blue/80">
                 Quando um site é fácil de usar e navegar em qualquer dispositivo, as pessoas estão mais propensas a concluir uma compra, preencher um formulário ou entrar em contato. Menos atrito no processo de compra se traduz em mais vendas.
               </p>
             </div>
 
             <div className="bg-gradient-to-br from-navy-blue/10 to-vibrant-blue/15 p-6 rounded-xl border border-vibrant-blue/30">
               <div className="bg-vibrant-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <Smartphone className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-navy-blue mb-3">
                 Alcance Maior de Público
               </h3>
               <p className="text-navy-blue/80">
                 Cada vez mais pessoas usam smartphones para navegar na internet e fazer compras. Ter um site responsivo garante que você não está perdendo essa fatia significativa do mercado.
               </p>
             </div>
 
             <div className="bg-gradient-to-br from-vibrant-blue/10 to-navy-blue/15 p-6 rounded-xl border border-navy-blue/30">
               <div className="bg-navy-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <TrendingUp className="h-6 w-6 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-navy-blue mb-3">
                 Competitividade
               </h3>
               <p className="text-navy-blue/80">
                 A maioria dos seus concorrentes já deve ter um site responsivo. Para se manter relevante e competitivo no mercado digital, é fundamental oferecer a mesma facilidade aos seus clientes.
               </p>
             </div>
           </div>

          {/* Summary Box */}
           <div className="bg-gradient-to-r from-navy-blue to-vibrant-blue rounded-2xl p-8 text-white">
             <h3 className="text-2xl font-bold mb-6 text-center">
               Em Resumo, ter um Site Responsivo é Essencial porque:
             </h3>
             <div className="grid md:grid-cols-2 gap-4">
               <div className="flex items-start space-x-3">
                 <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
                 <p>Oferece uma ótima experiência ao usuário em qualquer dispositivo</p>
               </div>
               <div className="flex items-start space-x-3">
                 <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
                 <p>Melhora seu posicionamento nos resultados de busca</p>
               </div>
               <div className="flex items-start space-x-3">
                 <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
                 <p>Aumenta suas chances de conversão e vendas</p>
               </div>
               <div className="flex items-start space-x-3">
                 <CheckCircle className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
                 <p>Amplia seu alcance de mercado</p>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">60%+</div>
              <p className="text-blue-100">
                do tráfego web vem de dispositivos móveis
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">53%</div>
              <p className="text-blue-100">
                dos usuários abandonam sites que demoram mais de 3s para carregar
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <p className="text-blue-100">
                dos usuários julgam a credibilidade pela aparência do site
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pronto para ter um Site Responsivo?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos criar um site 
          que funciona perfeitamente em todos os dispositivos.
        </p>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          onClick={() => navigate('/')}
        >
          Solicitar Orçamento
        </Button>
      </div>
    </div>
  );
};

export default ResponsiveWebsites;