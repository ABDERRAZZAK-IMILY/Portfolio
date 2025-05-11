
import { Button } from "@/components/ui/button";



const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16">
      <div className="max-w-3xl">
        <p className="text-accent-teal mb-4 ml-1">Hello, my name is</p>
        <h1 
          className="font-orbitron text-5xl md:text-7xl font-bold mb-2 glitch" 
          data-text="Abderrazzak Imily"
        >
          Abderrazzak Imily
        </h1>
        <h2 className="text-3xl md:text-5xl text-text-secondary font-bold mb-6">Web Developer</h2>
        <p className="text-text-secondary text-lg max-w-lg mb-8">
          I'm a passionate web developer with a focus on creating modern and responsive applications.
          Currently focused on developing modern web applications using HTML, CSS, JavaScript, PHP and Laravel.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="border border-accent-teal text-accent-teal hover:bg-accent-teal hover:bg-opacity-10 px-6 py-3 rounded transition-all duration-300 flex items-center"
          >
            <span>View My Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a 
            href="#contact" 
            className="bg-accent-teal text-space hover:bg-opacity-90 px-6 py-3 rounded transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
