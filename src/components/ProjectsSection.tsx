import { motion } from "framer-motion";
import { ExternalLink, Shield, Wrench, Zap } from "lucide-react";

const projects = [
  {
    title: "MX Lens",
    tagline: "Email Security SaaS",
    description: "B2B platform reducing SOC workload by 85% through automated phishing detection. 11 detection modules, admin panel, Stripe billing.",
    tags: ["Next.js", "Prisma", "Stripe"],
    icon: Shield,
    gradient: "from-primary/20 to-gh-purple/10",
  },
  {
    title: "CyberTools Hub",
    tagline: "SOC Operations Toolkit",
    description: "Privacy-first SaaS centralizing critical SOC and IR analysis tools into a single streamlined workflow.",
    tags: ["SaaS", "SOC Tools", "Privacy"],
    icon: Wrench,
    gradient: "from-gh-green/20 to-primary/10",
  },
  {
    title: "Threat Hunting Initiative",
    tagline: "Aspire Zone Foundation",
    description: "Custom hunting queries integrating Sentinel, Cortex XDR, and Kaspersky TI targeting MENA-based APT activity.",
    tags: ["Sentinel", "MITRE ATT&CK", "Cortex XDR"],
    icon: Zap,
    gradient: "from-gh-orange/20 to-gh-yellow/10",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// portfolio</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Key Projects</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover-lift"
            >
              <div className={`h-1.5 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <p.icon className="w-4 h-4 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground mb-0.5">{p.title}</h3>
                <p className="text-xs font-mono text-primary/70 mb-3">{p.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
