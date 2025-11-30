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
          title: 'Otomotiv Yaz Kampı',
          issuer: 'OİB - Otomotiv Endüstrisi Birliği',
          date: '16-19 Temmuz 2024',
          image: '/certicate1.png',
        },
        {
          id: 2,
          title: 'JavaScript Kursu',
          issuer: 'Udemy',
          date: '2024',
          image: '/certificate2.png',
        },
        {
          id: 3,
          title: 'Sertifika',
          issuer: 'Çeşitli',
          date: '2024',
          image: '/certificate3.png',
        },
        {
          id: 4,
          title: 'Sertifika - Ali Kaan Koç',
          issuer: 'Çeşitli',
          date: '2024',
          image: '/certificate4.png',
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
          description: 'Modern e-ticaret platformu React ve Node.js ile geliştirilmiştir. Stripe entegrasyonu ve tam yetkili admin paneli içerir.',
          category: 'Full Stack',
          github: '#',
          link: '#',
        },
        {
          id: 2,
          title: 'Görev Yönetim Uygulaması',
          description: 'Basit görev yönetimi uygulaması React ve Firebase ile oluşturulmuştur.',
          category: 'Web',
          github: '#',
          link: '#',
        },
        {
          id: 3,
          title: 'Hava Durumu Uygulaması',
          description: 'Gerçek zamanlı hava durumu verilerini gösteren mobil uyumlu uygulama.',
          category: 'Web',
          github: '#',
          link: '#',
        },
        {
          id: 4,
          title: 'API Servisi',
          description: 'Hizmetler arası veri alışverişi için Python (FastAPI) ile geliştirilmiş yüksek performanslı API.',
          category: 'Backend',
          github: '#',
          link: '#',
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
          title: 'Automotive Summer Camp',
          issuer: 'OIB - Automotive Industry Association',
          date: 'July 16-19, 2024',
          image: '/certicate1.png',
        },
        {
          id: 2,
          title: 'JavaScript Course',
          issuer: 'Udemy',
          date: '2024',
          image: '/certificate2.png',
        },
        {
          id: 3,
          title: 'Certificate',
          issuer: 'Various',
          date: '2024',
          image: '/certificate3.png',
        },
        {
          id: 4,
          title: 'Certificate - Ali Kaan Koç',
          issuer: 'Various',
          date: '2024',
          image: '/certificate4.png',
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
          github: '#',
          link: '#',
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A simple task management application built with React and Firebase.',
          category: 'Web',
          github: '#',
          link: '#',
        },
        {
          id: 3,
          title: 'Weather App',
          description: 'A mobile-friendly application showing real-time weather data.',
          category: 'Web',
          github: '#',
          link: '#',
        },
        {
          id: 4,
          title: 'API Service',
          description: 'High-performance API developed with Python (FastAPI) for inter-service data exchange.',
          category: 'Backend',
          github: '#',
          link: '#',
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
        phone: '+90 5XX XXX XX XX', 
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