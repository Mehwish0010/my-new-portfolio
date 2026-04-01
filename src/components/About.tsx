"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CodeBlock from "./ui/CodeBlock";

const techStack = [
  "Next.js",
  "Tailwind",
  "Python",
  "Framer Motion",
  "FastAPI",
  "TypeScript",
  "GitHub",
  "OpenAI",
  "Streamlit",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-52 md:py-64 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-28"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          02
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          About
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-24 items-start">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-10">
            About Me
          </h2>

          {/* Role badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-xs uppercase tracking-wider text-accent border border-accent/30 rounded-full px-5 py-2">
              Full-Stack
            </span>
            <span className="text-xs uppercase tracking-wider text-accent border border-accent/30 rounded-full px-5 py-2">
              Agentic AI Developer
            </span>
          </div>

          <p className="text-sm text-[#777] leading-loose mb-12">
            Hey! I&apos;m Mehwish Fatima, a developer who loves building things
            that actually work and look good doing it. I craft high-performance
            web apps and autonomous AI agents from Karachi, Pakistan.
          </p>

          {/* Experience badge */}
          <div className="inline-flex items-center gap-5 border border-[#222] rounded-full px-10 py-5">
            <span className="text-3xl font-bold text-accent">02+</span>
            <span className="text-sm uppercase tracking-[0.2em] text-[#666]">
              Years of Craft
            </span>
          </div>
        </motion.div>

        {/* Right: stack + code block */}
        <div>
          {/* Tech Stack Grid — above code block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-5">
              Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[#888] border border-[#222] rounded-full px-6 py-3 hover:border-accent/40 hover:text-accent transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <CodeBlock />
        </div>
      </div>
    </section>
  );
}
