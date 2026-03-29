import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MousePointer2, Sparkles } from "lucide-react";
import isidroPhoto from "@/assets/isidro-profile.jpg";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="container px-6 z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold">
            <Sparkles className="h-4 w-4" />
            Designer UI/UX & Programador
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] text-foreground tracking-tighter">
              Isidro<br />
              <span className="text-gradient">Guiamba.</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            Criando experiências digitais <span className="text-foreground font-semibold">intuitivas</span> e <span className="text-foreground font-semibold">memoráveis</span> através de design e código.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl px-8 py-4 flex items-center transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              Ver Projetos 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/isidro-guiamba-0b3211346/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-border hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:isidroguiamba87@gmail.com" className="p-3 rounded-xl bg-white border border-border hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src={isidroPhoto} 
              alt="Isidro Helder Guiamba" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass-card p-4 rounded-2xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <MousePointer2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase">Foco em</div>
                  <div className="text-sm font-bold">Usabilidade</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}