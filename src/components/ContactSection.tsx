import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-base font-semibold text-foreground mb-4">Get in Touch</h2>
        <p className="text-sm text-muted-foreground mb-6 max-w-lg">
          Open to security consulting, SOC advisory, and collaborative cybersecurity projects.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:akmalmuhammed93@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="https://linkedin.com/in/akmal-muhammed-m-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border text-foreground hover:bg-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="tel:+97474015001"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border text-foreground hover:bg-accent transition-colors"
          >
            <Phone className="w-4 h-4" /> +974-74015001
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
