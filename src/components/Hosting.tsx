
import React from 'react';
import { Server, Cloud, Check } from 'lucide-react';

const Hosting = () => {
  const hostingPlans = [
    {
      name: "Básico",
      description: "Ideal para sites pequenos e blogs pessoais",
      price: "R$ 29,90",
      period: "/mês",
      features: [
        "10GB de espaço",
        "SSL grátis",
        "Backups semanais",
        "1 banco de dados",
        "5 contas de e-mail",
        "Suporte por e-mail"
      ],
      popular: false,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      buttonClass: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "Avançado",
      description: "Perfeito para empresas em crescimento",
      price: "R$ 59,90",
      period: "/mês",
      features: [
        "50GB de espaço",
        "SSL grátis",
        "Backups diários",
        "Bancos de dados ilimitados",
        "E-mails ilimitados",
        "CDN integrada",
        "Suporte 24/7"
      ],
      popular: true,
      color: "from-wz-blue/20 to-wz-purple/20",
      borderColor: "border-wz-blue/30",
      buttonClass: "bg-wz-blue hover:bg-blue-600"
    },
    {
      name: "Pro",
      description: "Para sites de alto tráfego e e-commerces",
      price: "R$ 99,90",
      period: "/mês",
      features: [
        "100GB de espaço",
        "SSL grátis",
        "Backups diários",
        "Bancos de dados ilimitados",
        "E-mails ilimitados",
        "CDN integrada",
        "Performance turbo",
        "IP dedicado",
        "Suporte prioritário"
      ],
      popular: false,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      buttonClass: "bg-purple-500 hover:bg-purple-600"
    }
  ];
  
  const serverPlans = [
    {
      name: "Revenda de Hospedagem",
      description: "Ideal para agências e freelancers, com painel de gestão completo",
      icon: <Cloud className="w-10 h-10 text-wz-blue" />,
      features: [
        "Painel de controle White Label",
        "Criação ilimitada de contas",
        "Recursos dedicados",
        "Suporte técnico especializado",
        "99.9% de uptime garantido"
      ]
    },
    {
      name: "Servidores VPS",
      description: "SSD ultra rápido, escalabilidade e segurança avançada",
      icon: <Server className="w-10 h-10 text-wz-blue" />,
      features: [
        "Recursos dedicados",
        "Escalabilidade sob demanda",
        "Total controle sobre o servidor",
        "Sistemas operacionais à escolha",
        "Backup automático",
        "Firewall dedicado"
      ]
    }
  ];
  
  return (
    <section id="hosting" className="py-20 relative">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="inline-block px-4 py-1 rounded-full bg-wz-blue/10 border border-wz-blue/20 mb-4">
            <p className="text-sm text-wz-blue font-medium">Infraestrutura</p>
          </div>
          <h2 className="heading mb-6">Hospedagem & <span className="text-gradient">Servidores</span></h2>
          <p className="paragraph text-gray-400">
            Infraestrutura de ponta para seu site rodar rápido e seguro, com servidores no Brasil e 99.9% de uptime garantido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hostingPlans.map((plan, index) => (
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
                      <Check className="w-5 h-5 text-wz-blue flex-shrink-0 mt-0.5" />
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
        
        <div className="mt-20 reveal-animation">
          <div className="glassmorphism rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col items-center text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Para Necessidades Avançadas</h3>
              <p className="text-gray-400 max-w-2xl">
                Oferecemos soluções escaláveis para empresas que precisam de mais recursos e flexibilidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serverPlans.map((plan, index) => (
                <div 
                  key={index}
                  className="glassmorphism border border-white/10 rounded-xl p-6 hover-lift"
                >
                  <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
                    {plan.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
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
                    className="mt-4 flex items-center gap-1 text-wz-blue hover:underline text-sm font-medium transition-all"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosting;
