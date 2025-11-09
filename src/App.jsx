import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="vision" className="bg-black py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-emerald-200 sm:text-3xl">Vision</h2>
            <p className="mt-3 max-w-2xl text-sm text-emerald-200/75">
              Our vision is a seamless fusion of design and interaction: pure-black canvases, emerald accents, and fluid 3D elements that enhance—not distract from—your message.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
