import { MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

interface ExperiencesProps {
  isDark: boolean;
}

export function Experiences({ isDark }: ExperiencesProps) {
  const experiences: ExperienceItem[] = [
    {
      title: 'React Developer Intern',
      company: 'E.Manager B.V',
      location: 'Remote',
      date: 'Temmuz 2025 - Ekim 2025 ',
      description: 'Yapay zeka destekli bir seyahat platformunun web geliştirmesinde görev aldım, React ile kullanıcı arayüzleri oluşturdu, RESTful API ile entegre oldu ve yapay zeka destekli kişiselleştirilmiş öneriler sunmak için ön uç özellikleri uygulandı. Yetenekler: React, JavaScript, REST API, Python (backend integration), Agile, Docker',
    },
    {
      title: 'Donanım Stajyeri',
      company: 'Karayolları Genel Müdürlüğü',
      location: 'Konya / Türkiye',
      date: ' Temmuz 2024  - Ağustos 2024',
      description: 'Donanım bakımı ve teknik destek görevlerinde bulundum.',
    },
  ];

  return (
    <section className={`${isDark ? 'bg-dark-secondary' : 'bg-gray-50'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Deneyimler
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 border transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-dark-tertiary border-dark-tertiary hover:border-blue-500/50'
                  : 'bg-white border-gray-200 hover:border-blue-500'
              }`}
            >
              {/* Header with Title and Date */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
                  >
                    {exp.company}
                  </a>
                </div>
                <div className={`flex items-center gap-2 whitespace-nowrap ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Calendar size={18} />
                  <span className="font-medium">{exp.date}</span>
                </div>
              </div>

              {/* Location */}
              <div className={`flex items-center gap-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={18} />
                <span>{exp.location}</span>
              </div>

              {/* Description */}
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
