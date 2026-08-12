"use client";

import { useEffect, useRef } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  getAlt?: (index: number) => string;
}

export default function Lightbox({ images, index, onClose, onNavigate, getAlt }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((index as number) + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate(((index as number) - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, index, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const current = index as number;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className={styles.close}
        aria-label="Close image viewer"
        onClick={onClose}
      >
        &times;
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((current - 1 + images.length) % images.length);
          }}
        >
          &#8249;
        </button>
      )}

      <img
        src={images[current]}
        alt={getAlt ? getAlt(current) : `Image ${current + 1} of ${images.length}`}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((current + 1) % images.length);
          }}
        >
          &#8250;
        </button>
      )}

      {images.length > 1 && (
        <div className={styles.counter}>
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
