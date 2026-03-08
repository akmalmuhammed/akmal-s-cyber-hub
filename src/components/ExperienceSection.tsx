import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Security Consultant – Information Security",
    prevRole: "Security Analyst (Feb 2024 – Feb 2025)",
    company: "INTALEQ Technology and Consulting Services | Aspire Zone Foundation",
    location: "Doha, Qatar",
    period: "Feb 2024 – Present",
    highlights: [
      "Conducted security posture assessments across SIEM, XDR, and cloud environments, identifying gaps and recommending risk-based improvements.",
      "Built and maintained Cortex XSOAR playbooks for enrichment, containment, and response, significantly improving investigation time.",
      "Participated in investigation and containment of ransomware activity affecting critical infrastructure.",
      "Led proactive threat hunting targeting APT39, MuddyWater, ClickFix using MITRE ATT&CK-mapped hypotheses.",
      "Provided live SOC monitoring for FIFA Intercontinental Cup, Arab Cup, and Formula 1 Qatar Grand Prix 2024–2025.",
      "Security monitoring across 8 FIFA World Cup stadiums, Aspetar Sports Hospital, Aspire Academy, Lusail Circuit using Microsoft Sentinel, Cortex XDR, SentinelOne, Trend Micro XDR, Darktrace.",
      "Collaborated with Qatar National Cyber Security Agency (NCSA) on threat intelligence sharing and national security initiatives.",
    ],
  },
  {
    role: "Senior Analyst",
    company: "Interactive Avenues (IPG) | WPP",
    location: "Mumbai, India",
    period: "March 2023 – December 2023",
    highlights: [
      "Conducted website security audits, identifying and mitigating XSS vulnerabilities, malicious JavaScript injections.",
      "Implemented data security measures and access controls for internal BI tools.",
      "Developed Python scripts to detect anomalies, bots, and suspicious activity in digital marketing campaigns.",
    ],
  },
  {
    role: "Executive – Analytics and Reporting",
    company: "Group M",
    location: "Bengaluru, India",
    period: "June 2021 – June 2023",
    highlights: [
      "Delivered data-driven solutions for Disney Hotstar, Ikea, Meesho, Amway, and Kimberly Clark.",
      "Expertise in Power BI, Salesforce Datorama, SQL, and data platform management.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="rounded-lg border border-border bg-card p-6 hover:border-primary/20 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  {exp.prevRole && (
                    <p className="text-xs font-mono text-muted-foreground mb-1">Previously: {exp.prevRole}</p>
                  )}
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
