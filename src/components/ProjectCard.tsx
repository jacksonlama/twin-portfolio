
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  repo?: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard = ({ title, description, link, repo, technologies, icon }: ProjectCardProps) => {
  return (
    <div className="project-card group hover:translate-y-[-5px] transition-all duration-300">
      <div className="project-icon">{icon}</div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow transition-colors">{title}</h3>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="bg-secondary/50">{tech}</Badge>
        ))}
      </div>
      
      <div className="flex space-x-3 mt-4">
        {repo && (
          <a 
            href={repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow transition-colors"
            aria-label="View source code"
          >
            <Github size={20} />
          </a>
        )}
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
