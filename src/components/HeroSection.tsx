import { motion } from "framer-motion";
import { Shield, MapPin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 scan-line pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Terminal prefix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">SECURITY_CONSULTANT.ACTIVE</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">AKMAL</span>
            <br />
            <span className="text-primary glow-text">MUHAMMED</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl font-mono text-muted-foreground">
              <span className="text-primary">{'>'}</span> Cybersecurity Consultant | SOC Operations & Threat Hunting Specialist
            </p>
          </motion.div>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-mono">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Doha, Qatar
            </span>
            <a href="mailto:akmalmuhammed93@gmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-mono hover:bg-primary/10 hover:border-primary/30 transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" /> akmalmuhammed93@gmail.com
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-mono">
              <Phone className="w-3.5 h-3.5 text-primary" /> +974-74015001
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#experience"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              View Experience
            </a>
            <a
              href="https://linkedin.com/in/akmal-muhammed-m-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
