"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About" },
  { href: "/embrodery", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/media-coverage", label: "Limelight" },
  { href: "/initiative", label: "Initiative" },
  { href: "/investor-relations", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://vashishthaluxuryfashion.com/wp-content/uploads/2022/12/v-fashion-logo.png"
                alt="Vashishtha Luxury Fashion Logo"
                style={{ height: '72px', width: 'auto' }}
              />
            </div>
          </Link>
        </div>
        <nav className={styles.nav}>
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
      </div>
    </header>
  );
}
