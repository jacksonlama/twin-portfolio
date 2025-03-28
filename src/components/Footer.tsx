
import { Github, Twitter, Linkedin, Heart, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-16 border-t border-border bg-card">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 hover:bg-yellow hover:text-dark transition-colors duration-300 shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="circular-logo w-16 h-16 text-2xl mb-8 shadow-lg">
            1:1
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-yellow transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="text-yellow mr-2" />
                  <span className="text-muted-foreground">+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-yellow mr-2" />
                  <span className="text-muted-foreground">peeling.onion96@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-yellow mr-2" />
                  <span className="text-muted-foreground">New York, USA</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-4xl border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-center mb-4 md:mb-0">
                © {currentYear} Made with <Heart size={14} className="text-yellow mx-1 inline" /> All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Thanks for visiting and happy coding!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
