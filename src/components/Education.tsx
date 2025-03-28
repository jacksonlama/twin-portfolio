
import { GraduationCap, Calendar, Award, Briefcase } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="section-heading flex items-center">
              <GraduationCap className="mr-3 text-yellow" size={24} />
              Education
            </h2>
            
            <div className="mt-8 space-y-8">
              <div className="education-card bg-background/40 rounded-lg p-6 border border-border shadow-lg hover:shadow-yellow/5 transition-all">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-yellow mr-2" />
                  <span className="text-gray-400">2016 - 2020</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground">University of Technology</p>
                <div className="mt-3 flex items-center">
                  <Award size={16} className="text-yellow mr-2" />
                  <p className="text-muted-foreground">First Class Honors</p>
                </div>
              </div>
              
              <div className="education-card bg-background/40 rounded-lg p-6 border border-border shadow-lg hover:shadow-yellow/5 transition-all">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-yellow mr-2" />
                  <span className="text-gray-400">2020 - 2022</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Master of Computer Science</h3>
                <p className="text-muted-foreground">Advanced Technology Institute</p>
                <div className="mt-3 flex items-center">
                  <Award size={16} className="text-yellow mr-2" />
                  <p className="text-muted-foreground">Distinction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="section-heading flex items-center">
              <Briefcase className="mr-3 text-yellow" size={24} />
              Work Experience
            </h2>
            
            <div className="mt-8 space-y-8">
              <div className="work-experience-card bg-background/40 rounded-lg p-6 border border-border shadow-lg hover:shadow-yellow/5 transition-all">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-yellow mr-2" />
                  <span className="text-gray-400">2021 - Present</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Senior Software Engineer</h3>
                <p className="text-muted-foreground">Tech Innovations Inc.</p>
                <p className="mt-3 text-gray-400">Developing and maintaining web applications using React, Node.js, and AWS.</p>
              </div>
              
              <div className="work-experience-card bg-background/40 rounded-lg p-6 border border-border shadow-lg hover:shadow-yellow/5 transition-all">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-yellow mr-2" />
                  <span className="text-gray-400">2020 - 2021</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Junior Developer</h3>
                <p className="text-muted-foreground">StartUp Solutions</p>
                <p className="mt-3 text-gray-400">Worked on front-end development using React and implemented responsive designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
