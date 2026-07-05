import { motion } from "framer-motion";
import about from "../assets/about.png";
import { GraduationCap, Code2, Heart } from "lucide-react";

function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      content: (
        <>
          <p className="font-medium text-white">Informatics Engineering</p>
          <p className="text-slate-400">Universitas Ichsan Gorontalo</p>
          <p className="text-sm text-slate-500">2022 - Present</p>
        </>
      ),
    },
    {
      icon: Code2,
      title: "Focus",
      content: (
        <>
          <p className="font-medium text-white">Frontend Development</p>
          <p className="text-slate-400">React, JavaScript, Tailwind CSS</p>
        </>
      ),
    },
    {
      icon: Heart,
      title: "Interests",
      content: (
        <>
          <p className="text-slate-400">
            UI/UX Design, Web Performance, Clean Code
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-5">
      {/* Heading */}
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
        About Me
      </motion.h2>

      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 md:flex-row"
        >
          {/* PHOTO */}
          <div className="relative shrink-0">
            {/* Animated Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                rounded-3xl
                bg-blue-600/30
                blur-3xl
              "
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
              "
            >
              <img
                src={about}
                alt="Siswanto"
                className="h-80 w-64 object-cover"
              />
            </motion.div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-5 leading-8 text-slate-300"
            >
              I'm a Frontend Developer focused on developing modern, responsive,
              and user-friendly web applications using React.js, JavaScript, and
              Tailwind CSS. I've developed various projects, from administration
              dashboards and information systems to e-commerce websites,
              prioritizing performance, attractive design, and optimal user
              experience. I believe that technology can be a solution to various
              problems, so I continue to learn, develop my skills, and
              contribute to building digital products that provide real
              benefits.
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/50
            p-8
            backdrop-blur-sm
          "
        >
          <div className="space-y-8">
            {infoCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  className="flex gap-4"
                >
                  <Icon className="mt-1 text-blue-400" size={24} />

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-blue-400">
                      {item.title}
                    </h3>

                    {item.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
