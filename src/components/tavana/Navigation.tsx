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
        <a
          href="#contact"
          className="text-xs uppercase tracking-cinema border border-border/60 px-4 py-2 hover:border-primary-glow hover:text-primary-glow transition-all duration-500"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
