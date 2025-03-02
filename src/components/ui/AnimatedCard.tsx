
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale"
    | "blur-in";
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  hoverEffect?: boolean;
}

const AnimatedCard = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
  hoverEffect = true,
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl overflow-hidden",
        isVisible ? `animate-${animation}` : "opacity-0",
        hoverEffect && 
          "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards"
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
