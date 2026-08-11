import PageHero from "@/components/PageHero";

const initiatives = [
  {
    id: "01",
    title: "Providing Skills & Enrichment To Neurodiverse Children",
    image: "/images/source/initiative-skill.jpg",
    description:
      "Vashishtha aims to collaborate with NGOs and trusts to conduct practical craft workshops for neurodiverse children, including hand painting and accessory creation pathways.",
    detail:
      "The long-term objective is employability through creative training and confidence-building in supportive environments.",
  },
  {
    id: "02",
    title: "Women Empowerment",
    image: "/images/source/initiative-women.jpg",
    description:
      "As hand embroidery remains male-dominated, Vashishtha focuses on skill training for underprivileged women to support financial independence and household resilience.",
    detail:
      "Training modules are planned around practical techniques required in luxury apparel development, followed by employment opportunities within production workflows.",
  },
  {
    id: "03",
    title: "Reduction Of Plastic Usage",
    image: "/images/source/initiative-plastic.jpg",
    description:
      "The company is committed to reducing virgin plastic consumption across sourcing, development, and internal factory operations.",
    detail:
      "Teams actively evaluate alternate materials and encourage clients to request sustainable substitutions wherever technically feasible.",
  },
  {
    id: "04",
    title: "Eco-Friendly Packaging",
    image: "/images/source/initiative-packaging.jpg",
    description:
      "Larger shipments are packed in recycled cardboard and paper-based cushioning, with recyclable protective materials used when necessary.",
    detail:
      "Vashishtha continues to evaluate paper tape, biodegradable waterproof alternatives, and client-feedback-led packaging improvements.",
  },
  {
    id: "05",
    title: "Embroidery Supplies Toward Educating Future Generations",
    image: "/images/source/initiative-education.jpg",
    description:
      "Through collaboration with The Stitch Archive in London, dead-stock materials are redirected for textile education and practical skills development.",
    detail:
      "This helps emerging designers understand specialist materials while reducing wastage across the production ecosystem.",
  },
];

export default function Initiative() {
  return (
    <div style={{ paddingTop: "73px", minHeight: "100vh" }}>
      <PageHero
        imageSrc="/images/source/initiative-plastic.jpg"
        tagline="Sustainability & Community"
        title="Empowering Artisans & Eco-Sourcing"
        subtitle="Pioneering eco-friendly embellishments, artisan welfare, and ethical production practices."
        stats={[
          { value: "SEDEX", label: "Audited Facility" },
          { value: "ECO", label: "Sustainable Sourcing" },
          { value: "UTTHAN", label: "Artisan Empowerment" },
        ]}
      />
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "4rem" }}>

        <p className="fade-in text-body" style={{ animationDelay: "0.2s", maxWidth: "920px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          Since 2010, Vashishtha Luxury Fashion Ltd. has built initiatives around artisan livelihood, inclusive skills, and environmental responsibility in textile and embroidery systems.
        </p>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          {initiatives.map((item, index) => (
            <article key={item.id} className="slide-up card-hover" style={{ animationDelay: `${0.2 + index * 0.08}s`, border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(220px, 320px) 1fr", gap: "1rem", alignItems: "start" }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", border: "1px solid var(--color-border)" }} />
                <div>
                  <p style={{ margin: 0, color: "var(--color-border)", fontFamily: "var(--font-serif)", fontSize: "2rem", lineHeight: 1 }}>{item.id}</p>
                  <h2 style={{ margin: "0.25rem 0 0.6rem", fontFamily: "var(--font-serif)", fontSize: "1.35rem" }}>{item.title}</h2>
                  <p style={{ margin: "0 0 0.6rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.description}</p>
                  <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
