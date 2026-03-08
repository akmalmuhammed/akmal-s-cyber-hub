import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[92vh] flex items-center pt-16">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-gh-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="relative group">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-secondary border-2 border-border overflow-hidden flex items-center justify-center">
                {/* Replace this with your photo: put image in src/assets/profile.jpg and import it */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-gh-purple/10">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-muted-foreground/40">AM</span>
                </div>
              </div>
              {/* Status dot */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gh-green border-[3px] border-background" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-mono mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gh-green animate-pulse" />
              open_to_work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.15] mb-3"
            >
              <span className="text-foreground">Akmal</span>{" "}
              <span className="gradient-primary">Muhammed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5 max-w-lg font-mono text-[13px] sm:text-sm md:mx-0 mx-auto"
            >
              Cybersecurity Consultant // SOC Operations & Threat Hunting // Cloud Security Advisory
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground mb-7"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5" /> Doha, Qatar
              </span>
              <a href="mailto:akmalmuhammed93@gmail.com" className="inline-flex items-center gap-1.5 font-mono text-xs hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> akmalmuhammed93@gmail.com
              </a>
              <a href="https://linkedin.com/in/akmal-muhammed-m-k/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs hover:text-primary transition-colors">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                view_work <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
              >
                contact_me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-border"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "8", label: "FIFA Stadiums Secured" },
            { value: "3000+", label: "Assets Monitored" },
            { value: "SC-200", label: "Microsoft Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
