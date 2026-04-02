"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "SmartHire",
    subtitle: "Employment Form System",
    sector: "Productivity",
    description:
      "A multi-step digital employment form with editable inputs, live validation, PDF generation via pdf-lib, and automated email submission via Gmail SMTP.",
    tech: ["Next.js", "pdf-lib", "Gmail SMTP", "Tailwind"],
    accent: "#c0f03e",
    liveUrl: "#",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    num: "02",
    title: "DevNest",
    subtitle: "AI Developer Collaboration Platform",
    sector: "Technology",
    description:
      "Led frontend development with scalable architecture. Integrated AI agents for automated tasks and AI-assisted productivity features.",
    tech: ["React", "TypeScript", "OpenAI", "Node.js"],
    accent: "#38BDF8",
    liveUrl: "#",
    year: "2025",
    role: "Frontend Lead",
  },
  {
    num: "03",
    title: "THF Ventures",
    subtitle: "Admin Dashboard Suite",
    sector: "FinTech",
    description:
      "Full-stack apps with FastAPI, Next.js, and Neon DB. Admin dashboards for company & currency management with auth, CRUD, and CrewAI integration.",
    tech: ["FastAPI", "Next.js", "Neon DB", "CrewAI"],
    accent: "#a855f7",
    liveUrl: "#",
    year: "2024",
    role: "Full-Stack Engineer",
  },
  {
    num: "04",
    title: "AI Workflow Engine",
    subtitle: "Intelligent Automation Platform",
    sector: "AI & Automation",
    description:
      "An AI-powered workflow automation platform with n8n integration, custom agent pipelines, and real-time task orchestration for enterprise productivity.",
    tech: ["n8n", "Python", "LangChain", "Docker"],
    accent: "#FF9900",
    liveUrl: "#",
    year: "2024",
    role: "AI Engineer",
  },
];

function ProjectCard({
  project,
  index,
  isInView,
  isSelected,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  isSelected: boolean;
  onClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set((e.clientY - centerY) / -20);
    rotateY.set((e.clientX - centerX) / 20);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group cursor-pointer"
    >
      <div
        className={`relative rounded-3xl border overflow-hidden transition-all duration-500 ${
          isSelected
            ? "border-[#333] bg-[#0d0d0d]"
            : "border-[#151515] bg-[#0a0a0a] hover:border-[#252525]"
        }`}
      >
        {/* Spotlight effect on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${x}px ${y}px, ${project.accent}08, transparent 60%)`,
          }}
        />

        {/* Header bar */}
        <div className="relative px-8 md:px-10 pt-8 md:pt-10 pb-6">
          <div className="flex items-start justify-between mb-8">
            {/* Left: number + meta */}
            <div className="flex items-center gap-5">
              <span
                className="text-5xl md:text-6xl font-black leading-none transition-colors duration-500"
                style={{ color: isSelected ? project.accent : "#1a1a1a" }}
              >
                {project.num}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-[9px] uppercase tracking-[0.25em] rounded-full px-3 py-1 border font-medium"
                    style={{
                      color: `${project.accent}bb`,
                      borderColor: `${project.accent}25`,
                      backgroundColor: `${project.accent}08`,
                    }}
                  >
                    {project.sector}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#444] font-mono">
                    {project.year}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#444]">
                  {project.role}
                </span>
              </div>
            </div>

            {/* Right: link arrow */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{ x: 3, y: -3 }}
                className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: isSelected ? `${project.accent}40` : "#1a1a1a",
                  backgroundColor: isSelected ? `${project.accent}08` : "transparent",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 11L11 1M11 1H4M11 1V8"
                    stroke={isSelected ? project.accent : "#333"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </a>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-400">
            {project.title}
          </h3>
          <p className="text-sm text-[#555] group-hover:text-[#777] transition-colors duration-300">
            {project.subtitle}
          </p>
        </div>

        {/* Expandable detail panel */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 md:px-10 pb-8 md:pb-10">
                {/* Divider */}
                <div className="h-px bg-[#1a1a1a] mb-8" />

                <div className="grid md:grid-cols-[1.4fr,1fr] gap-10">
                  {/* Description */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
                      Overview
                    </p>
                    <p className="text-base text-[#999] leading-[1.9]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech + action */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, ti) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 + ti * 0.06 }}
                          className="text-xs font-medium border rounded-lg px-4 py-2 transition-all duration-300"
                          style={{
                            color: `${project.accent}cc`,
                            borderColor: `${project.accent}20`,
                            backgroundColor: `${project.accent}06`,
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-300 group/link"
                      style={{ color: project.accent }}
                    >
                      View Project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          d="M1 6h10M8 3l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] origin-left"
                style={{
                  background: `linear-gradient(90deg, ${project.accent}, ${project.accent}40, transparent)`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="work"
      ref={ref}
      className="relative min-h-screen py-32 md:py-40 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Ambient glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${projects[selectedIndex].accent}06 0%, transparent 70%)`,
          }}
        />
      </AnimatePresence>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono">04</span>
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-accent/50 block"
        />
        <span className="text-xs uppercase tracking-[0.3em] text-[#777]">Selected Work</span>
      </motion.div>

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-4"
          >
            Featured <span className="text-accent">Projects.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-[#555] max-w-md"
          >
            Curated work showcasing full-stack craft and AI engineering.
          </motion.p>
        </div>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3"
        >
          {projects.map((p, i) => (
            <button
              key={p.num}
              onClick={() => setSelectedIndex(i)}
              className="relative w-10 h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <motion.div
                animate={{
                  width: selectedIndex === i ? "100%" : "0%",
                }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ backgroundColor: p.accent }}
              />
            </button>
          ))}
          <span className="text-xs font-mono text-[#444] ml-2">
            {String(selectedIndex + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Project cards */}
      <div className="space-y-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            isInView={isInView}
            isSelected={selectedIndex === i}
            onClick={() => setSelectedIndex(selectedIndex === i ? -1 : i)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[#1a1a1a] pt-10"
      >
        <div>
          <p className="text-sm text-[#777] mb-1">Have a project in mind?</p>
          <p className="text-xs text-[#444]">I&apos;m currently available for freelance work.</p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-full px-8 py-3 text-sm uppercase tracking-widest text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
        >
          Start a Conversation
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              d="M1 6h10M8 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
