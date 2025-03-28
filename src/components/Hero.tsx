
import { ArrowRight, Github, Linkedin, Twitter, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Software Engineer";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="py-20 pt-32 min-h-screen flex items-center bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 flex flex-col items-start ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-yellow text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow mr-2 pulse"></span>
              Available for freelance work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-yellow">Akhilesh</span><br />
              <span className="h-16 block">{typedText}<span className="animate-pulse">|</span></span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's work together to create something amazing.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button 
                onClick={scrollToContact} 
                className="btn-primary"
              >
                Contact Me
                <ArrowRight size={16} className="ml-2" />
              </Button>
              
              <Button
                className="btn-outline"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
                <Download size={16} className="ml-2" />
              </Button>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} className="text-foreground" />
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} className="text-foreground" />
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 flex justify-center ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-yellow/20 overflow-hidden flex items-center justify-center relative animate-pulse">
                <div className="absolute inset-2 rounded-full bg-background overflow-hidden border-4 border-yellow flex items-end justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg border border-border hover-lift">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow mr-2 pulse"></div>
                  <span className="text-sm font-medium">Front-End Developer</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-lg border border-border hover-lift">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow mr-2 pulse"></div>
                  <span className="text-sm font-medium">Back-End Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
