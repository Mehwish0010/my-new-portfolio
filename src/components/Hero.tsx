"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const line1 = "Building";
const line2 = "Intelligent";
const line3 = "Experiences.";

const skillCards = [
  {
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
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(1);

  const cycleCard = useCallback(() => {
    setDirection(1);
    setActiveCard((prev) => (prev + 1) % skillCards.length);
  }, []);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(cycleCard, 4000);
    return () => clearInterval(interval);
  }, [cycleCard]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > 60) {
      if (info.offset.x > 0) {
        setDirection(-1);
        setActiveCard((prev) => (prev - 1 + skillCards.length) % skillCards.length);
      } else {
        setDirection(1);
        setActiveCard((prev) => (prev + 1) % skillCards.length);
      }
    }
  };

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto pt-20">
      {/* Top labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center gap-6 mb-10"
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
          <AnimatedWord word={line1} index={0} />
        </div>
        <div className="overflow-hidden">
          <AnimatedWord word={line2} index={1} />
        </div>
        <div className="overflow-hidden flex items-end gap-6">
          <AnimatedWord word={line3} index={2} />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent mb-4 md:mb-6"
          />
        </div>
      </h1>

      {/* Swipeable Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="mt-14 mb-6"
      >
        <div className="relative h-[120px] md:h-[100px] max-w-xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCard}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-5 h-full border border-[#222] rounded-xl px-6 py-5 bg-[#111]/60 backdrop-blur-sm hover:border-[#333] transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {skillCards[activeCard].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                      0{activeCard + 1} / 0{skillCards.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {skillCards[activeCard].title}
                  </h3>
                  <p className="text-sm text-[#777] mt-1 leading-snug">
                    {skillCards[activeCard].description}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-[#444]">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator + label */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            {skillCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeCard ? 1 : -1);
                  setActiveCard(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeCard ? "w-6 bg-accent" : "w-1.5 bg-[#333]"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#444]">
            Swipe cards to cycle skills
          </span>
        </div>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <p className="text-sm text-[#666] max-w-md leading-relaxed">
            Full-stack developer & AI engineer crafting high-performance digital
            products with modern web technologies and autonomous AI systems.
          </p>
          <a
            href="/resume.pdf"
            download="Mehwish_Fatima_Resume.pdf"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#333] rounded-full px-6 py-2.5 text-xs uppercase tracking-widest text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Resume
          </a>
        </div>
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

      {/* Decorative grid lines */}
      <div className="absolute top-0 right-6 md:right-10 h-full w-px bg-[#1a1a1a]" />
      <div className="absolute top-0 right-[33%] h-full w-px bg-[#1a1a1a] hidden md:block" />
    </section>
  );
}
