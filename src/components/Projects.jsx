import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Hospital Dashboard",
      desc: "Dashboard for managing hospital data.",
    },
    {
      title: "Complaint Information System",
      desc: "Public complaint management application.",
    },
    {
      title: "E-Commerce Frontend",
      desc: "Responsive ecommerce website.",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-3 text-center text-4xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="mb-14 text-center text-slate-400">
          Some projects that showcase my frontend development skills.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
            }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            "
          >
            {/* Image Placeholder */}
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="
                  flex
                  h-56
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-violet-700/20
                  via-slate-900
                  to-purple-900/20
                "
              >
                <span className="text-lg font-medium text-slate-500">
                  Project Preview
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-400">{project.desc}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  React
                </span>

                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
                  Tailwind
                </span>

                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                  JavaScript
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    rounded-xl
                    bg-violet-600
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-violet-700
                  "
                >
                  Live Demo
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:border-violet-500
                  "
                >
                  GitHub
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
