
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
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
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
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
              className={`nav-link capitalize ${activeSection === section ? 'active' : ''}`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-gray-800">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link capitalize ${activeSection === section ? 'active' : ''}`}
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
