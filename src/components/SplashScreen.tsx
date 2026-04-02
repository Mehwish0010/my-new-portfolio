"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Deterministic seed-based random
function sr(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Neural network nodes and connections
function NeuralNetwork() {
  const nodes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    cx: 10 + sr(i * 13 + 1) * 80,
    cy: 10 + sr(i * 13 + 2) * 80,
    r: sr(i * 13 + 3) * 2 + 1.5,
    delay: sr(i * 13 + 4) * 2,
  }));

  const connections: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].cx - nodes[j].cx;
      const dy = nodes[i].cy - nodes[j].cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 30) {
        connections.push({
          x1: nodes[i].cx,
          y1: nodes[i].cy,
          x2: nodes[j].cx,
          y2: nodes[j].cy,
          delay: sr(i * 7 + j * 3) * 1.5,
        });
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0f03e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {connections.map((c, i) => (
        <motion.line
          key={i}
          x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke="url(#lineGrad)"
          strokeWidth="0.15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: c.delay, ease: "easeOut" }}
        />
      ))}
      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={n.cx} cy={n.cy} r={n.r}
          fill="none"
          stroke="#c0f03e"
          strokeWidth="0.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            delay: n.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      {/* Data pulses traveling along connections */}
      {connections.slice(0, 8).map((c, i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="0.6"
          fill="#c0f03e"
          initial={{ cx: c.x1, cy: c.y1, opacity: 0 }}
          animate={{
            cx: [c.x1, c.x2],
            cy: [c.y1, c.y2],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: sr(i * 19 + 7) * 3,
            repeat: Infinity,
            repeatDelay: 2 + sr(i * 11) * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// Orbiting keywords around center
function OrbitRing({ words, radius, duration, reverse = false }: {
  words: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
    >
      {words.map((word, i) => {
        const angle = (360 / words.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.span
            key={word}
            className="absolute text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#333] font-mono whitespace-nowrap"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${reverse ? 360 : -360}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

// AI brain center piece
function AICore({ progress }: { progress: number }) {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
      {/* Outer pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-accent/20"
      />
      {/* Middle ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-4 rounded-full border border-[#1a1a1a]"
      />
      {/* Progress ring */}
      <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90">
        <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#111" strokeWidth="1" />
        <motion.circle
          cx="50%" cy="50%" r="48%"
          fill="none"
          stroke="url(#coreGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="301.6"
          strokeDashoffset={301.6 - (301.6 * progress) / 100}
          style={{ transition: "stroke-dashoffset 0.15s ease" }}
        />
        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c0f03e" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* AI icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
            <motion.path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <span className="text-3xl md:text-5xl font-black font-mono text-white tabular-nums">
          {String(Math.floor(progress)).padStart(3, "0")}
        </span>
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#444] mt-1">
          Booting AI
        </span>
      </div>
    </div>
  );
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const startExit = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    let current = 0;
    const steps = 10;
    const increment = 100 / steps;
    const interval = 100;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);
        setTimeout(startExit, 300);
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
          exit={{
            scale: 1.1,
            opacity: 0,
            filter: "blur(20px)",
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Neural network background */}
          <NeuralNetwork />

          {/* Scanning beam */}
          <motion.div
            initial={{ top: "-2px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] pointer-events-none z-20"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(192,240,62,0.08) 20%, rgba(192,240,62,0.25) 50%, rgba(192,240,62,0.08) 80%, transparent 100%)",
              boxShadow: "0 0 30px rgba(192,240,62,0.1)",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px]"
              style={{ background: "radial-gradient(circle, rgba(192,240,62,0.05) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)" }}
            />
          </div>

          {/* Orbit rings with AI keywords */}
          <div className="absolute inset-0 pointer-events-none">
            <OrbitRing
              words={["AGENTS", "NEURAL", "DEPLOY", "INFERENCE", "TOKENS", "EMBEDDINGS"]}
              radius={220}
              duration={30}
            />
            <OrbitRing
              words={["NEXT.JS", "PYTHON", "FASTAPI", "CREWAI", "LANGCHAIN", "OPENAI", "N8N", "DOCKER"]}
              radius={300}
              duration={45}
              reverse
            />
          </div>

          {/* Center: AI Core */}
          <div className="relative z-10 flex flex-col items-center">
            <AICore progress={progress} />

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 text-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">
                Mehwish Fatima
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] text-accent/60 mb-6">
                Agentic AI &amp; Full-Stack Engineer
              </p>
            </motion.div>

            {/* Skill tags appearing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 max-w-md"
            >
              {["Multi-Agent Systems", "Autonomous Workflows", "Full-Stack Apps", "AI Pipelines"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="text-[9px] uppercase tracking-[0.2em] text-[#555] border border-[#1a1a1a] rounded-full px-4 py-1.5 bg-[#0a0a0a]/50 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8 h-[2px] bg-[#111] rounded-full overflow-hidden"
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

            {/* Status */}
            <div className="mt-3 flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#333] font-mono">
                {progress < 50 ? "Loading neural modules" : progress < 100 ? "Initializing agents" : "System ready"}
              </span>
            </div>
          </div>

          {/* Corner details */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-8 text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono"
          >
            Portfolio &mdash; 2026
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 right-8 text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono"
          >
            Karachi, PK
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 left-8 flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent/30">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#1a1a1a] font-mono">
              MF.dev
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
