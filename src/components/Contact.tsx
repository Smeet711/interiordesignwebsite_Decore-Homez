import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 size-[500px] rounded-full opacity-20 animate-float-slow" style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 size-[600px] rounded-full opacity-10 animate-float-slow" style={{ background: "radial-gradient(circle, var(--beige), transparent 70%)", animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" /> Inquire
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1] text-ivory text-balance">
            Begin a <br /><span className="italic text-gold-gradient">conversation.</span>
          </h2>
          <p className="mt-8 text-ivory/60 leading-relaxed max-w-md">We accept a limited number of projects each year. Tell us about yours — we typically respond within one working day.</p>
          <div className="mt-12 space-y-3 text-sm">
            <p className="text-ivory/40 uppercase tracking-[0.3em] text-[10px]">Studio Hours</p>
            <p className="text-ivory">Mon — Sat · 10:00 to 19:00 IST</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass-gold p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" />
            </div>
            <Field label="Email" name="email" type="email" />
            <div className="grid md:grid-cols-2 gap-6">
              <SelectField label="Project Type" options={["Residence", "Villa", "Commercial", "Modular Kitchen", "Turnkey"]} />
              <SelectField label="Budget" options={["₹ 25 – 75 L", "₹ 75 L – 2 Cr", "₹ 2 – 5 Cr", "₹ 5 Cr +"]} />
            </div>
            <Field label="Tell us about your space" name="msg" textarea />
            <button type="submit" disabled={sent} className="group w-full inline-flex items-center justify-between bg-gold text-onyx px-7 py-5 text-xs uppercase tracking-[0.35em] hover:bg-ivory transition-colors disabled:opacity-70">
              <span>{sent ? "Thank you — we will be in touch" : "Book Luxury Consultation"}</span>
              {sent ? <CheckCircle2 className="size-4" /> : <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.4em] text-ivory/50">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className="mt-2 w-full bg-transparent border-b border-ivory/20 focus:border-gold outline-none text-ivory py-2 transition-colors resize-none" />
      ) : (
        <input type={type} name={name} className="mt-2 w-full bg-transparent border-b border-ivory/20 focus:border-gold outline-none text-ivory py-2 transition-colors" />
      )}
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.4em] text-ivory/50">{label}</span>
      <select className="mt-2 w-full bg-transparent border-b border-ivory/20 focus:border-gold outline-none text-ivory py-2 transition-colors">
        <option value="" className="bg-onyx">Select</option>
        {options.map((o) => <option key={o} className="bg-onyx">{o}</option>)}
      </select>
    </label>
  );
}
