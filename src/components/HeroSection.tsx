import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown, Download, ShieldCheck, Crosshair, Cloud, Fingerprint } from "lucide-react";
import { useRef } from "react";
import { resumePdfDownloadName, resumePdfHref } from "@/lib/resume";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated grid */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.025]"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[8%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[5%] w-[300px] h-[300px] rounded-full bg-gh-purple/[0.04] blur-[80px]"
      />

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 relative"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl border border-dashed border-primary/15"
              />
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-card border border-border overflow-hidden relative">
                {/* Replace with your photo */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-gh-purple/5">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ delay: 0.5 }}
                    className="text-6xl font-display font-bold text-foreground"
                  >
                    AM
                  </motion.span>
                </div>
                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                  className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent pointer-events-none"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gh-green border-[3px] border-background flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-gh-green animate-ping absolute" />
              </motion.div>
            </div>

            {/* Floating skill icons around profile */}
            {[
              { icon: ShieldCheck, pos: "-top-2 -left-6", delay: 1 },
              { icon: Crosshair, pos: "-top-2 -right-6", delay: 1.2 },
              { icon: Cloud, pos: "-bottom-2 -left-6", delay: 1.4 },
              { icon: Fingerprint, pos: "-bottom-2 -right-6", delay: 1.6 },
            ].map(({ icon: Icon, pos, delay }) => (
              <motion.div
                key={pos}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, type: "spring" }}
                className={`absolute ${pos} w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center`}
              >
                <Icon className="w-3.5 h-3.5 text-primary/60" />
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/[0.07] border border-primary/15 text-primary text-xs font-mono mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-green opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gh-green" />
              </span>
              open_to_work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-4"
            >
              <span className="text-foreground">Akmal</span>
              <br />
              <span className="gradient-primary">Muhammed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-sm text-muted-foreground leading-relaxed mb-6 max-w-md lg:mx-0 mx-auto"
            >
              Cybersecurity Consultant // SOC Operations & Threat Hunting // Cloud Security Advisory
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-8"
            >
              {[
                { icon: MapPin, text: "Doha, Qatar" },
                { icon: Mail, text: "akmalmuhammed93@gmail.com", href: "mailto:akmalmuhammed93@gmail.com" },
                { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/akmal-muhammed-m-k/" },
              ].map(({ icon: Icon, text, href }) => {
                const Wrapper = href ? "a" : "span";
                return (
                  <Wrapper
                    key={text}
                    {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" /> {text}
                  </Wrapper>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground"
              >
                view_work <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            >
              contact_me
            </motion.a>
            <motion.a
              href={resumePdfHref}
              download={resumePdfDownloadName}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-primary/20 bg-primary/[0.06] text-primary hover:bg-primary/[0.1] transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> download_cv.pdf
            </motion.a>
          </motion.div>
        </div>
      </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-8 border-t border-border"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "8", label: "FIFA Stadiums Secured" },
            { value: "3K+", label: "Assets Monitored" },
            { value: "SC-200", label: "Microsoft Certified" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center sm:text-left"
            >
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-[11px] font-mono text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border/60 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
