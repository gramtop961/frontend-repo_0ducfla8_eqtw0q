import React from 'react';
import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    highlight: '100 credits included',
    features: ['Community support', 'AI generation (limited)', 'Basic scanning'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$20',
    highlight: 'Best for indie devs',
    features: ['Unlimited projects', 'Advanced scanning', 'Priority queue', 'One-click deploy'],
    cta: 'Upgrade',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    highlight: 'Security & Scale',
    features: ['SSO & SAML', 'On-prem options', 'Custom SLAs', 'Dedicated support'],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Simple, transparent pricing</h2>
            <p className="mt-3 text-slate-400">Start free, scale when you need more power.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-md">
            <Zap size={16} /> No hidden fees
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-6 border bg-slate-900/60 backdrop-blur ${
                tier.popular ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded bg-indigo-600 text-white">Most Popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-100">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{tier.highlight}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-100">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-slate-400">/ month</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Check size={16} className="text-green-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md px-4 py-2 font-medium transition ${
                tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
