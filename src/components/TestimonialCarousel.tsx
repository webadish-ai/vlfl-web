"use client";

import { useEffect, useState } from "react";
import styles from "./TestimonialCarousel.module.css";

export interface Testimonial {
  name: string;
  location: string;
  image: string | null;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const AUTO_ADVANCE_MS = 7000;

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, testimonials.length]);

  const goTo = (next: number) => {
    setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.track}>
        <button
          type="button"
          className={styles.navButton}
          aria-label="Previous testimonial"
          onClick={() => goTo(index - 1)}
        >
          &#8249;
        </button>

        <article className={styles.card} aria-live="polite">
          <div className={styles.avatarRow}>
            {current.image ? (
              <img src={current.image} alt={current.name} className={styles.avatar} />
            ) : (
              <div className={styles.avatarFallback}>
                {current.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}
            <div>
              <p className={styles.name}>{current.name}</p>
              <p className={styles.location}>{current.location}</p>
            </div>
          </div>
          <p className={styles.quote}>{current.quote}</p>
        </article>

        <button
          type="button"
          className={styles.navButton}
          aria-label="Next testimonial"
          onClick={() => goTo(index + 1)}
        >
          &#8250;
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${t.name}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
