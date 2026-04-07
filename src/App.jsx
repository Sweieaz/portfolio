import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stack from "./components/Stack";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero2.png";

    const minDelay = new Promise((resolve) => setTimeout(resolve, 3000));

    const loadImage = new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    });
    Promise.all([minDelay, loadImage]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Loader />
      </div>
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
