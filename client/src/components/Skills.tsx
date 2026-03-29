import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Palette, MousePointer2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: ["Figma", "Prototipagem", "User Research", "Design Systems", "Wireframing"]
    },
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["React", "Tailwind CSS", "HTML5 / CSS3", "JavaScript (ES6+)", "Framer Motion"]
    },
    {
      title: "Programação",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Python", "Django", "Java", "C++ (Básico)", "POO"]
    },
    {
      title: "Interação",
      icon: <MousePointer2 className="h-6 w-6 text-primary" />,
      skills: ["Micro-interações", "Acessibilidade", "Responsividade", "Usabilidade"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Habilidades & <span className="text-primary">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combinando estética e funcionalidade para criar experiências digitais memoráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border p-8 rounded-3xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground font-medium">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}