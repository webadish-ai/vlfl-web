import PageHero from "@/components/PageHero";

const servicesList = [
  { title: "Computerized Thread & Sequin Embroidery", img: "/images/computerized-thread.jpg" },
  { title: "Embellished Jewellery & Accessories", img: "/images/embellished-jewellery.jpg" },
  { title: "Hand & Hand Guided Embroidery", img: "/images/hand-guided.jpg" },
  { title: "Hand Painting", img: "/images/hand-painting.jpg" },
  { title: "Mould / Set Stone Jewellery", img: "/images/mould-stone.jpg" },
  { title: "Digital Printing", img: "/images/digital-print.jpg" },
  { title: "Crochet & Macrame", img: "/images/crochet-macrame.jpg" },
  { title: "Leather Finishing / Accessories", img: "/images/leather-finishing.jpg" },
  { title: "Sustainable Products", img: "/images/sustainable-products.jpg" },
];

const noBaseFabric = [
  "/images/source/service-nobase-1.jpg",
  "/images/source/service-nobase-2.jpg",
  "/images/source/service-nobase-3.jpg",
  "/images/source/service-nobase-4.jpg",
  "/images/source/service-nobase-5.jpg",
  "/images/source/service-nobase-6.jpg",
];

const cutSew = [
  "/images/source/service-cutsew-1.jpg",
  "/images/source/service-cutsew-2.jpg",
  "/images/source/service-cutsew-3.jpg",
];

export default function Services() {
  return (
    <div style={{ paddingTop: "73px", minHeight: "100vh" }}>
      <PageHero
        imageSrc="/images/raw-materials.jpg"
        tagline="Surface Development & Embellishment"
        title="Our Specialized Services"
        subtitle="From hand-rendered zardozi to high-precision computerized sequin and multi-technique garment execution."
        stats={[
          { value: "9+", label: "Technique Specializations" },
          { value: "COUTURE", label: "Ready Execution" },
          { value: "100%", label: "In-House Development" },
        ]}
      />
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "4rem" }}>
        <p className="fade-in text-body" style={{ animationDelay: "0.2s", margin: "0 auto 2.5rem", maxWidth: "900px", textAlign: "center" }}>
          Vashishtha Luxury Fashion Ltd. creates distinctive embellishment developments through hand embroidery, machine precision, material innovation, color detailing, fabric manipulation, prints, and engineered finishing.
        </p>

        <section className="slide-up" style={{ animationDelay: "0.25s", marginBottom: "2.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Hand Embroidery</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            A source-site highlight section showcasing the hand embroidery language Vashishtha is known for: intricate surface work, distinctive bead mixes, and couture-led execution discipline.
          </p>
          <img
            src="/images/archive.jpg"
            alt="Hand embroidery archive"
            style={{
              width: "100%",
              height: "min(75vh, 760px)",
              border: "1px solid var(--color-border)",
              objectFit: "contain",
              objectPosition: "center top",
              background: "#000",
            }}
          />
        </section>

        <section className="slide-up" style={{ animationDelay: "0.3s", marginBottom: "2.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "1rem" }}>Variety Of Embellishments</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {servicesList.map((service, index) => (
              <article key={service.title} className="slide-up card-hover" style={{ animationDelay: `${0.2 + index * 0.05}s`, border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
                <img src={service.img} alt={service.title} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
                <h3 style={{ margin: 0, padding: "0.9rem", fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>{service.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.35s", marginBottom: "2.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>Assembled Textile Garments - No Base Fabric</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Experimental constructs where embellishment structure itself forms the garment body, engineered for lightness, flexibility, and visual impact.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem" }}>
            {noBaseFabric.map((src) => (
              <img key={src} src={src} alt="Assembled textile garment" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "3 / 4" }} />
            ))}
          </div>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.4s", marginBottom: "2.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>Stitched Textile Garments - Cut & Sew Tailoring</h2>
          <p style={{ marginTop: 0, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Alongside embellishment execution, we support complete tailoring and finishing for full-factored development from raw materials to final dispatch-ready garments.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {cutSew.map((src) => (
              <img key={src} src={src} alt="Cut and sew garment" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "3 / 4" }} />
            ))}
          </div>
        </section>

        <div className="slide-up" style={{ animationDelay: "0.45s", fontSize: "0.78rem", color: "var(--color-text)", opacity: 0.68, textAlign: "justify", lineHeight: 1.7, borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
          <strong>Disclaimer:</strong> Vashishtha Luxury Fashion Ltd. showcases garments featured in international fashion events, including the Met Gala, red carpets, brand shows, and media outlets to demonstrate execution capability. Final designs remain the sole property of client brands, and Vashishtha specializes in embroidery craftsmanship and technical execution support rather than retail sale of these garments.
        </div>
      </div>
    </div>
  );
}
