import PageHero from "@/components/PageHero";

const processSteps = [
  {
    step: "01",
    title: "Research & Development",
    desc:
      "Our design team works season-round to build original swatches and techniques aligned with global forecasts, couture standards, and client brief directions.",
  },
  {
    step: "02",
    title: "Sourcing",
    desc:
      "Dedicated sourcing teams procure fabrics and embellishment components from India and overseas, including compliance-oriented options such as lead-free and azo-free materials.",
  },
  {
    step: "03",
    title: "Development From Clients",
    desc:
      "Assigned merchandisers and designers translate each brief into a transparent workflow with regular WIP updates, trim approvals, and material checks.",
  },
  {
    step: "04",
    title: "Artwork & CAD",
    desc:
      "In-house CAD specialists prepare accurate artwork files and iterate quickly against feedback to lock production-ready layouts and panel engineering.",
  },
  {
    step: "05",
    title: "Production",
    desc:
      "A large artisan and tailoring team executes embroidery and assembly with strict process discipline to meet luxury quality and delivery timelines.",
  },
  {
    step: "06",
    title: "Quality Control & Packaging",
    desc:
      "Each output is checked against international standards, then prepared with damage-safe and increasingly eco-conscious packaging methods.",
  },
  {
    step: "07",
    title: "Final Dispatch",
    desc:
      "Dispatch teams coordinate with logistics partners and monitor tracking proactively, ensuring smooth handover and quick resolution of transit issues.",
  },
];

export default function Process() {
  return (
    <div style={{ paddingTop: "73px", minHeight: "100vh" }}>
      <PageHero
        imageSrc="/images/source/process-overview.jpg"
        tagline="Concept to Execution"
        title="Development & Production Process"
        subtitle="A disciplined, transparent 7-stage workflow built for international fashion houses and couture labels."
        stats={[
          { value: "7 STAGES", label: "Structured Workflow" },
          { value: "FULL WIP", label: "Client Visibility" },
          { value: "EXPORT", label: "Ready Compliance" },
        ]}
      />
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "4rem" }}>
        <p className="text-body fade-in" style={{ animationDelay: "0.2s", maxWidth: "900px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          At Vashishtha Luxury Fashion Ltd., execution flows through seven connected stages: Research & Development, Sourcing, Client Development, Artwork & CAD, Production, Quality Control, and Final Dispatch.
        </p>

        <section className="slide-up" style={{ animationDelay: "0.25s", marginBottom: "2.5rem" }}>
          <img src="/images/source/process-overview.jpg" alt="Process overview" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "16 / 9" }} />
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          <img src="/images/source/process-development.png" alt="Development process" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "contain", background: "var(--color-surface)", padding: "1rem", aspectRatio: "4 / 3" }} />
          <img src="/images/source/process-cad.png" alt="CAD process" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "contain", background: "var(--color-surface)", padding: "1rem", aspectRatio: "4 / 3" }} />
          <img src="/images/source/process-product.png" alt="Production process" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "contain", background: "var(--color-surface)", padding: "1rem", aspectRatio: "4 / 3" }} />
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {processSteps.map((item, index) => (
            <article
              key={item.step}
              className="slide-up card-hover"
              style={{ animationDelay: `${0.2 + index * 0.06}s`, padding: "1.4rem", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
            >
              <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: "2.1rem", color: "var(--color-border)", lineHeight: 1 }}>{item.step}</p>
              <h2 style={{ margin: "0.4rem 0 0.6rem", fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>{item.title}</h2>
              <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
            </article>
          ))}
        </div>

        <section className="slide-up" style={{ animationDelay: "0.45s" }}>
          <img src="/images/source/process-quality.jpg" alt="Quality control and dispatch" style={{ width: "100%", border: "1px solid var(--color-border)", objectFit: "cover", aspectRatio: "16 / 9" }} />
        </section>
      </div>
    </div>
  );
}
