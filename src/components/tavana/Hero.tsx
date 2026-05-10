import { useEffect, useState } from "react";
import heroGlow from "@/assets/hero-glow.jpg";

const lines = [
  "Every brand has a story…",
  "Most people don't know how to tell it.",
  "TAVANA does.",
];

export const Hero = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setStep((s) => Math.max(s, i + 1)), 800 + i * 1400),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center grain"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0">
        <img
          src={heroGlow}
          alt=""
          width={1920}
          height={1088}
          className="w-full h-full object-cover opacity-70 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[8vh] bg-background z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[8vh] bg-background z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-10 flex items-center justify-center gap-3 text-xs tracking-cinema text-muted-foreground reveal-fade">
          <span className="h-px w-10 bg-primary-glow/60" />
          SCENE 01
          <span className="h-px w-10 bg-primary-glow/60" />
        </div>

        <div className="space-y-6 md:space-y-8 min-h-[14rem] md:min-h-[20rem]">
          {lines.map((line, i) => (
            <h1
              key={i}
              className={`font-display italic text-3xl md:text-5xl lg:text-6xl text-balance leading-tight transition-all duration-1000 ${
                step > i ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-md"
              } ${i === 2 ? "not-italic font-bold tracking-tight text-glow" : "text-foreground/85"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {line}
            </h1>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-1000 ${
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#story"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-cinema hover:bg-primary-glow transition-all duration-500 animate-pulse-glow"
          >
            Start Experience
            <span className="inline-block w-8 h-px bg-primary-foreground transition-all duration-500 group-hover:w-14" />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-[10px] tracking-cinema text-muted-foreground animate-fade-in" style={{ animationDelay: "5s" }}>
        <span>SCROLL</span>
        <span className="h-12 w-px bg-gradient-to-b from-primary-glow to-transparent" />
      </div>
    </section>
  );
};
