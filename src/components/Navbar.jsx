import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/40 bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-black shadow-inner">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Cognicode</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-emerald-200/80 transition hover:text-emerald-200">Features</a>
          <a href="#vision" className="text-sm text-emerald-200/80 transition hover:text-emerald-200">Vision</a>
          <a href="#contact" className="text-sm text-emerald-200/80 transition hover:text-emerald-200">Contact</a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-emerald-200 hover:bg-emerald-900/20 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-900/40 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:px-6">
            <a href="#features" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-emerald-900/20" onClick={() => setOpen(false)}>Features</a>
            <a href="#vision" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-emerald-900/20" onClick={() => setOpen(false)}>Vision</a>
            <a href="#contact" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-emerald-900/20" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
