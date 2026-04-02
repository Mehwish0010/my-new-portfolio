"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_LINES = [
  "> sys.boot()",
  "> loading agentic_core... [OK]",
  "> agent.deploy(\"mehwish_fatima\")",
  "> importing neural_modules... [OK]",
  "> compiling full_stack_env...",
  "> status: READY",
];

const STATUS_WORDS = ["BOOT", "INIT", "DEPLOY", "READY"];

function TerminalBootLines() {
  return (
    <motion.div
      className="absolute top-12 left-8 md:top-16 md:left-12 z-10 font-mono text-[10px] md:text-xs space-y-1.5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.35 } },
      }}
    >
      {TERMINAL_LINES.map((line, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "auto" },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden whitespace-nowrap"
          style={{ color: i < 3 ? "#333" : "#444" }}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}

function TypewriterName() {
  const name = "MEHWISH FATIMA";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= name.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    const startDelay = setTimeout(() => {}, 400);
    return () => {
      clearInterval(timer);
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <div className="relative z-20 flex flex-col items-center">
      {/* Subtle glow behind name */}
      <motion.div
        className="absolute w-64 h-32 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        style={{
          background: "radial-gradient(ellipse, #c0f03e 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <h1 className="relative text-2xl sm:text-3xl md:text-5xl font-mono font-bold text-left leading-snug select-none tracking-wider">
        {name.split("").map((char, i) => {
          const isVisible = i < visibleCount;
          const isCursorPos = i === visibleCount;
          return (
            <span key={i} className="relative">
              {isCursorPos && visibleCount < name.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="absolute left-0 text-[#c0f03e]"
                >
                  |
                </motion.span>
              )}
              <span
                style={{
                  color: isVisible ? "#c0f03e" : "transparent",
                  textShadow: isVisible ? "0 0 20px rgba(192,240,62,0.3)" : "none",
                  transition: "color 0.1s ease, text-shadow 0.3s ease",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          );
        })}
      </h1>

      {/* Subtitle — types out after name is done */}
      <motion.p
        className="mt-4 text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#888] text-center font-mono"
        initial={{ opacity: 0, y: 5 }}
        animate={
          visibleCount >= name.length
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 5 }
        }
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Agentic AI &amp; Full-Stack Engineer
      </motion.p>
    </div>
  );
}

function ScanLineOverlay() {
  return (
    <>
      {/* Repeating CRT scan lines */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
          animation: "scanLines 8s linear infinite",
        }}
      />
      {/* Moving scan beam */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none z-30"
        initial={{ top: "-1px" }}
        animate={{ top: "100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(192,240,62,0.06) 20%, rgba(192,240,62,0.15) 50%, rgba(192,240,62,0.06) 80%, transparent 100%)",
        }}
      />
    </>
  );
}

function ProgressPulse({ progress }: { progress: number }) {
  const statusIndex =
    progress < 25 ? 0 : progress < 50 ? 1 : progress < 90 ? 2 : 3;

  return (
    <motion.div
      className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <div className="w-48 md:w-64 h-[2px] bg-[#111] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #8bbf20, #c0f03e, #e8ff80)",
          }}
        />
      </div>
      <span className="mt-2 text-[9px] uppercase tracking-[0.4em] text-[#333] font-mono">
        {STATUS_WORDS[statusIndex]}
      </span>
    </motion.div>
  );
}

function CornerMetadata() {
  return (
    <>
      {/* Top-left */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-8 text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono z-20"
      >
        MF.dev
      </motion.span>

      {/* Top-right blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 right-8 font-mono text-[#333] text-sm z-20"
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.span>
      </motion.span>

      {/* Bottom-left */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-6 left-8 text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono z-20"
      >
        Portfolio &mdash; 2026
      </motion.span>

      {/* Bottom-right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-6 right-8 text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono z-20"
      >
        Karachi, PK
      </motion.span>
    </>
  );
}

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const startExit = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 900);
  }, [onComplete]);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        // Hold before exit
        setTimeout(startExit, 500);
        return;
      }
      setProgress(current);
    }, 80); // ~2.7s to fill

    return () => clearInterval(interval);
  }, [startExit]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{
            opacity: 0,
            y: -30,
            scale: 1.02,
            filter: "blur(8px)",
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center overflow-hidden"
        >
          <ScanLineOverlay />
          <CornerMetadata />
          <TerminalBootLines />
          <TypewriterName />
          <ProgressPulse progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
