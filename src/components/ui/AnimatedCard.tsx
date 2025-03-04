
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
    | "blur-in"
    | "slide-in"
    | "bounce";
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  hoverEffect?: boolean;
  duration?: number;
  rootMargin?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const AnimatedCard = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
  hoverEffect = true,
  duration,
  rootMargin = "0px 0px -100px 0px",
  parallax = false,
  parallaxSpeed = 0.1,
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Handle scroll position for parallax effect
  useEffect(() => {
    if (!parallax) return;
    
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [parallax]);

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

  const parallaxStyle = parallax ? {
    transform: `translateY(${scrollPos * parallaxSpeed}px)`,
    transition: 'transform 0.1s ease-out',
  } : {};

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
        animationFillMode: "forwards",
        animationDuration: duration ? `${duration}ms` : undefined,
        ...parallaxStyle
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
