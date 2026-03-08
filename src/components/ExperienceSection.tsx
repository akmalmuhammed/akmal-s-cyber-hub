import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Security Consultant",
    type: "Information Security",
    company: "INTALEQ Technology & Consulting",
    client: "Aspire Zone Foundation",
    location: "Doha, Qatar",
    period: "Feb 2024 – Present",
    bullets: [
      "Security posture assessments across SIEM, XDR, and cloud environments with risk-based improvements.",
      "Built Cortex XSOAR playbooks — significantly improved investigation and response times.",
      "Led threat hunting targeting APT39, MuddyWater, ClickFix with MITRE ATT&CK hypotheses.",
      "Live SOC monitoring for FIFA Intercontinental Cup, Arab Cup & F1 Qatar Grand Prix.",
      "Monitored 8 FIFA World Cup stadiums via Sentinel, Cortex XDR, SentinelOne, Darktrace.",
      "Collaborated with Qatar NCSA on threat intel sharing and national security initiatives.",
      "Investigated and contained ransomware activity on critical infrastructure.",
    ],
    tags: ["Sentinel", "Cortex XDR", "SentinelOne", "KQL", "Python"],
  },
  {
    role: "Senior Analyst",
    company: "Interactive Avenues (IPG) | WPP",
    location: "Mumbai, India",
    period: "Mar 2023 – Dec 2023",
    bullets: [
      "Website security audits — mitigated XSS and malicious JavaScript injections.",
      "Implemented RBAC for internal BI tools preventing unauthorized data exposure.",
      "Python automation for bot/anomaly detection in digital marketing campaigns.",
    ],
    tags: ["Security Audits", "Python", "RBAC"],
  },
  {
    role: "Executive – Analytics & Reporting",
    company: "Group M",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jun 2023",
    bullets: [
      "Data solutions for Disney Hotstar, Ikea, Meesho, Amway, Kimberly Clark.",
      "Power BI, Salesforce Datorama, SQL-based reporting.",
    ],
    tags: ["Power BI", "SQL", "Datorama"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// career</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Work Experience</h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 sm:p-6 hover-lift"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-display font-bold text-foreground flex items-center gap-2">
                    {exp.role}
                    {exp.type && <span className="text-xs font-mono font-normal text-muted-foreground">// {exp.type}</span>}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-0.5">
                    {exp.company}
                    {exp.client && <span className="text-primary/80"> → {exp.client}</span>}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
                  <Calendar className="w-3 h-3" /> {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[11px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
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

export default ExperienceSection;
