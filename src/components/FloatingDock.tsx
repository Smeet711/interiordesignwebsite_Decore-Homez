import { Phone, MessageCircle, Calendar } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="group glass-gold size-12 rounded-full flex items-center justify-center hover:bg-gold transition-colors" aria-label="WhatsApp">
        <MessageCircle className="size-5 text-gold group-hover:text-onyx transition-colors" />
      </a>
      <a href="tel:+910000000000" className="group glass-gold size-12 rounded-full flex items-center justify-center hover:bg-gold transition-colors" aria-label="Call">
        <Phone className="size-5 text-gold group-hover:text-onyx transition-colors" />
      </a>
      <a href="#contact" className="group glass-gold pl-4 pr-5 h-12 rounded-full flex items-center gap-2 hover:bg-gold transition-colors">
        <Calendar className="size-4 text-gold group-hover:text-onyx transition-colors" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory group-hover:text-onyx">Consult</span>
      </a>
    </div>
  );
}
