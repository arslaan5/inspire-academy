import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
}

const animationClasses = {
  "fade-up": "animate-fade-in-up",
  "fade-down": "animate-fade-in-down",
  "fade-left": "animate-fade-in-left",
  "fade-right": "animate-fade-in-right",
  scale: "animate-scale-in",
  fade: "animate-fade-in",
};

export const ScrollReveal = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
