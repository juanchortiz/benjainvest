import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number; // duration in milliseconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  startOnView?: boolean; // start animation when element is in view
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  startOnView = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    if (!startOnView) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.3, // trigger when 30% of element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnView]);

  // Count up animation
  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Softer easing function (ease-out-cubic with gentler curve)
      const easeOutCubic = 1 - Math.pow(1 - progress, 2);
      
      setCount(end * easeOutCubic);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // ensure we end at exact value
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { displayValue, elementRef, count };
}

