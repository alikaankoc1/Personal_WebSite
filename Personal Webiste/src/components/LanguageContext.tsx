import { createContext, useState, useContext, ReactNode } from 'react';

// --- TEMEL TİP TANIMLARI ---
type Language = 'tr' | 'en';

interface NavContent {
  home: string;
  about: string;
  projects: string;
  blog: string;
  contact: string;
}

interface HeroContent {
  greeting: string;
  titleFirstName: string;
  titleLastName: string;
  titleProfession: string;
  description: string;
  buttonProjects: string;
  buttonContact: string;
}

interface FooterContent {
  tagline: string;
  quickLinks: string;
  copyRight: string;
}

interface AboutContent {
  sectionTitle: string;
  whoAmI: string;
  descriptionPara1: string;
  descriptionPara2: string;
  educationTitle: string;
  educationUniversity: string;
  educationDegree: string;
  skillsTitle: string;
  skillWebDev: string;
  skillFrontend: string;
  skillBackend: string;
  skillArchitecture: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

interface ExperiencesContent {
  sectionTitle: string;
  experiences: ExperienceItem[];
}

// **CertificateItem tanımı eklendi (Hata düzeltildi)**
interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

interface CertificatesContent {
  sectionTitle: string;
  cvDownloadButton: string;
  certificates: CertificateItem[];
}

interface StatItem {
  number: string;
  label: string;
}

interface StatsContent {
  stats: StatItem[];
}

interface CTAContent {
  heading: string;
  subheading: string;
  buttonText: string;
}

type ProjectCategoryKey = 'All' | 'Web' | 'Mobile' | 'Backend' | 'Full Stack';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: ProjectCategoryKey; 
  image?: string;
  github?: string;
  link?: string;
}

interface ProjectsContent {
  sectionTitle: string;
  filterLabels: {
    [key in ProjectCategoryKey]: string;
  };
  codeButton: string;
  visitButton: string;
  noProjectsMessage: string;
  projects: ProjectItem[];
}

// **ContactContent tanımı eklendi**
interface ContactContent {
    sectionTitle: string;
    description: string;
    infoTitle: string;
    infoLocation: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    submittedMessage: string;
    address: string;
    phone: string;
}

// Tüm Context değerlerini tanımlayan ana arayüz
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  navContent: NavContent;
  heroContent: HeroContent;
  footerContent: FooterContent;
  aboutContent: AboutContent;
  experiencesContent: ExperiencesContent;
  certificatesContent: CertificatesContent;
  statsContent: StatsContent;
  ctaContent: CTAContent;
  projectsContent: ProjectsContent;
  contactContent: ContactContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// --- ÇEVİRİ VERİLERİ (allTranslations) ---
const allTranslations = {
  tr: {
    navContent: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
    },
    heroContent: {
      greeting: 'Merhaba, ben',
      titleFirstName: 'Ali Kaan',
      titleLastName: 'Koç',
      titleProfession: 'Web Developer & Bilgisayar Mühendisliği Öğrencisi',
      description: 'Modern web teknolojileri ile yenilikçi projeler geliştiriyorum. React, JavaScript ve Python konularında uzmanlaşıyorum.',
      buttonProjects: 'Projelerimi Gör',
      buttonContact: 'İletişime Geç',
    },
    footerContent: { 
      tagline: 'Web Developer | Bilgisayar Mühendisliği Öğrencisi',
      quickLinks: 'Hızlı Bağlantılar',
      copyRight: '© 2024 Ali Kaan Koç. Tüm Hakları Saklıdır.',
    },
    aboutContent: {
      sectionTitle: 'Hakkımda',
      whoAmI: 'Ben Kimim ?',
      descriptionPara1: 'Kütahya Dumlupınar Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web geliştirme alanıyla ilgilenip, hem Front-End hem de Back-End alanında projeler geliştiriyorum.',
      descriptionPara2: 'Front-End alanında React, TypeScript, JavaScript, Bootstrap. Tailwind CSS gibi teknolojiler kullanarak full-stack web uygulamaları geliştiriyorum. Ayrıca sürekli yeni teknolojiler öğrenmeye ve projelerime uygulamaya çalışıyorum.',
      educationTitle: 'Eğitim',
      educationUniversity: 'Kütahya Dumlupınar Üniversitesi',
      educationDegree: 'Bilgisayar Mühendisliği - 4. Sınıf',
      skillsTitle: 'İlgi Alanları',
      skillWebDev: 'Web Geliştirme',
      skillFrontend: 'Frontend Teknolojileri',
      skillBackend: 'Backend Geliştirme',
      skillArchitecture: 'Yazılım Mimarisi',
    },
    experiencesContent: {
      sectionTitle: 'Deneyimler',
      experiences: [
        {
          title: 'React Developer Stajyeri',
          company: 'E.Manager B.V',
          location: 'Uzaktan',
          date: '2024 - Devam Ediyor',
          description: 'Start-up şirketinde React geliştirmesi yaptım. Modern web uygulamaları geliştirdim.',
        },
        {
          title: 'Donanım Stajyeri',
          company: 'Karayolları Genel Müdürlüğü',
          location: 'Türkiye',
          date: '2023 - 2023',
          description: 'Donanım bakımı ve teknik destek görevlerinde bulundum.',
        },
      ],
    },
    certificatesContent: {
      sectionTitle: 'Sertifikalarım',
      cvDownloadButton: 'CV İndir',
      certificates: [
        {
          id: 1,
          title: 'E Manager B.V',
          issuer: 'React Geliştirme Stajyeri',
          date: 'Temmuz-Ekim 2025',
          image: '/certicate1.png',
        },
        {
          id: 2,
          title: 'Kapsül Teknoloji Platformu',
          issuer: 'Orta Seviye Pyhton Eğitimi',
          date: 'Nisan 2023',
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
          date: '2023',
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
          date: 'Temmuz 2024',
          image: '/ceretificate6.jpg',
        },
      ],
    },
    statsContent: {
      stats: [
        { number: '4', label: 'Yıl Eğitim' },
        { number: '2+', label: 'Staj Deneyimi' },
        { number: '10+', label: 'Proje' },
        { number: '5+', label: 'Teknoloji' },
      ],
    },
    ctaContent: {
      heading: 'Birlikte Çalışmak İster misiniz?',
      subheading: 'Projeleriniz için benimle iletişime geçebilirsiniz.',
      buttonText: 'İletişime Geçin',
    },
    projectsContent: {
      sectionTitle: 'Projelerim',
      filterLabels: {
        All: 'Hepsi',
        Web: 'Web',
        Mobile: 'Mobil',
        Backend: 'Backend',
        'Full Stack': 'Full Stack',
      },
      codeButton: 'Kod',
      visitButton: 'Ziyaret Et',
      noProjectsMessage: 'Henüz proje eklenmedi.',
      projects: [
        {
          id: 1,
          title: 'E-Ticaret Platformu',
          description: 'Modern e-ticaret platformu React ve Node.js ile geliştirilmiştir.',
          category: 'Full Stack',
          github: 'https://github.com/alikaankoc1/e-ticaret-app',
          link: 'https://github.com/alikaankoc1',
          image: "/public/forma.png"  

        },
        {
          id: 2,
          title: 'Bookify Kütüphane Uygulaması',
          description: 'Kütüphane yönetimi uygulaması React ve Firebase ile oluşturulmuştur.',
          category: 'Web',
          github: 'https://github.com/alikaankoc1/bookify',
          link: 'https://github.com/alikaankoc1',
           image: "/public/kütüphane.png" 
        },
        {
          id: 3,
          title: 'Hava Durumu Uygulaması',
          description: 'Gerçek zamanlı hava durumu verilerini gösteren mobil uyumlu uygulama.',
          category: 'Mobile',
          github: 'https://github.com/alikaankoc1/weather-app',
          link: 'https://github.com/alikaankoc1',
          image: "/public/weather.png" 
        },
        {
          id: 4,
          title: 'Hafıza Eşleştirme Kart Oyunu',
          description: 'Hafıza geliştirmek amaçlı, süreyle yarışılan bir kart eşleştirme oyunu',
          category: 'Backend',
          github: 'https://github.com/alikaankoc1/memory-card-game',
          link: 'https://github.com/alikaankoc1',
          image: "/public/card.png" 
        },
         {
          id: 5,
          title: 'Ehliyet Quiz Uygulaması',
          description: 'Ehliyet sınav soruların olduğu, süreye karşı yarışıann online sınav uygulaması.',
          category: 'Full Stack',
          github: 'https://github.com/alikaankoc1/Ehliyet-Quiz',
          link: 'https://github.com/alikaankoc1',
           image: "/public/ehliyet.png"  
        },
         {
          id: 6,
          title: 'Todo-List Uygulaması',
          description: 'Kullanıcıların günlük yapılacaklar listesi oluşturduğu uygulama',
          category: 'Backend',
          github: 'https://github.com/alikaankoc1/todo-list-react',
          link: 'https://github.com/alikaankoc1',
           image: "/public/todo.png"
        },
      ],
    },
    contactContent: {
        sectionTitle: 'İletişim',
        description: 'Projeleriniz, işbirliği teklifleriniz veya sadece bir merhaba demek için aşağıdaki formu kullanın ya da iletişim bilgilerimi kullanın.',
        infoTitle: 'İletişim Bilgileri',
        infoLocation: 'Türkiye',
        formTitle: 'Bana Bir Mesaj Gönderin',
        nameLabel: 'Adınız Soyadınız',
        emailLabel: 'Email Adresiniz',
        subjectLabel: 'Konu',
        messageLabel: 'Mesaj',
        namePlaceholder: 'Adınız',
        emailPlaceholder: 'ornek@email.com',
        subjectPlaceholder: 'Proje Teklifi',
        messagePlaceholder: 'Mesajınızı buraya yazın...',
        submitButton: 'Mesaj Gönder',
        submittedMessage: 'Mesaj Gönderildi! ✓',
        address: 'Kütahya, Türkiye',
        phone: '+90 5XX XXX XX XX', 
    }
  },
  en: {
    navContent: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    heroContent: {
      greeting: 'Hello, I am',
      titleFirstName: 'Ali Kaan',
      titleLastName: 'Koç',
      titleProfession: 'Web Developer & Computer Engineering Student',
      description: 'I develop innovative projects with modern web technologies. I specialize in React, JavaScript, and Python.',
      buttonProjects: 'View My Projects',
      buttonContact: 'Get in Touch',
    },
    footerContent: { 
      tagline: 'Web Developer | Computer Engineering Student',
      quickLinks: 'Quick Links',
      copyRight: '© 2024 Ali Kaan Koç. All Rights Reserved.',
    },
    aboutContent: {
      sectionTitle: 'About Me',
      whoAmI: 'Who Am I?',
      descriptionPara1: 'I am a 4th-year Computer Engineering student at Kütahya Dumlupınar University. I am interested in web development and actively build projects in both Front-End and Back-End fields.',
      descriptionPara2: 'In Front-End, I develop full-stack web applications using technologies like React, TypeScript, JavaScript, Bootstrap, and Tailwind CSS. I am constantly working to learn new technologies and apply them to my projects.',
      educationTitle: 'Education',
      educationUniversity: 'Kütahya Dumlupınar University',
      educationDegree: 'Computer Engineering - 4th Year',
      skillsTitle: 'Areas of Interest',
      skillWebDev: 'Web Development',
      skillFrontend: 'Frontend Technologies',
      skillBackend: 'Backend Development',
      skillArchitecture: 'Software Architecture',
    },
    experiencesContent: {
      sectionTitle: 'Experiences',
      experiences: [
        {
          title: 'React Developer Intern',
          company: 'E.Manager B.V',
          location: 'Remote',
          date: '2024 - Present',
          description: 'Developed modern web applications using React at a startup company.',
        },
        {
          title: 'Hardware Intern',
          company: 'General Directorate of Highways',
          location: 'Turkey',
          date: '2023 - 2023',
          description: 'Undertook hardware maintenance and technical support tasks.',
        },
      ],
    },
    certificatesContent: {
      sectionTitle: 'Certificates',
      cvDownloadButton: 'Download CV',
      certificates: [
        {
          id: 1,
          title: 'E Manager B.V',
          issuer: 'React Development Intern',
          date: 'July-October 2025',
          image: '/certicate1.png',
        },
        {
          id: 2,
          title: 'Capsule Technology Platform',
          issuer: 'Intermediate Python Training',
          date: 'April 2023',
          image: '/certificate2.png',
        },
        {
          id: 3,
          title: 'Udemy Sadık Turan',
          issuer: 'JavaScript Lessons ES7+',
          date: '2024',
          image: '/certificate3.png',
        },
        {
          id: 4,
          title: 'BTK ACADEMY',
          issuer: 'Web Development with HTML5',
          date: '2023',
          image: '/certificate4.png',
        },
          {
          id: 5,
          title: 'Turkcell Future Writers',
          issuer: 'An Introduction to Data Science and Artificial Intelligence',
          date: '2024',
          image: '/certificate5.png',
        },
          {
          id: 6,
          title: 'OİB',
          issuer: 'Automotive Summer Camp',
          date: 'July 2024',
          image: '/ceretificate6.jpg',
        },
      ],
    },
    statsContent: {
      stats: [
        { number: '4', label: 'Years Education' },
        { number: '2+', label: 'Internship Experience' },
        { number: '10+', label: 'Projects' },
        { number: '5+', label: 'Technologies' },
      ],
    },
    ctaContent: {
      heading: 'Do You Want to Work Together?',
      subheading: 'Feel free to contact me for your projects.',
      buttonText: 'Get In Touch',
    },
    projectsContent: {
      sectionTitle: 'My Projects',
      filterLabels: {
        All: 'All',
        Web: 'Web',
        Mobile: 'Mobile',
        Backend: 'Backend',
        'Full Stack': 'Full Stack',
      },
      codeButton: 'Code',
      visitButton: 'Visit',
      noProjectsMessage: 'No projects have been added yet.',
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce platform developed with React and Node.js. Includes Stripe integration and a full-featured admin panel.',
          category: 'Full Stack',
          github: 'https://github.com/alikaankoc1/e-ticaret-app',
          link: 'https://github.com/alikaankoc1',
        },
        {
          id: 2,
          title: 'Bookify Library App',
          description: 'Library management app size with React and Firebase.',
          category: 'Web',
          github: 'https://github.com/alikaankoc1/bookify',
          link: 'https://github.com/alikaankoc1',
        },
        {
          id: 3,
          title: 'Weather App',
          description: 'A mobile-friendly application showing real-time weather data.',
          category: 'Web',
          github: 'https://github.com/alikaankoc1/weather-app',
          link: 'https://github.com/alikaankoc1',
        },
        {
          id: 4,
          title: 'Memory Matching Card Game',
          description: 'A card matching game with a timed challenge to improve memory.',
          category: 'Backend',
          github: 'https://github.com/alikaankoc1/memory-card-game',
          link: 'https://github.com/alikaankoc1',
        },
          {
          id: 5,
          title: 'Driving License Quiz Application',
          description: 'An online exam application that includes drivers license exam questions and races against time.',
          category: 'Backend',
          github: 'https://github.com/alikaankoc1/Ehliyet-Quiz',
          link: 'https://github.com/alikaankoc1',
        },
          {
          id: 6,
          title: 'Todo-List App',
          description: 'An app where users create daily to-do lists',
          category: 'Backend',
          github: 'https://github.com/alikaankoc1/todo-list-react',
          link: 'https://github.com/alikaankoc1',
        },
      ],
    },
    contactContent: {
        sectionTitle: 'Contact',
        description: 'Use the form below for your projects, collaboration offers, or just to say hello, or use my contact information.',
        infoTitle: 'Contact Information',
        infoLocation: 'Turkey',
        formTitle: 'Send Me A Message',
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'example@email.com',
        subjectPlaceholder: 'Project Inquiry',
        messagePlaceholder: 'Write your message here...',
        submitButton: 'Send Message',
        submittedMessage: 'Message Sent! ✓',
        address: 'Kütahya, Turkey',
       
    }
  },
};


// --- LANGUAGE PROVIDER ---

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('tr'); 

  // Tip Hatasını Çözen Kritik Satır: currentContent'in allTranslations.tr tipinde olduğunu belirtir.
  const currentContent = allTranslations[language] as typeof allTranslations.tr;
  
  // Tüm çeviri içerikleri buradan alınıyor
  const navContent = currentContent.navContent;
  const heroContent = currentContent.heroContent;
  const footerContent = currentContent.footerContent;
  const aboutContent = currentContent.aboutContent;
  const experiencesContent = currentContent.experiencesContent;
  const certificatesContent = currentContent.certificatesContent;
  const statsContent = currentContent.statsContent;
  const ctaContent = currentContent.ctaContent;
  const projectsContent = currentContent.projectsContent;
  const contactContent = currentContent.contactContent; 

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        navContent, 
        heroContent, 
        footerContent, 
        aboutContent, 
        experiencesContent, 
        certificatesContent, 
        statsContent, 
        ctaContent, 
        projectsContent,
        contactContent 
      }}
    > 
      {children}
    </LanguageContext.Provider>
  );
};

// --- HOOK ---

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage hook must be used within a LanguageProvider');
  }
  return context;
};