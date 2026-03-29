import { motion } from "framer-motion";
import { ExternalLink, CloudSun, Users, ShoppingCart, Info, Layout, Image as ImageIcon, Type, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import iagroLogo from "@assets/Captura_de_tela_2025-08-31_174719_1765822512653.png";
import socialUiImg from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.18_13112695_1765821513103.jpg";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Uma seleção de trabalhos onde o design e a tecnologia se encontram.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* IAgroMoz Feature Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-[2.5rem] overflow-hidden border border-border bg-white hover:shadow-3xl transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-secondary/50 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                <img 
                  src={iagroLogo} 
                  alt="IAgroMoz" 
                  className="relative z-10 w-64 h-64 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    {t('projects.iagromoz.title')}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-6">{t('projects.iagromoz.subtitle')}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t('projects.iagromoz.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 py-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><CloudSun className="h-5 w-5 text-primary" /></div>
                    {t('projects.iagromoz.features.weather')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><Info className="h-5 w-5 text-primary" /></div>
                    {t('projects.iagromoz.features.assistance')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><Users className="h-5 w-5 text-primary" /></div>
                    {t('projects.iagromoz.features.community')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><ShoppingCart className="h-5 w-5 text-primary" /></div>
                    {t('projects.iagromoz.features.marketplace')}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Django', 'Python', 'UI/UX Design', 'User Research'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 text-xs font-bold bg-secondary text-muted-foreground rounded-full border border-border">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="bg-foreground hover:bg-foreground/90 text-white px-8 py-3 rounded-2xl flex items-center gap-3 transition-all font-bold shadow-lg">
                     Ver Detalhes <ExternalLink className="h-4 w-4" />
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
            className="relative group rounded-[2.5rem] overflow-hidden border border-border bg-white hover:shadow-3xl transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8 order-2 md:order-1">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    {t('projects.social_ui.title')}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-6">{t('projects.social_ui.subtitle')}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t('projects.social_ui.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 py-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><Type className="h-5 w-5 text-primary" /></div>
                    {t('projects.social_ui.features.editor')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><ImageIcon className="h-5 w-5 text-primary" /></div>
                    {t('projects.social_ui.features.upload')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><Eye className="h-5 w-5 text-primary" /></div>
                    {t('projects.social_ui.features.preview')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <div className="p-2 bg-primary/5 rounded-lg"><Layout className="h-5 w-5 text-primary" /></div>
                    {t('projects.social_ui.features.ux')}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 text-xs font-bold bg-secondary text-muted-foreground rounded-full border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/50 p-10 flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-50" />
                <img 
                  src={socialUiImg} 
                  alt="Social Media UI" 
                  className="relative z-10 w-full h-auto max-h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}