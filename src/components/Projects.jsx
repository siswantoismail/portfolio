import { motion } from "framer-motion";
import dasbordPmobil from "../assets/dasbordPmobil.png";
import KT from "../assets/KT.png";
import dashboardRS from "../assets/dashboardRS.png";

function Projects() {
  const projects = [
    {
      title: "Car Sales Website",
      desc: "A responsive car sales management website that allows users to browse vehicles, view detailed information, and manage inventory through a modern admin dashboard.",
      image: dasbordPmobil,
      github: "https://github.com/siswantoismail/ecommerce",
      demo: "https://penjualanmobil.vercel.app/",
    },
    {
      title: "Krawang Tailor",
      desc: "A responsive tailor business website that showcases services, custom clothing products, and simplifies customer orders through a modern interface.",
      image: KT,
      github: "https://github.com/siswantoismail/krawangtailor",
      demo: "https://krawangtailor-iwan.vercel.app/",
    },
    {
      title: "Hospital Management System",
      desc: "A web-based hospital management system designed to streamline administrative tasks such as patient management, doctor scheduling, appointments, and medical records through a modern dashboard.",
      image: dashboardRS,
      github: "https://github.com/siswantoismail/hospital-admin",
      demo: "https://complaint.siswantoismail.com",
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
              hover:border-blue-500/40
              hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            "
          >
            {/* Image Placeholder */}
            <div className="relative h-60 overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-400">{project.desc}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
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
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    hover:border-blue-500
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
