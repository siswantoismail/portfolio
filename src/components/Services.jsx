import { motion } from "framer-motion";
import { Monitor, Code2, Database, GitBranch } from "lucide-react";

function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Build Responsive Interfaces",
      description:
        "Creating responsive and accessible layouts that work flawlessly on all devices.",
      color: "from-purple-500/20 to-purple-600/10 text-purple-400",
    },
    {
      icon: Code2,
      title: "Develop React Applications",
      description:
        "Building reusable components and scalable React applications with clean code.",
      color: "from-blue-500/20 to-blue-600/10 text-blue-400",
    },
    {
      icon: Database,
      title: "Integrate APIs",
      description:
        "Connecting applications with APIs and displaying dynamic data seamlessly.",
      color: "from-green-500/20 to-green-600/10 text-green-400",
    },
    {
      icon: GitBranch,
      title: "Collaborate with Git",
      description:
        "Using Git and GitHub for version control and effective team collaboration.",
      color: "from-orange-500/20 to-orange-600/10 text-orange-400",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-bold text-white">What I Do Best</h2>

        <p className="mt-3 text-slate-400">
          Services and skills I offer as a Frontend Developer.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/50
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-violet-500/40
                hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]
              "
            >
              {/* Animated Icon */}
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
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  ${service.color}
                `}
              >
                <Icon size={28} />
              </motion.div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-slate-400">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
