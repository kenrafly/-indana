"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const revealVariants = {
    hidden: { left: 0 },
    visible: { left: "100%" },
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255, 222, 85, 0.7)",
          zIndex: 20,
        }}
      />
    </div>
  );
}
