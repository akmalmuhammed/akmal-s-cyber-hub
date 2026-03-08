import { MapPin, Mail, Linkedin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-8 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-[260px] sm:h-[260px] rounded-full bg-secondary border border-border flex items-center justify-center text-3xl sm:text-7xl font-semibold text-muted-foreground shrink-0">
            AM
          </div>

          <div className="flex-1 pt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Akmal Muhammed Mele Kovoor
            </h1>
            <p className="text-xl text-muted-foreground mt-1">akmal-muhammed</p>

            <p className="text-sm text-foreground/80 mt-4 max-w-xl leading-relaxed">
              Strategic Security Consultant with hands-on experience in SOC operations, 
              threat hunting, and cloud security advisory for critical national infrastructure 
              and large-scale international events.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Doha, Qatar
              </span>
              <a href="mailto:akmalmuhammed93@gmail.com" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> akmalmuhammed93@gmail.com
              </a>
              <a href="https://linkedin.com/in/akmal-muhammed-m-k/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground">
                🛡️ Cybersecurity Consultant
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground">
                🔍 Threat Hunter
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground">
                ☁️ Cloud Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
