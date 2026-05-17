import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={hero} alt="Luxury interior" className="size-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/30 to-onyx" />
        <div className="absolute inset-0 grain opacity-50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12 pb-20 md:pb-32">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" /> Decore Homez · By Ajay Dodiya
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.95] text-white text-balance">
            Luxury Interiors <br />
            <span className="italic text-gold-gradient">Crafted with Vision</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }} className="mt-8 max-w-xl text-base md:text-lg text-ivory/70 leading-relaxed">
            Residential & high-end commercial interior experiences — designed for those who collect spaces the way others collect art.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="group inline-flex items-center gap-3 bg-gold text-onyx px-7 py-4 text-xs uppercase tracking-[0.35em] hover:bg-ivory transition-colors">
              Explore Portfolio <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 glass px-7 py-4 text-xs uppercase tracking-[0.35em] text-ivory hover:bg-ivory/10 transition">
              <Play className="size-3 fill-gold text-gold" /> Schedule Consultation
            </a>
          </motion.div>
        </div>

        {/* Glass floating cards */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1 }} className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 w-[280px]">
          {[
            { k: "Est.", v: "2014" },
            { k: "Awards", v: "12+" },
            { k: "Cities", v: "08" },
          ].map((c) => (
            <div key={c.k} className="glass-gold rounded-sm p-5 flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.4em] text-ivory/60">{c.k}</span>
              <span className="font-display text-3xl text-gold">{c.v}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/50">
        <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
        <div className="relative h-12 w-px bg-ivory/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-6 bg-gold animate-[shimmer_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
