import React from 'react';
import { Rocket, Shield, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
            <Rocket className="text-indigo-400" size={18} />
          </div>
          <span className="font-semibold text-slate-100 tracking-tight">CodeCraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#security" className="hover:text-white transition flex items-center gap-2">
            <Shield size={16} /> Security
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition">
            <Settings size={16} />
            <span className="hidden sm:inline">Docs</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition">
            <User size={16} />
            <span className="hidden sm:inline">Start Building</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
