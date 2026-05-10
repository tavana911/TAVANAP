import { useEffect, useState } from "react";
import tavanaLogo from "@/assets/tavana-logo.png";


const links = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={tavanaLogo}
            alt="TAVANA"
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
          />
          <span className="font-display text-xl tracking-widest text-foreground">
            TAVANA<span className="text-primary-glow">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-cinema text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary-glow after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <a
          href="#socials"
          className="hidden md:inline-flex text-xs uppercase tracking-cinema border border-border/60 px-4 py-2 hover:border-primary-glow hover:text-primary-glow transition-all duration-500"
        >
          Contact
        </a>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-border/60 hover:border-primary-glow hover:text-primary-glow transition-colors"
        >
          <span className="text-xs tracking-cinema">{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-500 overflow-hidden border-t border-border/40 ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex flex-col gap-3 text-xs uppercase tracking-cinema text-muted-foreground">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-border/30 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#socials"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-xs uppercase tracking-cinema border border-border/60 px-4 py-3 hover:border-primary-glow hover:text-primary-glow transition-all duration-500 rounded"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

