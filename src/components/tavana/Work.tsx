import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const projects = [
  {
    src: w1,
    title: "SAM'S CORPORATE SERVICES (SCS)",
    category: "Promotional Video · Cinematographer & Video Editor",
    year: "2026",
    span: "md:col-span-7 md:row-span-2",
    href: "https://drive.google.com/file/d/15fdt4Q7n4Yegy8cixK3UAmwXeZLIy_SQ/view?usp=drive_link",
  },
  {
    src: w2,
    title: "AVitech Sales Spher · CAMPAIGN",
    category: "Brand Commercial · Cinematographer & Video Editor",
    year: "2025",
    span: "md:col-span-5",
    href: "https://drive.google.com/file/d/1o4WRqmDimJQoYguKdwVbC198RFQiYyAG/view?usp=drivesdk",
  },
  {
    src: w3,
    title: "TWIN PEAKS · Short Film",
    category: "Short Film · Director",
    year: "2026",
    span: "md:col-span-5",
    href: "https://drive.google.com/file/d/1Mb99_QCGZ-wn1ia_FWegAQTTnGmLqdRJ/view?usp=sharing",
  },
  {
    src: w4,
    title: "SABI LOFT KATSU · COMPANY PARTY & AWARDS",
    category: "Event Recap · Cinematographer & Video Editor",
    year: "2025",
    span: "md:col-span-7",
    href: "https://drive.google.com/file/d/1Oy5h8GMFpxWwCiTVyZp-2DGbwxHDUtc8/view?usp=drivesdk",
  },
  {
    src: w5,
    title: "SABI LOFT KATSU · Event Teaser",
    category: "Social Cut · Cinematographer & Video Editor",
    year: "2026",
    span: "md:col-span-6",
    href: "https://vt.tiktok.com/ZS9tgmyAA/",
  },
  {
    src: w6,
    title: "TAVANA Reel (Highlights)",
    category: "Selected Work · TAVANA",
    year: "2026",
    span: "md:col-span-6",
    href: "#work",
  },
];


export const Work = () => {
  return (
    <section
    id="work"
    className="relative py-24 sm:py-28 px-6 md:px-12 max-w-[1400px] mx-auto"
  >
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <div className="text-[10px] tracking-cinema text-muted-foreground mb-4">— SELECTED WORK —</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-3xl">
            Scenes from the cutting room.
          </h2>
        </div>
        <span className="hidden md:block text-xs tracking-cinema text-muted-foreground">
          {projects.length} / FILMS
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.href || "#"}
            target={p.href && p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href && p.href.startsWith("http") ? "noreferrer" : undefined}
            className={`group relative overflow-hidden bg-card ${p.span}`}
          >
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.4s] ease-out group-hover:scale-105"
            />
            {/* Dark veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
            {/* Blue glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_70%)]" />
            {/* Top scan line */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
              <div className="h-full w-1/3 scan-line opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
            </div>
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-cinema text-primary-glow mb-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {p.category} · {p.year}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {p.title}
                  </h3>
                </div>
                <span className="text-[10px] tracking-cinema text-muted-foreground border border-border/60 px-2 py-1 group-hover:border-primary-glow group-hover:text-primary-glow transition-all duration-500">
                  PLAY ▸
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
