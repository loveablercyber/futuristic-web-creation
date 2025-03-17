
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-wz-dark relative">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gradient mb-4">
              Wz <span className="text-wz-blue">WebDezign</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Transformando sua presença digital com tecnologia de ponta e design inovador.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex-center transition-colors"
                >
                  <span className="text-wz-blue">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Sites Institucionais",
                "Lojas Virtuais",
                "Web Sites Personalizados",
                "Landing Pages",
                "Identidade Visual",
                "UX/UI Design"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-wz-blue transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Hospedagem</h3>
            <ul className="space-y-3">
              {[
                "Plano Básico",
                "Plano Avançado",
                "Plano Pro",
                "Revenda de Hospedagem",
                "Servidores VPS",
                "Servidores Dedicados"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#hosting" 
                    className="text-gray-400 hover:text-wz-blue transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              {[
                {
                  label: "Telefone",
                  value: "+55 (11) 99999-9999",
                  link: "tel:+5511999999999"
                },
                {
                  label: "E-mail",
                  value: "contato@wzwebdezign.com.br",
                  link: "mailto:contato@wzwebdezign.com.br"
                },
                {
                  label: "Endereço",
                  value: "São Paulo, SP - Brasil",
                  link: "https://maps.google.com"
                }
              ].map((item, index) => (
                <li key={index}>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-wz-blue transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Wz WebDezign. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-wz-blue/10 hover:bg-wz-blue/20 flex-center transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-wz-blue" />
            </button>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-wz-blue transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-wz-blue transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
