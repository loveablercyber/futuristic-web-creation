
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-wz-blue" />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <Mail className="w-5 h-5 text-wz-blue" />,
      title: "E-mail",
      value: "contato@wzwebdezign.com.br",
      link: "mailto:contato@wzwebdezign.com.br"
    },
    {
      icon: <MapPin className="w-5 h-5 text-wz-blue" />,
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      link: "https://maps.google.com"
    }
  ];
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="inline-block px-4 py-1 rounded-full bg-wz-blue/10 border border-wz-blue/20 mb-4">
            <p className="text-sm text-wz-blue font-medium">Fale Conosco</p>
          </div>
          <h2 className="heading mb-6">Contato & <span className="text-gradient">Orçamento</span></h2>
          <p className="paragraph text-gray-400">
            Entre em contato para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 glassmorphism rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-wz-blue/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-wz-purple/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="p-8 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-gray-400 mb-8">
                Estamos disponíveis para atender suas necessidades e oferecer soluções personalizadas para o seu negócio.
              </p>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link}
                    className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-colors"
                  >
                    <div className="mt-1 w-10 h-10 rounded-full bg-wz-blue/10 flex-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block mt-8">
              <h4 className="font-medium text-white mb-4">Siga-nos nas redes sociais</h4>
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
          </div>
          
          <div className="p-8 lg:col-span-3 bg-white/5">
            <h3 className="text-2xl font-bold mb-6">Solicite um orçamento</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Mensagem enviada com sucesso!</h4>
                <p className="text-gray-200">Entraremos em contato o mais breve possível.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-wz-blue/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-wz-blue/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-wz-blue/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">Serviço</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-wz-blue/50"
                      required
                    >
                      <option value="" disabled>Selecione um serviço</option>
                      <option value="site-institucional">Site Institucional</option>
                      <option value="loja-virtual">Loja Virtual</option>
                      <option value="hospedagem">Hospedagem</option>
                      <option value="marketing-digital">Marketing Digital</option>
                      <option value="seo">SEO</option>
                      <option value="sistema-delivery">Sistema de Delivery</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-wz-blue/50 min-h-[120px]"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow bg-gradient-to-r from-wz-blue to-wz-purple hover:brightness-110 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            <div className="block lg:hidden mt-8">
              <h4 className="font-medium text-white mb-4">Siga-nos nas redes sociais</h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
