import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımda', href: '/hakkimda' },
    { label: 'Projeler', href: '/projeler' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav className={`${isDark ? 'bg-dark' : 'bg-white'} border-b ${isDark ? 'border-dark-tertiary' : 'border-gray-200'} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`text-[2rem] font-bold ${isDark ? 'text-primary' : 'text-primary'}`}>
            AKK
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-lg font-medium transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-dark-tertiary hover:bg-dark-tertiary/80'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
              )}
            </button>

            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Kapat menü' : 'Menüyü aç'}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all border ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-gray-200 text-black hover:bg-gray-100'} ${isOpen ? 'ring-2 ring-blue-500/30' : 'shadow-sm'}`}
            >
              {isOpen ? (
                <X size={20} className={isDark ? 'text-white' : 'text-black'} />
              ) : (
                <Menu size={20} className={isDark ? 'text-white' : 'text-black'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-4 ${isDark ? 'bg-dark-secondary' : 'bg-gray-50'}`}>
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-lg block px-4 py-2 rounded-lg transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-lg block px-4 py-2 rounded-lg transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
