import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="top" className="relative bg-black min-h-screen overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline
          scene="https://prod.spline.design/1t7mDqX3JTrh3kXl/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="max-w-3xl py-24 sm:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Cognicode — Emerald energy on a pure black canvas
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Think in goals. Ship in green. A focused AI engineer that turns ideas into production software.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/20 border border-emerald-500/30"
            >
              {hovered ? 'Orb lifting…' : 'Hover to lift the orb'}
            </button>
          </div>
        </div>
      </div>

      {/* Non-blocking gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

      {/* Floating orb indicator synced to hover */}
      <div className="absolute right-10 bottom-10 hidden sm:block">
        <div className={`transition-transform duration-500 ease-out ${hovered ? '-translate-y-6' : ''}`}>
          <div className="h-6 w-6 rounded-full bg-emerald-500 shadow-[0_0_40px_10px_rgba(16,185,129,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
