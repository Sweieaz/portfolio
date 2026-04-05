function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-950 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-white font-secondary">
          <span className="text-purple-500">Tijjan's</span> Portfol
          <span className="text-purple-500">io.</span>
        </h1>

        <div className="space-x-6 text-white font-medium font-primary">
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
      </div>
    </nav>
  );
}

export default Navbar;
