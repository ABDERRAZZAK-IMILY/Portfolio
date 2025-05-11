
const Footer = () => {
  return (
    <footer className="py-6 text-center text-text-secondary">
      <p>Designed & Built by Abderrazzak Imily</p>
      <div className="flex justify-center mt-4 space-x-2">
        <span>Built with</span>
        <span className="text-accent-teal">HTML</span>
        <span>•</span>
        <span className="text-accent-teal">Tailwind CSS</span>
        <span>•</span>
        <span className="text-accent-teal">JavaScript</span>
        <span>•</span>
        <span className="text-accent-teal">React</span>
      </div>
      <div className="mt-2">
        <a href="https://github.com/ABDERRAZZAK-IMILY" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">
          View GitHub Profile
        </a>
      </div>
    </footer>
  );
};

export default Footer;
