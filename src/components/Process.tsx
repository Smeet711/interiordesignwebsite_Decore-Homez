import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Consultation", d: "We listen. To the room, to the way you live, to the silence between." },
  { n: "02", t: "Concept Design", d: "Moodboards, materials and the first architectural sketches." },
  { n: "03", t: "Visualization", d: "Photoreal 3D walkthroughs — see the space before it exists." },
  { n: "04", t: "Execution", d: "Vetted craftsmen, weekly site reviews, uncompromising QA." },
  { n: "05", t: "Final Styling", d: "Art, objects, fragrance, light. The room is composed and handed over." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">Process</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance">
            Five movements, <span className="italic text-gold-gradient">one composition.</span>
          </h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px gold-line origin-left"
          />
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} className="flex flex-col items-center text-center">
                <div className="relative size-24 rounded-full glass-gold flex items-center justify-center mb-8">
                  <span className="font-display text-2xl text-gold">{s.n}</span>
                </div>
                <h3 className="font-display text-2xl text-ivory mb-3">{s.t}</h3>
                <p className="text-sm text-ivory/60 max-w-[220px] leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
