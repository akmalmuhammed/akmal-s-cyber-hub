import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certs = [
  { name: "Microsoft Certified: Security Operations Analyst Associate (SC-200)", status: "earned" },
  { name: "CyberSec First Responder: Threat Detection and Response (CFR)", status: "earned" },
  { name: "ISC2 CCSP", status: "pursuing" },
  { name: "IBM Data Analyst Specialization", status: "earned" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Award className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">// Certifications & Education</h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-6 mb-6 flex items-start gap-4"
        >
          <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-foreground">B.Tech in Computer Science and Engineering</h3>
            <p className="text-sm text-muted-foreground">National Institute of Technology – Puducherry, India</p>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid gap-4 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-5 flex items-start gap-3 hover:border-primary/20 transition-colors"
            >
              <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                {cert.status === "pursuing" && (
                  <span className="text-[10px] font-mono text-accent mt-1 inline-block px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    IN PROGRESS
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
