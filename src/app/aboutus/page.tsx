import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Vashishtha Luxury Fashion Ltd.",
  description:
    "100+ in-house artisans, 4,000+ sq. ft. Mumbai atelier, and ISO 9001 / Sedex certified production preserving Indian embroidery heritage for global couture brands since 2010.",
};

const testimonials = [
  {
    name: "Ceren Coskun",
    location: "Istanbul, Turkey",
    image: "/images/source/testimonial-ceren.png",
    quote:
      "We love to work together through our shared history. Price challenges appear at times, but we always solve them together and keep building.",
  },
  {
    name: "Emma Hart",
    location: "London, UK",
    image: null,
    quote:
      '"Working with Vashishtha is always a pleasure, their efficiency and understanding of creative briefs is excellent, alongside their considerate and inspiring team."',
  },
  {
    name: "Luca Capellini",
    location: "ICEBERG, UK",
    image: "/images/source/testimonial-luca.png",
    quote:
      "The team is reliable for quality, schedule discipline, and customer-first development from embroidered panels to finished garments and accessories.",
  },
  {
    name: "Matthew Allen",
    location: "London, UK",
    image: "/images/source/testimonial-matthew.jpg",
    quote:
      "Across bespoke and commercial projects, Vashishtha consistently delivers embroidery at an exceptional standard while staying true to creative vision.",
  },
];

export default function AboutUs() {
  return (
    <div style={{ paddingTop: "73px", minHeight: "100vh" }}>
      <PageHero
        imageSrc="/images/source/about-infrastructure.jpg"
        tagline="Vashishtha Atelier • Since 2010"
        title="About Vashishtha"
        subtitle="Preserving Indian embroidery traditions while leading global couture and pret-a-porter development with hand craftsmanship and machine precision."
        stats={[
          { value: "100+", label: "In-House Artisans" },
          { value: "4,000+ SQ. FT.", label: "Atelier Space" },
          { value: "GLOBAL", label: "Couture Reach" },
        ]}
      />
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "4rem" }}>

        <p className="fade-in text-body" style={{ animationDelay: "0.2s", textAlign: "center", maxWidth: "920px", margin: "0 auto 3rem" }}>
          At Vashishtha Luxury Fashion Ltd., every piece is curated with care, precision, and respect for Indian embroidery heritage. The company combines traditional craftsmanship with a modern development mindset so each client brief can move from embellishment concept to finished garment with clarity.
        </p>

        <section className="slide-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          <img src="/images/source/about-infrastructure.jpg" alt="Vashishtha infrastructure" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "4 / 3" }} />
          <img src="/images/source/about-machine.jpg" alt="Computerized sequins embroidery setup" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "4 / 3" }} />
          <img src="/images/source/about-certification.jpg" alt="Certifications" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "4 / 3" }} />
        </section>

        <section className="slide-up" style={{ animationDelay: "0.2s", marginBottom: "2rem", padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          <h2 className="title-medium" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Mission</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Co-founded in 2010 by Ravi Dhareshivkar and Mustak Odiya, Vashishtha's mission is to preserve and promote embellished textile traditions while remaining a transparent, reliable, and adaptable development partner for global clients.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Sustainability is a core priority. The team actively builds swatch archives with sustainable materials and keeps compliance-focused sourcing at the center of each season's development.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>
            Vashishtha upholds social compliance standards through regular audits, and maintains strict confidentiality for upcoming collections and design-sensitive developments.
          </p>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.25s", marginBottom: "2rem", padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          <h2 className="title-medium" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Infrastructure & Global Reach</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Spread across 4,000+ sq. ft. of sampling and production space, with 100+ in-house artisans and specialized departments, Vashishtha supports consistent quality, frequent WIP communication, and structured delivery timelines.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Since 2010, we have built relationships across couture and pret-a-porter markets globally. Our systems are geared to international standards for both export documentation and quality control.
          </p>
          <img src="/images/source/about-global.jpg" alt="Global reach" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "16 / 9" }} />
        </section>

        <section className="slide-up" style={{ animationDelay: "0.28s", marginBottom: "2rem", padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          <h2 className="title-medium" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>In-House Machine Capability</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Vashishtha operates an in-house 2-head computerized embroidery machine equipped with 8 sequin tracks, 12 thread needles, and a cording device for engineered sequins, thread, and cord-work developments.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The setup supports sequins in 3, 4, 5, 6, 7, and 9 mm sizes and enables both yardage and pattern-piece execution, helping the team respond faster during sampling and approvals.
          </p>
          <img src="/images/source/about-machine.jpg" alt="Computerized sequins embroidery setup" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "16 / 9" }} />
        </section>

        <section className="slide-up" style={{ animationDelay: "0.3s", marginBottom: "2.5rem", padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          <h2 className="title-medium" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Core Expertise</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "0.8rem" }}>
            High fashion and high-end embroidery remain our signature. We combine hand and machine embroidery with digital print, hand painting, jewelry/accessory development, crochet, macrame, molding, and finishing techniques.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>
            With in-house CAD, sourcing, and execution teams plus a large design library, we support clients from first concept through tailored, runway-ready outcomes.
          </p>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.35s", marginBottom: "2.5rem", padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          <h2 className="title-medium" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Compliance & Certifications</h2>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
            <li>ISO 9001:2021 certified manufacturing and quality management systems</li>
            <li>Sedex social compliance membership: ZS408389016</li>
            <li>MPCB-issued zero-wastage environment-friendly compliance</li>
            <li>Strict stance against child labor and business practices that violate domestic or international regulations</li>
            <li>Client confidentiality treated as a highest-priority operational standard</li>
          </ul>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="title-medium text-center" style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Client Voices</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {testimonials.map((item) => (
              <article key={item.name} style={{ border: "1px solid var(--color-border)", padding: "1rem", background: "var(--color-surface)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "1px solid var(--color-border)" }} />
                  ) : (
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid var(--color-border)", background: "var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 600, color: "var(--color-text-muted)", flexShrink: 0 }}>
                      {item.name.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{item.location}</p>
                  </div>
                </div>
                <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.quote}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
