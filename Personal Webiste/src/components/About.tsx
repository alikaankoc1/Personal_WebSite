import { GraduationCap, Zap } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Hakkımda
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className="mb-16">
          <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Ben Ali Kaan Koç, Kütahya Dumlupınar Üniversitesi Bilgisayar Mühendisliği bölümü 4. sınıf öğrencisiyim. Web geliştirme alanında uzmanlıklarım ve modern teknolojilerle projeler geliştirmeyi seviyorum.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Who Am I */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Kim Ben?
            </h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              Web geliştirme tutkusuyla projeler geliştiren bir bilgisayar mühendisliği öğrencisiyim. Öğrenmeye ve kendimi geliştirmeye açık, yenilikçi çözümler üretmeyi seven bir geliştirici dostu ve performanslı uygulamalar oluşturmayı hedefliyorum.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              React, JavaScript ve Python gibi teknolojiler kullanarak full-stack web uygulamaları geliştiriyorum. Ayrıca sürekli yeni teknolojiler öğrenmeye ve projelerime uygulamaya çalışıyorum.
            </p>
          </div>

          {/* Right - Education & Skills */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className={`${isDark ? 'bg-dark-tertiary' : 'bg-gray-50'} rounded-2xl p-6 border ${isDark ? 'border-dark-tertiary' : 'border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <GraduationCap className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Eğitim
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Kütahya Dumlupınar Üniversitesi
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Bilgisayar Mühendisliği - 4. Sınıf
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className={`${isDark ? 'bg-dark-tertiary' : 'bg-gray-50'} rounded-2xl p-6 border ${isDark ? 'border-dark-tertiary' : 'border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <Zap className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    İlgi Alanları
                  </h4>
                  <ul className={`space-y-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Web Geliştirme</li>
                    <li>• Frontend Teknolojileri</li>
                    <li>• Backend Geliştirme</li>
                    <li>• Yazılım Mimarisi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
