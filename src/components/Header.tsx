"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About" },
  { href: "/embroidery", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/media-coverage", label: "Limelight" },
  { href: "/initiative", label: "Initiative" },
  { href: "/investor-relations", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isHomepage = pathname === "/";

  // Close the mobile menu whenever the route changes. Adjusting state
  // during render (rather than in an effect) avoids an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const isScrolledOrSubpage = scrolled || !isHomepage;

  return (
    <header className={`${styles.header} ${isScrolledOrSubpage ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/images/vfashion-logo-retina-1.png"
                alt="Vashishtha Luxury Fashion Logo"
                width={558}
                height={265}
                priority
                style={{ height: '48px', width: 'auto' }}
              />
            </div>
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${
                pathname === href ? styles.active : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
        </button>
      </div>

      <div
        className={styles.backdrop}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="mobile-nav"
        className={styles.mobileNav}
        aria-label="Mobile"
        inert={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }, index) => (
          <Link
            key={href}
            href={href}
            ref={index === 0 ? firstLinkRef : undefined}
            className={`${styles.mobileNavLink} ${
              pathname === href ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
