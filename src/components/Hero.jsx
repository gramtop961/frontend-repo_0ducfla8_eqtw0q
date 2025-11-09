import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            Security-first, production-ready AI code generation
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Build and ship real apps with multi-model AI, automated security scanning, and one-click deploy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition">
              Explore Features
            </a>
            <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition">
              See Pricing
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900" />
    </section>
  );
};

export default Hero;
