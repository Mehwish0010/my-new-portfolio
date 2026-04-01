"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Agentic AI Systems",
    description:
      "Architecting autonomous agents that can plan, execute, and reason through complex multi-step tasks.",
    tags: ["Autonomous Agents", "Multi-Agent Orchestration", "Goal-Oriented Reasoning"],
    image: "/assets/images/agentic-ai.jpeg",
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
      className="relative py-52 md:py-64 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
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
        className="text-2xl md:text-3xl font-bold text-white leading-snug mb-28"
      >
        Services designed to scale your vision.
      </motion.p>

      <div className="grid md:grid-cols-[1fr,1fr] gap-16 items-start">
        {/* Left: Accordion list */}
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

        {/* Right: Image card with detail overlay */}
        <div className="hidden md:block sticky top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#111]"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <motion.img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent" />

                {/* Number badge on image */}
                <span className="absolute top-5 right-5 text-5xl font-bold text-white/10">
                  {services[activeIndex].num}
                </span>
              </div>

              {/* Details below image */}
              <div className="p-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-accent mb-3">
                  Service {services[activeIndex].num}
                </p>
                <h4 className="text-xl font-bold text-white mb-3">
                  {services[activeIndex].title}
                </h4>
                <p className="text-sm text-[#777] leading-relaxed mb-6">
                  {services[activeIndex].description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {services[activeIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-accent/70 bg-accent/5 border border-accent/15 rounded-full px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
