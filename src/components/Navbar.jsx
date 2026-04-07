import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-950 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white font-secondary">
          <span className="text-purple-500">Tijjan's</span> Portfol
          <span className="text-purple-500">io.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium font-primary">
          <a href="#home" className="hover:text-purple-500">
            Home
          </a>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
          <a href="#skills" className="hover:text-purple-500">
            Skills
          </a>
          <a href="#services" className="hover:text-purple-500">
            Services
          </a>
          <a href="#stack" className="hover:text-purple-500">
            Stack
          </a>
          <a href="#projects" className="hover:text-purple-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-500">
            Contact
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <i className="fas fa-bars hover:text-purple-500 transition"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-950 flex flex-col items-center justify-center space-y-8 text-white text-xl font-primary transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times hover:text-purple-500 transition"></i>
        </button>

        <a
          href="#home"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>
        <a
          href="#services"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#stack"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Stack
        </a>
        <a
          href="#projects"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-purple-500"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
