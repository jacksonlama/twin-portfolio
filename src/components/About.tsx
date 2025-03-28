
import { UserCircle2, MapPin, Mail, Clock, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-lighter dark:bg-dark-lighter light:bg-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="section-heading text-yellow">About Me</h2>
            <ul className="space-y-6 text-gray-300 dark:text-gray-300 light:text-gray-700">
              <li className="flex">
                <span className="mr-2 text-yellow">•</span>
                <p>
                  I am a Computer Science Graduate. I have built a solid foundation in software 
                  development, particularly in areas such as Java, SQL, Git, and GitHub.
                </p>
              </li>
              <li className="flex">
                <span className="mr-2 text-yellow">•</span>
                <p>
                  My expertise in these areas allows me to approach projects with confidence and deliver 
                  high-quality results. I have a strong belief in the value of continuous learning and staying 
                  adaptable in the ever-evolving world of software engineering.
                </p>
              </li>
              <li className="flex">
                <span className="mr-2 text-yellow">•</span>
                <p>
                  I actively seek out opportunities to expand my knowledge and skills, embracing new 
                  technologies and approaches. Feel free to explore my work and get in touch if you have 
                  questions or opportunities to collaborate.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-16">
            <div className="bg-dark dark:bg-dark light:bg-white p-6 rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-200 shadow-lg">
              <div className="mb-4 flex items-center">
                <UserCircle2 size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Name:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">Akhilesh Adhikari</span>
              </div>
              
              <div className="mb-4 flex items-center">
                <Clock size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Age:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">**</span>
              </div>
              
              <div className="mb-4 flex items-center">
                <MapPin size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">From:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">N***</span>
              </div>
              
              <div className="mb-4 flex items-center">
                <Mail size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Email:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">peeling.onion96@gmail.com</span>
              </div>
              
              <div className="mb-4 flex items-center">
                <Clock size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Availability:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">Fulltime</span>
              </div>
              
              <div className="flex items-center">
                <Briefcase size={18} className="text-yellow mr-2" />
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Experience:</span>
                <span className="ml-2 text-white dark:text-white light:text-gray-900">&lt; 2yr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
