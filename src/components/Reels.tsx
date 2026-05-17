import { motion } from "framer-motion";
import { Play } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import hero from "@/assets/hero.jpg";

const reels = [
  { img: hero, t: "Maison Noir · Walkthrough", d: "02:14" },
  { img: p1, t: "Villa Aureate · Reveal", d: "01:48" },
  { img: p2, t: "Atelier Black · Detail", d: "00:54" },
  { img: p3, t: "House of Wood · Story", d: "03:02" },
  { img: p4, t: "Linen & Light · Morning", d: "01:12" },
  { img: p5, t: "Salon Obsidian · Light", d: "01:36" },
];

export function Reels() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" /> Reels
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance">
              Spaces, <span className="italic text-gold-gradient">in motion.</span>
            </h2>
          </div>
          <p className="text-ivory/50 text-sm uppercase tracking-[0.3em]">Scroll →</p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar pl-6 md:pl-12">
        <div className="flex gap-6 pb-8 pr-6 md:pr-12 w-max">
          {reels.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative w-[280px] md:w-[360px] aspect-[9/14] overflow-hidden shrink-0 cursor-pointer"
            >
              <img src={r.img} alt={r.t} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 rounded-full glass-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="size-6 fill-gold text-gold ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <p className="text-sm font-display text-ivory">{r.t}</p>
                <span className="text-[10px] font-mono text-gold">{r.d}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  );
}
