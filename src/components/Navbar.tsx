
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Github, Code, Home, User, Briefcase, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      // For the active section tracking
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;
        
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
      
      // For the navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'education', label: 'Education', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 shadow-md backdrop-blur-lg' : 'bg-transparent'
    } border-b border-border/50`}>
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="circular-logo w-10 h-10 text-dark text-lg font-bold select-none shadow-md">
            1:1
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link px-4 py-2 rounded-full flex items-center ${
                activeSection === item.id 
                  ? 'text-yellow bg-yellow/5 font-medium' 
                  : 'hover:bg-background/60'
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-muted-foreground hover:text-yellow transition-colors"
          >
            <Github size={20} />
          </a>
          
          <Button 
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-10 h-10 transition-all duration-300 hover:bg-yellow hover:text-dark"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
          <div className="container-custom py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link p-3 rounded-lg flex items-center ${
                  activeSection === item.id 
                    ? 'text-yellow bg-yellow/5 font-medium' 
                    : 'hover:bg-background/60'
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
