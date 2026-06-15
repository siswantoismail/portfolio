import { motion } from "framer-motion";
import wisudah from "../assets/wisudah.png";

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

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div variants={fadeLeft} initial="hidden" animate="visible">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
          >
            🚀 Available for Internship & Junior Frontend Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-5xl font-bold leading-tight md:text-6xl"
          >
            Frontend Developer
            <br />
            Building Fast,
            <br />
            Responsive &
            <span className="text-violet-500"> Modern Web Applications</span>
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
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-violet-600/20 blur-3xl" />

            {/* Gradient Border */}
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-violet-500 to-purple-700 opacity-30 blur" />

            {/* Image */}
            <motion.img
              src={wisudah}
              alt="Siswanto"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-[220px]
                rounded-[40px]
                border
                border-violet-500/30
                object-cover
                shadow-[0_0_50px_rgba(139,92,246,0.4)]
                md:w-[320px]
                lg:w-[400px]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
