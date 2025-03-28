import { Code, Database, Server, Globe, UserCircle, Calendar, Award, Briefcase, Mail as MailIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
          setTimeout(() => {
            setSkillsVisible(true);
          }, 500);
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
    <section id="about" className="py-20 bg-card">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          <div className={`w-full md:w-1/2 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <h2 className="section-heading flex items-center">
              <UserCircle className="text-yellow mr-2" size={28} />
              About Me
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                I am a passionate Computer Science graduate with a solid foundation in software development. I specialize in 
                creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              
              <p>
                My expertise in Java, SQL, Git, and GitHub allows me to approach projects with confidence and deliver high-quality results. 
                I strongly believe in continuous learning and staying adaptable in the ever-evolving world of software engineering.
              </p>
              
              <p>
                I actively seek out opportunities to expand my knowledge and skills, embracing new technologies and approaches. 
                Feel free to explore my work and get in touch if you have questions or opportunities to collaborate.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
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
          
          <div className={`w-full md:w-1/2 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="glass-card p-8 rounded-xl border border-border shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <UserCircle className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">Akhilesh Adhikari</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <Calendar className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Age:</span>
                    <span className="font-medium">**</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <Globe className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">N***</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <MailIcon className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">peeling.onion96@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <Award className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium">Fulltime</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center">
                    <Briefcase className="text-yellow" size={20} />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">&lt; 2 years</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6">Skills</h3>
                
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
