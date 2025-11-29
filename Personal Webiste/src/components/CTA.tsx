import { ArrowRight } from 'lucide-react';

interface CTAProps {
  isDark: boolean;
}

export function CTA({ isDark }: CTAProps) {
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-purple-600 py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Birlikte Çalışmak İster misiniz?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Projeleriniz için benimle iletişime geçebilirsiniz.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 group">
          İletişime Geçin
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
