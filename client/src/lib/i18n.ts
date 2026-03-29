import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Me",
        projects: "Projects",
        skills: "Skills",
        certificates: "Certificates",
        contact: "Contact"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "Known as 'Kinho' | UI/UX Designer & Programmer",
        tagline: "Transforming Ideas into Beautiful & Functional Digital Products",
        cta: "View My Work"
      },
      about: {
        title: "About Me",
        description: "I am a 22-year-old student at the United Methodist University of Mozambique (UMUM), studying Computer Engineering and Technology, and a member of the Ku_kulaDevs startup. I specialize in modern digital solutions, UI/UX Design, and web development using Django, Python, HTML, CSS, Java, and JavaScript. I focus on creating intuitive interfaces that provide the best user experience.",
        goal: "My goal is to create impactful digital experiences that solve real-world problems through design and code."
      },
      projects: {
        title: "Projects",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Smart Agricultural Web System",
          description: "A support platform for farmers designed to assist the agricultural community with a focus on usability.",
          features: {
            weather: "Climate Recommendations",
            assistance: "User Assistance",
            community: "Agricultural Community",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Social Media UI",
          subtitle: "Post Creation Interface",
          description: "A modern and intuitive interface for creating social media posts, focusing on the end-user experience.",
          features: {
            editor: "Rich Text Editor",
            upload: "Media Upload",
            preview: "Real-time Preview",
            ux: "Intuitive UX"
          }
        }
      },
      skills: {
        title: "Skills & Technologies"
      },
      certificates: {
        title: "Certificates & Honors",
        workshop_web: "Web Development Workshop - MozDevz",
        workshop_python: "Programming & Innovation Workshop - MozDevz",
        diploma: "Diploma of Honor"
      },
      contact: {
        title: "Get In Touch",
        phone: "Phone",
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        about: "Sobre Mim",
        projects: "Projetos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "Conhecido por 'Kinho' | Designer UI/UX e Programador",
        tagline: "Transformando Ideias em Produtos Digitais Lindos e Funcionais",
        cta: "Ver Meu Trabalho"
      },
      about: {
        title: "Sobre Mim",
        description: "Sou estudante da Universidade Metodista Unida de Moçambique (UMUM), no curso de Engenharia Informática e Tecnologias, tenho 22 anos e faço parte da startup Ku_kulaDevs. Sou especializado em soluções digitais modernas, Design UI/UX e desenvolvimento web usando Django, Python, HTML, CSS, Java e JavaScript. Meu foco é criar interfaces intuitivas que proporcionam a melhor experiência ao utilizador.",
        goal: "Meu objetivo é criar experiências digitais impactantes que resolvem problemas reais através do design e código."
      },
      projects: {
        title: "Projetos",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema Web Agrícola Inteligente",
          description: "A plataforma IAgroMoz é uma plataforma de apoio ao agricultor desenhada para assistir a comunidade agrícola com foco em usabilidade.",
          features: {
            weather: "Recomendações Climáticas",
            assistance: "Assistência ao Utilizador",
            community: "Comunidade Agrícola",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Interface de Rede Social",
          subtitle: "Campo de Criação de Publicação",
          description: "Uma interface moderna e intuitiva para a criação de publicações em redes sociais, focada na experiência do utilizador final.",
          features: {
            editor: "Editor de Texto",
            upload: "Upload de Média",
            preview: "Pré-visualização",
            ux: "UX Intuitiva"
          }
        }
      },
      skills: {
        title: "Habilidades e Tecnologias"
      },
      certificates: {
        title: "Certificados e Diplomas",
        workshop_web: "Workshop de Desenvolvimento Web - MozDevz",
        workshop_python: "Workshop de Programação e Inovação - MozDevz",
        diploma: "Diploma de Honra"
      },
      contact: {
        title: "Contacto",
        phone: "Telefone",
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: "Sobre Mí",
        projects: "Proyectos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "Conocido como 'Kinho' | Diseñador UI/UX y Programador",
        tagline: "Transformando Ideas en Productos Digitais Hermosos y Funcionales",
        cta: "Ver Mi Trabajo"
      },
      about: {
        title: "Sobre Mí",
        description: "Soy estudiante de la Universidad Metodista Unida de Mozambique (UMUM), en Ingeniería Informática y Tecnologías, tengo 22 años y formo parte de la startup Ku_kulaDevs. Me especializo en soluciones digitales modernas, Diseño UI/UX e desarrollo web usando Django, Python, HTML, CSS, Java y JavaScript. Mi enfoque es crear interfaces intuitivas que brinden la mejor experiencia al usuario.",
        goal: "Mi objetivo es crear experiencias digitales impactantes que resuelvan problemas reales a través del diseño y el código."
      },
      projects: {
        title: "Proyectos",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema Web Agrícola Inteligente",
          description: "Una plataforma de apoyo al agricultor diseñada para asistir a la comunidad agrícola con un enfoque en la usabilidad.",
          features: {
            weather: "Recomendaciones Climáticas",
            assistance: "Asistencia al Usuario",
            community: "Comunidad Agrícola",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Interfaz de Red Social",
          subtitle: "Campo de Creación de Publicación",
          description: "Una interfaz moderna e intuitiva para la creación de publicaciones en redes sociales, enfocada en la experiencia del usuario final.",
          features: {
            editor: "Editor de Texto",
            upload: "Carga de Medios",
            preview: "Vista Previa",
            ux: "UX Intuitiva"
          }
        }
      },
      skills: {
        title: "Habilidades y Tecnologias"
      },
      certificates: {
        title: "Certificados y Diplomas",
        workshop_web: "Taller de Desenvolvimento Web - MozDevz",
        workshop_python: "Taller de Programación e Innovación - MozDevz",
        diploma: "Diploma de Honor"
      },
      contact: {
        title: "Contacto",
        phone: "Teléfono",
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;