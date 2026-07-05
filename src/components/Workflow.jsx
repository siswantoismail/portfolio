import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Code2,
  Palette,
  CheckCircle,
  Rocket,
} from "lucide-react";

function Workflow() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "Understand the problem and define solution",
    },
    {
      icon: ClipboardList,
      title: "Plan",
      description: "Create structure and plan the components",
    },
    {
      icon: Code2,
      title: "Develop",
      description: "Build with React and JavaScript functionality",
    },
    {
      icon: Palette,
      title: "Style",
      description: "Style with Tailwind CSS for responsive UI",
    },
    {
      icon: CheckCircle,
      title: "Test",
      description: "Test across devices and fix issues",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Deploy and share on the web",
    },
  ];

  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/50
          p-8
          backdrop-blur-sm
        "
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            My Development Workflow
          </h2>

          <p className="mt-3 text-slate-400">
            The process I follow to build modern web applications.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid gap-8 md:grid-cols-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
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
                  scale: 1.05,
                }}
                className="relative text-center"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[60%]
                      top-7
                      hidden
                      h-[2px]
                      w-full
                      border-t
                      border-dashed
                      border-blue-500/40
                      md:block
                    "
                  />
                )}

                {/* Animated Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/40
                    bg-gradient-to-br
                    from-blue-500/20
                    to-blue-500/10
                    shadow-[0_0_25px_rgba(139,92,246,0.3)]
                  "
                >
                  <Icon size={26} className="text-blue-400" />
                </motion.div>

                {/* Step Number */}
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {index + 1}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-5 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Workflow;
