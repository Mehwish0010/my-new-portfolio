"use client";

import { motion } from "framer-motion";

const carouselCards = [
  {
    emoji: "🤖",
    title: "Agentic AI",
    subtitle: "Autonomous Systems",
    accent: "#c0f03e",
  },
  {
    emoji: "⚡",
    title: "Next.js",
    subtitle: "Full-Stack Framework",
    accent: "#fff",
  },
  {
    emoji: "🐍",
    title: "Python",
    subtitle: "AI & Backend",
    accent: "#3776AB",
  },
  {
    emoji: "🎨",
    title: "Tailwind CSS",
    subtitle: "Modern Styling",
    accent: "#38BDF8",
  },
  {
    emoji: "🧠",
    title: "CrewAI",
    subtitle: "Multi-Agent Orchestration",
    accent: "#c0f03e",
  },
  {
    emoji: "🔥",
    title: "FastAPI",
    subtitle: "High-Performance APIs",
    accent: "#009688",
  },
  {
    emoji: "📐",
    title: "TypeScript",
    subtitle: "Type-Safe Code",
    accent: "#3178C6",
  },
  {
    emoji: "🚀",
    title: "Framer Motion",
    subtitle: "Fluid Animations",
    accent: "#FF0055",
  },
  {
    emoji: "☁️",
    title: "Cloud Deploy",
    subtitle: "Vercel & AWS",
    accent: "#FF9900",
  },
  {
    emoji: "🔗",
    title: "OpenAI",
    subtitle: "LLM Integration",
    accent: "#10A37F",
  },
];

// Duplicate for seamless loop
const doubledCards = [...carouselCards, ...carouselCards];

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
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-40 overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full">
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm text-[#666] max-w-xl leading-relaxed mt-10"
        >
          Mehwish Fatima — Full-Stack &amp; Agentic AI Developer. Developing autonomous intelligence layers and immersive digital interfaces.
        </motion.p>
      </div>

      {/* Moving Cards Carousel — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="mt-16 mb-20 w-full overflow-hidden"
      >
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubledCards.map((card, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-[220px] border border-[#1a1a1a] rounded-2xl bg-[#0f0f0f] p-6 hover:border-[#333] hover:bg-[#111] transition-all duration-300 cursor-default"
            >
              {/* Accent glow line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: card.accent }}
              />
              {/* Emoji */}
              <span className="text-3xl mb-4 block">{card.emoji}</span>
              {/* Title */}
              <h3 className="text-base font-bold text-white mb-1">
                {card.title}
              </h3>
              {/* Subtitle */}
              <p className="text-xs text-[#666] leading-snug">
                {card.subtitle}
              </p>
              {/* Decorative dot */}
              <div
                className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 transition-opacity"
                style={{ backgroundColor: card.accent }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Big Resume Button + Scroll */}
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
        >
          <a
            href="/resume.pdf"
            download="Mehwish_Fatima_Resume.pdf"
            className="inline-flex items-center gap-4 bg-accent text-black font-bold rounded-full px-16 py-7 text-base uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20"
          >
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>

          <div className="flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
              Scroll to Explore
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute top-0 right-8 md:right-16 lg:right-24 h-full w-px bg-[#1a1a1a]" />
      <div className="absolute top-0 right-[33%] h-full w-px bg-[#1a1a1a] hidden md:block" />
    </section>
  );
}
