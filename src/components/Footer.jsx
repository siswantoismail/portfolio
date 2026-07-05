import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { MapPin, Briefcase, Rocket } from "lucide-react";

function Footer() {
  const menus = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Siswanto Ismail</h2>

            <p className="mt-5 leading-8 text-slate-400">
              Frontend Developer passionate about creating responsive,
              accessible, and modern web applications using React, JavaScript,
              and Tailwind CSS.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="mb-5 text-xl font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.href}
                    className="
                      text-slate-400
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-blue-400
                    "
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-5 text-xl font-semibold text-white">Currently</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-slate-400">Gorontalo, Indonesia</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-400" size={20} />
                <span className="text-slate-400">Available for Internship</span>
              </div>

              <div className="flex items-center gap-3">
                <Rocket className="text-blue-400" size={20} />
                <span className="text-slate-400">
                  Seeking Junior Frontend Developer Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-slate-500">© 2026 Siswanto Ismail.</p>

          <p className="text-sm text-slate-500">
            Designed & Developed with React, Tailwind CSS & Framer Motion
          </p>

          <motion.a
            href="#home"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-500
              hover:shadow-[0_0_20px_rgba(59,130,246,.35)]
            "
          >
            <FaArrowUp size={12} />
            Back to Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
