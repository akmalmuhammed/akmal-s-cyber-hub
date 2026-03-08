import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Let's Work Together</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Open to security consulting, SOC advisory roles, and collaborative cybersecurity projects.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:akmalmuhammed93@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Send Email <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/in/akmal-muhammed-m-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="tel:+97474015001"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
              >
                <Phone className="w-4 h-4" /> +974-74015001
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
