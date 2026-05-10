import { useEffect, useRef, useState } from "react";

const acts = [
  {
    tag: "ACT I — THE PROBLEM",
    title: "Most brands are invisible.",
    body: "Not because they lack value. But because they lack a story worth watching. In a world drowning in content, attention is the only currency that matters.",
  },
  {
    tag: "ACT II — THE SHIFT",
    title: "Then something changes.",
    body: "A frame that lingers. A cut that breathes. A line of script that hits. Suddenly, a brand stops being noise — and starts being remembered.",
  },
  {
    tag: "ACT III — THE SOLUTION",
    title: "That's where we cut in.",
    body: "TAVANA crafts cinematic stories for brands ready to move people. Premiere Pro, After Effects, CapCut — pixels are just our paint. Story is the canvas.",
  },
];

const Act = ({ act, index }: { act: typeof acts[number]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-12 gap-8 md:gap-16 items-start py-24 md:py-32 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="md:col-span-4 flex md:flex-col gap-6 items-center md:items-start">
        <span className="font-display text-6xl md:text-8xl text-primary-glow/30 leading-none">
          0{index + 1}
        </span>
        <span className="text-[10px] tracking-cinema text-muted-foreground">{act.tag}</span>
      </div>
      <div className="md:col-span-8 space-y-6">
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
          {act.title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          {act.body}
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-primary-glow to-transparent mt-8" />
      </div>
    </div>
  );
};

export const Story = () => {
  return (
    <section id="story" className="relative py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[10px] tracking-cinema text-muted-foreground">
        — INTERMISSION —
      </div>
      {acts.map((act, i) => (
        <Act key={i} act={act} index={i} />
      ))}
    </section>
  );
};
