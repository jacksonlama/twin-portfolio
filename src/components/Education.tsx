
const EducationItem = ({ title, school, gpa }: { title: string; school: string; gpa: string }) => {
  return (
    <div className="timeline-item">
      <h3 className="text-lg font-semibold text-white">{title} - {gpa}</h3>
      <p className="text-gray-400">{school}</p>
    </div>
  );
};

const WorkExperienceItem = ({ 
  title, company, period, description 
}: { 
  title: string; 
  company: string;

  period: string;
  description: string;
}) => {
  return (
    <div className="timeline-item">
      <h3 className="text-lg font-semibold text-white">{title} - {company}</h3>
      <p className="text-yellow text-sm mb-2">{period}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="section-heading">Education</h2>
            
            <div className="space-y-0">
              <EducationItem 
                title="BSC"
                school="Sunway Int' Business School"
                gpa="3.5 GPA"
              />
              
              <EducationItem 
                title="High School"
                school="National School of Sciences (NIST)"
                gpa="3.2 GPA"
              />
              
              <EducationItem 
                title="School"
                school="Adhyitya Boarding High School"
                gpa="3.5 GPA"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="section-heading">Work Experience</h2>
            
            <div className="space-y-0">
              <WorkExperienceItem 
                title="Developer"
                company="Midas Technologies"
                period="APRIL 2023 - Currently"
                description="Experienced in developing Hospital Management Systems, I specialize in PHP (Laravel, CodeIgniter) and Oracle (OCI), for secure data handling. My technical expertise includes HTML, CSS, JavaScript, Bootstrap, ensuring a responsive, scalable, and user-friendly system."
              />
              
              <WorkExperienceItem 
                title="Python Intern"
                company="Braincube Research"
                period="MAR 2021 to OCT 2021"
                description="Skilled in Python development using Django, I bring proficiency in Ansible and IoT technologies to the table, showcasing expertise in creating innovative solutions and applications."
              />
              
              <WorkExperienceItem 
                title="SEO Executive"
                company="Mranble Digital"
                period="DEC 2021 to FEB 2023"
                description="Served as SEO Analyst and Content Head, bringing a wealth of experience in optimizing digital content and overseeing content strategy."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
