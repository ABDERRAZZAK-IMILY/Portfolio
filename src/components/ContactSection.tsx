
const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <h2 className="font-orbitron text-3xl font-bold mb-4 flex items-center">
        <span className="text-accent-teal mr-2">04.</span> Get In Touch
        <div className="h-px bg-text-secondary bg-opacity-20 flex-grow ml-4"></div>
      </h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-text-secondary mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <a 
          href="mailto:azeimily2001@gmail.com" 
          className="inline-block border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:bg-opacity-10 px-8 py-4 rounded transition-all duration-300 text-lg font-medium"
        >
          Say Hello
        </a>
        
        <div className="flex justify-center space-x-8 mt-12">
          <a 
            href="https://github.com/abderrazzk-imily" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-all duration-300" 
            title="GitHub"
          >
            <i className="devicon-github-original text-3xl"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/abderrazzak-imily/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-all duration-300" 
            title="LinkedIn"
          >
            <i className="devicon-linkedin-plain text-3xl"></i>
          </a>
          <a 
            href="https://twitter.com/AbderrazzakImily" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-all duration-300" 
            title="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
