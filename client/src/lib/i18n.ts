import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        certificates: "Certificates",
        contact: "Contact"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "UI/UX Designer & Programmer",
        tagline: "Crafting intuitive digital experiences through design and code.",
        cta: "View Projects"
      },
      about: {
        title: "About",
        description: "Computer Engineering student at UMUM and member of Ku_kulaDevs. I specialize in merging design and technology to create intuitive and functional interfaces.",
        goal: "An AI enthusiast dedicated to building the future of digital interaction."
      },
      projects: {
        title: "Selected Projects",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Agricultural Support System",
          description: "A comprehensive platform designed to support the agricultural community with a focus on usability and user-centered design.",
          features: {
            weather: "Climate Insights",
            assistance: "User Support",
            community: "Community Hub",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Social Interface",
          subtitle: "User Experience Design",
          description: "A modern interface for social interaction, focusing on clean typography and intuitive user flows.",
          features: {
            editor: "Content Creation",
            upload: "Media Management",
            preview: "Live Preview",
            ux: "Intuitive Flow"
          }
        }
      },
      skills: {
        title: "Expertise"
      },
      certificates: {
        title: "Education & Recognition",
        workshop_web: "Web Development - MozDevz",
        workshop_python: "Programming & Innovation - MozDevz",
        diploma: "Diploma of Honor"
      },
      contact: {
        title: "Get in Touch",
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
        about: "Sobre",
        projects: "Projetos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "Designer UI/UX & Programador",
        tagline: "Criando experiências digitais intuitivas através de design e código.",
        cta: "Ver Projetos"
      },
      about: {
        title: "Sobre",
        description: "Estudante de Engenharia Informática na UMUM e membro da Ku_kulaDevs. Especializo-me em unir design e tecnologia para criar interfaces intuitivas e funcionais.",
        goal: "Um entusiasta em IA dedicado a construir o futuro da interação digital."
      },
      projects: {
        title: "Projetos Selecionados",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema de Apoio Agrícola",
          description: "Uma plataforma abrangente desenhada para apoiar a comunidade agrícola com foco em usabilidade e design centrado no utilizador.",
          features: {
            weather: "Dados Climáticos",
            assistance: "Suporte ao Utilizador",
            community: "Hub Comunitário",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Interface Social",
          subtitle: "Design de Experiência",
          description: "Uma interface moderna para interação social, focada em tipografia limpa e fluxos de utilizador intuitivos.",
          features: {
            editor: "Criação de Conteúdo",
            upload: "Gestão de Média",
            preview: "Pré-visualização",
            ux: "Fluxo Intuitivo"
          }
        }
      },
      skills: {
        title: "Especialidades"
      },
      certificates: {
        title: "Formação & Reconhecimento",
        workshop_web: "Desenvolvimento Web - MozDevz",
        workshop_python: "Programação & Inovação - MozDevz",
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
        about: "Sobre",
        projects: "Proyectos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Isidro Helder Guiamba",
        subtitle: "Diseñador UI/UX & Programador",
        tagline: "Creando experiencias digitales intuitivas a través del diseño y el código.",
        cta: "Ver Proyectos"
      },
      about: {
        title: "Sobre",
        description: "Estudiante de Ingeniería Informática en UMUM y miembro de Ku_kulaDevs. Me especializo en unir diseño y tecnología para crear interfaces intuitivas y funcionales.",
        goal: "Un entusiasta de la IA dedicado a construir el futuro de la interacción digital."
      },
      projects: {
        title: "Proyectos Seleccionados",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema de Apoyo Agrícola",
          description: "Una plataforma integral diseñada para apoyar a la comunidad agrícola con un enfoque en la usabilidad y el diseño centrado en el usuario.",
          features: {
            weather: "Datos Climáticos",
            assistance: "Soporte al Usuario",
            community: "Centro Comunitario",
            marketplace: "Marketplace"
          }
        },
        social_ui: {
          title: "Interfaz Social",
          subtitle: "Diseño de Experiencia",
          description: "Una interfaz moderna para la interacción social, centrada en una tipografía limpia y flujos de usuario intuitivos.",
          features: {
            editor: "Creación de Conteúdo",
            upload: "Gestión de Medios",
            preview: "Vista Previa",
            ux: "Flujo Intuitivo"
          }
        }
      },
      skills: {
        title: "Especialidades"
      },
      certificates: {
        title: "Formación & Reconocimiento",
        workshop_web: "Desarrollo Web - MozDevz",
        workshop_python: "Programación & Innovación - MozDevz",
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