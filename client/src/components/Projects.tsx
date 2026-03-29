import { motion } from "framer-motion";
import { ExternalLink, CloudSun, Users, ShoppingCart, Info, Layout, Image as ImageIcon, Type, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import iagroLogo from "@assets/Captura_de_tela_2025-08-31_174719_1765822512653.png";
import socialUiImg from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.18_13112695_1765821513103.jpg";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* IAgroMoz Feature Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-xl overflow-hidden border border-border bg-card/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-white/5 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                <img 
                  src={iagroLogo} 
                  alt="IAgroMoz" 
                  className="relative z-10 w-64 h-64 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t('projects.iagromoz.title')}
                  </h3>
                  <p className="text-primary font-medium mb-4">{t('projects.iagromoz.subtitle')}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('projects.iagromoz.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CloudSun className="h-4 w-4 text-primary" />
                    {t('projects.iagromoz.features.weather')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Info className="h-4 w-4 text-primary" />
                    {t('projects.iagromoz.features.assistance')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Users className="h-4 w-4 text-primary" />
                    {t('projects.iagromoz.features.community')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    {t('projects.iagromoz.features.marketplace')}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Django', 'Python', 'Full-Stack', 'UI/UX'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs border border-primary/30 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
                     Ver Projeto <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media UI Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group rounded-xl overflow-hidden border border-border bg-card/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t('projects.social_ui.title')}
                  </h3>
                  <p className="text-primary font-medium mb-4">{t('projects.social_ui.subtitle')}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('projects.social_ui.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Type className="h-4 w-4 text-primary" />
                    {t('projects.social_ui.features.editor')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <ImageIcon className="h-4 w-4 text-primary" />
                    {t('projects.social_ui.features.upload')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Eye className="h-4 w-4 text-primary" />
                    {t('projects.social_ui.features.preview')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Layout className="h-4 w-4 text-primary" />
                    {t('projects.social_ui.features.ux')}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs border border-primary/30 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-8 flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent opacity-50" />
                <img 
                  src={socialUiImg} 
                  alt="Social Media UI" 
                  className="relative z-10 w-full h-auto max-h-80 object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}