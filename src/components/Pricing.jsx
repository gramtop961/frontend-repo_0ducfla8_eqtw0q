import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    '3D orb hero ready',
    'Black + emerald theme',
    'Responsive navigation',
    'Production-grade layout',
  ];
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-emerald-900/40 bg-gradient-to-b from-emerald-900/10 to-black p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-emerald-200">Launch Kit</h3>
              <p className="mt-3 text-sm text-emerald-200/70">
                Everything you need to ship a striking landing quickly. Upgrade visuals later—foundation stays solid.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-emerald-200/80">
                    <Check size={16} className="text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-900/40 bg-black/60 p-6 text-center">
              <div className="text-5xl font-bold text-emerald-400">
                $0
              </div>
              <p className="mt-2 text-sm text-emerald-200/70">Open starter</p>
              <a href="#contact" className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-500">Get it</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
