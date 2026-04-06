function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="w-40 h-40 md:w-56 md:h-56 shrink-0">
          <img
            src="./images/profile.jpeg"
            alt="My profile"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 font-secondary text-gray-600">
            About Me <span className="text-purple-600">__</span>
          </h2>

          <p className="text-gray-500 text-lg mb-10 font-primary">
            I am a Frontend Engineer specializing in React, Next.js, JavaScript,
            HTML and CSS. I also have experience working with backend
            technologies like Node.js and REST APIs.
          </p>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-secondary2"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
