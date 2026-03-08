const skillGroups = [
  {
    title: "Security Operations",
    items: ["Detection Engineering", "Alert Triage", "Threat Hunting", "Incident Response", "SIEM/Log Analysis"],
  },
  {
    title: "Platforms",
    items: ["Microsoft Sentinel", "Defender XDR", "Cortex XDR/XSOAR", "SentinelOne", "Darktrace", "Trend Micro XDR"],
  },
  {
    title: "Threat Intelligence",
    items: ["MITRE ATT&CK", "APT Analysis", "IOC Management", "Kaspersky TI", "VirusTotal Enterprise"],
  },
  {
    title: "Automation",
    items: ["Python", "KQL", "XSOAR Playbooks", "SOAR Orchestration"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Prisma Cloud", "Azure Security", "Microsoft Entra ID", "Forescout"],
  },
  {
    title: "Other",
    items: ["Tenable", "Power BI", "Looker Studio", "Executive Reporting"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-base font-semibold text-foreground mb-6">Skills</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-xs rounded-full border border-border bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
