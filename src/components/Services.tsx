
import React, { useState } from 'react';
import { Laptop, ShoppingBag, Code, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const [activeTab, setActiveTab] = useState("institutional");
  
  const siteCategories = [
    {
      title: "Advogados",
      description: "Apresentação de serviços jurídicos, agendamento de consultas e área do cliente.",
      icon: "⚖️",
    },
    {
      title: "Contadores",
      description: "Painel para clientes, captura de leads e informações contábeis.",
      icon: "📊",
    },
    {
      title: "Engenheiros",
      description: "Portfólio de projetos, orçamentos rápidos e integração com WhatsApp.",
      icon: "🏗️",
    },
    {
      title: "Clínicas",
      description: "Agendamento online, chatbot para dúvidas e área do paciente.",
      icon: "🏥",
    },
    {
      title: "Barbearias & Salões",
      description: "Sistema de agendamento, galeria de cortes e promoções dinâmicas.",
      icon: "💈",
    },
    {
      title: "Pizzarias & Restaurantes",
      description: "Cardápio digital, pedidos online e integração com delivery.",
      icon: "🍕",
    },
    {
      title: "Floriculturas",
      description: "Catálogo de produtos, pedidos online e integração com redes sociais.",
      icon: "🌺",
    },
  ];
  
  return (
    <section id="services" className="py-20 relative">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="inline-block px-4 py-1 rounded-full bg-wz-blue/10 border border-wz-blue/20 mb-4">
            <p className="text-sm text-wz-blue font-medium">Nossos Serviços</p>
          </div>
          <h2 className="heading mb-6">Criação de <span className="text-gradient">Sites</span></h2>
          <p className="paragraph text-gray-400">
            Desenvolvemos soluções digitais para empresas de todos os tamanhos, desde pequenos sites institucionais até grandes plataformas de e-commerce.
          </p>
        </div>
        
        <Tabs defaultValue="institutional" className="w-full mb-16">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-10">
            <TabsTrigger value="institutional" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <Laptop className="w-4 h-4 mr-2" />
              Sites Institucionais
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Lojas Virtuais
            </TabsTrigger>
            <TabsTrigger value="custom" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <Code className="w-4 h-4 mr-2" />
              Websites Personalizados
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="institutional" className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6 hover-lift card-shadow">
              <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                <Laptop className="w-8 h-8 text-wz-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">Sites Institucionais</h3>
              <p className="text-gray-400 mb-4">Desenvolvimento de sites profissionais, responsivos e otimizados para diferentes segmentos de mercado.</p>
              
              <div className="mt-4">
                <p className="text-sm font-semibold text-white mb-3">Segmentos atendidos:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                  {siteCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <div>
                        <h4 className="text-sm font-medium">{category.title}</h4>
                        <p className="text-xs text-gray-400">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="mt-6 flex items-center gap-1 text-wz-blue hover:underline text-sm font-medium transition-all"
              >
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="ecommerce" className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6 hover-lift card-shadow">
              <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                <ShoppingBag className="w-8 h-8 text-wz-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">Lojas Virtuais</h3>
              <p className="text-gray-400 mb-4">E-commerce completo com pagamentos online e integração com marketplaces.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Catálogo Digital</h4>
                  <p className="text-sm text-gray-400">Exibição profissional e interativa de produtos, com fotos e descrições detalhadas.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Pagamentos Online</h4>
                  <p className="text-sm text-gray-400">Integração com principais gateways de pagamento, oferecendo máxima segurança nas transações.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Marketplaces</h4>
                  <p className="text-sm text-gray-400">Integração com Mercado Livre, Amazon, Magalu e outras plataformas populares.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Gestão de Estoque</h4>
                  <p className="text-sm text-gray-400">Controle automático de estoque, com alertas de produtos com estoque baixo.</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="mt-6 flex items-center gap-1 text-wz-blue hover:underline text-sm font-medium transition-all"
              >
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="custom" className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6 hover-lift card-shadow">
              <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                <Code className="w-8 h-8 text-wz-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">Web Sites Personalizados</h3>
              <p className="text-gray-400 mb-4">Desenvolvimento de sites exclusivos sob demanda, com design único e funcionalidades personalizadas.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Design Exclusivo</h4>
                  <p className="text-sm text-gray-400">Layouts únicos desenvolvidos especificamente para sua marca e identidade visual.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Funcionalidades Específicas</h4>
                  <p className="text-sm text-gray-400">Desenvolvimento de features personalizadas para atender necessidades específicas do seu negócio.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Integrações Avançadas</h4>
                  <p className="text-sm text-gray-400">Conexão com ERPs, CRMs e outras plataformas essenciais para seu negócio.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">Suporte Personalizado</h4>
                  <p className="text-sm text-gray-400">Atendimento dedicado e manutenção contínua para garantir a evolução da plataforma.</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="mt-6 flex items-center gap-1 text-wz-blue hover:underline text-sm font-medium transition-all"
              >
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 reveal-animation">
          <div className="glassmorphism rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Sites profissionais que convertem visitantes em clientes</h3>
                <p className="text-gray-400 mb-6">
                  Nossos sites são desenvolvidos com foco em conversão, velocidade e experiência do usuário. Utilizamos as melhores tecnologias e práticas de mercado para garantir que seu site seja um diferencial para o seu negócio.
                </p>
                <ul className="space-y-3">
                  {[
                    "Totalmente responsivo para todos os dispositivos",
                    "Otimizado para mecanismos de busca (SEO)",
                    "Carregamento rápido e performance otimizada",
                    "Design moderno e personalizado",
                    "Integrações com sistemas de pagamento e CRMs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 w-5 h-5 rounded-full bg-wz-blue/20 flex-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-wz-blue"></div>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="btn-glow bg-wz-blue hover:bg-wz-blue/90 transition-all text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wz-black/90 z-10"></div>
                <div className="h-full w-full card-3d bg-gradient-to-br from-wz-dark to-wz-black rounded-xl border border-white/10 shadow-xl flex-center p-6">
                  <div className="relative w-full h-full overflow-hidden rounded-lg border border-white/10 shadow-inner">
                    <div className="absolute inset-0 bg-wz-dark/80"></div>
                    <div className="absolute inset-0 flex-center flex-col gap-4 p-4">
                      <div className="w-full h-8 bg-white/5 rounded-lg animate-pulse-slow"></div>
                      <div className="w-3/4 h-4 bg-white/5 rounded-lg animate-pulse-slow"></div>
                      <div className="w-1/2 h-4 bg-white/5 rounded-lg animate-pulse-slow"></div>
                      <div className="w-full h-40 bg-white/5 rounded-lg mt-4 animate-pulse-slow"></div>
                      <div className="grid grid-cols-2 gap-4 w-full mt-4">
                        <div className="h-20 bg-white/5 rounded-lg animate-pulse-slow"></div>
                        <div className="h-20 bg-white/5 rounded-lg animate-pulse-slow"></div>
                      </div>
                      <div className="mt-4 w-full">
                        <div className="h-10 bg-wz-blue/20 rounded-lg animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
