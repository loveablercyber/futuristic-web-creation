
import React, { useEffect } from 'react';
import { Laptop, ShoppingBag, Code, ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
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
  
  const serviceTypes = [
    {
      title: "Sites Institucionais",
      description: "Desenvolvimento de sites profissionais, responsivos e otimizados para diferentes segmentos de mercado.",
      icon: <Laptop className="w-8 h-8 text-wz-blue" />,
      categories: [...siteCategories],
    },
    {
      title: "Lojas Virtuais",
      description: "E-commerce completo com pagamentos online e integração com marketplaces.",
      icon: <ShoppingBag className="w-8 h-8 text-wz-blue" />,
      categories: [],
    },
    {
      title: "Web Sites Personalizados",
      description: "Desenvolvimento de sites exclusivos sob demanda, com design único e funcionalidades personalizadas.",
      icon: <Code className="w-8 h-8 text-wz-blue" />,
      categories: [],
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceTypes.map((service, index) => (
            <div 
              key={index} 
              className="reveal-animation glassmorphism rounded-2xl p-6 hover-lift card-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              {service.categories.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white mb-3">Segmentos atendidos:</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {service.categories.map((category, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <div>
                          <h4 className="text-sm font-medium">{category.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <a 
                href="#contact" 
                className="mt-4 flex items-center gap-1 text-wz-blue hover:underline text-sm font-medium transition-all"
              >
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 reveal-animation">
          <div className="glassmorphism rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/20 rounded-full blur-3xl -z-10"></div>
            
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
