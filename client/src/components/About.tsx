import { motion } from "framer-motion";
import kukulaLogo from "@assets/Imagem_do_WhatsApp_de_2025-10-30_à(s)_10.43.15_771e054f_1765822578132.jpg";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                {t('about.description')}
              </p>
              <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                {t('about.goal')}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Membro de:</div>
              <div className="h-14 w-auto bg-white rounded-xl p-2 border border-border shadow-sm">
                <img 
                  src={kukulaLogo} 
                  alt="Ku_kulaDevs" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-primary/30 hover:shadow-xl transition-all group">
                <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">22</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-tight">Anos</span>
              </div>
              <div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-primary/30 hover:shadow-xl transition-all mt-10 group">
                <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-tight">Projetos</span>
              </div>
              <div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-primary/30 hover:shadow-xl transition-all -mt-10 group">
                <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">3+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-tight">Linguagens</span>
              </div>
              <div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-primary/30 hover:shadow-xl transition-all group">
                <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100%</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-tight">Foco UX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}