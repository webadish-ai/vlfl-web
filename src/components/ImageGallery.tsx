"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  minItemWidth?: string;
  aspectRatio?: string;
  gap?: string;
  imageStyle?: CSSProperties;
}

/**
 * Grid of images that opens a keyboard-navigable Lightbox on click.
 * Each item scroll-reveals via Reveal instead of animating on mount.
 */
export default function ImageGallery({
  images,
  minItemWidth = "240px",
  aspectRatio = "3 / 4",
  gap = "1rem",
  imageStyle,
}: ImageGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
          gap,
        }}
      >
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            as="div"
            delay={(i % 4) * 0.06}
            className="card-hover"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${img.alt} full size`}
              style={{ display: "block", position: "relative", width: "100%", aspectRatio, padding: 0, border: "none", background: "none", cursor: "pointer", overflow: "hidden" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={`(max-width: 768px) 50vw, ${minItemWidth}`}
                style={{ objectFit: "cover", ...imageStyle }}
              />
            </button>
            {img.caption && (
              <h3 style={{ margin: 0, padding: "0.9rem", fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>
                {img.caption}
              </h3>
            )}
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={images.map((img) => img.src)}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
        getAlt={(i) => images[i].alt}
      />
    </>
  );
}
