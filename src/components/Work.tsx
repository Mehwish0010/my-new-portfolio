"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "SmartHire",
    subtitle: "Employment Form System",
    sector: "Productivity & Management",
    description:
      "A multi-step digital employment form with editable inputs, live validation, PDF generation via pdf-lib, and automated email submission via Gmail SMTP.",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    num: "02",
    title: "DevNest",
    subtitle: "AI Developer Collaboration Platform",
    sector: "Technology & AI",
    description:
      "Led frontend development with scalable architecture. Integrated AI agents for automated tasks and AI-assisted productivity features.",
    gradient: "from-[#0a192f] via-[#20232a] to-[#1a1a2e]",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    num: "03",
    title: "THF Ventures",
    subtitle: "Admin Dashboard Suite",
    sector: "Enterprise & FinTech",
    description:
      "Full-stack apps with FastAPI, Next.js, and Neon DB. Admin dashboards for company & currency management with auth, CRUD, and CrewAI integration.",
    gradient: "from-[#1b1b2f] via-[#162447] to-[#1f4068]",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    num: "04",
    title: "AI Workflow Engine",
    subtitle: "Intelligent Automation Platform",
    sector: "AI & Automation",
    description:
      "An AI-powered workflow automation platform with n8n integration, custom agent pipelines, and real-time task orchestration for enterprise productivity.",
    gradient: "from-[#1a1a2e] via-[#0f3460] to-[#162447]",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
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
          Work
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-white leading-snug mb-28"
      >
        SELECTED ARCHIVE.
      </motion.h2>

      {/* 2-column project grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="group border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#333] transition-all duration-500"
          >
            {/* Gradient image area */}
            <div
              className={`relative h-48 md:h-52 bg-gradient-to-br ${project.gradient} flex items-end p-6`}
            >
              <div className="absolute top-5 left-6 flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40 border border-white/10 rounded-full px-6 py-3">
                  {project.sector}
                </span>
              </div>
              <span className="text-6xl md:text-7xl font-bold text-white/[0.07] absolute top-4 right-6 leading-none">
                {project.num}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
                  Project &mdash; {project.num}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50">{project.subtitle}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 md:p-10 bg-[#0f0f0f]">
              <p className="text-sm text-[#888] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-[#888] hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1 11L11 1M11 1H4M11 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Visit Live Site
                </a>
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-[#888] hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1 11L11 1M11 1H4M11 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Case Study
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
