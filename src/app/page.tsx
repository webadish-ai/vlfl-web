"use client";

import { useState } from "react";
import styles from "./page.module.css";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);

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
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="title-medium">The Art of Creation</h2>
          <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Every Vashishtha development moves through research, sourcing, embellishment, tailoring, and finishing with constant client-side visibility.
          </p>
        </div>
        
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div className={styles.imagePlaceholder} style={{ padding: 0, border: 'none', backgroundColor: '#fff' }}>
              <img src="/images/archive.jpg" alt="Our Workspace" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3 className={styles.galleryTitle}>Hand Embroidery Archive</h3>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imagePlaceholder} style={{ padding: 0, border: 'none', backgroundColor: '#fff' }}>
              <img src="/images/source/about-machine.jpg" alt="Computerized embroidery setup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
            <article
              key={item.title}
              className="slide-up card-hover"
              style={{
                animationDelay: `${0.2 + index * 0.08}s`,
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ marginBottom: "0.75rem", fontSize: "1.3rem" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      {/* RECENT COLLECTION */}
      <section className="section-padding container">
        <h2 className="title-medium text-center slide-up">Vashishtha's Recent Collection</h2>
        <div className="text-center slide-up" style={{ animationDelay: '0.2s', marginBottom: '2rem' }}>
           <p className="text-body" style={{ maxWidth: "720px", margin: "0 auto" }}>A selection from the source-site collection archive, highlighting embellished silhouettes, surface development, and couture-ready finishing.</p>
        </div>
        <div className={styles.collectionGrid}>
          {[
            '/images/collection-1.jpg',
            '/images/collection-0017.jpg',
            '/images/collection-0019.jpg',
            '/images/collection-2.jpg',
            '/images/collection-3.jpg',
            '/images/collection-4.jpg',
            '/images/collection-5.jpg',
            '/images/collection-8.jpg',
          ].map((src, index) => (
            <div key={src} className={`${styles.collectionItem} hover-zoom-container slide-up card-hover`} style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
              <img src={src} alt={`Collection Item ${index + 1}`} className="hover-zoom-img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
