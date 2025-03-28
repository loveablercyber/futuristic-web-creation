
import React from 'react';
import { ArrowRight, Laptop } from 'lucide-react';
import ServiceCategory from './ServiceCategory';
import { CategoryType } from './ServiceCategory';

type InstitutionalTabProps = {
  categories: CategoryType[];
};

const InstitutionalTab = ({ categories }: InstitutionalTabProps) => {
  return (
    <div className="glassmorphism rounded-2xl p-6 hover-lift card-shadow">
      <div className="flex-center h-16 w-16 rounded-full bg-gradient-to-br from-wz-blue/20 to-wz-purple/20 mb-6">
        <Laptop className="w-8 h-8 text-wz-blue" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">Sites Institucionais</h3>
      <p className="text-gray-400 mb-4">Desenvolvimento de sites profissionais, responsivos e otimizados para diferentes segmentos de mercado.</p>
      
      <div className="mt-4">
        <p className="text-sm font-semibold text-white mb-3">Segmentos atendidos:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {categories.map((category, idx) => (
            <ServiceCategory key={idx} category={category} />
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
  );
};

export default InstitutionalTab;
