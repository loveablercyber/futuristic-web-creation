
import React from 'react';
import { ShoppingCart, MessageSquare, MapPin } from 'lucide-react';

const Delivery = () => {
  const deliverySystems = [
    {
      title: "Cardápio Digital Interativo",
      description: "Cardápio digital completo com imagens, descrições e preços atualizados em tempo real.",
      icon: <ShoppingCart className="w-8 h-8 text-wz-blue" />,
      features: [
        "Atualização em tempo real",
        "Categorias personalizáveis",
        "Detalhes de ingredientes",
        "Destacar itens especiais",
        "Integração com site existente"
      ]
    },
    {
      title: "Pedidos Online via WhatsApp",
      description: "Sistema de pedidos integrado diretamente ao WhatsApp da sua empresa.",
      icon: <MessageSquare className="w-8 h-8 text-wz-blue" />,
      features: [
        "Pedidos formatados automaticamente",
        "Confirmação automática",
        "Histórico de pedidos",
        "Integração com sistema de gestão",
        "Múltiplas formas de pagamento"
      ]
    },
    {
      title: "Rastreamento de Entrega",
      description: "Sistema de rastreamento em tempo real para que seus clientes acompanhem os pedidos.",
      icon: <MapPin className="w-8 h-8 text-wz-blue" />,
      features: [
        "Rastreamento em tempo real",
        "Notificações automáticas",
        "Interface amigável",
        "Compatível com aplicativos de entrega",
        "Histórico de entregas"
      ]
    }
  ];
  
  const businessTypes = [
    "Restaurantes",
    "Pizzarias",
    "Mercados",
    "Farmácias",
    "Lojas",
    "Serviços"
  ];
  
  return (
    <section id="delivery" className="py-20 relative">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="inline-block px-4 py-1 rounded-full bg-wz-purple/10 border border-wz-purple/20 mb-4">
            <p className="text-sm text-wz-purple-light font-medium">Soluções</p>
          </div>
          <h2 className="heading mb-6">Sistemas de <span className="text-gradient">Delivery</span></h2>
          <p className="paragraph text-gray-400">
            Soluções completas para restaurantes, pizzarias, mercados e farmácias, com pedidos online e rastreamento de entrega.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliverySystems.map((system, index) => (
            <div 
              key={index}
              className="reveal-animation relative glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] border border-white/10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                  {system.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{system.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{system.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full bg-wz-blue/20 flex-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-wz-blue"></div>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="w-full bg-gradient-to-r from-wz-blue to-wz-purple hover:brightness-110 text-white font-medium py-3 px-6 rounded-lg flex-center transition-all"
                >
                  Solicitar Demonstração
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 reveal-animation">
          <div className="glassmorphism rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Sistema completo para seu negócio</h3>
                <p className="text-gray-400 mb-6">
                  Nosso sistema de delivery é personalizado para atender às necessidades específicas do seu negócio, proporcionando uma experiência fluida para seus clientes e facilitando a gestão dos pedidos.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Ideal para:</h4>
                  <div className="flex flex-wrap gap-3">
                    {businessTypes.map((type, idx) => (
                      <div 
                        key={idx}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">Benefícios:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Aumento nas vendas",
                    "Redução de erros",
                    "Maior satisfação do cliente",
                    "Gestão facilitada",
                    "Economia de tempo",
                    "Análise de dados"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full bg-wz-blue/20 flex-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-wz-blue"></div>
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="btn-glow bg-wz-blue hover:bg-wz-blue/90 transition-all text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2"
                >
                  Solicitar orçamento
                </a>
              </div>
              
              <div className="relative h-full min-h-[400px] bg-wz-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-wz-black to-transparent z-10"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[300px] h-[600px] bg-wz-black/70 border-8 border-wz-dark rounded-[40px] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full relative p-4">
                      <div className="absolute top-0 left-0 w-full h-8 bg-wz-dark rounded-t-[32px] flex items-center justify-center">
                        <div className="w-20 h-4 bg-black/20 rounded-full"></div>
                      </div>
                      
                      <div className="mt-10 space-y-4">
                        <div className="w-full h-10 bg-white/5 rounded-lg"></div>
                        <div className="w-full h-40 bg-white/5 rounded-lg"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-32 bg-white/5 rounded-lg"></div>
                          <div className="h-32 bg-white/5 rounded-lg"></div>
                        </div>
                        <div className="w-full h-12 bg-wz-blue/20 rounded-lg"></div>
                        <div className="w-full h-32 bg-white/5 rounded-lg"></div>
                      </div>
                      
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <div className="w-32 h-5 bg-wz-dark rounded-full"></div>
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

export default Delivery;
