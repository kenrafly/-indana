import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-full font-medium transition-colors text-center";

  const variantStyles = {
    primary: "bg-yellow-600 hover:bg-yellow-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50",
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
