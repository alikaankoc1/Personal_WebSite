import { GraduationCap, Code2, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  isDark: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

function ExperienceCard({ isDark, icon, title, description, details }: ExperienceCardProps) {
  return (
    <div className={`card ${isDark ? '' : 'bg-white'}`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
        isDark ? 'bg-blue-500/20' : 'bg-blue-100'
      }`}>
        <div className={isDark ? 'text-blue-400' : 'text-blue-600'}>
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        {details}
      </p>
    </div>
  );
}

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const experiences = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Eğitim',
      description: 'Kütahya Dumlupınar Üniversitesi - Bilgisayar Mühendisliği',
      details: '4. Sınıf',
    },
    {
      icon: <Code2 size={28} />,
      title: 'Uzmanlık',
      description: 'Web Geliştirme | React | JavaScript | Python',
      details: 'Modern web teknolojileri',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Deneyim',
      description: 'React Developer @ EManager B.V',
      details: 'Profesyonel geliştirme',
    },
  ];

  return (
    <section className={`${isDark ? 'bg-dark-secondary' : 'bg-gray-50'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              isDark={isDark}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
