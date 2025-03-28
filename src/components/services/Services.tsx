
import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesTabs from './ServicesTabs';
import ServicesBanner from './ServicesBanner';
import { siteCategories } from './data';

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="wrapper">
        <ServicesHeader />
        <ServicesTabs siteCategories={siteCategories} />
        <ServicesBanner />
      </div>
    </section>
  );
};

export default Services;
