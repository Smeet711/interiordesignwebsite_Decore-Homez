import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      if (glow.current) glow.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${tx - 6}px, ${ty - 6}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={glow} className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block size-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 78 / 0.12), transparent 60%)" }} />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block size-3 rounded-full bg-gold mix-blend-difference" />
    </>
  );
}
