import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <Terminal className="w-3 h-3 text-primary/50" />
        <span>(c) 2025 akmal_muhammed</span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        // securing what matters
      </motion.span>
    </div>
  </footer>
);

export default Footer;
