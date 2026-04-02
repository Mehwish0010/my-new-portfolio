"use client";

import { motion } from "framer-motion";

const carouselCards = [
  { title: "Agentic AI", subtitle: "Autonomous Systems", accent: "#c0f03e" },
  { title: "Next.js", subtitle: "Full-Stack Framework", accent: "#fff" },
  { title: "Python", subtitle: "AI & Backend", accent: "#3776AB" },
  { title: "n8n", subtitle: "Autonomous Workflows", accent: "#38BDF8" },
  { title: "CrewAI", subtitle: "Multi-Agent Orchestration", accent: "#c0f03e" },
  { title: "FastAPI", subtitle: "High-Performance APIs", accent: "#009688" },
  { title: "TypeScript", subtitle: "Type-Safe Code", accent: "#3178C6" },
  { title: "Kubernetes", subtitle: "Scalable Deployments", accent: "#FF0055" },
  { title: "Cloud Deploy", subtitle: "Vercel & AWS", accent: "#FF9900" },
  { title: "OpenAI", subtitle: "LLM Integration", accent: "#10A37F" },
];

const doubledCards = [...carouselCards, ...carouselCards];

function AnimatedWord({ word, index }: { word: string; index: number }) {
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
    <section className="relative flex flex-col min-h-screen justify-center pt-28 pb-20 overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full">

        {/* Top labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-6 mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
            Available for Freelance
          </span>
          <span className="h-px w-12 bg-[#333]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
            Open for Collaborations
          </span>
        </motion.div>

        {/* 3. Main heading — big gap above and below */}
        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1] tracking-tight text-white mb-8">
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

        {/* 4. Subtitle — clear gap */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm text-[#555] max-w-lg leading-relaxed"
        >
          Developing autonomous intelligence layers and immersive digital interfaces that push boundaries.
        </motion.p>
      </div>

      {/* 5. Moving Cards Carousel — gap above and below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="mt-16 mb-10 w-full overflow-hidden"
      >
        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {doubledCards.map((card, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-[240px] rounded-2xl p-[1px] cursor-default overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${card.accent}33, transparent 60%, ${card.accent}15)`,
              }}
            >
              <div className="relative h-full rounded-2xl bg-[#0c0c0c] p-7 group-hover:bg-[#111] transition-colors duration-300">
                <div
                  className="w-10 h-1 rounded-full mb-5 opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: card.accent }}
                />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-xs text-[#555] leading-relaxed group-hover:text-[#888] transition-colors duration-300">
                  {card.subtitle}
                </p>
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                  style={{ backgroundColor: card.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Resume Button — extraordinary animated button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex flex-col items-start mt-40 px-8 md:px-16 lg:px-24"
      >
        <a
          href="/resume.pdf"
          download="Mehwish_Fatima_Resume.pdf"
          className="group relative inline-flex items-center justify-center rounded-full p-[2px] cursor-pointer"
          style={{ background: "conic-gradient(from var(--btn-angle, 0deg), #c0f03e, #38BDF8, #a855f7, #c0f03e)" }}
        >
          {/* Rotating border animation via inline style */}
          <style>{`
            @property --btn-angle {
              syntax: "<angle>";
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes rotate-border {
              to { --btn-angle: 360deg; }
            }
            .resume-btn-wrap {
              animation: rotate-border 3s linear infinite;
            }
            @keyframes btn-glow-pulse {
              0%, 100% { box-shadow: 0 0 20px rgba(192, 240, 62, 0.15), 0 0 60px rgba(192, 240, 62, 0.05); }
              50% { box-shadow: 0 0 30px rgba(192, 240, 62, 0.3), 0 0 80px rgba(192, 240, 62, 0.1); }
            }
          `}</style>
          <span className="resume-btn-wrap absolute inset-0 rounded-full" style={{ background: "conic-gradient(from var(--btn-angle, 0deg), #c0f03e, #38BDF8, #a855f7, #c0f03e)" }} />

          {/* Inner button */}
          <span
            className="relative z-10 inline-flex items-center gap-5 bg-[#0a0a0a] rounded-full px-14 py-6 group-hover:bg-[#111] transition-all duration-500"
            style={{ animation: "btn-glow-pulse 3s ease-in-out infinite" }}
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </span>

            {/* Animated arrow */}
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-accent/30 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="group-hover:translate-y-0.5 transition-transform duration-300">
                <path d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 13h12" stroke="#c0f03e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>

            {/* Text */}
            <span className="relative z-10 flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#555] group-hover:text-[#888] transition-colors duration-300">
                
              </span>
              <span className="text-base font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors duration-500">
                Resume
              </span>
            </span>

            {/* Status dot */}
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
          </span>
        </a>

        {/* Scroll indicator */}
        <div className="flex items-center gap-4 mt-16">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
            Scroll to Explore
          </span>
        </div>
      </motion.div>

      {/* Decorative grid lines */}
      <div className="absolute top-0 right-8 md:right-16 lg:right-24 h-full w-px bg-[#1a1a1a]" />
      <div className="absolute top-0 right-[33%] h-full w-px bg-[#1a1a1a] hidden md:block" />
    </section>
  );
}
