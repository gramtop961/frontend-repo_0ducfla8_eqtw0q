import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Vision />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
