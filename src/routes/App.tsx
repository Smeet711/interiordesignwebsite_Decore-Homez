import React from 'react'
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

const App = () => {
 const [loaded, setLoaded] = useState(false);
 console.log(loaded);
 

  return (
    <>
    {!loaded && (
      <LoadingScreen onDone={() => setLoaded(true)} />
    )}
     <main className="relative">
          <ScrollProgress />
          <MouseGlow />
          {/* {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />} */}
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
    </>
  )
}

export default App