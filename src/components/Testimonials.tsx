"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SwipeCard from "./ui/SwipeCard";
import MarqueeTicker from "./ui/MarqueeTicker";

const testimonials = [
  {
    quote:
      "Mehwish transformed our vision into a product that exceeded every expectation. The attention to detail and technical prowess is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    sentiment: "Exceptional",
  },
  {
    quote:
      "Working with Mehwish was a seamless experience. She delivered a high-performance platform that our users love. The AI integration was brilliant.",
    author: "Ahmed Raza",
    role: "Founder, DataFlow AI",
    sentiment: "Outstanding",
  },
  {
    quote:
      "The level of craftsmanship and strategic thinking Mehwish brings to every project is truly remarkable. Our conversion rates doubled.",
    author: "Emily Park",
    role: "Head of Product, ScaleUp",
    sentiment: "Remarkable",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSwipe = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={ref} className="relative py-36 md:py-44">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
            05
          </span>
          <span className="h-px w-8 bg-[#333]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-white mb-20"
        >
          The Impact of Thoughtful Design.
        </motion.h2>

        {/* Swipeable cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[350px] max-w-2xl mx-auto mb-10"
        >
          {testimonials.map((testimonial, i) => {
            const adjustedIndex =
              (i - currentIndex + testimonials.length) % testimonials.length;
            if (adjustedIndex > 2) return null;

            return (
              <SwipeCard
                key={`${testimonial.author}-${currentIndex}-${i}`}
                onSwipe={handleSwipe}
                index={adjustedIndex}
                total={testimonials.length}
              >
                <div
                  className="h-full bg-[#111] border border-[#222] rounded-xl p-8 md:p-10 flex flex-col justify-between"
                  style={{
                    transform: `translateY(${adjustedIndex * 8}px) scale(${1 - adjustedIndex * 0.05})`,
                    opacity: adjustedIndex === 0 ? 1 : 0.5,
                  }}
                >
                  {/* Quote mark */}
                  <div>
                    <span className="text-5xl text-accent leading-none">
                      &ldquo;
                    </span>
                    <p className="text-[#ccc] text-lg leading-relaxed mt-2">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-[#666] text-xs">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider text-accent border border-accent/30 rounded-full px-5 py-2">
                        Verified Quote
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#888] border border-[#333] rounded-full px-5 py-2">
                        Sentiment: {testimonial.sentiment}
                      </span>
                    </div>
                  </div>
                </div>
              </SwipeCard>
            );
          })}
        </motion.div>

        {/* Swipe instruction */}
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#444] mb-20">
          Swipe card to cycle
        </p>
      </div>

      {/* Marquee */}
      <MarqueeTicker />
    </section>
  );
}
