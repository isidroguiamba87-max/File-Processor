import { motion } from "framer-motion";
import kukulaLogo from "@assets/Imagem_do_WhatsApp_de_2025-10-30_à(s)_10.43.15_771e054f_1765822578132.jpg";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              {t('about.title')}
            </h2>
            
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-6">
                <p className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed text-justify">
                  {t('about.description')}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  {t('about.goal')}
                </p>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div className="p-8 bg-secondary/30 rounded-3xl border border-border/50">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Colaboração</div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-xl p-2 border border-border shadow-sm flex items-center justify-center">
                      <img 
                        src={kukulaLogo} 
                        alt="Ku_kulaDevs" 
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Ku_kulaDevs</div>
                      <div className="text-sm text-muted-foreground">Membro da Startup</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}