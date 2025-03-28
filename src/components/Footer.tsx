
import { GitHub, Twitter, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 border-t border-border bg-card">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 hover:bg-yellow hover:text-dark transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="circular-logo w-12 h-12 text-lg mb-6">
            1:1
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
            >
              <GitHub size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
          
          <p className="mb-2 text-muted-foreground text-center">Thanks for visiting and happy coding!</p>
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Made with <Heart size={14} className="text-yellow mx-1" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
