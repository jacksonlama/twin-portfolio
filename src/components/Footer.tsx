
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800 dark:border-gray-800 light:border-gray-300">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="circular-logo w-12 h-12 text-lg mb-6">
            1:1
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-yellow transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="mb-2 text-gray-400 text-center">Thanks for visiting and happy coding!</p>
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Made with <Heart size={14} className="text-yellow mx-1" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
