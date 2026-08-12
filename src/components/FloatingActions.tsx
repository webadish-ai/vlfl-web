"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingActions.module.css";

const WHATSAPP_NUMBER = "919819399651";
const WHATSAPP_MESSAGE = "Hello Vashishtha Luxury Fashion, I'd like to enquire about your embroidery and development services.";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.stack}>
      <button
        type="button"
        className={`${styles.button} ${styles.toTop} ${showBackToTop ? styles.visible : ""}`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        className={`${styles.button} ${styles.whatsapp}`}
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.936.541 3.807 1.567 5.442L2 22l4.657-1.541a9.958 9.958 0 0 0 5.347 1.542h.004c5.518 0 10.004-4.486 10.004-10.004C22.012 6.486 17.526 2 12.004 2zm0 18.077a8.05 8.05 0 0 1-4.31-1.226l-.309-.183-2.727.902.918-2.657-.201-.324a8.06 8.06 0 0 1-1.24-4.29c0-4.456 3.626-8.082 8.09-8.082 4.456 0 8.082 3.626 8.082 8.086 0 4.46-3.63 8.09-8.086 8.09z" />
        </svg>
      </a>
    </div>
  );
}
