export default function Vision() {
  return (
    <section id="vision" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-emerald-200 sm:text-3xl">Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-emerald-200/75">
            Cognicode blends minimalism with motion. The canvas stays pure black so your content takes center stage, while emerald accents guide focus and signal interactivity. The 3D orb isn’t decoration—it’s a tangible cue that responds to intent, creating a sense of depth without distracting from clarity.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-900/40 bg-black/60 p-5">
              <h3 className="text-sm font-medium text-emerald-100">Principles</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-emerald-200/70">
                <li>Less chrome, more signal.</li>
                <li>Fluid interactions over static visuals.</li>
                <li>Contrast and legibility above all.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-900/40 bg-black/60 p-5">
              <h3 className="text-sm font-medium text-emerald-100">Outcome</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-emerald-200/70">
                <li>Instant comprehension of product value.</li>
                <li>Delight through subtle motion and depth.</li>
                <li>A foundation ready for advanced 3D controls.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
