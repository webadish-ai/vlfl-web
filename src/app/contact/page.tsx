const workingHours = [
  ["Monday", "10 AM - 7 PM"],
  ["Tuesday", "10 AM - 7 PM"],
  ["Wednesday", "10 AM - 7 PM"],
  ["Thursday", "10 AM - 7 PM"],
  ["Friday", "10 AM - 7 PM"],
  ["Saturday", "10 AM - 3 PM"],
  ["Sunday", "Closed"],
];

export default function Contact() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", paddingBottom: "4rem" }}>
        <h1 className="title-large fade-in text-center" style={{ marginBottom: "1rem" }}>
          Contact
        </h1>

        <p className="fade-in text-body" style={{ textAlign: "center", animationDelay: "0.2s", margin: "0 auto 2rem", maxWidth: "700px" }}>
          Send us a message and we shall get back to you. For quick coordination, you can also reach us directly on WhatsApp.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          <section className="slide-up" style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "1.25rem" }}>
            <h2 style={{ marginTop: 0, fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>Office Location</h2>
            <address style={{ margin: 0, fontStyle: "normal", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
              307 | 308, Sun Industrial Estate,
              <br />
              Sun Mill Compound,
              <br />
              Delisle Road, Lower Parel (West),
              <br />
              Mumbai, Maharashtra - 400013, India
            </address>
            <p style={{ marginTop: "1rem", color: "var(--color-text-muted)" }}>
              Landline: <a href="tel:+912249763431">+91 22 49763431</a>
            </p>
            <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
              WhatsApp: <a href="tel:+919819399651">+91 981 939 9651</a>
            </p>
          </section>

          <section className="slide-up" style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "1.25rem" }}>
            <h2 style={{ marginTop: 0, fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>Email</h2>
            <p style={{ marginBottom: "0.25rem" }}><strong>Business Inquiries</strong></p>
            <p style={{ margin: "0 0 0.45rem" }}><a href="mailto:ravi@vashishthaluxuryfashion.com">ravi@vashishthaluxuryfashion.com</a></p>
            <p style={{ margin: "0 0 0.75rem" }}><a href="mailto:mustak@vashishthaluxuryfashion.com">mustak@vashishthaluxuryfashion.com</a></p>

            <p style={{ marginBottom: "0.25rem" }}><strong>Collaborations</strong></p>
            <p style={{ margin: "0 0 0.75rem" }}><a href="mailto:info@vashishthaluxuryfashion.com">info@vashishthaluxuryfashion.com</a></p>

            <p style={{ marginBottom: "0.25rem" }}><strong>Job Opportunities</strong></p>
            <p style={{ margin: 0 }}><a href="mailto:hr@vashishthaluxuryfashion.com">hr@vashishthaluxuryfashion.com</a></p>
          </section>

          <section className="slide-up" style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "1.25rem" }}>
            <h2 style={{ marginTop: 0, fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>Hours</h2>
            <div style={{ display: "grid", gap: "0.35rem" }}>
              {workingHours.map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--color-border)", paddingBottom: "0.25rem" }}>
                  <span>{day}</span>
                  <span style={{ color: "var(--color-text-muted)" }}>{time}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
