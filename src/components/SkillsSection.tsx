import { motion } from "framer-motion";

const skillGroups = [
  { title: "Security Operations", items: ["Detection Engineering", "Alert Triage", "Threat Hunting", "Incident Response", "SIEM/Log Analysis"] },
  { title: "SOC Platforms", items: ["Microsoft Sentinel", "Defender XDR", "Cortex XDR/XSOAR", "SentinelOne", "Darktrace", "Trend Micro XDR"] },
  { title: "Threat Intelligence", items: ["MITRE ATT&CK", "APT Analysis", "IOC Management", "Kaspersky TI", "VirusTotal Enterprise"] },
  { title: "Automation", items: ["Python", "KQL", "XSOAR Playbooks", "SOAR Orchestration"] },
  { title: "Cloud & Infra", items: ["Prisma Cloud", "Azure Security", "Microsoft Entra ID", "Forescout"] },
  { title: "Reporting & Tools", items: ["Tenable", "Power BI", "Looker Studio", "Executive Reporting"] },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// expertise</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Technical Skills</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} {...fadeUp} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-accent text-foreground/80">{item}</span>
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
