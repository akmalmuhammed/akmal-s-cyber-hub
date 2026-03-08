import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Security Operations",
    items: ["Detection Engineering", "Alert Triage & Investigation", "Threat Hunting", "Incident Response", "SIEM/Log Analysis", "Security Monitoring"],
  },
  {
    title: "Threat Intelligence",
    items: ["MITRE ATT&CK", "APT Analysis", "IOC Management", "Kaspersky TI", "VirusTotal Enterprise"],
  },
  {
    title: "SOC Platforms",
    items: ["Microsoft Sentinel", "Defender XDR", "Cortex XDR/XSOAR", "SentinelOne", "Darktrace", "Trend Micro XDR"],
  },
  {
    title: "Automation & Scripting",
    items: ["Python", "KQL", "XSOAR Playbooks", "SOAR Orchestration"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Prisma Cloud", "Azure Security", "Microsoft Entra ID", "Forescout EyeSight/EyeInspect"],
  },
  {
    title: "Additional Platforms",
    items: ["Tenable", "Power BI", "Looker Studio", "Executive Reporting"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Cpu className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// Core Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-5 hover:border-primary/30 hover:glow-border transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-primary/8 text-primary/90 border border-primary/15"
                  >
                    {item}
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

export default SkillsSection;
