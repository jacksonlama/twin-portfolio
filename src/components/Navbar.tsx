
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
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
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/95 dark:bg-dark/95 light:bg-white/95 backdrop-blur-sm z-50 border-b border-gray-800 dark:border-gray-800 light:border-gray-200">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="circular-logo w-10 h-10 text-white text-lg font-bold select-none">
            1:1
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link capitalize ${activeSection === section ? 'text-yellow' : ''}`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="text-gray-300 hover:text-yellow transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-dark-lighter dark:bg-dark-lighter light:bg-gray-100 border-t border-gray-800 dark:border-gray-800 light:border-gray-200">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link capitalize ${activeSection === section ? 'text-yellow' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
