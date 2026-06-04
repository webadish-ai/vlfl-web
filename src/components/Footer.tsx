import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logoText}>Vashishtha</span>
            <p>
              Luxury embroidery, embellished accessories, and finished garment development for couture and pret-a-porter clients since 2010.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <a href="mailto:info@vashishthaluxuryfashion.com">info@vashishthaluxuryfashion.com</a>
            </p>
            <p style={{ marginTop: "0.4rem" }}>
              <a href="tel:+912249763431">+91 22 49763431</a>
            </p>
          </div>
          <div>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/embrodery">Services</Link></li>
              <li><Link href="/process">Our Process</Link></li>
              <li><Link href="/media-coverage">Limelight</Link></li>
              <li><Link href="/initiative">Initiatives</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.sectionTitle}>Contact & Relations</h4>
            <ul className={styles.links}>
              <li><Link href="/investor-relations">Investor Relations</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li>307 | 308, Sun Industrial Estate</li>
              <li>Lower Parel (West), Mumbai - 400013</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Vashishtha Luxury Fashion Ltd. | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
