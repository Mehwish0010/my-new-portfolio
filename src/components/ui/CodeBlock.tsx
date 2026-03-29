"use client";

import { motion } from "framer-motion";

export default function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden font-mono text-sm"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#252526] border-b border-[#333]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[#888]">developer.ts</span>
      </div>

      {/* Code content */}
      <div className="p-5 leading-relaxed">
        <div>
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#4fc1ff]">developer</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-[#da70d6]">{"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-[#9cdcfe]">name</span>
          <span className="text-white">:</span>{" "}
          <span className="text-[#ce9178]">&quot;Mehwish Fatima&quot;</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-6">
          <span className="text-[#9cdcfe]">role</span>
          <span className="text-white">:</span>{" "}
          <span className="text-[#ce9178]">
            &quot;Full-Stack &amp; AI Developer&quot;
          </span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-6">
          <span className="text-[#9cdcfe]">tools</span>
          <span className="text-white">:</span>{" "}
          <span className="text-[#da70d6]">[</span>
          <span className="text-[#ce9178]">
            &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Python&quot;,
            &quot;FastAPI&quot;, &quot;CrewAI&quot;
          </span>
          <span className="text-[#da70d6]">]</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-6">
          <span className="text-[#9cdcfe]">quote</span>
          <span className="text-white">:</span>{" "}
          <span className="text-[#ce9178]">
            &quot;Build it right, make it intelligent.&quot;
          </span>
          <span className="text-white">,</span>
        </div>
        <div>
          <span className="text-[#da70d6]">{"}"}</span>
          <span className="text-white">;</span>
        </div>
      </div>
    </motion.div>
  );
}
