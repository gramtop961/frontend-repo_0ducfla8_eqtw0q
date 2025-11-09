export default function Footer() {
  return (
    <footer id="contact" className="border-t border-emerald-900/40 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-emerald-200/70">© {new Date().getFullYear()} Cognicode. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a className="text-emerald-200/80 transition hover:text-emerald-200" href="#">Security</a>
          <a className="text-emerald-200/80 transition hover:text-emerald-200" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-emerald-200/80 transition hover:text-emerald-200" href="mailto:hello@cognicode.dev">Contact</a>
        </div>
      </div>
    </footer>
  );
}
