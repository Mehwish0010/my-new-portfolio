"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Agentic AI Systems",
    subtitle: "Autonomous Intelligence",
    description:
      "Architecting autonomous agents that can plan, execute, and reason through complex multi-step tasks. Building the future of self-operating software.",
    tags: ["Autonomous Agents", "Multi-Agent Orchestration", "Goal-Oriented Reasoning"],
    image: "/assets/images/agentic-ai-cover.webp",
    accent: "#c0f03e",
  },
  {
    num: "02",
    title: "Web Development",
    subtitle: "Full-Stack Engineering",
    description:
      "Building performant, accessible, and visually stunning web applications with modern frameworks and pixel-perfect attention to detail.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    image: "/assets/images/web-development.jpg",
    accent: "#38BDF8",
  },
  {
    num: "03",
    title: "System Design",
    subtitle: "Scalable Architecture",
    description:
      "Designing scalable architectures and infrastructure patterns that handle exponential growth while maintaining rock-solid reliability.",
    tags: ["Architecture", "Scalability", "Cloud Infrastructure", "DevOps"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600",
    accent: "#a855f7",
  },
  {
    num: "04",
    title: "Intelligent Workflows",
    subtitle: "AI-Powered Automation",
    description:
      "Creating AI-powered automation pipelines that streamline operations and unlock new levels of productivity across your entire stack.",
    tags: ["Automation", "AI Pipelines", "n8n", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
    accent: "#FF9900",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const active = services[activeIndex];

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen py-32 md:py-40 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Ambient glow that follows active service color */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-40 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${active.accent}08 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono">03</span>
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-accent/50 block"
        />
        <span className="text-xs uppercase tracking-[0.3em] text-[#777]">Services</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6"
      >
        What I <span className="text-accent">Build.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base text-[#555] max-w-lg mb-16"
      >
        Services designed to scale your vision from concept to production.
      </motion.p>

      {/* === Main Layout: Full-width cards === */}
      <div className="space-y-4">
        {services.map((service, i) => {
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onClick={() => setActiveIndex(i)}
              className={`group relative rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden ${
                isActive
                  ? "border-[#333] bg-[#0f0f0f]"
                  : "border-[#1a1a1a] bg-transparent hover:border-[#282828] hover:bg-[#0c0c0c]"
              }`}
            >
              {/* Collapsed state: horizontal row */}
              <div className="flex items-center gap-6 md:gap-10 px-6 md:px-10 py-7">
                {/* Number */}
                <span
                  className="text-4xl md:text-5xl font-bold transition-colors duration-500"
                  style={{ color: isActive ? service.accent : "#222" }}
                >
                  {service.num}
                </span>

                {/* Title + subtitle */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#666] group-hover:text-[#999]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-xs uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
                    isActive ? "text-[#777]" : "text-[#333] group-hover:text-[#555]"
                  }`}>
                    {service.subtitle}
                  </p>
                </div>

                {/* Arrow / indicator */}
                <motion.div
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                  style={{
                    borderColor: isActive ? `${service.accent}40` : "#222",
                    backgroundColor: isActive ? `${service.accent}10` : "transparent",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3v8M3 7h8"
                      stroke={isActive ? service.accent : "#444"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-10 pb-8">
                      <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 items-start pt-2">
                        {/* Left: description + tags */}
                        <div>
                          <p className="text-base text-[#999] leading-[1.8] mb-8">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, ti) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + ti * 0.05 }}
                                className="text-xs uppercase tracking-wider rounded-full px-5 py-2.5 border transition-colors duration-300"
                                style={{
                                  color: `${service.accent}cc`,
                                  borderColor: `${service.accent}20`,
                                  backgroundColor: `${service.accent}05`,
                                }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Right: image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.15 }}
                          className="relative rounded-xl overflow-hidden aspect-[16/7] border border-[#1a1a1a]"
                        >
                          <motion.img
                            key={service.image}
                            src={service.image}
                            alt={service.title}
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(135deg, ${service.accent}15 0%, transparent 50%, ${service.accent}08 100%)`,
                            }}
                          />
                          {/* Number watermark */}
                          <span
                            className="absolute bottom-4 right-6 text-7xl font-black opacity-[0.06]"
                            style={{ color: service.accent }}
                          >
                            {service.num}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Active accent bar at bottom */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-[2px] origin-left"
                      style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom metric strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { num: "100%", label: "Client Satisfaction" },
          { num: "30+", label: "Projects Shipped" },
          { num: "24h", label: "Response Time" },
          { num: "5x", label: "Faster Delivery" },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
            className="text-center py-6 border-t border-[#1a1a1a]"
          >
            <span className="block text-2xl font-bold text-white mb-1">{metric.num}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#555]">{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
