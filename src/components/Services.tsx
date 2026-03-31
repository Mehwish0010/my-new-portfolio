"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import HexagonGrid from "./ui/HexagonGrid";

const services = [
  {
    num: "01",
    title: "Agentic AI Systems",
    description:
      "Architecting autonomous agents that can plan, execute, and reason through complex multi-step tasks.",
    tags: ["Autonomous Agents", "Multi-Agent Orchestration", "Goal-Oriented Reasoning"],
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Building performant, accessible, and visually stunning web applications with modern frameworks and best practices.",
    tags: ["Next.js", "React", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600",
  },
  {
    num: "03",
    title: "System Design",
    description:
      "Designing scalable architectures and infrastructure patterns that handle growth while maintaining reliability.",
    tags: ["Architecture", "Scalability", "Cloud Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600",
  },
  {
    num: "04",
    title: "Intelligent Workflows",
    description:
      "Creating AI-powered automation pipelines that streamline operations and unlock new levels of productivity.",
    tags: ["Automation", "AI Pipelines", "Process Optimization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-48 md:py-60 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          03
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Services
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-white mb-24"
      >
        Services designed to scale your vision.
      </motion.p>

      <div className="grid md:grid-cols-[1fr,1fr] gap-16">
        {/* Accordion list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`border-t border-[#222] cursor-pointer transition-colors duration-300 ${
                activeIndex === i ? "bg-[#111]" : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex items-center gap-6 py-8 px-4">
                <span
                  className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                    activeIndex === i ? "text-accent" : "text-[#333]"
                  }`}
                >
                  {service.num}
                </span>
                <h3
                  className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    activeIndex === i ? "text-white" : "text-[#666]"
                  }`}
                >
                  {service.title}
                </h3>
              </div>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-8 pl-[4.5rem]">
                      <p className="text-sm text-[#888] leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs uppercase tracking-wider text-[#555] border border-[#222] rounded-full px-6 py-3"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-[#222]" />
        </div>

        {/* Agentic AI Hexagon Diagram */}
        <div className="hidden md:block relative h-[440px]">
          <HexagonGrid />
        </div>
      </div>

      {/* Bottom label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 flex items-center gap-4"
      >
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Outcome — High-performance digital transformation.
        </span>
      </motion.div>
    </section>
  );
}
