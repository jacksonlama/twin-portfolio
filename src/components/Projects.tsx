
import { Code, Server, Database, Terminal, ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
  link: string;
  repo: string;
  imageUrl?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind"],
      icon: <Code className="w-6 h-6" />,
      link: "https://example.com/portfolio",
      repo: "https://github.com/username/portfolio",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Server className="w-6 h-6" />,
      link: "https://example.com/ecommerce",
      repo: "https://github.com/username/ecommerce",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Firebase"],
      icon: <Database className="w-6 h-6" />,
      link: "https://example.com/taskapp",
      repo: "https://github.com/username/taskapp",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather information.",
      technologies: ["JavaScript", "API", "CSS"],
      icon: <Terminal className="w-6 h-6" />,
      link: "https://example.com/weather",
      repo: "https://github.com/username/weather",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card glass-card hover-lift group ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-video bg-secondary/20">
                <img 
                  src={project.imageUrl || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-yellow/0 group-hover:bg-yellow/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} className="text-yellow" />
                    </a>
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                      aria-label="View source code"
                    >
                      <Github size={18} className="text-yellow" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="project-icon mr-3">{project.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-yellow transition-colors">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between mt-4 pt-4 border-t border-border">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow flex items-center hover:underline"
                >
                  Visit Project <ExternalLink size={14} className="ml-1" />
                </a>
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-yellow transition-colors flex items-center"
                >
                  <Github size={16} className="mr-1" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
