import { GitCommitHorizontal, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Security Consultant – Information Security",
    company: "INTALEQ Technology & Consulting | Aspire Zone Foundation",
    location: "Doha, Qatar",
    period: "Feb 2024 – Present",
    bullets: [
      "Security posture assessments across SIEM, XDR, and cloud environments with risk-based recommendations.",
      "Built Cortex XSOAR playbooks for enrichment, containment, and response automation.",
      "Led threat hunting targeting APT39, MuddyWater, ClickFix using MITRE ATT&CK-mapped hypotheses.",
      "SOC monitoring for FIFA Intercontinental Cup, Arab Cup, and F1 Qatar Grand Prix 2024–2025.",
      "Monitoring across 8 FIFA World Cup stadiums using Sentinel, Cortex XDR, SentinelOne, Darktrace.",
      "Collaborated with Qatar NCSA on threat intel sharing and national security initiatives.",
      "Investigated ransomware activity affecting critical infrastructure.",
    ],
  },
  {
    role: "Senior Analyst",
    company: "Interactive Avenues (IPG) | WPP",
    location: "Mumbai, India",
    period: "Mar 2023 – Dec 2023",
    bullets: [
      "Website security audits — mitigated XSS vulnerabilities and malicious JS injections.",
      "Implemented role-based access controls for internal BI tools.",
      "Python automation for anomaly and bot detection in marketing campaigns.",
    ],
  },
  {
    role: "Executive – Analytics & Reporting",
    company: "Group M",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jun 2023",
    bullets: [
      "Data-driven solutions for Disney Hotstar, Ikea, Meesho, Amway, Kimberly Clark.",
      "Power BI, Salesforce Datorama, SQL-based reporting and analytics.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2">
          <GitCommitHorizontal className="w-4 h-4 text-muted-foreground" />
          Experience
        </h2>

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6 pb-8 border-l border-border last:pb-0">
              {/* Dot */}
              <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary border-2 border-background" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{exp.company} · {exp.location}</p>

              <ul className="mt-3 space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-foreground/80 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
