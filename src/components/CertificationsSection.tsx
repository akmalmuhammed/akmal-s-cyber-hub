import { motion, useInView } from "framer-motion";
import { GraduationCap, CheckCircle2, Clock, BadgeCheck, BookOpen } from "lucide-react";
import { useRef } from "react";

const certs = [
  { name: "Microsoft SC-200", desc: "Security Operations Analyst Associate", done: true, icon: BadgeCheck },
  { name: "CFR", desc: "CyberSec First Responder - Threat Detection & Response", done: true, icon: BadgeCheck },
  { name: "IBM Data Analyst", desc: "Data Analyst Specialization", done: true, icon: BookOpen },
  { name: "ISC2 CCSP", desc: "Certified Cloud Security Professional", done: false, icon: BookOpen },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// credentials</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Certifications & Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-5 flex items-start gap-4 mb-6"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="w-10 h-10 rounded-xl bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
          </motion.div>
          <div>
            <h3 className="text-sm font-display font-bold text-foreground">B.Tech - Computer Science & Engineering</h3>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">National Institute of Technology, Puducherry</p>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-border bg-card p-4 flex items-start gap-3 transition-colors hover:border-primary/15"
            >
              <motion.div whileHover={{ scale: 1.15 }} className="mt-0.5 shrink-0">
                {c.done ? <CheckCircle2 className="w-4 h-4 text-gh-green" /> : <Clock className="w-4 h-4 text-gh-yellow" />}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-display font-bold text-foreground">{c.name}</p>
                  <c.icon className="w-3.5 h-3.5 text-muted-foreground/50" />
                </div>
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
