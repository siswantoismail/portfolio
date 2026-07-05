import { motion } from "framer-motion";
import about from "../assets/about.png";
import { GraduationCap, Code2, Heart, ArrowRight } from "lucide-react";

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

      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:flex-row"
        >
          {/* PHOTO */}
          <div className="relative flex-shrink-0">
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
                bg-violet-600/30
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
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-5 leading-8 text-slate-300"
            >
              I'm a final-year Informatics Engineering student who loves
              building beautiful and functional web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-5 leading-8 text-slate-300"
            >
              I focus on frontend development using React, JavaScript, and
              Tailwind CSS. I enjoy turning ideas into real products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8 leading-8 text-slate-300"
            >
              I am passionate about learning, solving problems, and creating
              impactful digital experiences.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139,92,246,0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border
                border-violet-500/30
                bg-violet-600/10
                px-6
                py-3
                text-violet-400
                transition
                hover:bg-violet-600/20
              "
            >
              More About Me
              <ArrowRight size={18} />
            </motion.button>
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
                  <Icon className="mt-1 text-violet-400" size={24} />

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-violet-400">
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
