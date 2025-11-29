import { Award, Download } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

interface CertificatesProps {
  isDark: boolean;
}

export function Certificates({ isDark }: CertificatesProps) {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'E Manager B.V',
      issuer: 'React Geliştirme Stajyer',
      date: '2025',
      image: '/certicate1.png',
    },
    {
      id: 2,
      title: 'Kapsül Teknoloji Platformu',
      issuer: 'Orta Seviye Pyhton Eğitimi',
      date: '2023',
      image: '/certificate2.png',
    },
    {
      id: 3,
      title: 'Udemy Sadık Turan',
      issuer: 'JavaScript Dersleri ES7+',
      date: '2024',
      image: '/certificate3.png',
    },
    {
      id: 4,
      title: 'BTK AKADEMİ',
      issuer: 'HTML5 ile Web Geliştirme',
      date: '2024',
      image: '/certificate4.png',
    },
    {
      id: 5,
      title: 'Turkcell Geleceği Yazanlar',
      issuer: 'Veri Bilimi ve Yapay Zekaya Giriş',
      date: '2024',
      image: '/certificate5.png',
    },
    {
      id: 6,
      title: 'OİB',
      issuer: 'Otomativ Yaz Kampı',
      date: '2024',
      image: '/ceretificate6.jpg',
    },
  ];

  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sertifikalar
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${
                isDark
                  ? 'bg-dark-tertiary border-dark-tertiary'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Certificate Image */}
              <div className={`relative overflow-hidden h-56 md:h-72 bg-gray-400 ${
                isDark ? 'bg-dark-secondary' : 'bg-gray-300'
              }`}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 bg-white"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <Award className={isDark ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CV Download Button (visual only for now) */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            aria-label="CV indir"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-shadow shadow-md"
          >
            <Download size={18} />
            CV'mi İndir
          </button>
        </div>
      </div>
    </section>
  );
}
