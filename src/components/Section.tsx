import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
  padding?: "normal" | "large" | "small";
}

export default function Section({
  children,
  className = "",
  background = "white",
  padding = "normal",
}: SectionProps) {
  const bgColors = {
    white: "bg-black text-gray-100",
    light: "bg-zinc-900 text-gray-200",
    dark: "bg-black text-white",
  };

  const paddingSize = {
    normal: "py-16",
    large: "py-24",
    small: "py-8",
  };

  return (
    <section
      className={`${bgColors[background]} ${paddingSize[padding]} ${className}`}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
