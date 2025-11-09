import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-emerald-700/30 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-emerald-100/70 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_18px_6px_rgba(16,185,129,0.5)]" />
          <span className="font-medium text-white">Cognicode</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#security" className="hover:text-emerald-200">Security</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-200">GitHub</a>
          <a href="#contact" className="hover:text-emerald-200">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
