import { motion } from "framer-motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

function Contact() {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "siswantoismail173@gmail.com",
      link: "mailto:siswantoismail173@gmail.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+6289530279479",
      link: "https://wa.me/+6289530279479",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "https://github.com/siswantoismail",
      link: "https://github.com/siswantoismail",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      value: "@rhmtismail17",
      link: "https://instagram.com/rhmtismail17",
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-5">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
        {/* Animated Glow */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Contact Me
        </motion.h2>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            -top-20
            right-0
            h-72
            w-72
            rounded-full
            bg-blue-600/20
            blur-[100px]
          "
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:col-span-2"
          >
            <h2 className="mb-4 text-5xl font-bold leading-tight text-white">
              Let's build something
              <br />
              <span className="text-blue-500">amazing together!</span>
            </h2>

            <p className="text-slate-400">
              I'm currently open for internship, freelance projects, and junior
              frontend developer opportunities.
            </p>
          </motion.div>

          {/* CONTACT CARDS */}
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-3">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/60
                    p-5
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                  "
                >
                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <Icon size={28} className="mb-4 text-blue-400" />
                  </motion.div>

                  <h3 className="mb-1 font-semibold text-white">
                    {contact.title}
                  </h3>

                  <p className="text-sm text-slate-400">{contact.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
