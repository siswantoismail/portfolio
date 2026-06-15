import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function TechStack() {
  const techs = [
    {
      icon: <FaReact />,
      name: "React",
      exp: "2+ Years",
      level: "Advanced",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      exp: "2+ Years",
      level: "Advanced",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
      exp: "2+ Years",
      level: "Advanced",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      exp: "1+ Year",
      level: "Intermediate",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      exp: "1+ Year",
      level: "Intermediate",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
  ];

  return (
    <section id="techstack" className="mx-auto max-w-7xl px-6 py-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-bold text-white">Technologies I Use</h2>

        <p className="mt-3 text-slate-400">
          Tools and technologies I use to build modern web applications.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            "
          >
            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className={`
                ${tech.bg}
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                text-4xl
                ${tech.color}
              `}
            >
              {tech.icon}
            </motion.div>

            {/* Name */}
            <h3 className="mb-2 text-lg font-semibold text-white">
              {tech.name}
            </h3>

            {/* Level */}
            <p className="mb-3 text-sm text-violet-400">{tech.level}</p>

            {/* Experience */}
            <div className="rounded-xl bg-slate-800/60 px-3 py-2 text-sm text-slate-300">
              {tech.exp}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
