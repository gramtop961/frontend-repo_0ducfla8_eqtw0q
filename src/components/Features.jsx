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
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Role & Goal</h2>
        <p className="mt-3 text-zinc-300 max-w-3xl">
          You are an expert software engineer integrated into my development environment. Your goal is to collaborate with me iteratively to take a prompt from concept to production-ready code. We will work in a tight feedback loop where you provide visible, editable code and I can review, re-prompt, and redirect you at any time.
        </p>
        <div id="protocol" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-emerald-900/40 bg-zinc-900/50 p-6 backdrop-blur transition hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="h-10 w-10 rounded-md bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
