import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export function LocationMap() {
  return (
    <section className="relative py-32 md:py-48 bg-onyx">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" /> Studio
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-ivory mb-8">Visit Our Studio</h2>
          <p className="text-ivory/60 mb-10 leading-relaxed">By appointment only. Coffee, drawings, materials in hand.</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="size-5 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/50 mb-1">Address</p>
                <p className="text-ivory">Decore Homez Studio<br />Surat, Gujarat, India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="size-5 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/50 mb-1">Direct</p>
                <p className="text-ivory">+91 00000 00000</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="size-5 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/50 mb-1">Email</p>
                <p className="text-ivory">studio@decorehomez.com</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-8 relative">
          <div className="relative overflow-hidden ring-1 ring-gold/20">
            <iframe
              title="Decore Homez Studio"
              src="https://www.google.com/maps?q=Decore+Homez+Ajay+Dodiya&output=embed"
              className="w-full h-[450px] md:h-[520px] border-0 grayscale contrast-125"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
