"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Deterministic seed-based random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Floating particles
function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 3 + 1) * 100,
    y: seededRandom(i * 3 + 2) * 100,
    size: seededRandom(i * 3 + 3) * 3 + 1,
    duration: seededRandom(i * 7 + 4) * 4 + 3,
    delay: seededRandom(i * 7 + 5) * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: `${p.y}%`, x: `${p.x}%` }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [`${p.y}%`, `${p.y - 20}%`],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-accent"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}

// Animated wave bars loader
function WaveLoader({ progress }: { progress: number }) {
  const bars = 24;
  return (
    <div className="flex items-end gap-[3px] h-16 md:h-20 mb-10">
      {Array.from({ length: bars }, (_, i) => {
        const barProgress = Math.min(100, Math.max(0, (progress - i * (100 / bars)) * (bars / 30)));
        const height = 20 + seededRandom(i * 11 + 7) * 80;
        return (
          <motion.div
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: [
                seededRandom(i * 5 + 1) * 0.3 + 0.2,
                seededRandom(i * 5 + 2) * 0.7 + 0.3,
                seededRandom(i * 5 + 3) * 0.3 + 0.2,
              ],
              opacity: barProgress > 0 ? 1 : 0.15,
            }}
            transition={{
              scaleY: {
                duration: 1 + seededRandom(i * 5 + 4) * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.04,
              },
              opacity: { duration: 0.2 },
            }}
            className="w-[3px] md:w-1 rounded-full origin-bottom"
            style={{
              height: `${height}%`,
              background:
                barProgress > 0
                  ? `linear-gradient(to top, #c0f03e, #38BDF8)`
                  : "#1a1a1a",
              transition: "background 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
}

// Glitch text effect
function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 text-[#38BDF8] z-0"
        animate={{ x: [-1, 1, 0, -1, 0], y: [0, 1, -1, 0, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
        style={{ clipPath: "inset(10% 0 60% 0)" }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 text-[#a855f7] z-0"
        animate={{ x: [1, -1, 0, 1, 0], y: [0, -1, 1, 0, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3, delay: 0.15 }}
        style={{ clipPath: "inset(50% 0 10% 0)" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

// Letter-by-letter text reveal
function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const startExit = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  // Count 0→100 in 10 steps
  useEffect(() => {
    let current = 0;
    const steps = 10;
    const increment = 100 / steps;
    const interval = 100; // 100ms per step = 1 second total

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);
        setTimeout(startExit, 200);
        return;
      }
      setProgress(current);
    }, interval);

    return () => clearInterval(timer);
  }, [startExit]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <Particles />

          {/* Scanning line */}
          <motion.div
            initial={{ top: "-2px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] pointer-events-none z-20"
            style={{ background: "linear-gradient(90deg, transparent, rgba(192,240,62,0.15), transparent)" }}
          />

          {/* Radial gradient backdrop */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-30"
              style={{ background: "radial-gradient(circle, rgba(192,240,62,0.08), transparent 70%)" }}
            />
          </div>

          {/* Expanding rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border pointer-events-none"
              style={{ borderColor: "rgba(192,240,62,0.08)" }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Wave bars */}
            <WaveLoader progress={progress} />

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <span className="text-6xl md:text-8xl font-black font-mono text-white tabular-nums">
                {String(Math.floor(progress)).padStart(3, "0")}
              </span>
              <span className="text-lg md:text-xl font-mono text-accent ml-1">%</span>
            </motion.div>

            {/* Name with glitch */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
                <GlitchText text="Mehwish Fatima" />
              </h1>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xs uppercase tracking-[0.4em] text-accent/70"
                >
                  Full-Stack &amp; Agentic AI Developer
                </motion.p>
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 240 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden"
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #c0f03e, #38BDF8, #a855f7)",
                  transition: "width 0.1s ease",
                }}
              />
            </motion.div>

            {/* Status text with typing effect */}
            <div className="mt-4 flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#444] font-mono">
                {progress < 30 && "Loading modules"}
                {progress >= 30 && progress < 60 && "Building interface"}
                {progress >= 60 && progress < 90 && "Rendering components"}
                {progress >= 90 && "Ready"}
              </span>
            </div>
          </div>

          {/* Corner labels */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 text-[9px] uppercase tracking-[0.3em] text-[#222] font-mono"
          >
            Portfolio 2025
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 text-[9px] uppercase tracking-[0.3em] text-[#222] font-mono"
          >
            Karachi, PK
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-8 text-[9px] uppercase tracking-[0.3em] text-[#222] font-mono"
          >
            v1.0
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
