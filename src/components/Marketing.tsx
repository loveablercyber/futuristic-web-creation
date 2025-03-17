
import React from 'react';
import { BarChart, Search, Globe, Activity, AreaChart, Users, Zap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Marketing = () => {
  const marketingPlans = [
    {
      name: "Essencial",
      description: "Comece sua presença digital com o básico",
      price: "R$ 799,90",
      period: "/mês",
      features: [
        "Gestão de redes sociais",
        "3 postagens semanais",
        "Relatórios mensais",
        "1 campanha de anúncio",
        "Suporte por e-mail"
      ],
      popular: false,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      buttonClass: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "Profissional",
      description: "Impulsione seu negócio com estratégias avançadas",
      price: "R$ 1.499,90",
      period: "/mês",
      features: [
        "Gestão de redes sociais",
        "5 postagens semanais",
        "SEO avançado",
        "Blog otimizado",
        "Campanhas pagas",
        "Análise de concorrentes",
        "Suporte prioritário"
      ],
      popular: true,
      color: "from-wz-blue/20 to-wz-purple/20",
      borderColor: "border-wz-blue/30",
      buttonClass: "bg-wz-blue hover:bg-blue-600"
    },
    {
      name: "Premium",
      description: "Estratégia completa para maximizar resultados",
      price: "R$ 2.899,90",
      period: "/mês",
      features: [
        "Estratégia completa",
        "Postagens diárias",
        "SEO avançado",
        "Blog otimizado",
        "Campanhas pagas",
        "Branding",
        "Automação de marketing",
        "Consultoria estratégica",
        "Suporte 24/7"
      ],
      popular: false,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      buttonClass: "bg-purple-500 hover:bg-purple-600"
    }
  ];
  
  const seoPlans = [
    {
      name: "Básico",
      description: "Otimização básica para sites pequenos",
      price: "R$ 599,90",
      period: "/mês",
      features: [
        "Análise inicial do site",
        "Otimização de meta tags",
        "Correção de erros técnicos",
        "Relatórios mensais",
        "10 palavras-chave"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      buttonClass: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "Avançado",
      description: "Para quem busca posicionamento competitivo",
      price: "R$ 1.199,90",
      period: "/mês",
      features: [
        "Tudo do plano Básico",
        "Análise de concorrentes",
        "Link building",
        "Otimização de conteúdo",
        "25 palavras-chave",
        "2 artigos mensais",
        "Suporte prioritário"
      ],
      color: "from-wz-blue/20 to-wz-purple/20",
      borderColor: "border-wz-blue/30",
      buttonClass: "bg-wz-blue hover:bg-blue-600"
    },
    {
      name: "Pro",
      description: "Estratégia completa de SEO",
      price: "R$ 2.399,90",
      period: "/mês",
      features: [
        "Tudo do plano Avançado",
        "Auditoria técnica avançada",
        "Otimização de conversão",
        "50+ palavras-chave",
        "4 artigos mensais",
        "Análise semanal",
        "SEO local avançado",
        "Integração com Google Business",
        "Consultoria dedicada"
      ],
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      buttonClass: "bg-purple-500 hover:bg-purple-600"
    }
  ];
  
  const adsPlans = [
    {
      name: "Básico",
      description: "Primeiros passos com anúncios pagos",
      price: "R$ 899,90",
      period: "/mês",
      features: [
        "Configuração de conta",
        "1 campanha ativa",
        "R$1.500 de investimento",
        "Relatórios mensais",
        "Suporte por e-mail"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      buttonClass: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "Avançado",
      description: "Estratégia multi-plataforma",
      price: "R$ 1.699,90",
      period: "/mês",
      features: [
        "Configuração avançada",
        "3 campanhas ativas",
        "R$3.000 de investimento",
        "Google e Meta Ads",
        "Remarketing",
        "Otimização semanal",
        "Relatórios detalhados"
      ],
      color: "from-wz-blue/20 to-wz-purple/20",
      borderColor: "border-wz-blue/30",
      buttonClass: "bg-wz-blue hover:bg-blue-600"
    },
    {
      name: "Pro",
      description: "Máxima performance e ROI",
      price: "R$ 2.999,90",
      period: "/mês",
      features: [
        "Estratégia personalizada",
        "5+ campanhas ativas",
        "R$5.000+ de investimento",
        "Google, Meta, LinkedIn",
        "Remarketing avançado",
        "Automação de campanhas",
        "Teste A/B contínuo",
        "Otimização diária",
        "Consultoria dedicada"
      ],
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      buttonClass: "bg-purple-500 hover:bg-purple-600"
    }
  ];
  
  const seoServices = [
    {
      title: "SEO On-page",
      description: "Otimização técnica do seu site para melhor posicionamento nos buscadores",
      icon: <Search className="w-8 h-8 text-wz-blue" />,
      items: [
        "Otimização de conteúdo",
        "Melhoria de meta tags",
        "Otimização de URLs",
        "Estruturação de dados"
      ]
    },
    {
      title: "SEO Off-page",
      description: "Estratégias externas para aumentar a autoridade do seu site",
      icon: <Globe className="w-8 h-8 text-wz-blue" />,
      items: [
        "Link building",
        "Citações locais",
        "Guest posting",
        "Autoridade de domínio"
      ]
    },
    {
      title: "Anúncios Pagos",
      description: "Campanhas de marketing digital para gerar tráfego qualificado",
      icon: <Activity className="w-8 h-8 text-wz-blue" />,
      items: [
        "Google Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Remarketing"
      ]
    },
    {
      title: "Analytics",
      description: "Análise de dados para otimizar campanhas e aumentar conversões",
      icon: <BarChart className="w-8 h-8 text-wz-blue" />,
      items: [
        "Rastreamento de conversões",
        "Análise de comportamento",
        "Relatórios personalizados",
        "Otimização contínua"
      ]
    }
  ];
  
  return (
    <section id="marketing" className="py-20 relative">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="inline-block px-4 py-1 rounded-full bg-wz-purple/10 border border-wz-purple/20 mb-4">
            <p className="text-sm text-wz-purple-light font-medium">Estratégias</p>
          </div>
          <h2 className="heading mb-6">Marketing Digital & <span className="text-gradient">SEO</span></h2>
          <p className="paragraph text-gray-400">
            Aumente sua presença online com estratégias eficazes de marketing digital e otimização para mecanismos de busca.
          </p>
        </div>
        
        <Tabs defaultValue="marketing" className="w-full mb-16">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-10">
            <TabsTrigger value="marketing" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Marketing Digital
            </TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <Search className="w-4 h-4 mr-2" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="ads" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
              <Zap className="w-4 h-4 mr-2" />
              Anúncios Pagos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="marketing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`reveal-animation relative glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] ${plan.popular ? 'border-2 ' + plan.borderColor : 'border border-white/10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-wz-blue/20 border border-wz-blue/40">
                      <p className="text-xs font-medium text-wz-blue">Mais Popular</p>
                    </div>
                  )}
                  
                  <div className={`w-full h-24 bg-gradient-to-r ${plan.color} flex-center`}>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    
                    <div className="flex items-end mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
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
                      className={`w-full ${plan.buttonClass} text-white font-medium py-3 px-6 rounded-lg flex-center transition-all`}
                    >
                      Contratar Agora
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="seo" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`reveal-animation relative glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] border border-white/10`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-full h-24 bg-gradient-to-r ${plan.color} flex-center`}>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    
                    <div className="flex items-end mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
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
                      className={`w-full ${plan.buttonClass} text-white font-medium py-3 px-6 rounded-lg flex-center transition-all`}
                    >
                      Contratar Agora
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ads" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {adsPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`reveal-animation relative glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] border border-white/10`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-full h-24 bg-gradient-to-r ${plan.color} flex-center`}>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    
                    <div className="flex items-end mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
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
                      className={`w-full ${plan.buttonClass} text-white font-medium py-3 px-6 rounded-lg flex-center transition-all`}
                    >
                      Contratar Agora
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20 reveal-animation">
          <div className="glassmorphism rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col items-center text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Serviços de SEO & Anúncios</h3>
              <p className="text-gray-400 max-w-2xl">
                Otimizamos sua presença online para aumentar a visibilidade e atrair clientes qualificados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <div 
                  key={index}
                  className="glassmorphism border border-white/10 rounded-xl p-6 hover-lift"
                >
                  <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-wz-blue"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#contact" 
                className="btn-glow bg-gradient-to-r from-wz-blue to-wz-purple hover:brightness-110 transition-all text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2"
              >
                Solicitar consultoria gratuita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
