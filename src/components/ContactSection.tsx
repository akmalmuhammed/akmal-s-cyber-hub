import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

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
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// contact</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Let's Work Together</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md font-mono text-xs">
            Open to security consulting, SOC advisory roles, and cybersecurity projects.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactDetails.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 flex items-center justify-between group hover-lift"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
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

              <button
                onClick={() => copyToClipboard(item.value, item.label)}
                className="p-2 rounded-lg hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
                title="Copy"
              >
                {copied === item.label ? (
                  <Check className="w-3.5 h-3.5 text-gh-green" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <a
            href="mailto:akmalmuhammed93@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            send_email <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/akmal-muhammed-m-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
          >
            open_linkedin <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
