import creator from "@/assets/creator.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={creator}
              alt="The creator behind TAVANA"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] tracking-cinema text-foreground/70">
              <span>● REC</span>
              <span>00:24:18</span>
            </div>
          </div>
          <div className="absolute -inset-2 -z-10 bg-primary/10 blur-3xl" />
        </div>

        <div className="md:col-span-7 space-y-8">
          <div className="text-[10px] tracking-cinema text-muted-foreground">— THE CREATOR —</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            I don't just edit video. <em className="text-primary-glow not-italic">I build memory.</em>
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              TAVANA is a one-person studio obsessed with cinematic storytelling — scripts that earn attention, frames that hold it, and edits that make people feel something they didn't expect.
            </p>
            <p>
              Years behind the lens. Thousands of cuts. A studio built around one belief: the brands that are remembered are the ones that dared to tell a story.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {["Premiere Pro", "After Effects", "CapCut", "Scriptwriting"].map((t) => (
              <span key={t} className="text-[11px] tracking-wider uppercase border border-border/60 px-3 py-1.5 text-muted-foreground hover:text-primary-glow hover:border-primary-glow transition-colors duration-500">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
