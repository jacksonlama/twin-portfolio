
import { Mail, Code, FileCode, Download, MessageSquare, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 dark:bg-dark light:bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="circular-logo w-64 h-64 text-6xl animate-pulse">
                1:1
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">Hi, I'm</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow">Akhilesh,</h1>
            
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8">
              I'm a Computer Science graduate and a passionate full-time developer. With a strong 
              foundation in coding principles and a commitment to innovation and learning, I aim to 
              transform complex problems into elegant, scalable solutions. My journey in the tech world is 
              fueled by my love for creating and my desire to make a difference through technology. Welcome 
              to my portfolio, where you can explore my projects, experiences, and the skills I've acquired 
              along the way. Let's code, learn, and grow together!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="default" className="bg-blue hover:bg-blue-dark rounded-full" size="lg">
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
              <Button variant="outline" className="border-blue text-blue hover:bg-blue/10 rounded-full" size="lg">
                <MessageSquare size={18} className="mr-2" />
                Contact
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-4 justify-center md:justify-start">
              <a href="mailto:peeling.onion96@gmail.com" className="text-gray-400 hover:text-yellow transition-colors duration-300">
                <Mail size={22} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow transition-colors duration-300">
                <Github size={22} />
              </a>
              <a href="#projects" className="text-gray-400 hover:text-yellow transition-colors duration-300">
                <Code size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
