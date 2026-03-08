import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>© 2025 Akmal Muhammed. All rights reserved.</span>
      </div>
      <p className="text-xs font-mono text-muted-foreground">
        Securing what matters.
      </p>
    </div>
  </footer>
);

export default Footer;
