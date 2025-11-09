import React from 'react';
import { Rocket, Shield, Workflow, Users } from 'lucide-react';

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-xl border border-emerald-700/30 bg-black/40 p-5 transition hover:border-emerald-500/60 hover:bg-black/60">
    <div className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
      background: 'radial-gradient(600px 120px at 10% 0%, rgba(16,185,129,0.08), transparent)',
    }} />
    <div className="relative z-10 flex items-center gap-3">
      <div className="rounded-md bg-emerald-600/10 p-2 text-emerald-400">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-emerald-100/70">{desc}</p>
      </div>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="protocol" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Role & Goal</h2>
        <p className="mt-2 text-emerald-100/70">A clear collaboration path from idea to ship.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card icon={Users} title="Define Roles" desc="Align PMs, devs, and AI agents with explicit ownership." />
        <Card icon={Workflow} title="Set Goals" desc="Translate intent into executable tasks with guardrails." />
        <Card icon={Shield} title="Harden Security" desc="Built-in keys, scopes, and runtime isolation by default." />
        <Card icon={Rocket} title="Ship Fast" desc="Preview, validate, and deploy with one seamless loop." />
      </div>
    </section>
  );
};

export default Features;
