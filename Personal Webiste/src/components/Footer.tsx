import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`${isDark ? 'bg-dark-secondary' : 'bg-gray-900'} py-16 border-t ${isDark ? 'border-dark-tertiary' : 'border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
              Ali Kaan Koç
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              Web Developer | Bilgisayar Mühendisliği Öğrencisi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-100'}`}>
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`transition-colors hover:text-blue-500 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimda"
                  className={`transition-colors hover:text-blue-500 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/projeler"
                  className={`transition-colors hover:text-blue-500 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className={`transition-colors hover:text-blue-500 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-100'}`}>
              Sosyal Medya
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/alikaankoc1"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                    : 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/alikaankoc"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                    : 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:alikaansoftdev@gmail.com"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                    : 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-dark-tertiary' : 'border-gray-800'} py-8`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              © 2025 Ali Kaan Koç. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
