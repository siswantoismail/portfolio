import { motion } from "framer-motion";
import wisudah from "../assets/wisudah.png";
import about from "../assets/about.png";

function Hero() {
  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-5"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Content */}
        <motion.div variants={fadeLeft} initial="hidden" animate="visible">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Frontend Developer
            <br />
            I build clean,
            <br />
            <span className="text-violet-500">
              {" "}
              scalable interfaces that users enjoy using.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl text-lg text-slate-400"
          >
            I specialize in React, JavaScript, and Tailwind CSS to build
            beautiful, scalable, and user-friendly web applications with modern
            design and clean code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#8b5cf6",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-slate-400">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="text-slate-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">1000+</h3>
              <p className="text-slate-400">Hours Coding</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-violet-500/15 blur-3xl scale-110" />

            {/* Gradient Border */}
            <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-br from-violet-500/40 to-fuchsia-500/30 blur-sm" />

            {/* Image Container */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              transition={{ duration: 0.3 }}
              className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-violet-500/20
        bg-slate-900
        shadow-[0_0_35px_rgba(139,92,246,0.18)]
      "
            >
              <motion.img
                src={about}
                alt="Siswanto Ismail"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
          h-[440px]
          w-[320px]
          object-cover
          md:h-[500px]
          md:w-[340px]
          lg:h-[540px]
          lg:w-[360px]
        "
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
