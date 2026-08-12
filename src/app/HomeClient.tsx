"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";

const COLLECTION_IMAGES = [
  { src: '/images/collection-1.jpg', width: 1240, height: 1755 },
  { src: '/images/collection-0017.jpg', width: 1240, height: 1755 },
  { src: '/images/collection-0019.jpg', width: 1240, height: 1755 },
  { src: '/images/collection-2.jpg', width: 1240, height: 1755 },
  { src: '/images/collection-3.jpg', width: 1240, height: 1755 },
  { src: '/images/collection-4.jpg', width: 2012, height: 2648 },
  { src: '/images/collection-5.jpg', width: 2012, height: 2648 },
  { src: '/images/collection-8.jpg', width: 2012, height: 2648 },
];

export default function HomeClient() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section 
        className={styles.hero}
        onClick={() => setVideoEnded(true)}
      >
        <div className={styles.videoWrapper}>
          <div className={styles.videoPlaceholder} style={{ padding: 0, opacity: 1 }}>
            <HeroVideo onEnded={() => setVideoEnded(true)} />
          </div>
        </div>
        <div className={`${styles.heroContent} ${videoEnded ? styles.heroContentVisible : ""}`}>
          <h1 className={`${styles.heroTitle} ${videoEnded ? "slide-up" : ""}`}>
            Luxury Embroidery <br /> <span style={{ color: "var(--color-accent)" }}>Made Global</span>
          </h1>
          <p className={`${styles.heroSubtitle} ${videoEnded ? "fade-in" : ""}`} style={{ animationDelay: '0.4s' }}>
            Couture and pret-a-porter development from Mumbai, with hand craftsmanship, machine precision, and end-to-end garment execution.
          </p>
          <div className={videoEnded ? "fade-in" : ""} style={{ animationDelay: '0.8s' }}>
            <a href="/embroidery" className="btn-primary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* OFFICE & MATERIALS TEASER */}
      <section className="section-padding container">
        <Reveal as="div" className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="title-medium">The Art of Creation</h2>
          <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Every Vashishtha development moves through research, sourcing, embellishment, tailoring, and finishing with constant client-side visibility.
          </p>
        </Reveal>
        
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div className={styles.imagePlaceholder} style={{ padding: 0, border: 'none', backgroundColor: '#fff', position: 'relative' }}>
              <Image src="/images/archive.jpg" alt="Our Workspace" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.galleryTitle}>Hand Embroidery Archive</h3>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imagePlaceholder} style={{ padding: 0, border: 'none', backgroundColor: '#fff', position: 'relative' }}>
              <Image src="/images/source/about-machine.jpg" alt="Computerized embroidery setup" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.galleryTitle}>Machine & CAD Precision</h3>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "4rem" }}>
           <a href="/aboutus" className="btn-outline">Discover Vashishtha</a>
        </div>
      </section>

      <section className="section-padding container" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              title: "100+ In-House Artisans",
              copy: "Sampling and production are supported by specialist teams trained across couture embellishment, garment finishing, and quality control.",
            },
            {
              title: "4,000+ Sq. Ft. Setup",
              copy: "The Mumbai facility is structured for disciplined production, transparent WIP communication, and refined finishing standards.",
            },
            {
              title: "Global Client Reach",
              copy: "Since 2010, Vashishtha has supported international couture and pret-a-porter labels with export-ready execution and compliance-led sourcing.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 0.08}
              className="card-hover"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ marginBottom: "0.75rem", fontSize: "1.3rem" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
      {/* RECENT COLLECTION */}
      <section className="section-padding container">
        <Reveal as="h2" className="title-medium text-center">Vashishtha&apos;s Recent Collection</Reveal>
        <Reveal as="div" delay={0.1} className="text-center" style={{ marginBottom: '2rem' }}>
           <p className="text-body" style={{ maxWidth: "720px", margin: "0 auto" }}>A selection from the source-site collection archive, highlighting embellished silhouettes, surface development, and couture-ready finishing.</p>
        </Reveal>
        <div className={styles.collectionGrid}>
          {COLLECTION_IMAGES.map((img, index) => (
            <Reveal
              key={img.src}
              as="div"
              delay={(index % 4) * 0.08}
              className={`${styles.collectionItem} hover-zoom-container card-hover`}
            >
              <button
                type="button"
                className={styles.collectionItemButton}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View collection item ${index + 1} full size`}
              >
                <Image
                  src={img.src}
                  alt={`Collection Item ${index + 1}`}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="hover-zoom-img"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={COLLECTION_IMAGES.map((img) => img.src)}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        getAlt={(i) => `Collection item ${i + 1}`}
      />
    </div>
  );
}
