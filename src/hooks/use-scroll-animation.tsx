
import { useState, useEffect, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1, 
    rootMargin = '0px 0px -100px 0px', 
    triggerOnce = true 
  } = options;
  
  const [ref, setRef] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref) {
            observer.unobserve(ref);
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

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, triggerOnce, threshold, rootMargin]);

  return [{ current: ref } as RefObject<T>, isVisible];
}

export function useParallax(speed: number = 0.1) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return {
    y: offset * speed,
    style: { transform: `translateY(${offset * speed}px)` }
  };
}
