"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CodeBlock from "./ui/CodeBlock";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          02
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          About
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Crafting digital systems that think, adapt, and deliver.
          </h2>
          <p className="text-[#777] leading-relaxed mb-6">
            I&apos;m Mehwish Fatima — a full-stack developer and AI engineer
            based in Karachi, Pakistan. With experience at THF Ventures and
            NovaDevs Studios, I build high-performance web applications and
            autonomous AI agents that transform ideas into intelligent,
            scalable products.
          </p>
          <p className="text-[#777] leading-relaxed mb-8">
            My approach combines deep technical expertise with a design-first
            mindset. I work with Next.js, TypeScript, FastAPI, Python, and AI
            tools like CrewAI and OpenAI APIs to deliver solutions that are both
            beautiful and functional.
          </p>

          {/* Experience badge */}
          <div className="inline-flex items-center gap-3 border border-[#222] rounded-full px-5 py-2.5">
            <span className="text-2xl font-bold text-accent">02+</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#666]">
              Years of Craft
            </span>
          </div>
        </motion.div>

        {/* Right: code block */}
        <div>
          <CodeBlock />

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Python",
                "FastAPI",
                "React",
                "Tailwind CSS",
                "CrewAI",
                "OpenAI API",
                "Firebase",
                "Vercel",
                "n8n",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-[#888] border border-[#222] rounded-full px-3 py-1.5 hover:border-accent/40 hover:text-accent transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
