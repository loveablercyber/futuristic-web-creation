
import React from 'react';

export type CategoryType = {
  title: string;
  description: string;
  icon: string;
};

type ServiceCategoryProps = {
  category: CategoryType;
};

const ServiceCategory = ({ category }: ServiceCategoryProps) => {
  return (
    <div className="flex items-start gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
      <span className="text-lg">{category.icon}</span>
      <div>
        <h4 className="text-sm font-medium">{category.title}</h4>
        <p className="text-xs text-gray-400">{category.description}</p>
      </div>
    </div>
  );
};

export default ServiceCategory;
