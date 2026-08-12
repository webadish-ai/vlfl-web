"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import styles from "./InvestorDocumentSections.module.css";

export type DocumentItem = {
  title: string;
  url: string;
  note?: string;
};

export type InvestorSection = {
  id: string;
  title: string;
  sourceUrl: string;
  documents: DocumentItem[];
};

const SITE_URL = "http://www.vashishthaluxuryfashionltd.com";

const resolveDocUrl = (url: string) => {
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

interface InvestorDocumentSectionsProps {
  sections: InvestorSection[];
}

export default function InvestorDocumentSections({ sections }: InvestorDocumentSectionsProps) {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;

    return sections
      .map((section) => {
        const sectionMatches = section.title.toLowerCase().includes(q);
        const documents = sectionMatches
          ? section.documents
          : section.documents.filter((doc) => doc.title.toLowerCase().includes(q));
        return { ...section, documents };
      })
      .filter((section) => section.title.toLowerCase().includes(q) || section.documents.length > 0);
  }, [sections, query]);

  return (
    <>
      <Reveal as="div" style={{ marginBottom: "2rem" }}>
        <h2 className="title-medium" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Quick Jump
        </h2>
        <label htmlFor="investor-doc-search" className={styles.searchLabel}>
          Filter sections and documents
        </label>
        <input
          id="investor-doc-search"
          type="search"
          className={styles.searchInput}
          placeholder="Search e.g. &quot;annual report&quot;, &quot;policy&quot;, &quot;2025&quot;..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
          {filteredSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              style={{ border: "1px solid var(--color-border)", padding: "0.75rem 1rem", textDecoration: "none", fontSize: "0.9rem" }}
            >
              {section.title}
            </a>
          ))}
          {filteredSections.length === 0 && (
            <p style={{ margin: 0, color: "var(--color-text-muted)" }}>No sections match &quot;{query}&quot;.</p>
          )}
        </div>
      </Reveal>

      {filteredSections.map((section, index) => (
        <Reveal
          as="section"
          id={section.id}
          key={section.id}
          delay={(index % 4) * 0.03}
          style={{ marginBottom: "2rem", border: "1px solid var(--color-border)", padding: "1.5rem" }}
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
                  href={resolveDocUrl(doc.url)}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", margin: 0, fontWeight: 600, fontSize: "0.98rem" }}
                >
                  {doc.title}
                </a>
                {doc.note ? <p style={{ margin: "0.35rem 0", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{doc.note}</p> : null}
              </div>
            ))}
            {section.documents.length === 0 && (
              <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.9rem" }}>No documents match your search in this section.</p>
            )}
          </div>
        </Reveal>
      ))}
    </>
  );
}
