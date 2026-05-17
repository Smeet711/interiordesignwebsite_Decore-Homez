import { motion } from "framer-motion";
import founder from "@/assets/founder.jpg";

export function BrandStory() {
  return (
    <section id="story" className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={founder} alt="Ajay Dodiya" loading="lazy" width={1000} height={1300} className="size-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 ring-1 ring-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-gold px-6 py-4 hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/60">Founder</p>
            <p className="font-display text-2xl text-ivory mt-1">Ajay Dodiya</p>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-xs uppercase tracking-[0.5em] text-gold mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" /> Our Story
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-ivory text-balance">
            Where architecture becomes <span className="italic text-gold-gradient">emotion.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }} className="mt-10 space-y-6 text-base md:text-lg text-ivory/70 leading-relaxed max-w-2xl">
            <p>Founded by Ajay Dodiya, Decore Homez is a design atelier dedicated to interiors that breathe restraint, material honesty, and cinematic atmosphere — for families who live deliberately and brands that signal taste.</p>
            <p>Every project begins with a conversation about silence: what a room should sound like when it is empty. From there we build with stone, brass, wood and shadow.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1 }} className="mt-12 flex items-center gap-6">
            <div className="h-px w-20 bg-gold" />
            <p className="font-display italic text-xl text-ivory/80">"We don't decorate. We compose."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
