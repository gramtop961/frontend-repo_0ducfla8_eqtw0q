import React from 'react';
import { Rocket, Shield, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600/15 flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
            <Rocket className="text-emerald-400" size={18} />
          </div>
          <span className="font-semibold text-white tracking-tight">Cognicode</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-zinc-300">
          <a href="#protocol" className="hover:text-white transition">Protocol</a>
          <a href="#security" className="hover:text-white transition flex items-center gap-2">
            <Shield size={16} /> Security
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900 text-zinc-200 hover:bg-zinc-800 border border-zinc-800 transition">
            <Settings size={16} />
            <span className="hidden sm:inline">Docs</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition">
            <User size={16} />
            <span className="hidden sm:inline">Start Building</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
