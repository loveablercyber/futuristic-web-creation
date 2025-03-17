
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      elements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0');
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
      
      // Create particles on mousemove for interactive effect
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 2000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100');
        element.classList.remove('opacity-0', 'translate-y-10');
      }, index * 200);
    });
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex-center overflow-hidden pt-24 pb-16"
      ref={heroRef}
    >
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-wz-purple/10 border border-wz-purple/20 animate-on-load opacity-0 translate-y-10 transition-all duration-700">
                <p className="text-sm text-wz-purple-light font-medium">
                  Criação de Sites • Hospedagem • Marketing Digital
                </p>
              </div>
              
              <h1 className="heading animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-100">
                <span className="animated-gradient-text">Transformamos</span> sua presença digital com tecnologia de ponta!
              </h1>
              
              <p className="paragraph text-gray-400 max-w-lg mx-auto lg:mx-0 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-200">
                Soluções completas para seu negócio: sites institucionais, lojas virtuais, hospedagem, servidores VPS e estratégias de marketing digital que impulsionam seus resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <a 
                  href="#contact" 
                  className="btn-glow bg-wz-blue hover:bg-wz-blue/90 transition-all text-white font-medium py-3 px-8 rounded-full flex-center gap-2"
                >
                  Orçamento Imediato <ArrowRight className="w-4 h-4" />
                </a>
                
                <a 
                  href="#services" 
                  className="border border-white/20 hover:border-wz-blue/50 transition-all text-white font-medium py-3 px-8 rounded-full flex-center gap-2 hover:bg-white/5"
                >
                  Nossos Serviços
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-900 flex-center"
                    >
                      <span className="text-xs">★</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-semibold">+1000</span> clientes satisfeitos
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative z-10">
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-wz-blue/20 to-transparent rounded-full animate-pulse-slow"></div>
              
              <div className="card-3d w-full h-full bg-gradient-to-br from-wz-dark to-wz-black rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                <div className="relative w-full h-full flex-center">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="parallax" data-speed="20">
                      <div className="absolute top-[10%] left-[15%] w-20 h-20 bg-wz-blue/20 rounded-full blur-xl animate-float"></div>
                    </div>
                    <div className="parallax" data-speed="10">
                      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-wz-purple/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
                    </div>
                    <div className="parallax" data-speed="15">
                      <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-wz-blue/30 rounded-full blur-lg animate-float animation-delay-500"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-full h-full flex-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-4 animate-float">
                        <span className="text-gradient">Wz</span>
                      </div>
                      <div className="text-2xl font-light text-gray-300 tracking-wider animate-float animation-delay-500">
                        WebDezign
                      </div>
                      <div className="mt-6 w-16 h-1 bg-gradient-to-r from-wz-blue to-wz-purple mx-auto rounded-full animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="parallax absolute -bottom-6 -right-6 w-32 h-32 bg-wz-purple/10 backdrop-blur-md rounded-2xl border border-white/10 flex-center shadow-lg" data-speed="5">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wz-purple-light">+5</div>
                  <div className="text-xs text-gray-400">Anos de experiência</div>
                </div>
              </div>
              
              <div className="parallax absolute -top-4 -left-4 w-28 h-28 bg-wz-blue/10 backdrop-blur-md rounded-2xl border border-white/10 flex-center shadow-lg" data-speed="8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wz-blue">100%</div>
                  <div className="text-xs text-gray-400">Responsivo</div>
                </div>
              </div>
              
              <div className="parallax absolute top-[40%] -right-10 w-24 h-24 bg-gradient-to-br from-wz-blue/10 to-wz-purple/10 backdrop-blur-md rounded-2xl border border-white/10 flex-center shadow-lg animation-delay-1000" data-speed="12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">SEO</div>
                  <div className="text-xs text-gray-400">Otimizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex-center animate-bounce-subtle">
        <a href="#services" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-wz-black to-transparent"></div>
    </section>
  );
};

export default Hero;
