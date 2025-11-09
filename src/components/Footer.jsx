import React from 'react';
import { Github, Shield, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-slate-300 font-medium">CodeCraft</p>
          <p className="text-slate-500 text-sm">Security-first AI coding platform</p>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#security" className="inline-flex items-center gap-2 hover:text-white transition"><Shield size={16} /> Security</a>
          <a href="https://github.com" rel="noreferrer" target="_blank" className="inline-flex items-center gap-2 hover:text-white transition"><Github size={16} /> GitHub</a>
          <a href="mailto:hello@codecraft.dev" className="inline-flex items-center gap-2 hover:text-white transition"><Mail size={16} /> Contact</a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} CodeCraft. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
