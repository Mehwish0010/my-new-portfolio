"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "SmartHire",
    subtitle: "Employment Form System",
    category: "AI / Digital-Driven",
    description:
      "A multi-step digital employment form with editable inputs, live validation, PDF generation via pdf-lib, and automated email submission via Gmail SMTP.",
    tags: ["Next.js", "pdf-lib", "Gmail SMTP", "TypeScript"],
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "02",
    title: "DevNest",
    subtitle: "AI Developer Collaboration Platform",
    category: "Full-Stack / AI",
    description:
      "Led frontend development with scalable architecture. Integrated AI agents for automated tasks and AI-assisted productivity features.",
    tags: ["Next.js", "AI Agents", "TypeScript", "Tailwind CSS"],
    gradient: "from-[#0a192f] via-[#20232a] to-[#1a1a2e]",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "03",
    title: "THF Ventures",
    subtitle: "Admin Dashboard Suite",
    category: "Full-Stack / Enterprise",
    description:
      "Full-stack apps with FastAPI, Next.js, and Neon DB. Admin dashboards for company & currency management with auth, CRUD, and CrewAI integration.",
    tags: ["FastAPI", "Next.js", "Neon DB", "CrewAI"],
    gradient: "from-[#1b1b2f] via-[#162447] to-[#1f4068]",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "04",
    title: "AI Workflow Engine",
    subtitle: "Intelligent Automation Platform",
    category: "AI / Automation",
    description:
      "An AI-powered workflow automation platform with n8n integration, custom agent pipelines, and real-time task orchestration for enterprise productivity.",
    tags: ["Python", "n8n", "OpenAI API", "Next.js"],
    gradient: "from-[#1a1a2e] via-[#0f3460] to-[#162447]",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-40 md:py-52 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          04
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Work
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-white mb-24"
      >
        SELECTED ARCHIVE.
      </motion.h2>

      {/* 2-column project grid */}
      <div className="grid md:grid-cols-2 gap-10">
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
                  {project.category}
                </span>
              </div>
              <span className="text-6xl md:text-7xl font-bold text-white/[0.07] absolute top-4 right-6 leading-none">
                {project.num}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50">{project.subtitle}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 bg-[#0f0f0f]">
              <p className="text-sm text-[#888] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider text-[#555] border border-[#222] rounded-full px-6 py-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                {project.liveUrl !== "#" ? (
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
                ) : (
                  <span className="text-sm uppercase tracking-widest text-[#333] flex items-center gap-2">
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
                    Links coming soon
                  </span>
                )}
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-widest text-[#888] hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
