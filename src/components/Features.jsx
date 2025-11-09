import React from 'react';
import { ShieldCheck, Bot, UploadCloud, ScanLine } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Security Scanning',
    desc: 'Automatic vulnerability detection for XSS, SQL injection, secrets and more.'
  },
  { icon: Bot, title: 'Multi-Model AI', desc: 'Intelligent routing across GPT-4o, Claude, and Gemini for best results.' },
  { icon: UploadCloud, title: 'One-Click Deploy', desc: 'Generate Dockerfiles and CI/CD to ship on Cloud Run quickly.' },
  { icon: ScanLine, title: 'Real-time Preview', desc: 'Live console and preview with collaborative editing (coming soon).' }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Built for serious builders</h2>
        <p className="mt-3 text-slate-400 max-w-2xl">Everything you need to go from prompt to production with confidence.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur transition hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="h-10 w-10 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
