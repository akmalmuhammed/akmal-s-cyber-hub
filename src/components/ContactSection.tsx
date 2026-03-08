import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// Get In Touch</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Work Together
          </h3>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Open to security consulting opportunities, SOC advisory roles, and collaborative cybersecurity projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:akmalmuhammed93@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href="https://linkedin.com/in/akmal-muhammed-m-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="tel:+97474015001"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground font-semibold hover:border-primary/30 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-primary" /> Call
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="w-3 h-3" /> Doha, Qatar
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
