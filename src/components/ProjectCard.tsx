
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
    <div className="project-card hover-lift group">
      <div className="project-icon">{icon}</div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow transition-colors">{title}</h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="bg-secondary/20 text-foreground hover:bg-yellow/10">{tech}</Badge>
        ))}
      </div>
      
      <div className="flex space-x-3 mt-4 border-t border-border pt-4">
        {repo && (
          <a 
            href={repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-yellow transition-colors"
            aria-label="View source code"
          >
            <Github size={16} className="mr-1" /> Source
          </a>
        )}
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-yellow ml-auto"
            aria-label="View live project"
          >
            Visit <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
