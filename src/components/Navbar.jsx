import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection("home")}
          className="cursor-pointer text-xl font-bold text-blue-500"
        >
          SI
        </motion.h1>

        {/* ================= Desktop Menu ================= */}
        <ul className="hidden gap-8 md:flex">
          {menus.map((menu, index) => (
            <motion.li
              key={menu.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(menu.id)}
              className="group relative cursor-pointer text-slate-300 transition duration-300 hover:text-blue-500"
            >
              {menu.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* GitHub Desktop */}
        <motion.a
          href="https://github.com/siswantoismail"
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            y: -8,
            boxShadow: "0 0 25px rgba(59,130,246,.45)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            hidden
            md:flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            text-slate-300
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-slate-800
            hover:text-white
          "
        >
          <FaGithub size={22} />
        </motion.a>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  onClick={() => scrollToSection(menu.id)}
                  className="cursor-pointer rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-blue-500"
                >
                  {menu.name}
                </li>
              ))}

              {/* GitHub Mobile */}
              <motion.a
                href="https://github.com/siswantoismail"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  text-slate-300
                  transition
                  hover:border-blue-500
                  hover:text-white
                "
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
