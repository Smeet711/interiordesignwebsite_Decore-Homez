import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-2xl bg-onyx/60 border-b border-border" : "py-6 bg-transparent"}`}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-3xl text-ivory">Decore</span>
          <span className="font-display italic text-2xl md:text-3xl text-gold-gradient">Homez</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-xs uppercase tracking-[0.3em] text-ivory/70 hover:text-ivory transition-colors">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-onyx bg-gold px-5 py-3 hover:bg-gold-soft transition">
          Book Consultation
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-ivory" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-onyx/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col p-6 gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.3em] text-ivory/80">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-center text-xs uppercase tracking-[0.3em] text-onyx bg-gold px-5 py-4">Book Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}
