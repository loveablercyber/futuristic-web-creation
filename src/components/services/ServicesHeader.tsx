
import React from 'react';

const ServicesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
      <div className="inline-block px-4 py-1 rounded-full bg-wz-blue/10 border border-wz-blue/20 mb-4">
        <p className="text-sm text-wz-blue font-medium">Nossos Serviços</p>
      </div>
      <h2 className="heading mb-6">Criação de <span className="text-gradient">Sites</span></h2>
      <p className="paragraph text-gray-400">
        Desenvolvemos soluções digitais para empresas de todos os tamanhos, desde pequenos sites institucionais até grandes plataformas de e-commerce.
      </p>
    </div>
  );
};

export default ServicesHeader;
