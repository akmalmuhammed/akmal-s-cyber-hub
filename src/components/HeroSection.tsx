import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-16">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Gradient orb */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gh-green animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4"
          >
            <span className="text-foreground">Akmal</span>
            <br />
            <span className="gradient-primary">Muhammed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-lg"
          >
            Cybersecurity Consultant specializing in SOC operations, threat hunting & cloud security for critical infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-8"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Doha, Qatar
            </span>
            <a href="mailto:akmalmuhammed93@gmail.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> akmalmuhammed93@gmail.com
            </a>
            <a href="https://linkedin.com/in/akmal-muhammed-m-k/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Work <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-border"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "8", label: "FIFA Stadiums Secured" },
            { value: "3000+", label: "Assets Monitored" },
            { value: "SC-200", label: "Microsoft Certified" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
