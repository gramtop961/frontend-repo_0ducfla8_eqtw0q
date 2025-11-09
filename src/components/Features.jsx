import { Sparkles, Workflow, Shield, Gauge } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'Creative Engine',
      desc: 'Aesthetic, high-performance UI with Tailwind and motion-ready patterns.'
    },
    {
      icon: Workflow,
      title: 'Structured Flow',
      desc: 'Clear steps from idea to launch with modular, focused components.'
    },
    {
      icon: Shield,
      title: 'Reliable Core',
      desc: 'Stable embedding of interactive 3D without layout flicker or overlay issues.'
    },
    {
      icon: Gauge,
      title: 'Fast by Default',
      desc: 'Optimized loading path and minimal JS for a smooth experience.'
    }
  ];

  return (
    <section id="features" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-emerald-200 sm:text-3xl">Role & Goal</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-emerald-200/70">
          The essentials that power the Cognicode landing experience.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-emerald-900/40 bg-gradient-to-b from-emerald-900/10 to-black/60 p-5 transition hover:border-emerald-800"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600/90 text-black shadow-inner">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-medium text-emerald-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-200/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
