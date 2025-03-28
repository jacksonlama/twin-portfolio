
import { Gamepad2, BrainCircuit, MessageSquare } from 'lucide-react';

type ProjectCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ProjectCard = ({ icon, title, description }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-icon">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-dark-lighter">
      <div className="container-custom">
        <h2 className="section-heading text-center">MY PROJECTS</h2>
        <p className="text-gray-400 text-center mb-12">Discover my projects, where creativity meets innovation</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            icon={<Gamepad2 className="text-dark" />}
            title="Game Console"
            description="This is a simple implementation of the classic Console Games like Snake, Snake Breaker and fun Math games using JAVA."
          />
          
          <ProjectCard 
            icon={<BrainCircuit className="text-dark" />}
            title="Quiz Game"
            description="Quiz Application using PHP CodeIgniter, MySQL DB, JS, jQuery, Bootstrap, Ajax"
          />
          
          <ProjectCard 
            icon={<MessageSquare className="text-dark" />}
            title="Realtime ChatRoom"
            description="Implemented a real-time ChatRoom application using React, utilizing the Rocket framework and Tokio Runtime for seamless and concurrent communication."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
