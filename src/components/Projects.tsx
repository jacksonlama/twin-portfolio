
import { Code, Server, Database, Terminal } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind"],
      icon: <Code className="w-6 h-6" />,
      link: "https://example.com/portfolio",
      repo: "https://github.com/username/portfolio"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Server className="w-6 h-6" />,
      link: "https://example.com/ecommerce",
      repo: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Firebase"],
      icon: <Database className="w-6 h-6" />,
      link: "https://example.com/taskapp",
      repo: "https://github.com/username/taskapp"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather information.",
      technologies: ["JavaScript", "API", "CSS"],
      icon: <Terminal className="w-6 h-6" />,
      link: "https://example.com/weather",
      repo: "https://github.com/username/weather"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              link={project.link}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
