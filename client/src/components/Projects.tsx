import { motion } from "framer-motion";
import { ExternalLink, CloudSun, Users, ShoppingCart, Info, Layout, Image as ImageIcon, Type, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import iagroLogo from "@assets/Captura_de_tela_2025-08-31_174719_1765822512653.png";
import socialUiImg from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.18_13112695_1765821513103.jpg";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-white/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Projetos <span className="text-primary">Selecionados</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid gap-16">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-secondary/30">
              <img 
                src={iagroLogo} 
                alt="IAgroMoz" 
                className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">{t('projects.iagromoz.title')}</h3>
                <p className="text-primary font-bold uppercase tracking-wider text-sm">{t('projects.iagromoz.subtitle')}</p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('projects.iagromoz.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Django', 'Python', 'UI/UX Design'].map(tech => (
                  <span key={tech} className="px-4 py-1.5 bg-white border border-border rounded-xl text-sm font-semibold text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                Ver Detalhes <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">{t('projects.social_ui.title')}</h3>
                <p className="text-primary font-bold uppercase tracking-wider text-sm">{t('projects.social_ui.subtitle')}</p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('projects.social_ui.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                  <span key={tech} className="px-4 py-1.5 bg-white border border-border rounded-xl text-sm font-semibold text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                Ver Detalhes <ExternalLink className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-secondary/30 order-1 md:order-2">
              <img 
                src={socialUiImg} 
                alt="Social UI" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}