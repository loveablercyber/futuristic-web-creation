
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Serviços", href: "#services" },
    { title: "Hospedagem", href: "#hosting" },
    { title: "Marketing", href: "#marketing" },
    { title: "Delivery", href: "#delivery" },
    { title: "Contato", href: "#contact" },
  ];
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-wz-black/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="wrapper flex-between">
        <a href="#home" className="relative z-10">
          <h1 className="text-2xl font-bold text-gradient">
            Wz <span className="text-wz-blue">WebDezign</span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-wz-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-wz-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.title}
            </a>
          ))}
          
          <a
            href="#contact"
            className="ml-4 btn-glow bg-wz-blue text-white py-2 px-5 rounded-full font-medium hover:brightness-110 transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-wz-dark/95 backdrop-blur-lg flex-center flex-col z-10 transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 text-lg hover:text-wz-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            
            <a
              href="#contact"
              className="mt-4 btn-glow bg-wz-blue text-white py-2 px-8 rounded-full font-medium hover:brightness-110 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
