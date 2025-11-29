import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'All' | 'Web' | 'Mobile' | 'Backend' | 'Full Stack';
  image?: string;
  github?: string;
  link?: string;
}

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web' | 'Mobile' | 'Backend' | 'Full Stack'>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Ticaret APP',
      description: 'Modern e-ticaret platformu React ve Node.js ile geliştirilmiştir.',
      category: 'Full Stack',
      github: 'https://github.com/alikaankoc1/e-ticaret-app',
      link: 'https://github.com/alikaankoc1',
    },
    {
      id: 2,
      title: 'Bookify Kütüphane APP',
      description: 'Görev yönetimi uygulaması React ve Firebase ile oluşturulmuştur.',
      category: 'Web',
      github: 'https://github.com/alikaankoc1/bookify',
      link: 'https://github.com/alikaankoc1',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Hava durumu uygulaması gerçek zamanlı veri ile geliştirilmiştir.',
      category: 'Mobile',
      github: 'https://github.com/alikaankoc1/weather-app',
      link: 'https://github.com/alikaankoc1',
    },
    {
      id: 4,
      title: 'Memory Card Game',
      description: 'RESTful API servisi Python ve Django ile geliştirilmiştir.',
      category: 'Backend',
      github: 'https://github.com/alikaankoc1/memory-card-game',
      link: 'https://github.com/alikaankoc1',
    },
    {
      id: 5,
      title: 'Ehliyet-Quiz APP',
      description: 'Sosyal medya yönetim paneli React ve TypeScript ile oluşturulmuştur.',
      category: 'Web',
      github: 'https://github.com/alikaankoc1/Ehliyet-Quiz',
      link: 'https://github.com/alikaankoc1',
    },
    {
      id: 6,
      title: 'Todo-List APP',
      description: 'Mobil sohbet uygulaması gerçek zamanlı mesajlaşma ile geliştirilmiştir.',
      category: 'Mobile',
      github: 'https://github.com/alikaankoc1/todo-list-react',
      link: 'https://github.com/alikaankoc1',
    },
  ];

  const filters: Array<'All' | 'Web' | 'Mobile' | 'Backend' | 'Full Stack'> = ['All', 'Web', 'Mobile', 'Backend', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Projelerim
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Geliştirdiğim projeler ve çalışmalarım. Modern web teknolojileri kullanılarak oluşturulmuştur.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-3 mr-4">
            <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Filtrele:
            </span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : isDark
                  ? 'bg-dark-tertiary text-gray-300 hover:bg-dark-tertiary/80'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                  isDark
                    ? 'bg-dark-tertiary border-dark-tertiary'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {/* Project Image Placeholder */}
                <div className={`h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center ${
                  isDark ? 'bg-dark-secondary' : 'bg-gray-200'
                }`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl">📱</div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      isDark
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`flex-1 text-sm mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700/20">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors font-semibold ${
                          isDark
                            ? 'bg-dark-secondary hover:bg-dark-secondary/80 text-gray-300'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        }`}
                      >
                        <Github size={16} />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all font-semibold"
                      >
                        <ExternalLink size={16} />
                        <span className="hidden sm:inline">Ziyaret Et</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Henüz proje eklenmedi.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
