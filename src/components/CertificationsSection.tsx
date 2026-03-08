import { Award, GraduationCap } from "lucide-react";

const certs = [
  { name: "Microsoft SC-200 — Security Operations Analyst Associate", done: true },
  { name: "CyberSec First Responder (CFR) — Threat Detection & Response", done: true },
  { name: "IBM Data Analyst Specialization", done: true },
  { name: "ISC2 CCSP", done: false },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-base font-semibold text-foreground mb-6">Certifications & Education</h2>

        {/* Education */}
        <div className="flex items-start gap-3 mb-6 p-3 rounded-md bg-card border border-border">
          <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground">B.Tech — Computer Science & Engineering</p>
            <p className="text-xs text-muted-foreground">National Institute of Technology, Puducherry</p>
          </div>
        </div>

        {/* Certs */}
        <div className="space-y-2">
          {certs.map((c) => (
            <div key={c.name} className="flex items-center gap-3 text-sm">
              <Award className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground/90">{c.name}</span>
              {!c.done && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gh-yellow/15 text-gh-yellow border border-gh-yellow/20 font-medium">
                  In Progress
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
