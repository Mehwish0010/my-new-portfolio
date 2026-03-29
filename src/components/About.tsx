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
      className="relative py-36 md:py-44 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          02
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          About
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Crafting digital systems that think, adapt, and deliver.
          </h2>
          <p className="text-sm text-[#777] leading-loose mb-6">
            I&apos;m Mehwish Fatima — a full-stack developer and AI engineer
            based in Karachi, Pakistan. With experience at THF Ventures and
            NovaDevs Studios, I build high-performance web applications and
            autonomous AI agents that transform ideas into intelligent,
            scalable products.
          </p>
          <p className="text-sm text-[#777] leading-loose mb-10">
            My approach combines deep technical expertise with a design-first
            mindset. I work with Next.js, TypeScript, FastAPI, Python, and AI
            tools like CrewAI and OpenAI APIs to deliver solutions that are both
            beautiful and functional.
          </p>

          {/* Experience badge */}
          <div className="inline-flex items-center gap-5 border border-[#222] rounded-full px-10 py-5">
            <span className="text-3xl font-bold text-accent">02+</span>
            <span className="text-sm uppercase tracking-[0.2em] text-[#666]">
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
            className="mt-10"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
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
                  className="text-xs text-[#888] border border-[#222] rounded-full px-6 py-3 hover:border-accent/40 hover:text-accent transition-colors duration-300"
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
