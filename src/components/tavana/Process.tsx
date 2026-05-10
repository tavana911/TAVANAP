import { Lightbulb, PenLine, Film, Clapperboard } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    frame: "FRAME 01",
    title: "Idea",
    body: "We start with a feeling. The unspoken thing your brand needs to make people understand.",
  },
  {
    icon: PenLine,
    frame: "FRAME 02",
    title: "Script & Setup",
    body: "Storyboards, scripts, lens choice, lighting design. Every shot intentional.",
  },
  {
    icon: Film,
    frame: "FRAME 03",
    title: "Edit & Color",
    body: "Premiere, After Effects, CapCut. Cuts that breathe. Color that bleeds emotion. Sound that hits.",
  },
  {
    icon: Clapperboard,
    frame: "FRAME 04",
    title: "Final Cut",
    body: "Delivered in every format you need. Built to stop the scroll, hold attention, and convert.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-32 px-6 md:px-12 bg-card/40 border-y border-border/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] tracking-cinema text-muted-foreground mb-4">— STORYBOARD —</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Four frames to the final cut.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-2 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 border border-transparent hover:border-border/70 hover:bg-background transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="relative w-12 h-12 flex items-center justify-center border border-border bg-background group-hover:border-primary-glow transition-all duration-500">
                  <s.icon className="w-5 h-5 text-foreground group-hover:text-primary-glow transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] tracking-cinema text-muted-foreground">{s.frame}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

