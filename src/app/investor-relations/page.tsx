type DocumentItem = {
  title: string;
  url: string;
  note?: string;
};

type InvestorSection = {
  id: string;
  title: string;
  sourceUrl: string;
  documents: DocumentItem[];
};

const SITE_URL = "https://vashishthaluxuryfashion.com";

const toLocalDocUrl = (url: string) => {
  const absoluteUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const uploadsMarker = "/wp-content/uploads/";
  const uploadsIndex = absoluteUrl.indexOf(uploadsMarker);

  if (uploadsIndex === -1) {
    return absoluteUrl;
  }

  const uploadsPath = absoluteUrl.slice(uploadsIndex + uploadsMarker.length);
  const fileName = uploadsPath.replaceAll("/", "-");
  return `/investor-docs/${fileName}`;
};

const sections: InvestorSection[] = [
  {
    id: "newspaper-advertisement",
    title: "Newspaper Advertisement",
    sourceUrl: `${SITE_URL}/newspaper-advertisement/`,
    documents: [
      {
        title: "Basis of Allotment Advertisement",
        url: `${SITE_URL}/wp-content/uploads/2025/09/Vashishtha-Luxury-Fashion-Limited-Basis-Of-allotment-12sept2025.pdf`,
      },
      {
        title: "Price Band Advertisement",
        note: "IPO opening date - September 5, 2025",
        url: `${SITE_URL}/wp-content/uploads/2025/09/VASHISHTHA-LUXURY-FASHION-LIMITED-PRICE-BAND-1.pdf`,
      },
    ],
  },
  {
    id: "board-meeting",
    title: "Board Meeting",
    sourceUrl: `${SITE_URL}/board-meeting/`,
    documents: [
      {
        title: "Intimation - Notice of BM 14-11-2025",
        url: `${SITE_URL}/wp-content/uploads/2026/02/Notice-of-BM-14112025.pdf`,
      },
      {
        title: "Outcome of BM 13-10-2025",
        url: `${SITE_URL}/wp-content/uploads/2026/02/Outcome-of-BM-13102025.pdf`,
      },
      {
        title: "Outcome of BM 14-11-2025",
        url: `${SITE_URL}/wp-content/uploads/2026/02/Notice-of-BM-14112025.pdf`,
      },
    ],
  },
  {
    id: "annual-report",
    title: "Annual Report",
    sourceUrl: `${SITE_URL}/share-information/`,
    documents: [
      {
        title: "Directors' Report 2025-2026",
        url: `${SITE_URL}/wp-content/uploads/2026/03/Directors-report-VLFL-Final-31032025.pdf`,
      },
      {
        title: "Directors' Report 2024-2026",
        url: `${SITE_URL}/wp-content/uploads/2025/10/Directors-report-VLFL-Final-31032025.pdf`,
      },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    sourceUrl: `${SITE_URL}/policies/`,
    documents: [
      { title: "Policy 1 - Whistle Blower Policy", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-1-Whistle_Blower_Policy_Vashishtha-1.pdf` },
      { title: "Policy 2 - Nomination & Remuneration", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-2-Nomination-Remuneration-_Vashishtha.pdf` },
      { title: "Policy 3 - Code for Disclosure of UPSI", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-3-Code-for-Disclosure-of-UPSI_Vashishtha.pdf` },
      { title: "Policy 4 - Code for Insider Trading", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-4-Code-for-Indsider-Trading_-Vashishtah.pdf` },
      { title: "Policy 5 - Code of Conduct (BOD & Senior Management)", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-5-Code-of-conduct-BOD_Snr-Mngt_Vashishtha.pdf` },
      { title: "Policy 6 - Familiarization Programme (ID)", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-6-Familarization-Programme_ID-Vashishtha.pdf` },
      { title: "Policy 7 - Appointment Terms for Independent Directors", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-7-Terms-Conditions_Appointment-Independent_Directors_Vashishtha-Luxury.pdf` },
      { title: "Policy 8 - Preservation of Records and Documents", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-8-Policy-on-Preservation-of-Records-and-documents_Vashishta-Luxury.pdf` },
      { title: "Policy 9 - Materiality of Events", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-9-Policy-on-Materiality-of-Events-Vashishtha.pdf` },
      { title: "Policy 10 - Materiality of RPT", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-10-Policy_on_Materiality_of_RPT_Vashishtha-1.pdf` },
      { title: "Policy 11 - Material Subsidiaries", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-11-Policy-on-Material-Subsidiaries_Vashishtha.pdf` },
      { title: "Policy 12 - Sexual Harassment", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-12-Policy_Sexual-harrassment-Vashishtha.pdf` },
      { title: "Policy 13 - Internal Financial Control", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-13-Internal-Financial-Control_Vashishtha.pdf` },
      { title: "Policy 14 - Risk Management Policy", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-14-Risk-Mangement-Policy_Vashishtha.pdf` },
      { title: "Policy 15 - Dividend Distribution Policy", url: `${SITE_URL}/wp-content/uploads/2024/09/Policy-15-Dividend-Distribution-Policy_Vashishtha.pdf` },
      { title: "Policy 16 - Materiality for Group Companies, Creditors and Litigation", url: `${SITE_URL}/wp-content/uploads/2025/08/Policy-on-materiality-for-Identification-of-group-companies-creditors-and-Litigation-11072025.pdf` },
    ],
  },
  {
    id: "corporate-documents",
    title: "Corporate Documents",
    sourceUrl: `${SITE_URL}/corporate-documents/`,
    documents: [
      { title: "Memorandum of Association", url: `${SITE_URL}/wp-content/uploads/2024/10/MOA.pdf.pdf.pdf` },
      { title: "Article of Association", url: `${SITE_URL}/wp-content/uploads/2024/10/AOA-Altered-Vashishtha.pdf` },
      { title: "Certificate of Incorporation", url: `${SITE_URL}/wp-content/uploads/2024/10/Vashishtha-COI-Main.pdf` },
    ],
  },
  {
    id: "board-committees",
    title: "Board Committees",
    sourceUrl: `${SITE_URL}/board-committees/`,
    documents: [
      { title: "Vashishtha - Board Committees 2025", url: `${SITE_URL}/wp-content/uploads/2025/06/VLFL-Committees-2025.pdf` },
    ],
  },
  {
    id: "stock-exchange-filings",
    title: "Stock Exchange Filings",
    sourceUrl: `${SITE_URL}/stock-exchange-filings/`,
    documents: [
      {
        title: "Regulation 32 - Statement of Deviation (30-09-2025)",
        url: `${SITE_URL}/wp-content/uploads/2025/11/Regulation-32-Statement-of-Deviation-1.pdf`,
      },
    ],
  },
  {
    id: "shareholding-pattern",
    title: "Shareholding Pattern",
    sourceUrl: `${SITE_URL}/shareholding-pattern/`,
    documents: [
      { title: "Shareholding Pattern of VLFL - 30-09-2024", url: `${SITE_URL}/wp-content/uploads/2024/10/SHARE-HOLDING-PATTERN-14.10.2024.pdf` },
      { title: "Shareholding Pattern of VLFL - 30-09-2025", url: `${SITE_URL}/wp-content/uploads/2025/11/Shareholding-pattern-30092025.pdf` },
    ],
  },
  {
    id: "integrated-report",
    title: "Integrated Report",
    sourceUrl: `${SITE_URL}/integrated-report/`,
    documents: [
      { title: "Integrated Report - 31-12-2025", url: `${SITE_URL}/wp-content/uploads/2026/01/IG-Report-31122025.pdf` },
      { title: "Integrated Report - 30-09-2025", url: `${SITE_URL}/wp-content/uploads/2026/01/IG-Report-30092025.pdf` },
    ],
  },
  {
    id: "share-capital-audit",
    title: "Share Capital Audit",
    sourceUrl: `${SITE_URL}/share-capital-audit/`,
    documents: [
      { title: "Reconciliation of SCRA - 30-09-2025", url: `${SITE_URL}/wp-content/uploads/2026/02/Reconciliation-of-SCRA-30092025.pdf` },
      { title: "Reconciliation of SCRA - 31-12-2025", url: `${SITE_URL}/wp-content/uploads/2026/02/Reconciliation-of-SCRA-31122025.pdf` },
    ],
  },
  {
    id: "announcements",
    title: "Announcements",
    sourceUrl: `${SITE_URL}/announcements/`,
    documents: [
      { title: "Regulation 30 - Clarification 15-01-2026", url: `${SITE_URL}/wp-content/uploads/2026/01/Regulation-30-Clarification-15012026.pdf` },
      { title: "Regulation 30 - 22-12-2025", url: `${SITE_URL}/wp-content/uploads/2026/01/Regulation-30-22122025.pdf` },
      { title: "Regulation 30 - 12-11-2025", url: `${SITE_URL}/wp-content/uploads/2026/01/Regulation-30-12112025.pdf` },
      { title: "Regulation 30 - Resignation of Auditor (VEPL)", url: `${SITE_URL}/wp-content/uploads/2026/01/Regulation-30-Resignation-of-Auditor-VEPL.pdf` },
      { title: "Regulation 30 - Resignation of Auditors (VLFL)", url: `${SITE_URL}/wp-content/uploads/2026/01/Regulation-30-Resignation-of-Auditors-VLFL-1.pdf` },
      { title: "Regulation 30 - Vogue Italia", url: `${SITE_URL}/wp-content/uploads/2026/03/Regulation-30-Vogue-Italia.pdf` },
    ],
  },
  {
    id: "statement-of-deviation",
    title: "Statement of Deviation/Variation",
    sourceUrl: `${SITE_URL}/statement-of-deviation/`,
    documents: [
      { title: "SOD - 30-09-2025", url: `${SITE_URL}/wp-content/uploads/2026/03/SOD-30092025-1.pdf` },
    ],
  },
  {
    id: "investor-presentation",
    title: "Investor Presentation",
    sourceUrl: `${SITE_URL}/investor-presentation/`,
    documents: [
      { title: "Investor Presentation - IPO", url: `${SITE_URL}/wp-content/uploads/2025/09/vashishtha-luxury-fashion-ltd.-roadshow-presentation-september-2025.pdf` },
      { title: "Directors' Report 2025", url: `${SITE_URL}/wp-content/uploads/2025/10/Directors-report-VLFL-31032025.pdf` },
    ],
  },
  {
    id: "financial-result",
    title: "Financial Result",
    sourceUrl: `${SITE_URL}/annual-report/`,
    documents: [
      { title: "Financial Report F.Y. 2024-25", url: `${SITE_URL}/wp-content/uploads/2025/09/VLFL-Consolidated-_compressed.pdf` },
      { title: "Financial Report F.Y. 2023-24", url: `${SITE_URL}/wp-content/uploads/2024/09/VLFL_23-24-FINAL-SIGNED-Audit-Report-and-Financial-Statement-FY-2023-24_Signed.pdf` },
      { title: "Financial Report F.Y. 2022-23", url: `${SITE_URL}/wp-content/uploads/2024/09/Vashishtha-Luxury-Fashion-Ltd.-Signed-Financials-_FY-22-23_compressed-1.pdf` },
      { title: "VEPL Financials F.Y. 2024-25", url: `${SITE_URL}/wp-content/uploads/2026/03/VEPL-Financials-F.Y.-2024-25.pdf` },
      { title: "Unaudited Half Yearly Financials - 30-09-2025", url: `${SITE_URL}/wp-content/uploads/2025/11/Unaudited-half-yearly-Financials-reg-33-30092025.pdf` },
      { title: "Download RHP", note: "IPO opening date - 05/09/2025", url: `${SITE_URL}/wp-content/uploads/2025/08/Vashishtha-Luxury-Fashion-Limited_August-29-2025.pdf` },
      { title: "Investor Presentation (Roadshow)", url: `${SITE_URL}/wp-content/uploads/2025/09/vashishtha-luxury-fashion-ltd.-roadshow-presentation-september-2025.pdf` },
    ],
  },
  {
    id: "corporate-actions",
    title: "Corporate Actions & General Meetings",
    sourceUrl: `${SITE_URL}/corporate-actions-general-meetings/`,
    documents: [
      { title: "Notice of EGM 10.11.2025", url: `${SITE_URL}/wp-content/uploads/2025/10/Notice-of-EGM-10112025.pdf` },
      { title: "Proceedings of EGM 10.11.2025", url: `${SITE_URL}/wp-content/uploads/2025/11/EGM-Proceedings-VLFL.pdf` },
      { title: "Resignation of Auditor - VLFL", url: `${SITE_URL}/wp-content/uploads/2025/11/Regulation-30-Resignation-of-Auditors-VLFL.pdf` },
      { title: "Resignation of Auditor - VEPL", url: `${SITE_URL}/wp-content/uploads/2025/11/Regulation-30-Resignation-of-Auditors-VEPL.pdf` },
    ],
  },
  {
    id: "offer-documents",
    title: "Offer Documents",
    sourceUrl: `${SITE_URL}/offer-documents/`,
    documents: [
      { title: "Prospectus (September 10, 2025)", url: `${SITE_URL}/wp-content/uploads/2025/09/Prospectus_compressed-sept25.pdf` },
      { title: "Red Herring Prospectus (August 29, 2025)", url: `${SITE_URL}/wp-content/uploads/2025/08/Vashishtha-Luxury-Fashion-Limited_August-29-2025.pdf` },
      { title: "Draft Red Herring Prospectus (September 30, 2024)", url: `${SITE_URL}/wp-content/uploads/2024/10/Vashishtha-Luxury-Fashion-Limited_DRHP.pdf` },
    ],
  },
  {
    id: "trading-window-closure",
    title: "Trading Window Closure",
    sourceUrl: `${SITE_URL}/trading-window-closure/`,
    documents: [
      { title: "Trading Window Closure - 24.09.2025", url: `${SITE_URL}/wp-content/uploads/2025/10/Intimation-of-trading-window-closure-24092025.pdf` },
    ],
  },
  {
    id: "disclosure",
    title: "Disclosure",
    sourceUrl: `${SITE_URL}/disclosure/`,
    documents: [
      { title: "Disclosure of KMP - Materiality of Event", url: `${SITE_URL}/wp-content/uploads/2026/03/Disclosure-of-KMP-Materiality-of-event.pdf` },
    ],
  },
];

const keyPeople = [
  { name: "Mr. Ravindra Dhareshivkar", role: "Promoter & Managing Director" },
  { name: "Mr. Mustak Odiya", role: "Promoter & Director" },
  { name: "Mrs. Archana Odiya", role: "Promoter & Non-Executive Director" },
  { name: "Mr. Jaydeep Sodha", role: "Non-Executive Independent Director" },
  { name: "Mr. Pratik Jain", role: "Non-Executive Independent Director" },
  { name: "Mrs. Krupali Thakkar", role: "Company Secretary - ACS 42594" },
  { name: "Mrs. Anasuya Banerjee", role: "Chief Financial Officer" },
];

export default function InvestorRelations() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container" style={{ paddingBottom: "4rem" }}>
        <h1 className="title-large fade-in" style={{ marginBottom: "1rem" }}>
          Investor Relations
        </h1>
        <p className="text-body fade-in" style={{ animationDelay: "0.2s", maxWidth: "900px", marginBottom: "2rem" }}>
          This page consolidates investor relations sections and documents currently published on the official Vashishtha Luxury Fashion Ltd. website.
        </p>

        <div className="slide-up" style={{ animationDelay: "0.25s", marginBottom: "2rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Quick Jump
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{ border: "1px solid var(--color-border)", padding: "0.75rem 1rem", textDecoration: "none", fontSize: "0.9rem" }}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        <section className="slide-up" style={{ animationDelay: "0.3s", marginBottom: "2rem", border: "1px solid var(--color-border)", padding: "1.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Investor Enquiry Contact
          </h2>
          <p style={{ margin: "0.25rem 0", color: "var(--color-text-muted)" }}>
            Email: <a href="mailto:cs@vashishthaluxuryfashion.com">cs@vashishthaluxuryfashion.com</a>
          </p>
          <p style={{ margin: "0.25rem 0", color: "var(--color-text-muted)" }}>
            Contact Person: Mrs. Krupali Thakkar - Company Secretary (ACS 42594)
          </p>
          <p style={{ margin: "0.25rem 0", color: "var(--color-text-muted)" }}>
            Office Phone: <a href="tel:+919819399651">+91 9819399651</a>
          </p>
        </section>

        <section className="slide-up" style={{ animationDelay: "0.35s", marginBottom: "2.5rem", border: "1px solid var(--color-border)", padding: "1.5rem" }}>
          <h2 className="title-medium" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Board and Key Managerial Personnel
          </h2>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--color-text-muted)" }}>
            {keyPeople.map((person) => (
              <li key={person.name} style={{ marginBottom: "0.4rem" }}>
                {person.name} - {person.role}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
            Source: <a href={`${SITE_URL}/board-committees/`} target="_blank" rel="noreferrer">{SITE_URL}/board-committees/</a>
          </p>
        </section>

        {sections.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            className="slide-up"
            style={{ animationDelay: `${0.4 + index * 0.03}s`, marginBottom: "2rem", border: "1px solid var(--color-border)", padding: "1.5rem" }}
          >
            <h2 className="title-medium" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              {section.title}
            </h2>
            <p style={{ marginTop: 0, marginBottom: "1rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Source page: <a href={section.sourceUrl} target="_blank" rel="noreferrer">{section.sourceUrl}</a>
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {section.documents.map((doc) => (
                <div key={doc.title} style={{ border: "1px solid var(--color-border)", padding: "0.9rem 1rem" }}>
                  <a
                    href={toLocalDocUrl(doc.url)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block", margin: 0, fontWeight: 600, fontSize: "0.98rem" }}
                  >
                    {doc.title}
                  </a>
                  {doc.note ? <p style={{ margin: "0.35rem 0", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{doc.note}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
