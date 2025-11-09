import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import OrbCue from './OrbCue';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      {/* Spline scene - make sure it fills and stays above background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8k2j9oXbq3k2b9vJ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <h1 className="bg-gradient-to-b from-emerald-200 to-emerald-500/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Cognicode
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-emerald-200/80 sm:text-base">
          Build intelligent experiences with a sleek, black-on-emerald aesthetic and an interactive 3D orb.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-emerald-500"
          >
            Get Started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
          </a>
          <a
            href="#vision"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-800/60 bg-black/40 px-5 py-3 text-sm font-medium text-emerald-200/90 backdrop-blur-sm transition hover:border-emerald-700 hover:text-emerald-200"
          >
            Learn More
          </a>
        </div>

        <div className="mt-6">
          <OrbCue />
        </div>
      </div>
    </section>
  );
}
