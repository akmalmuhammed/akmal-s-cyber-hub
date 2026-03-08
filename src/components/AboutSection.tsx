import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// About</h2>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 md:p-8 glow-border">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">profile.summary</span>
            </div>

            <p className="text-foreground/90 leading-relaxed text-lg">
              Strategic Security Consultant with hands-on experience delivering security operations, 
              threat hunting, and cloud security advisory for{" "}
              <span className="text-primary font-semibold">critical national infrastructure</span> and{" "}
              <span className="text-primary font-semibold">large-scale international events</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Proven ability to assess security posture, design detection and response capabilities, 
              and translate technical risk into actionable recommendations. Experienced across 
              Microsoft Sentinel, Google-aligned cloud security tooling, XDR, SOAR, and threat 
              intelligence platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
