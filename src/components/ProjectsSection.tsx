import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MX Lens",
    subtitle: "Security Analytics & Insights Platform",
    description:
      "Founded and developed a B2B SaaS email security platform that reduces SOC analyst workload by 85% through automated phishing detection. Architected full-stack solution (Next.js, Prisma, Stripe) with 11 detection modules, admin panel, and enterprise-grade security features.",
    tags: ["Next.js", "Prisma", "Stripe", "Email Security", "SaaS"],
  },
  {
    title: "CyberTools Hub",
    subtitle: "Security Utility Tools Hub for Daily Ops",
    description:
      "Built a high-impact cybersecurity SaaS designed to accelerate daily SOC and IR operations by centralizing critical analysis tools into a single, privacy-first workflow.",
    tags: ["SOC Tools", "SaaS", "Privacy-First", "IR Operations"],
  },
  {
    title: "Advanced Threat Hunting Initiative",
    subtitle: "Aspire Zone Foundation",
    description:
      "Proactively developed and executed threat hunting use cases across Microsoft Sentinel and XDR platforms. Built custom hunting queries integrating Sentinel, Cortex XDR, and Kaspersky Threat Intelligence to track active threats relevant to MENA-based infrastructure.",
    tags: ["Sentinel", "Cortex XDR", "Kaspersky TI", "MITRE ATT&CK", "Threat Hunting"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <FolderGit2 className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// Key Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/30 hover:glow-border transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <FolderGit2 className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">{project.title}</h3>
              <p className="text-xs font-mono text-primary/70 mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-primary/80 px-2 py-0.5 rounded bg-primary/8 border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
