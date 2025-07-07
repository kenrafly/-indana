"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
  padding?: "normal" | "large" | "small";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  padding = "normal",
  id,
}: SectionProps) {
  const bgColors = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-800 text-white",
  };

  const paddingSize = {
    normal: "py-16",
    large: "py-24",
    small: "py-8",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${bgColors[background]} ${paddingSize[padding]} ${className}`}
      id={id}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
}
