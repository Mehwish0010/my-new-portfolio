"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MarqueeTicker from "./ui/MarqueeTicker";

const testimonials = [
  {
    quote:
      "Mehwish transformed our vision into a product that exceeded every expectation. The attention to detail and technical prowess is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    accent: "#c0f03e",
  },
  {
    quote:
      "Working with Mehwish was a seamless experience. She delivered a high-performance platform that our users love. The AI integration was brilliant.",
    author: "Ahmed Raza",
    role: "Founder, DataFlow AI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    accent: "#38BDF8",
  },
  {
    quote:
      "The level of craftsmanship and strategic thinking Mehwish brings to every project is truly remarkable. Our conversion rates doubled.",
    author: "Emily Park",
    role: "Head of Product, ScaleUp",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    accent: "#a855f7",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section ref={ref} className="relative min-h-screen py-32 md:py-40 overflow-hidden">
      {/* Ambient glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${active.accent}06 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono">05</span>
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-accent/50 block"
          />
          <span className="text-xs uppercase tracking-[0.3em] text-[#777]">Testimonials</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-4"
            >
              Client <span className="text-accent">Voices.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#555] max-w-md"
            >
              What people say after working with me.
            </motion.p>
          </div>

          {/* Avatar stack + counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.author}
                  src={t.avatar}
                  alt={t.author}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onClick={() => setActiveIndex(i)}
                  className={`w-10 h-10 rounded-full object-cover border-2 cursor-pointer transition-all duration-300 ${
                    activeIndex === i
                      ? "border-accent scale-110 z-10"
                      : "border-[#222] hover:border-[#444]"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-[#444]">
              {String(activeIndex + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        {/* Main testimonial display */}
        <div className="grid md:grid-cols-[1fr,auto] gap-16 items-start">
          {/* Left: big quote */}
          <div className="relative">
            {/* Giant decorative quote mark */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-8 -left-4 text-[120px] md:text-[160px] leading-none font-serif pointer-events-none select-none"
              style={{ color: `${active.accent}08` }}
            >
              &ldquo;
            </motion.span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-[1.5] mb-12">
                  {active.quote}
                </p>

                <div className="flex items-center gap-5">
                  <img
                    src={active.avatar}
                    alt={active.author}
                    className="w-14 h-14 rounded-full object-cover border-2"
                    style={{ borderColor: `${active.accent}50` }}
                  />
                  <div>
                    <p className="text-base font-bold text-white">{active.author}</p>
                    <p className="text-sm text-[#666]">{active.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: active.rating }).map((_, si) => (
                      <motion.svg
                        key={si}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + si * 0.08 }}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={active.accent}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex items-center gap-4 mt-14">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  onClick={() => setActiveIndex(i)}
                  className="relative group"
                >
                  <div
                    className="w-12 h-1 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: activeIndex === i ? t.accent : "#1a1a1a",
                    }}
                  />
                  {/* Auto-progress bar */}
                  {activeIndex === i && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: `${t.accent}80` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: vertical stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex flex-col gap-4 w-56"
          >
            {[
              { value: "100%", label: "Satisfaction Rate" },
              { value: "15+", label: "Happy Clients" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="group relative rounded-2xl border border-[#151515] bg-[#0a0a0a] p-6 hover:border-[#252525] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative block text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="relative block text-[10px] uppercase tracking-[0.2em] text-[#555]">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Marquee banner */}
      <div className="mt-24">
        <MarqueeTicker />
      </div>
    </section>
  );
}
