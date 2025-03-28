
import React from 'react';
import { Laptop, ShoppingBag, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryType } from './ServiceCategory';
import InstitutionalTab from './InstitutionalTab';
import EcommerceTab from './EcommerceTab';
import CustomTab from './CustomTab';

type ServicesTabsProps = {
  siteCategories: CategoryType[];
};

const ServicesTabs = ({ siteCategories }: ServicesTabsProps) => {
  return (
    <Tabs defaultValue="institutional" className="w-full mb-16">
      <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-10">
        <TabsTrigger value="institutional" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
          <Laptop className="w-4 h-4 mr-2" />
          Sites Institucionais
        </TabsTrigger>
        <TabsTrigger value="ecommerce" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Lojas Virtuais
        </TabsTrigger>
        <TabsTrigger value="custom" className="data-[state=active]:bg-wz-blue data-[state=active]:text-white">
          <Code className="w-4 h-4 mr-2" />
          Websites Personalizados
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="institutional" className="space-y-8">
        <InstitutionalTab categories={siteCategories} />
      </TabsContent>
      
      <TabsContent value="ecommerce" className="space-y-8">
        <EcommerceTab />
      </TabsContent>
      
      <TabsContent value="custom" className="space-y-8">
        <CustomTab />
      </TabsContent>
    </Tabs>
  );
};

export default ServicesTabs;
