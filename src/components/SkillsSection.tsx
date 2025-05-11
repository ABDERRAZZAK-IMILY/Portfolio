
interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

const SkillCard = ({ icon, title, description, skills }: SkillCardProps) => {
  return (
    <div className="bg-space-secondary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center mb-4">
        <i className={`${icon} text-3xl mr-3`}></i>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-text-secondary mb-4">{description}</p>
      <ul className="space-y-2 text-text-secondary">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-accent-teal mr-2">▹</span> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    {
      icon: "devicon-html5-plain colored",
      title: "Frontend Development",
      description: "Building responsive and intuitive user interfaces using modern technologies.",
      skills: ["HTML5, CSS3", "JavaScript", "React & Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: "devicon-php-plain colored",
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
      skills: ["PHP", "Laravel", "MVC Architecture", "API Development"]
    },
    {
      icon: "devicon-mysql-plain colored",
      title: "Database Management",
      description: "Designing and optimizing databases for web applications.",
      skills: ["MySQL", "PostgreSQL", "Database Design", "SQL Queries"]
    },
    {
      icon: "devicon-git-plain colored",
      title: "Development Tools",
      description: "Using modern tools to improve development workflow.",
      skills: ["Git & GitHub", "Jira & Trello", "Figma & Adobe XD", "UML"]
    },
    {
      icon: "devicon-linux-plain colored",
      title: "OS & Containerization",
      description: "Working with various operating systems and containerization tools.",
      skills: ["Linux", "Unix", "Windows", "Docker", "VMware & VirtualBox"]
    },
    {
      icon: "devicon-trello-plain colored",
      title: "Project Management",
      description: "Managing projects using agile methodologies.",
      skills: ["Scrum", "Project Planning", "Team Collaboration", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <h2 className="font-orbitron text-3xl font-bold mb-12 flex items-center">
        <span className="text-accent-teal mr-2">02.</span> My Skills
        <div className="h-px bg-text-secondary bg-opacity-20 flex-grow ml-4"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
