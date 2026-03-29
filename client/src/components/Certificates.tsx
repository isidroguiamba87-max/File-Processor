"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Certificates() {
  const { t } = useTranslation();

  const certificates = [
    { 
      id: 1, 
      title: "Engenharia Informática e Tecnologias", 
      institution: "Universidade Metodista Unida de Moçambique",
      date: "Em curso",
      icon: <GraduationCap className="h-5 w-5" />
    },
    { 
      id: 2, 
      title: "Workshop de Programação e Inovação", 
      institution: "MozDevz",
      date: "2023",
      icon: <Award className="h-5 w-5" />
    },
    { 
      id: 3, 
      title: "Workshop de Desenvolvimento Web", 
      institution: "MozDevz",
      date: "2023",
      icon: <Award className="h-5 w-5" />
    },
    { 
      id: 4, 
      title: "Apresentação nas Jornadas Científicas", 
      institution: "IAgroMoz Project",
      date: "2024",
      icon: <Award className="h-5 w-5" />
    },
    { 
      id: 5, 
      title: "Diploma de Honra", 
      institution: "Habilitações Literárias",
      date: "2024",
      icon: <Award className="h-5 w-5" />
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Formação & <span className="text-accent">Certificações</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada académica e profissional é marcada pela busca constante de conhecimento e excelência técnica.
          </p>
        </motion.div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-accent/50 hover:bg-card/60 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cert.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}