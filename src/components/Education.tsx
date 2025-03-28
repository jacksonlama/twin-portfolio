
import { GraduationCap, Calendar, Award, Briefcase, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education');
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

  const education = [
    {
      period: "2016 - 2020",
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      achievement: "First Class Honors"
    },
    {
      period: "2020 - 2022",
      title: "Master of Computer Science",
      institution: "Advanced Technology Institute",
      achievement: "Distinction"
    }
  ];
  
  const experience = [
    {
      period: "2021 - Present",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description: "Developing and maintaining web applications using React, Node.js, and AWS."
    },
    {
      period: "2020 - 2021",
      title: "Junior Developer",
      company: "StartUp Solutions",
      description: "Worked on front-end development using React and implemented responsive designs."
    }
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className={`w-full lg:w-1/2 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <h2 className="section-heading flex items-center">
              <GraduationCap className="mr-3 text-yellow" size={24} />
              Education
            </h2>
            
            <div className="mt-8 space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="education-card glass-card bg-background/40 rounded-xl p-6 border border-border shadow-md hover:border-yellow transition-all"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-2">
                    <Calendar size={18} className="text-yellow mr-2" />
                    <span className="text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <div className="mt-3 flex items-center">
                    <Award size={16} className="text-yellow mr-2" />
                    <p className="text-yellow font-medium">{item.achievement}</p>
                  </div>
                  <a href="#" className="mt-4 inline-flex items-center text-muted-foreground hover:text-yellow text-sm">
                    View Certificate <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <h2 className="section-heading flex items-center">
              <Briefcase className="mr-3 text-yellow" size={24} />
              Work Experience
            </h2>
            
            <div className="mt-8 space-y-8">
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="work-experience-card glass-card bg-background/40 rounded-xl p-6 border border-border shadow-md hover:border-yellow transition-all"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-2">
                    <Calendar size={18} className="text-yellow mr-2" />
                    <span className="text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-yellow font-medium">{item.company}</p>
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                  <a href="#" className="mt-4 inline-flex items-center text-muted-foreground hover:text-yellow text-sm">
                    View Projects <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
