import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/1t7mDqX3JTrh3kXl/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Cognicode — Build with Green Energy and Black Precision
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            You think. It builds. Ship production-grade apps with an expert AI engineer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition">
              {hovered ? 'Lift the Orb' : 'Hover to Lift' }
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Floating orb indicator (visual cue, synced to hover state) */}
      <div className="absolute right-10 bottom-10 hidden sm:block">
        <div className={`transition-transform duration-500 ease-out ${hovered ? '-translate-y-6' : ''}`}>
          <div className="h-6 w-6 rounded-full bg-emerald-500 shadow-[0_0_40px_10px_rgba(16,185,129,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
