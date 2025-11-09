import React from 'react';
import { Github, Shield, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-white font-medium">Cognicode</p>
          <p className="text-zinc-400 text-sm">Secure, scalable AI engineering partner</p>
        </div>
        <div className="flex items-center gap-4 text-zinc-300">
          <a href="#security" className="inline-flex items-center gap-2 hover:text-white transition"><Shield size={16} /> Security</a>
          <a href="https://github.com" rel="noreferrer" target="_blank" className="inline-flex items-center gap-2 hover:text-white transition"><Github size={16} /> GitHub</a>
          <a href="mailto:hello@cognicode.app" className="inline-flex items-center gap-2 hover:text-white transition"><Mail size={16} /> Contact</a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Cognicode. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
