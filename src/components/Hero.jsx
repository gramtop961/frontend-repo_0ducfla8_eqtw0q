import React, { useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [hover, setHover] = useState(false);
  const splineRef = useRef(null);

  const handleMouseMove = (e) => {
    // Future: Use Spline API to map cursor to scene. For now just read and keep responsive.
    // Keeping as a hook for possible enhancements without blocking the UI.
  };

  const gradientId = useMemo(() => `g-${Math.random().toString(36).slice(2)}`, []);

  return (
    <section id="home" className="relative min-h-[88vh] w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/4YcW0wC0eM9F7cZC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_80%_-10%,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center sm:pt-36" onMouseMove={handleMouseMove}>
        <h1 className="text-balance bg-gradient-to-b from-white to-emerald-200/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Cognicode
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-emerald-100/80 sm:text-lg">
          Build, test, and ship with an AI-native protocol. Pure black canvas, emerald precision.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#start"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="group relative inline-flex items-center gap-3 rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-500"
          >
            <span>Start Building</span>
            <span
              className={`h-2 w-2 rounded-full bg-emerald-900 transition-transform duration-300 ease-out ${hover ? '-translate-y-1' : ''}`}
            />
          </a>
          <a href="#docs" className="inline-flex items-center rounded-md border border-emerald-600/60 px-5 py-3 text-sm text-emerald-200 hover:bg-emerald-600/10">
            Read Docs
          </a>
        </div>

        <svg width="0" height="0" className="absolute">
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(16,185,129,0.45)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
