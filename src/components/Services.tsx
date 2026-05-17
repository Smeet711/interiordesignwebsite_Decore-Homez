import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";

const services = [
  { n: "01", t: "Luxury Home Interior", d: "Apartments & residences orchestrated room-by-room.", img: p4 },
  { n: "02", t: "Villa Design", d: "Ground-up villa interiors with architectural intent.", img: p1 },
  { n: "03", t: "Commercial Spaces", d: "Lobbies, offices and flagship retail with presence.", img: p3 },
  { n: "04", t: "Modular Kitchen", d: "Bespoke culinary spaces in stone, oak and brass.", img: p2 },
  { n: "05", t: "Turnkey Execution", d: "Single accountable partner from sketch to handover.", img: p5 },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" /> Services
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance max-w-3xl">
              A discipline of <span className="italic text-gold-gradient">five practices.</span>
            </h2>
          </div>
          <p className="text-ivory/60 max-w-md text-base leading-relaxed">Each engagement is led by Ajay and a senior designer — never delegated, never outsourced.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.a
              key={s.n}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7 }}
              className="group relative bg-background overflow-hidden aspect-[4/5] block"
            >
              <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 size-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1200ms] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-gold/60 transition-all duration-700" style={{ boxShadow: "inset 0 0 0 1px transparent" }} />
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-gold/80">{s.n}</span>
                  <ArrowUpRight className="size-5 text-ivory/40 group-hover:text-gold group-hover:rotate-45 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {s.t}
                  </h3>
                  <p className="mt-4 text-sm text-ivory/60 max-w-xs">{s.d}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
