import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClient = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect(); if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => { if (dragging.current) setFromClient(e.clientX); };
    const up = () => { dragging.current = false; };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
  }, [setFromClient]);

  return (
    <section className="relative py-32 md:py-48 bg-onyx">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" /> Transformations
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance">
              Before, <span className="italic text-gold-gradient">after.</span>
            </h2>
          </div>
          <p className="text-ivory/50 text-sm max-w-sm">Drag to reveal the metamorphosis. Every project begins with stillness.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          ref={ref}
          onPointerDown={(e) => { dragging.current = true; setFromClient(e.clientX); }}
          className="relative aspect-[16/9] w-full overflow-hidden cursor-ew-resize select-none ring-1 ring-border"
        >
          <img src={after} alt="After" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={before} alt="Before" className="absolute inset-0 size-full object-cover" />
          </div>
          <span className="absolute top-4 left-4 glass-gold px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ivory">Before</span>
          <span className="absolute top-4 right-4 glass-gold px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ivory">After</span>
          <div className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none" style={{ left: `${pos}%`, boxShadow: "0 0 24px var(--gold)" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full glass-gold flex items-center justify-center">
              <div className="flex gap-0.5">
                <span className="w-0.5 h-4 bg-gold" /><span className="w-0.5 h-4 bg-gold" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
