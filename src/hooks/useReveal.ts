"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal: swaps the mount-time `slide-up`/`fade-in` CSS
 * animations (which finish long before a below-the-fold element is ever
 * seen) for an IntersectionObserver that fires once the element scrolls
 * into view. The transition itself is defined in CSS (see Reveal.module.css)
 * so prefers-reduced-motion can drop the motion without needing a
 * synchronous setState in this effect.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
