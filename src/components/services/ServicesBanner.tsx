
import React from 'react';

const ServicesBanner = () => {
  return (
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
  );
};

export default ServicesBanner;
