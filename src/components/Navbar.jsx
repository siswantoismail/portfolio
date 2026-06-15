import { motion } from "framer-motion";

function Navbar() {
  const menus = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer text-xl font-bold text-violet-500"
        >
          Siswanto
        </motion.h1>

        {/* Menu */}
        <ul className="hidden gap-8 md:flex">
          {menus.map((menu, index) => (
            <motion.li
              key={menu.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(menu.id)}
              className="group relative cursor-pointer text-slate-300 transition duration-300 hover:text-violet-500"
            >
              {menu.name}

              {/* Underline Animation */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(139,92,246,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-violet-600 px-5 py-2 font-medium text-white transition"
        >
          Download CV
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
