import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reels } from "@/components/Reels";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { LocationMap } from "@/components/LocationMap";
import { Contact } from "@/components/Contact";
import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decore Homez · Luxury Interiors by Ajay Dodiya" },
      { name: "description", content: "Decore Homez by Ajay Dodiya — luxury residential and high-end commercial interiors. Crafting timeless atmospheres in stone, brass, wood and light." },
      { property: "og:title", content: "Decore Homez · Luxury Interiors by Ajay Dodiya" },
      { property: "og:description", content: "Luxury residential and high-end commercial interiors." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  return (
    <main className="relative">
      <ScrollProgress />
      <MouseGlow />
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Nav />
      <Hero />
      <BrandStory />
      <Stats />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Reels />
      <Testimonials />
      <Process />
      <LocationMap />
      <Contact />
      <Footer />
      <FloatingDock />
    </main>
  );
}
