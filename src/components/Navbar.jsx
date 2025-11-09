import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-700/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_20px_6px_rgba(16,185,129,0.6)]" />
          <span className="font-semibold tracking-tight text-white">Cognicode</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#protocol" className="text-sm text-emerald-200/80 hover:text-emerald-300">Protocol</a>
          <a href="#security" className="text-sm text-emerald-200/80 hover:text-emerald-300">Security</a>
          <a href="#docs" className="rounded-md border border-emerald-600/60 px-3 py-1.5 text-sm text-emerald-200 hover:bg-emerald-600/10">Docs</a>
          <a href="#start" className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-black hover:bg-emerald-500">Start Building</a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="rounded-md p-2 text-emerald-200 hover:bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-700/30 bg-black/90 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid gap-2">
              <a onClick={() => setOpen(false)} href="#protocol" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-white/5">Protocol</a>
              <a onClick={() => setOpen(false)} href="#security" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-white/5">Security</a>
              <a onClick={() => setOpen(false)} href="#docs" className="rounded-md px-2 py-2 text-emerald-200 hover:bg-white/5">Docs</a>
              <a onClick={() => setOpen(false)} href="#start" className="rounded-md bg-emerald-600 px-3 py-2 text-black hover:bg-emerald-500">Start Building</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
