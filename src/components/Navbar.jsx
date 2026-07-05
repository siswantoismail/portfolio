import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl justify-between px-6 py-5">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer text-xl font-bold text-blue-500"
        >
          SI
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
              className="group relative cursor-pointer text-slate-300 transition duration-300 hover:text-blue-500"
            >
              {menu.name}

              {/* Underline Animation */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* GitHub */}
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
            scale: 1.12,
            y: -8,
            boxShadow: "0 0 25px rgba(59,130,246,.45)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
    flex
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
      </div>
    </nav>
  );
}

export default Navbar;
