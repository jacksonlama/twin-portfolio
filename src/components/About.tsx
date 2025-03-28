
const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-lighter">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="section-heading">About Me</h2>
            <ul className="space-y-6 text-gray-300">
              <li className="flex">
                <span className="mr-2">•</span>
                <p>
                  I am a Computer Science Graduate.I have built a solid foundation in software 
                  development, particularly in areas such as Java, SQL, Git, and GitHub.
                </p>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <p>
                  My expertise in these areas allows me to approach projects with confidence and deliver 
                  high-quality results.I have a strong belief in the value of continuous learning and staying 
                  adaptable in the ever-evolving world of software engineering.
                </p>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <p>
                  I actively seek out opportunities to expand my knowledge and skills, embracing new 
                  technologies and approaches.I feel free to explore my work and get in touch if you have 
                  questions or opportunities to collaborate.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-16">
            <div className="bg-dark p-6 rounded-lg border border-gray-800">
              <div className="mb-4">
                <span className="text-gray-400">Name:</span>
                <span className="ml-2 text-white">Akhilesh Adhikari</span>
              </div>
              
              <div className="mb-4">
                <span className="text-gray-400">Age:</span>
                <span className="ml-2 text-white">**</span>
              </div>
              
              <div className="mb-4">
                <span className="text-gray-400">From:</span>
                <span className="ml-2 text-white">N***</span>
              </div>
              
              <div className="mb-4">
                <span className="text-gray-400">Email:</span>
                <span className="ml-2 text-white">peeling.onion96@gmail.com</span>
              </div>
              
              <div className="mb-4">
                <span className="text-gray-400">Availability:</span>
                <span className="ml-2 text-white">Fulltime</span>
              </div>
              
              <div>
                <span className="text-gray-400">Experience:</span>
                <span className="ml-2 text-white">< 2yr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
