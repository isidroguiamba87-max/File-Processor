import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import isidroPhoto from "@/assets/isidro-profile.jpg";

export function Hero() {

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white"
    >
      <div className="container px-6 z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] text-foreground tracking-tighter">
              Isidro<br />Guiamba<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Designer UI/UX & Programador
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Criando experiências digitais intuitivas através de design e código.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-foreground hover:bg-primary text-white font-bold rounded-full px-8 py-4 flex items-center transition-all"
            >
              Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/isidro-guiamba-0b3211346/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:isidroguiamba87@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src={isidroPhoto} 
              alt="Isidro Helder Guiamba" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}