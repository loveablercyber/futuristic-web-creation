
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const EcommerceTab = () => {
  return (
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
  );
};

export default EcommerceTab;
