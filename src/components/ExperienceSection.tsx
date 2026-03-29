import { motion, useInView } from "framer-motion";
import { Calendar, ChevronRight, Building2, Radar, Shield, BarChart3 } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Security Consultant",
    type: "Information Security",
    company: "INTALEQ Technology & Consulting",
    client: "Aspire Zone Foundation",
    location: "Doha, Qatar",
    period: "Feb 2024 - Present",
    icon: Shield,
    bullets: [
      "Security posture assessments across SIEM, XDR, and cloud environments with risk-based improvements.",
      "Built Cortex XSOAR playbooks - significantly improved investigation and response times.",
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
    period: "Mar 2023 - Dec 2023",
    icon: Radar,
    bullets: [
      "Website security audits - mitigated XSS and malicious JavaScript injections.",
      "Implemented RBAC for internal BI tools preventing unauthorized data exposure.",
      "Python automation for bot/anomaly detection in digital marketing campaigns.",
    ],
    tags: ["Security Audits", "Python", "RBAC"],
  },
  {
    role: "Executive - Analytics & Reporting",
    company: "Group M",
    location: "Bengaluru, India",
    period: "Jun 2021 - Jun 2023",
    icon: BarChart3,
    bullets: [
      "Data solutions for Disney Hotstar, Ikea, Meesho, Amway, Kimberly Clark.",
      "Power BI, Salesforce Datorama, SQL-based reporting.",
    ],
    tags: ["Power BI", "SQL", "Datorama"],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-10 h-10 rounded-xl bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0"
        >
          <exp.icon className="w-4.5 h-4.5 text-primary" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-base font-display font-bold text-foreground">
                {exp.role}
                {exp.type && <span className="text-xs font-mono font-normal text-muted-foreground ml-2">// {exp.type}</span>}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mt-0.5 flex items-center gap-1.5">
                <Building2 className="w-3 h-3" />
                {exp.company}
                {exp.client && <span className="text-primary/70">{"->"} {exp.client}</span>}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground whitespace-nowrap shrink-0 px-2 py-0.5 rounded-md bg-secondary">
              <Calendar className="w-3 h-3" /> {exp.period}
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + j * 0.04 + 0.2 }}
                className="flex gap-2 text-sm text-foreground/70 leading-relaxed"
              >
                <ChevronRight className="w-3 h-3 text-primary/60 shrink-0 mt-1.5" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// career</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Work Experience</h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
