import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Mail, Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-slate-800">
      {/* Animated Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-violet-500/10
          to-transparent
          pointer-events-none
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-600
                  to-blue-500
                  shadow-[0_0_25px_rgba(139,92,246,0.4)]
                "
              >
                <Code2 size={24} />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-white">Siswanto</h2>

                <p className="text-sm text-violet-400">Frontend Developer</p>
              </div>
            </div>

            <p className="mt-5 leading-relaxed text-slate-400">
              Passionate about building modern, responsive, and user-friendly
              web applications using React, JavaScript, and Tailwind CSS.
            </p>

            {/* Available Badge */}
            <motion.div
              animate={{
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-sm
                text-green-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for Work
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Home", "Projects", "Services", "About", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="
                      text-slate-400
                      transition
                      hover:text-violet-400
                    "
                    >
                      {item}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Let's Connect
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/",
                },
                {
                  icon: FaLinkedin,
                  link: "https://linkedin.com/",
                },
                {
                  icon: FaInstagram,
                  link: "https://instagram.com/",
                },
                {
                  icon: Mail,
                  link: "mailto:email@gmail.com",
                },
                {
                  icon: FaWhatsapp,
                  link: "https://wa.me/6281234567890",
                },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -8,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900
                      transition-all
                      hover:border-violet-500
                      hover:text-violet-400
                    "
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-14 border-t border-slate-800 pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 Siswanto Ismail. All Rights Reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built with React, Tailwind CSS & ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
