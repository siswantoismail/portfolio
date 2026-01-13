import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="font-bold text-lg text-blue-500">
            Siswanto Ismail
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-500">
              Portfolio
            </a>
            <a href="#clients" className="text-gray-700 hover:text-blue-500">
              Clients
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </nav>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="bg-white rounded-lg shadow-lg mt-2">
            <a href="#about" className="block px-4 py-3 hover:bg-gray-100">
              About
            </a>
            <a href="#portfolio" className="block px-4 py-3 hover:bg-gray-100">
              Portfolio
            </a>
            <a href="#clients" className="block px-4 py-3 hover:bg-gray-100">
              Clients
            </a>
            <a href="#blog" className="block px-4 py-3 hover:bg-gray-100">
              Blog
            </a>
            <a href="#contact" className="block px-4 py-3 hover:bg-gray-100">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
