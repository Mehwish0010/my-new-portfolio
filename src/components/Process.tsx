"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    num: "01",
    title: "RESEARCH",
    subtitle: "Discovery",
    description:
      "Deep dive into your business goals, target audience, and market landscape to find the 'why' behind the project.",
  },
  {
    num: "02",
    title: "ARCHITECTURE",
    subtitle: "Strategy",
    description:
      "Defining the technical architecture and user journey. We map every touchpoint to ensure a seamless experience.",
  },
  {
    num: "03",
    title: "ENGINEERING",
    subtitle: "Build",
    description:
      "High-performance engineering meets premium design. Developing with Next.js, Framer Motion, and absolute precision.",
  },
  {
    num: "04",
    title: "DEPLOYMENT",
    subtitle: "Launch",
    description:
      "Optimization, final polishing, and deployment. We stay on board to ensure a successful handover and scaling.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          06
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Process
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-white mb-20"
      >
        THE EXECUTION.
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-[#1a1a1a]" />

        <div className="space-y-16">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative flex gap-8 md:gap-12 group"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#333] bg-[#0a0a0a] flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                  <div
                    className="w-3 h-3 rounded-full bg-[#333] group-hover:bg-accent transition-all duration-500"
                    style={{
                      animation: "pulse-glow 3s ease-in-out infinite",
                    }}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-[#333] group-hover:text-[#555] transition-colors whitespace-nowrap">
                  Interactive Node
                </span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm font-mono text-accent">
                    Phase {phase.num}
                  </span>
                  <span className="text-[#333]">—</span>
                  <h3 className="text-lg font-bold text-white">
                    {phase.title}
                  </h3>
                  <span className="text-[#333]">/</span>
                  <span className="text-sm text-[#666]">{phase.subtitle}</span>
                </div>
                <p className="text-sm text-[#777] leading-relaxed max-w-xl">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
