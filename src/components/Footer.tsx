export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid md:grid-cols-3 gap-10 items-end">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-ivory">Decore</span>
            <span className="font-display italic text-3xl text-gold-gradient">Homez</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-ivory/40">By Ajay Dodiya</p>
        </div>
        <p className="font-display italic text-ivory/60 text-center">Crafting timeless luxury since 2014.</p>
        <p className="text-xs uppercase tracking-[0.3em] text-ivory/40 md:text-right">© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
