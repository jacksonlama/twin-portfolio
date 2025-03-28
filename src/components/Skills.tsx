
import { useState, useEffect } from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

const Skills = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setSkillsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "JavaScript", progress: 85 },
    { name: "React", progress: 80 },
    { name: "Node.js", progress: 75 },
    { name: "HTML/CSS", progress: 90 },
    { name: "SQL", progress: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-heading flex items-center">
          <Code className="text-yellow mr-2" size={28} />
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl border border-border shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-yellow">{skillsVisible ? `${skill.progress}%` : '0%'}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: skillsVisible ? `${skill.progress}%` : '0%',
                        transition: `width 1s ease-out ${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card flex flex-col items-center p-6 rounded-xl border border-border shadow-md hover-lift hover:border-yellow transition-all">
              <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-3">
                <Code className="text-yellow" size={24} />
              </div>
              <h3 className="text-lg font-medium">Web Development</h3>
            </div>
            
            <div className="glass-card flex flex-col items-center p-6 rounded-xl border border-border shadow-md hover-lift hover:border-yellow transition-all">
              <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-3">
                <Database className="text-yellow" size={24} />
              </div>
              <h3 className="text-lg font-medium">Database Design</h3>
            </div>
            
            <div className="glass-card flex flex-col items-center p-6 rounded-xl border border-border shadow-md hover-lift hover:border-yellow transition-all">
              <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-3">
                <Server className="text-yellow" size={24} />
              </div>
              <h3 className="text-lg font-medium">Backend Development</h3>
            </div>
            
            <div className="glass-card flex flex-col items-center p-6 rounded-xl border border-border shadow-md hover-lift hover:border-yellow transition-all">
              <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-3">
                <Globe className="text-yellow" size={24} />
              </div>
              <h3 className="text-lg font-medium">Responsive Design</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
