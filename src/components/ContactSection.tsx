import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight, MapPin, Copy, Check, Send, Download } from "lucide-react";
import { useState, useRef } from "react";
import { resumePdfDownloadName, resumePdfHref } from "@/lib/resume";

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactDetails = [
    { icon: Mail, label: "Email", value: "akmalmuhammed93@gmail.com", href: "mailto:akmalmuhammed93@gmail.com" },
    { icon: Phone, label: "Phone", value: "+974-74015001", href: "tel:+97474015001" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akmal-muhammed-m-k", href: "https://linkedin.com/in/akmal-muhammed-m-k/" },
    { icon: MapPin, label: "Location", value: "Doha, Qatar", href: null },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// contact</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Let's Work Together</h2>
          <p className="text-xs font-mono text-muted-foreground mb-10 max-w-md">
            Open to security consulting, SOC advisory roles, and collaborative cybersecurity projects.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactDetails.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-border bg-card p-4 flex items-center justify-between group transition-colors hover:border-primary/15"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                </motion.div>
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground uppercase">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(item.value, item.label)}
                className="p-2 rounded-lg hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
                title="Copy"
              >
                {copied === item.label ? (
                  <Check className="w-3.5 h-3.5 text-gh-green" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <motion.a
            href="mailto:akmalmuhammed93@gmail.com"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground"
          >
            <Send className="w-3.5 h-3.5" /> send_email <ArrowUpRight className="w-3 h-3" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/akmal-muhammed-m-k/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" /> open_linkedin
          </motion.a>
          <motion.a
            href={resumePdfHref}
            download={resumePdfDownloadName}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-primary/20 bg-primary/[0.06] text-primary hover:bg-primary/[0.1] transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> download_cv.pdf
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
