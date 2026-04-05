function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-950">
      <p className="text-gray-400 font-secondary">
        Crafted with code and creativity by{" "}
        <span className="text-purple-500 ">Tijjan Samoka</span> | ©{" "}
        {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
