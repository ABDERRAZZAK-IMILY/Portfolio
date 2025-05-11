
const AboutSection = () => {
  const technologies = [
    'HTML5 & CSS3',
    'JavaScript',
    'React & Next.js',
    'PHP & Laravel',
    'MySQL',
    'Tailwind & Bootstrap',
    'Git & GitHub',
    'Docker',
  ];

  return (
    <section id="about" className="py-24">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="font-orbitron text-3xl font-bold mb-6 flex items-center">
            <span className="text-accent-teal mr-2">01.</span> About Me
            <div className="h-px bg-text-secondary bg-opacity-20 flex-grow ml-4"></div>
          </h2>
          <div className="space-y-4 text-text-secondary">
            <p>Hello! I'm Abderrazzak Imily, a web developer passionate about building digital experiences that make people's lives better.</p>
            <p>I'm currently studying web development at Youcode Safi (UMSP6) where I'm honing my skills in both frontend and backend technologies.</p>
            <p>My journey in web development started at the university where I developed a keen interest in creating responsive websites and applications.</p>
            <p>Here are some technologies I've been working with recently:</p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-accent-teal mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-accent-teal rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-accent-teal border-opacity-50">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Abderrazzak Imily" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
