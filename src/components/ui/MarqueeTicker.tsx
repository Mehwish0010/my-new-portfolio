"use client";

const words = [
  "PRECISION",
  "STRUCTURE",
  "INNOVATION",
  "MOMENTUM",
];

export default function MarqueeTicker() {
  const content = words.join(" · ") + " · ";

  return (
    <div className="overflow-hidden py-8 border-t border-b border-[#1a1a1a]">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider px-4">
          {content}
        </span>
        <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider px-4">
          {content}
        </span>
        <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider px-4">
          {content}
        </span>
        <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider px-4">
          {content}
        </span>
      </div>
    </div>
  );
}
