import tavanaLogo from "@/assets/tavana-logo.jpeg";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_60%)] animate-drift" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center space-y-12">
        <div className="text-[10px] tracking-cinema text-muted-foreground">— FINAL SCENE —</div>

        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
          Let's create something
          <br />
          <em className="text-primary-glow not-italic text-glow">people remember.</em>
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
          Got a story worth telling? A concept in your head? Let’s roll camera.
        </p>


        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <a
            href="mailto:adewoleadam9@gmail.com"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground text-xs uppercase tracking-cinema hover:bg-primary-glow transition-all duration-500 animate-pulse-glow"
          >
            Start a Project
            <span className="inline-block w-8 h-px bg-primary-foreground transition-all duration-500 group-hover:w-14" />
          </a>
          <a
            href="#work"
            className="text-xs uppercase tracking-cinema text-muted-foreground hover:text-foreground px-6 py-5 transition-colors duration-500"
          >
            Watch the Reel
          </a>
        </div>
      </div>

      <footer className="relative max-w-[1400px] mx-auto mt-32 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-cinema text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={tavanaLogo}
            alt="TAVANA"
            className="h-7 w-7 object-contain"
            width={28}
            height={28}
          />
          <span>TAVANA STUDIO</span>
        </div>
        <span>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</span>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a
            href="https://www.instagram.com/tavana_ph?igsh=ZXZ6ZzFrbGx2Z3Y5&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-glow transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.tiktok.com/@toluwani1027?_r=1&_t=ZS-94HKM7FaTLO"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-glow transition-colors"
          >
            TIKTOK
          </a>
          <a
            href="https://wa.link/db5dei"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-glow transition-colors"
          >
            WHATSAPP
          </a>
          <a href="tel:09069394807" className="hover:text-primary-glow transition-colors">
            CALL
          </a>
          <a
            href="mailto:adewoleadam9@gmail.com"
            className="hover:text-primary-glow transition-colors"
          >
            EMAIL
          </a>
        </div>
      </footer>
    </section>
  );
};
