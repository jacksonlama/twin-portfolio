
import { Gamepad2, BrainCircuit, MessageSquare, Code, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
};

const ProjectCard = ({ icon, title, description, technologies, demoLink, githubLink }: ProjectCardProps) => {
  return (
    <Card className="project-card overflow-hidden border-gray-800 dark:border-gray-800 light:border-gray-300">
      <CardHeader className="pb-3">
        <div className="project-icon mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-dark-card text-yellow border-yellow px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        {githubLink && (
          <Button variant="outline" size="sm" className="border-yellow text-yellow hover:bg-yellow/10" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-1" />
              Code
            </a>
          </Button>
        )}
        {demoLink && (
          <Button variant="outline" size="sm" className="border-yellow text-yellow hover:bg-yellow/10" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-1" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-dark-lighter dark:bg-dark-lighter light:bg-gray-100">
      <div className="container-custom">
        <h2 className="section-heading text-center">MY PROJECTS</h2>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-center mb-12">Discover my projects, where creativity meets innovation</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            icon={<Gamepad2 className="text-dark" />}
            title="Game Console"
            description="This is a simple implementation of the classic Console Games like Snake, Snake Breaker and fun Math games using JAVA."
            technologies={["Java", "OOP", "Game Development"]}
            githubLink="https://github.com/username/game-console"
            demoLink="https://demo-link-for-game.com"
          />
          
          <ProjectCard 
            icon={<BrainCircuit className="text-dark" />}
            title="Quiz Game"
            description="Quiz Application using PHP CodeIgniter, MySQL DB, JS, jQuery, Bootstrap, Ajax"
            technologies={["PHP", "CodeIgniter", "MySQL", "jQuery", "Bootstrap"]}
            githubLink="https://github.com/username/quiz-game"
          />
          
          <ProjectCard 
            icon={<MessageSquare className="text-dark" />}
            title="Realtime ChatRoom"
            description="Implemented a real-time ChatRoom application using React, utilizing the Rocket framework and Tokio Runtime for seamless and concurrent communication."
            technologies={["React", "Rust", "Rocket", "Tokio", "WebSockets"]}
            githubLink="https://github.com/username/realtime-chatroom"
            demoLink="https://demo-chatroom-app.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
