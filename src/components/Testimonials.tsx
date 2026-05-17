import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  { q: "They translated a feeling I could not put into words into stone, light and quiet. The villa became a sentence I keep wanting to re-read.", n: "Priya & Rohan Mehta", r: "Private Residence · Lonavala" },
  { q: "Ajay does not deliver an interior. He delivers an atmosphere — disciplined, patient, deeply considered. Every surface earns its place.", n: "Kunal Shah", r: "Penthouse · Mumbai" },
  { q: "Our flagship now reads as the brand itself. Clients walk in and lower their voice. That is the work.", n: "Aanya Kapoor", r: "Commercial · Bengaluru" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-32 md:py-48 border-y border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-gold mb-10">Clients</p>
        <Quote className="mx-auto size-12 text-gold/40 mb-10" />
        <div className="relative min-h-[260px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display italic text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] text-ivory text-balance">"{items[i].q}"</p>
              <div className="mt-12 flex flex-col items-center gap-2">
                <span className="h-px w-12 bg-gold" />
                <p className="text-sm uppercase tracking-[0.3em] text-ivory">{items[i].n}</p>
                <p className="text-xs text-ivory/50">{items[i].r}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-px transition-all ${idx === i ? "w-12 bg-gold" : "w-6 bg-ivory/20"}`} aria-label={`Testimonial ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
