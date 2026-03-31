"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pkt = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(pkt);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-48 md:py-60 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          07
        </span>
        <span className="h-px w-8 bg-[#333]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">
          Contact
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-sm text-[#555] uppercase tracking-[0.2em] mb-6"
      >
        Got a vision?
      </motion.p>

      <motion.a
        href="mailto:mehwishsheikh0010sheikh@gmail.com"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="block text-[clamp(2.5rem,6vw,6rem)] font-bold text-white leading-none hover:text-accent transition-colors duration-500"
      >
        LET&apos;S WORK
        <br />
        TOGETHER.
      </motion.a>

      {/* Info grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-32 grid md:grid-cols-3 gap-16 border-t border-[#1a1a1a] pt-16"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-2">
            Connect via Email
          </p>
          <a
            href="mailto:mehwishsheikh0010sheikh@gmail.com"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            mehwishsheikh0010sheikh@gmail.com
          </a>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-2">
            Location
          </p>
          <p className="text-sm text-[#999]">Karachi, Pakistan</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-2">
            Local Time
          </p>
          <p className="text-sm text-[#999] font-mono">{time || "Loading..."} PKT</p>
        </div>
      </motion.div>
    </section>
  );
}
