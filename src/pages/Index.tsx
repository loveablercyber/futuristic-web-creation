
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Hosting from '../components/Hosting';
import Marketing from '../components/Marketing';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ContactButton from '../components/ContactButton';

const Index = () => {
  useEffect(() => {
    // Add page transitions class to enable animation on load
    document.body.classList.add('page-transitions');
    
    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
    
    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal-animation').forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
      
      document.querySelectorAll('.reveal-animation').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <Services />
      <Hosting />
      <Marketing />
      <Delivery />
      <Contact />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Index;
