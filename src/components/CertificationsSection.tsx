import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2, Clock } from "lucide-react";

const certs = [
  { name: "Microsoft SC-200", desc: "Security Operations Analyst Associate", done: true },
  { name: "CFR", desc: "CyberSec First Responder — Threat Detection & Response", done: true },
  { name: "IBM Data Analyst", desc: "Data Analyst Specialization", done: true },
  { name: "ISC2 CCSP", desc: "Certified Cloud Security Professional", done: false },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// credentials</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Certifications & Education</h2>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-xl border border-border bg-card p-5 flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-display font-bold text-foreground">B.Tech — Computer Science & Engineering</h3>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">National Institute of Technology, Puducherry</p>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div key={c.name} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-4 flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                {c.done ? <CheckCircle2 className="w-4 h-4 text-gh-green" /> : <Clock className="w-4 h-4 text-gh-yellow" />}
              </div>
              <div>
                <p className="text-sm font-display font-bold text-foreground">{c.name}</p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
