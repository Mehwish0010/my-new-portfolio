"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

interface SwipeCardProps {
  children: React.ReactNode;
  onSwipe: () => void;
  index: number;
  total: number;
}

export default function SwipeCard({
  children,
  onSwipe,
  index,
  total,
}: SwipeCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        zIndex: total - index,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) {
          onSwipe();
        }
      }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  );
}
