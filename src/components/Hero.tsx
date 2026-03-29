"use client";

import { motion } from "framer-motion";

const skillCards = [
  {
    category: "Autonomous Intelligence",
    title: "Agentic AI",
    description: "Building autonomous agents that think, plan, and execute",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    category: "Modern Web",
    title: "Full-Stack Dev",
    description: "End-to-end web applications with modern frameworks",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    category: "Visual Excellence",
    title: "Immersive UI",
    description: "Pixel-perfect interfaces with fluid animations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 9l3 3-3 3" />
        <line x1="13" y1="15" x2="16" y2="15" />
      </svg>
    ),
  },
];

function AnimatedWord({
  word,
  index,
}: {
  word: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto pt-28 pb-24">
      {/* Top labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center gap-6 mb-16"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Available for Freelance
        </span>
        <span className="h-px w-12 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Based in Karachi
        </span>
      </motion.div>

      {/* Main heading */}
      <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.95] tracking-tight text-white">
        <div className="overflow-hidden">
          <AnimatedWord word="Building" index={0} />
        </div>
        <div className="overflow-hidden">
          <AnimatedWord word="Intelligent" index={1} />
        </div>
        <div className="overflow-hidden flex items-end gap-6">
          <AnimatedWord word="Experiences." index={2} />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent mb-4 md:mb-6"
          />
        </div>
      </h1>

      {/* Subtitle + Resume button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row sm:items-center gap-8"
      >
        <p className="text-sm text-[#666] max-w-lg leading-relaxed">
          Mehwish Fatima Full-Stack &amp; Agentic AI Developer. Developing autonomous intelligence layers and immersive digital interfaces.
        </p>
        <a
          href="/resume.pdf"
          download="Mehwish_Fatima_Resume.pdf"
          className="flex-shrink-0 inline-flex items-center gap-3 border border-[#333] rounded-full px-14 py-6 text-sm uppercase tracking-widest text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Resume
        </a>
      </motion.div>

      {/* 3 Skill Cards shown simultaneously */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="mt-20 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          {skillCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
              className="border border-[#222] rounded-xl px-6 py-6 bg-[#111]/60 backdrop-blur-sm hover:border-[#333] transition-colors duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#555] mb-3">
                {card.category}
              </p>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-[#777] leading-snug">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#444] mt-4">
          Swipe cards to cycle skills
        </p>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 flex items-center gap-4"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Scroll to Explore
        </span>
      </motion.div>

      {/* Decorative grid lines */}
      <div className="absolute top-0 right-8 md:right-16 lg:right-24 h-full w-px bg-[#1a1a1a]" />
      <div className="absolute top-0 right-[33%] h-full w-px bg-[#1a1a1a] hidden md:block" />
    </section>
  );
}
