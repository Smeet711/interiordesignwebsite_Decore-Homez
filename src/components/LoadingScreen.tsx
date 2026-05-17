import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function LoadingScreen({
  onDone,
}: {
  onDone: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onDone, 200);
      },
    });

    tl.from(mark.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        line.current,
        {
          scaleX: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .from(
        tag.current,
        {
          opacity: 0,
          y: 16,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to({}, { duration: 1 })
      .to(
        root.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "+=0.2"
      );

    return () => {
      tl.kill();
    };
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* background glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-3xl" />

      {/* top gradient */}
      <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-yellow-500/10 to-transparent" />

      {/* bottom gradient */}
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-yellow-500/10 to-transparent" />

      {/* content */}
      <div className="relative flex flex-col items-center gap-8 px-8 text-center">
        {/* logo */}
        <div
          
          className="flex items-baseline gap-3"
        >
          <span className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Decore
          </span>

          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-5xl font-semibold italic tracking-tight text-transparent md:text-7xl">
            Homez
          </span>
        </div>

        {/* line */}
        <div
          
          className="h-[2px] w-[280px] origin-left bg-gradient-to-r from-yellow-200 via-yellow-500 to-transparent md:w-[420px]"
        />

        {/* text */}
        <p
          
          className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 md:text-sm"
        >
          Crafting Timeless Luxury
        </p>

        {/* loader */}
        <div className="mt-2">
          <div className="h-10 w-10 animate-spin rounded-full border border-yellow-500/20 border-t-yellow-400" />
        </div>
      </div>
    </div>
  );
}