"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import CodeBlock from "./ui/CodeBlock";

const techStack = [
  { name: "Next.js", level: 95 },
  { name: "Tailwind", level: 90 },
  { name: "Python", level: 88 },
  { name: "Framer Motion", level: 85 },
  { name: "FastAPI", level: 82 },
  { name: "TypeScript", level: 92 },
  { name: "OpenAI", level: 87 },
  { name: "CrewAI", level: 80 },
  { name: "Streamlit", level: 78 },
];

const stats = [
  { value: "02+", label: "Years of Craft" },
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
];

function MagneticWrap({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

const letterAnimation = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedHeading({ text, isInView }: { text: string; isInView: boolean }) {
  return (
    <span className="inline-flex flex-wrap overflow-hidden" style={{ perspective: "600px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-32 md:py-40 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,240,62,0.06) 0%, transparent 70%)" }}
      />

      {/* Section label with animated line */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono">
          02
        </span>
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-accent/50 block"
        />
        <span className="text-xs uppercase tracking-[0.3em] text-[#777]">
          About
        </span>
      </motion.div>

      {/* Big animated heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
          <AnimatedHeading text="Crafting Digital" isInView={isInView} />
          <br />
          <span className="text-accent">
            <AnimatedHeading text="Experiences." isInView={isInView} />
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Left: text content */}
        <div>
          {/* Role badges with stagger */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Full-Stack Developer", "Agentic AI Engineer", "UI Architect"].map((role, i) => (
              <MagneticWrap key={role}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="text-sm uppercase tracking-wider text-accent border border-accent/20 rounded-full px-6 py-2.5 backdrop-blur-sm bg-accent/[0.03] hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 cursor-default"
                >
                  {role}
                </motion.span>
              </MagneticWrap>
            ))}
          </div>

          {/* Bio with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-[#999] leading-[1.9] mb-6">
              Hey! I&apos;m <span className="text-white font-semibold">Mehwish Fatima</span>, a developer who
              loves building things that actually work and look good doing it.
            </p>
            <p className="text-base text-[#666] leading-[1.9] mb-12">
              I craft high-performance web apps and autonomous AI agents from Karachi, Pakistan.
              My focus is on creating intelligent systems that solve real problems with clean, scalable code.
            </p>
          </motion.div>

          {/* Stats row with counting animation */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                className="group relative rounded-2xl border border-[#1a1a1a] p-6 hover:border-accent/20 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative block text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </span>
                <span className="relative block text-xs uppercase tracking-[0.2em] text-[#555] group-hover:text-[#888] transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: tech stack + code block */}
        <div>
          {/* Interactive Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#555] mb-6">
              Tech Arsenal
            </p>
            <div className="space-y-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                  onMouseEnter={() => setHoveredTech(i)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="group relative flex items-center gap-4 py-2.5 px-4 rounded-xl hover:bg-[#111] transition-all duration-300 cursor-default"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 w-28 ${hoveredTech === i ? "text-accent" : "text-[#999]"}`}>
                    {tech.name}
                  </span>
                  {/* Skill bar */}
                  <div className="flex-1 h-[3px] bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.8 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: hoveredTech === i
                          ? "linear-gradient(90deg, #c0f03e, #38BDF8)"
                          : "linear-gradient(90deg, #333, #555)",
                        transition: "background 0.3s ease",
                      }}
                    />
                  </div>
                  <span className={`text-xs font-mono transition-colors duration-300 ${hoveredTech === i ? "text-accent" : "text-[#444]"}`}>
                    {tech.level}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ perspective: "1000px" }}
          >
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
