
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale"
    | "blur-in"
    | "slide-in"
    | "bounce";
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  duration?: number;
  rootMargin?: string;
}

const AnimatedText = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
  duration,
  rootMargin = "0px 0px -100px 0px",
}: AnimatedTextProps) => {
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
        rootMargin
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
  }, [triggerOnce, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        animationDuration: duration ? `${duration}ms` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
