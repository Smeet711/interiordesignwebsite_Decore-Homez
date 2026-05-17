import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setTimeout(onDone, 200) });
    tl.from(mark.current, { opacity: 0, y: 20, duration: 1.2, ease: "power3.out" })
      .from(line.current, { scaleX: 0, duration: 1.1, ease: "power2.inOut" }, "-=0.4")
      .from(tag.current, { opacity: 0, y: 16, duration: 0.9, ease: "power2.out" }, "-=0.3")
      .to({}, { duration: 0.6 })
      .to(root.current, { opacity: 0, duration: 0.9, ease: "power2.inOut" }, "+=0.1")
      .set(root.current, { pointerEvents: "none", display: "none" });
    return () => { tl.kill(); };
  }, [onDone]);

  return (
    <div ref={root} className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative flex flex-col items-center gap-8 px-8 text-center">
        <div ref={mark} className="flex items-baseline gap-3">
          <span className="font-display text-5xl md:text-7xl tracking-tight text-ivory">Decore</span>
          <span className="font-display text-5xl md:text-7xl tracking-tight text-gold-gradient italic">Homez</span>
        </div>
        <div ref={line} className="h-px w-[280px] md:w-[420px] gold-line origin-left" style={{ boxShadow: "0 0 24px var(--gold)" }} />
        <p ref={tag} className="text-xs md:text-sm uppercase tracking-[0.5em] text-beige">
          Crafting Timeless Luxury
        </p>
      </div>
    </div>
  );
}
