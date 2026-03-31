"use client";

import { motion } from "framer-motion";

const agents = [
  { label: "Data Aggregation\nAgent", row: 0, col: 1 },
  { label: "Research\nAgent", row: 1, col: 0 },
  { label: "Analysis\nAgent", row: 1, col: 2 },
  { label: "Transformation\nAgent", row: 2, col: -1 },
  { label: "Decision Support\nAgent", row: 2, col: 3 },
  { label: "Compliance\nAgent", row: 3, col: 0 },
  { label: "Situational\nAwareness\nAgent", row: 3, col: 2 },
  { label: "Remediation\nAgent", row: 4, col: 1 },
];

function Hexagon({
  x,
  y,
  size,
  filled,
  label,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  filled?: boolean;
  label: string;
  delay: number;
}) {
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`;
  }).join(" ");

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      {/* Outer glow */}
      <polygon
        points={points}
        fill="none"
        stroke={filled ? "#c0f03e" : "#c0f03e"}
        strokeWidth={filled ? "3" : "2"}
        opacity={filled ? 1 : 0.6}
      />
      {/* Inner fill */}
      <polygon
        points={Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const s = size - 4;
          return `${x + s * Math.cos(angle)},${y + s * Math.sin(angle)}`;
        }).join(" ")}
        fill={filled ? "#c0f03e" : "#0f0f0f"}
        stroke="none"
      />
      {/* Label */}
      {label.split("\n").map((line, i, arr) => (
        <text
          key={i}
          x={x}
          y={y + (i - (arr.length - 1) / 2) * 14}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-[11px] font-bold uppercase tracking-wider"
          fill={filled ? "#0a0a0a" : "#e0e0e0"}
        >
          {line}
        </text>
      ))}
    </motion.g>
  );
}

export default function HexagonGrid() {
  const hexSize = 56;
  const hexW = hexSize * Math.sqrt(3);
  const hexH = hexSize * 2;
  const gapX = hexW + 6;
  const gapY = hexH * 0.75 + 4;

  const svgW = 420;
  const svgH = 440;
  const centerX = svgW / 2;
  const centerY = svgH / 2;

  // Positions relative to center hex
  const positions: { x: number; y: number; label: string; filled?: boolean }[] = [
    // Center - AI Engine
    { x: centerX, y: centerY, label: "AI\nEngine", filled: true },
    // Top
    { x: centerX, y: centerY - gapY, label: "Data\nAggregation\nAgent" },
    // Top-left
    { x: centerX - gapX * 0.5, y: centerY - gapY * 0.5, label: "Research\nAgent" },
    // Top-right
    { x: centerX + gapX * 0.5, y: centerY - gapY * 0.5, label: "Analysis\nAgent" },
    // Left
    { x: centerX - gapX, y: centerY, label: "Transformation\nAgent" },
    // Right
    { x: centerX + gapX, y: centerY, label: "Decision\nSupport\nAgent" },
    // Bottom-left
    { x: centerX - gapX * 0.5, y: centerY + gapY * 0.5, label: "Compliance\nAgent" },
    // Bottom-right
    { x: centerX + gapX * 0.5, y: centerY + gapY * 0.5, label: "Situational\nAwareness\nAgent" },
    // Bottom
    { x: centerX, y: centerY + gapY, label: "Remediation\nAgent" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#0f0f0f] rounded-lg overflow-hidden border border-[#1a1a1a]">
      {/* Background grid dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #555 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-full max-h-[440px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines from center to surrounding hexagons */}
        {positions.slice(1).map((pos, i) => (
          <motion.line
            key={`line-${i}`}
            x1={centerX}
            y1={centerY}
            x2={pos.x}
            y2={pos.y}
            stroke="#c0f03e"
            strokeWidth="1"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Hexagons */}
        {positions.map((pos, i) => (
          <Hexagon
            key={i}
            x={pos.x}
            y={pos.y}
            size={hexSize}
            filled={pos.filled}
            label={pos.label}
            delay={0.2 + i * 0.1}
          />
        ))}
      </svg>
    </div>
  );
}
