import { Navigation } from "@/components/tavana/Navigation";
import { Hero } from "@/components/tavana/Hero";
import { Story } from "@/components/tavana/Story";
import { Work } from "@/components/tavana/Work";
import { Process } from "@/components/tavana/Process";
import { About } from "@/components/tavana/About";
import { FinalCTA } from "@/components/tavana/FinalCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "TAVANA — Cinematic Storytelling for Brands";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "TAVANA is a cinematic video editing & storytelling studio. Brand films, ads, reels, and campaigns crafted to be remembered.");
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <Story />
      <Work />
      <Process />
      <About />
      <FinalCTA />
    </main>
  );
};

export default Index;
