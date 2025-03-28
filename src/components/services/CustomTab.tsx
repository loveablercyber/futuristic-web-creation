
import React from 'react';
import { ArrowRight, Code } from 'lucide-react';

const CustomTab = () => {
  return (
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
  );
};

export default CustomTab;
