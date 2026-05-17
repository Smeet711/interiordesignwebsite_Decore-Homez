import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import hero from "@/assets/hero.jpg";

type Project = {
  id: string; title: string; loc: string; year: string; img: string;
  concept: string; materials: string[]; timeline: string; gallery: string[];
};

const projects: Project[] = [
  { id: "1", title: "Maison Noir", loc: "Mumbai · Penthouse", year: "2024", img: hero,
    concept: "A penthouse meditation on shadow, brass and city light.",
    materials: ["Calacatta Viola", "Antique brass", "Smoked oak", "Bouclé"],
    timeline: "11 months · 6,400 sq.ft.",
    gallery: [hero, p4, p5] },
  { id: "2", title: "Villa Aureate", loc: "Lonavala · Private Villa", year: "2024", img: p1,
    concept: "Old-world arches reframed in ivory travertine and gold light.",
    materials: ["Travertine", "Hand-cast brass", "Onyx", "Linen"],
    timeline: "14 months · 9,200 sq.ft.",
    gallery: [p1, p5, p2] },
  { id: "3", title: "Atelier Black", loc: "Surat · Kitchen", year: "2023", img: p2,
    concept: "A monolithic kitchen island in marble, framed in matte black.",
    materials: ["Statuario marble", "Matte black laminate", "Brushed brass"],
    timeline: "4 months · 480 sq.ft.",
    gallery: [p2, p4, hero] },
  { id: "4", title: "House of Wood", loc: "Bengaluru · Commercial", year: "2023", img: p3,
    concept: "Walnut as architecture — a corporate lobby that breathes.",
    materials: ["Walnut veneer", "Travertine", "Polished brass"],
    timeline: "8 months · 3,200 sq.ft.",
    gallery: [p3, hero, p5] },
  { id: "5", title: "Linen & Light", loc: "Ahmedabad · Residence", year: "2024", img: p4,
    concept: "A master suite tuned for slow mornings.",
    materials: ["Brushed oak", "Belgian linen", "Antique brass"],
    timeline: "6 months · 1,800 sq.ft.",
    gallery: [p4, p1, hero] },
  { id: "6", title: "Salon Obsidian", loc: "Mumbai · Dining", year: "2024", img: p5,
    concept: "A dining hall as theatre — circular geometry, single chandelier.",
    materials: ["Lacquered oak", "Marble", "Hand-blown glass"],
    timeline: "5 months · 720 sq.ft.",
    gallery: [p5, p2, p3] },
];

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative py-32 md:py-48 bg-onyx">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" /> Portfolio
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance">
              Selected <span className="italic text-gold-gradient">works.</span>
            </h2>
          </div>
          <p className="text-ivory/50 text-sm uppercase tracking-[0.3em]">2023 — 2024</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[240px]">
          {[
            "col-span-12 md:col-span-8 row-span-2",
            "col-span-12 md:col-span-4 row-span-2",
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-6 md:col-span-4 row-span-1",
            "col-span-12 md:col-span-4 row-span-2",
            "col-span-12 md:col-span-4 row-span-1",
          ].map((cls, i) => {
            const p = projects[i];
            return (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.9 }}
                className={`${cls} group relative overflow-hidden text-left`}
              >
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{p.loc} · {p.year}</p>
                  <h3 className="font-display text-2xl md:text-4xl text-ivory">{p.title}</h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-onyx/95 backdrop-blur-2xl overflow-y-auto">
            <div className="min-h-full">
              <button onClick={() => setActive(null)} className="fixed top-6 right-6 z-10 glass-gold p-3 hover:bg-gold hover:text-onyx transition-colors">
                <X className="size-5" />
              </button>
              <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.5em] text-gold mb-6">{active.loc} · {active.year}</motion.p>
                <motion.h3 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] text-ivory">{active.title}</motion.h3>
                <div className="grid lg:grid-cols-3 gap-12 mt-16">
                  <div className="lg:col-span-2 space-y-6">
                    {active.gallery.map((g, i) => (
                      <motion.img key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }} src={g} alt="" className="w-full aspect-[16/10] object-cover" />
                    ))}
                  </div>
                  <div className="space-y-10 lg:sticky lg:top-20 lg:self-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Concept</p>
                      <p className="font-display text-2xl text-ivory leading-snug">{active.concept}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Materials</p>
                      <ul className="space-y-2 text-ivory/80">
                        {active.materials.map((m) => <li key={m} className="border-b border-border pb-2">{m}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Timeline</p>
                      <p className="text-ivory/80">{active.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
