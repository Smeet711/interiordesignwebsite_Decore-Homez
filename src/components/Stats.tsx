import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString() + suffix);
  useEffect(() => {
    if (inView) animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 240, s: "+", k: "Projects Delivered" },
  { v: 1800, s: "K sq.ft.", k: "Luxury Spaces Designed" },
  { v: 11, s: "", k: "Years of Practice" },
  { v: 96, s: "%", k: "Repeat Clientele" },
];

export function Stats() {
  return (
    <section className="relative py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((s, i) => (
          <motion.div key={s.k} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }} className="glass p-8 md:p-12 group hover:bg-gold/5 transition-colors">
            <div className="font-display text-5xl md:text-7xl text-gold-gradient">
              <Counter to={s.v} suffix={s.s} />
            </div>
            <p className="mt-6 text-[10px] md:text-xs uppercase tracking-[0.35em] text-ivory/60">{s.k}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
