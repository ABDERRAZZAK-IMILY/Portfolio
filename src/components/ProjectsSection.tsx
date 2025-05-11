import { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork: boolean;
}

const ProjectsSection = () => {
  const username = 'ABDERRAZZAK-IMILY';
 const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await res.json();

        const filteredData = data
          .filter((repo: Repository) => !repo.fork)
          .sort((a: Repository, b: Repository) => {
            if (b.stargazers_count === a.stargazers_count) {
              return b.forks_count - a.forks_count;
            }
            return b.stargazers_count - a.stargazers_count;
          });

        setRepos(filteredData);
        setFilteredRepos(filteredData);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to fetch repositories'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(term) ||
        (repo.description && repo.description.toLowerCase().includes(term)) ||
        (repo.language && repo.language.toLowerCase().includes(term))
    );

    setFilteredRepos(filtered);
  };

  const getLanguageIcon = (language: string) => {
    const icons: { [key: string]: string } = {
      HTML: '<i class="devicon-html5-plain colored"></i>',
      CSS: '<i class="devicon-css3-plain colored"></i>',
      JavaScript: '<i class="devicon-javascript-plain colored"></i>',
      TypeScript: '<i class="devicon-typescript-plain colored"></i>',
      PHP: '<i class="devicon-php-plain colored"></i>',
      Python: '<i class="devicon-python-plain colored"></i>',
      Java: '<i class="devicon-java-plain colored"></i>',
      Ruby: '<i class="devicon-ruby-plain colored"></i>',
      Go: '<i class="devicon-go-plain colored"></i>',
      Swift: '<i class="devicon-swift-plain colored"></i>',
      Kotlin: '<i class="devicon-kotlin-plain colored"></i>',
      Rust: '<i class="devicon-rust-plain colored"></i>',
      C: '<i class="devicon-c-plain colored"></i>',
      'C++': '<i class="devicon-cplusplus-plain colored"></i>',
      'C#': '<i class="devicon-csharp-plain colored"></i>',
    };

    return language && icons[language] ? (
      <span dangerouslySetInnerHTML={{ __html: icons[language] }} />
    ) : (
      language || 'N/A'
    );
  };

  return (
    <section id="projects" className="py-24">
      <h2 className="font-orbitron text-3xl font-bold mb-4 flex items-center">
        <span className="text-accent-teal mr-2">03.</span> My Projects
        <div className="h-px bg-text-secondary bg-opacity-20 flex-grow ml-4"></div>
      </h2>
      <p className="text-text-secondary mb-12 max-w-2xl">
        Here are some projects I've been working on. Take a look!
      </p>

      <div className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-space-secondary border border-text-secondary border-opacity-20 rounded p-3 w-full max-w-md text-text-primary placeholder:text-text-secondary focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal"
          placeholder="Search Projects"
        />
      </div>

      <div>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin h-10 w-10 border-4 border-accent-teal border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading repositories...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <p className="text-text-secondary">
              Please try again later or check the GitHub profile directly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="repo bg-space-secondary p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">
                      {repo.name.replace(/-/g, ' ')}
                    </h4>
                  </div>

                  <p className="text-text-secondary mb-4 min-h-[3rem]">
                    {repo.description ||
                      `A ${repo.name.replace(/-/g, ' ')} project.`}
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex space-x-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-teal hover:underline text-sm font-medium"
                    >
                      🔗 View Repository
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-teal hover:underline text-sm font-medium"
                      >
                        🌐 View Site
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {repo.language && (
                      <span className="flex items-center text-text-secondary text-sm">
                        <span className="mr-1">{getLanguageIcon(repo.language)}</span>
                        {repo.language}
                      </span>
                    )}

                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center text-text-secondary text-sm">
                        ⭐ {repo.stargazers_count}
                      </span>
                    )}

                    {repo.forks_count > 0 && (
                      <span className="flex items-center text-text-secondary text-sm">
                        🍴 {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              No repositories found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
