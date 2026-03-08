import { BookMarked, Star } from "lucide-react";

const projects = [
  {
    title: "MX Lens",
    description: "B2B SaaS email security platform — reduces SOC analyst workload by 85% through automated phishing detection. 11 detection modules, admin panel, Stripe billing.",
    tags: ["Next.js", "Prisma", "Stripe", "Email Security"],
    color: "bg-primary",
  },
  {
    title: "CyberTools Hub",
    description: "Cybersecurity SaaS centralizing critical SOC and IR analysis tools into a single privacy-first workflow for daily operations.",
    tags: ["SaaS", "SOC Tools", "Privacy-First"],
    color: "bg-gh-green",
  },
  {
    title: "Advanced Threat Hunting Initiative",
    description: "Custom hunting queries and workflows integrating Sentinel, Cortex XDR, and Kaspersky TI to track active threats across MENA infrastructure.",
    tags: ["Sentinel", "Cortex XDR", "MITRE ATT&CK"],
    color: "bg-gh-orange",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2">
          <BookMarked className="w-4 h-4 text-muted-foreground" />
          Pinned Projects
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-border bg-card p-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-2 mb-2">
                <BookMarked className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <h3 className="text-sm font-semibold text-primary">{p.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {p.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1">
                    <span className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
                    {tag}
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

export default ProjectsSection;
