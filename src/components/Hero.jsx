function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-end justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('./images/hero2.png')" }}
    >
      <div className="space-y-6 relative  md:mb-10 z-10 max-w-7xl mx-auto px-4 lg:px-8 py-10 bg-white/50 md:rounded-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-secondary">
          Hi, I'm Tijjan Samoka
        </h1>

        <p className="text-xl text-gray-200 mb-8 font-primary">
          Frontend Engineer | React & Next.js Developer <br />
          And I build modern, responsive web applications and integrate scalable
          backend services.
        </p>

        <a
          href="#contact"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-secondary2"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
