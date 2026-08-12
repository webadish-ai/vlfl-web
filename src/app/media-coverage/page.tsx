import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Limelight & Press Features",
  description:
    "Editorial features, global runway moments in Paris & Milan, and celebrity styling collaborations highlighting Vashishtha surface embellishments.",
  alternates: {
    canonical: "https://vashishthaluxuryfashionltd.com/media-coverage",
  },
  openGraph: {
    title: "Limelight & Press Features | Vashishtha Luxury Fashion Ltd.",
    description:
      "Editorial features, global runway moments, and celebrity styling collaborations.",
    url: "https://vashishthaluxuryfashionltd.com/media-coverage",
    images: ["/images/source/media-runway-1.jpg"],
  },
};

const runwayImages = [
  "/images/source/media-runway-1.jpg",
  "/images/source/media-runway-2.jpg",
  "/images/source/media-runway-3.jpg",
  "/images/source/media-runway-4.jpg",
];

const photoshootImages = [
  "/images/source/media-shoot-1.jpg",
  "/images/source/media-shoot-2.jpg",
  "/images/source/media-celeb-1.jpg",
];

const pressImages = [
  "/images/source/media-celeb-2.jpg",
  "/images/source/media-celeb-3.jpg",
];

export default function MediaCoverage() {
  return (
    <div style={{ paddingTop: "73px", minHeight: "100vh" }}>
      <PageHero
        variant="gradient"
        tagline="International Recognition"
        title="Vashishtha in the Limelight"
        subtitle="Editorial features, global runway moments, and celebrity styling collaborations."
        stats={[
          { value: "RUNWAY", label: "Paris & Milan Features" },
          { value: "EDITORIAL", label: "Global Press Coverage" },
          { value: "COUTURE", label: "Celebrity Styling" },
        ]}
      />
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "4rem" }}>

        <Reveal as="p" className="fade-in text-body" style={{ maxWidth: "900px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          Alongside intricate embroidery development, Vashishtha&apos;s work appears in runway presentations, editorial shoots, and celebrity styling references across global fashion media.
        </Reveal>

        <section style={{ marginBottom: "2rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>Embroideries For Runway Designers</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Vashishtha supports full development, from material procurement and hand embellishment execution to final assembled garment output, enabling runway-ready delivery.
          </p>
          <ImageGallery
            images={runwayImages.map((src, i) => ({ src, alt: `Runway designer embroidery ${i + 1}` }))}
            minItemWidth="220px"
          />
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>Photoshoot Of Designers Collection</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Client developments have been featured in high-visibility editorial and campaign contexts, with embroidery-first garments adapted for styling and photography.
          </p>
          <ImageGallery
            images={photoshootImages.map((src, i) => ({ src, alt: `Designer collection photoshoot ${i + 1}` }))}
            minItemWidth="220px"
          />
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>Media Coverage</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Vashishtha&apos;s client&apos;s work has been showcased in prestigious fashion magazines, photoshoots, and celebrity moments, demonstrating the range of the studio&apos;s execution capability.
          </p>
          <ImageGallery
            images={pressImages.map((src, i) => ({ src, alt: `Media and celebrity coverage ${i + 1}` }))}
            minItemWidth="220px"
          />
        </section>

        <Reveal as="div" style={{ fontSize: "0.78rem", color: "var(--color-text)", opacity: 0.68, textAlign: "justify", lineHeight: 1.7, borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
          <strong>Disclaimer:</strong> Vashishtha Luxury Fashion Ltd. showcases garments and embroidery developments featured in international events, including the Met Gala, red carpets, brand shows, and media outlets. Final fashion design ownership remains with the respective client and brand; Vashishtha&apos;s core role is embroidery and technical execution support.
        </Reveal>
      </div>
    </div>
  );
}
