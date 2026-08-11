import styles from "./PageHero.module.css";

interface StatItem {
  value: string;
  label: string;
}

interface PageHeroProps {
  imageSrc?: string;
  variant?: "image" | "gradient";
  tagline?: string;
  title: string;
  subtitle?: string;
  stats?: StatItem[];
}

export default function PageHero({
  imageSrc,
  variant = "image",
  tagline,
  title,
  subtitle,
  stats,
}: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {variant === "gradient" || !imageSrc ? (
        <>
          <div className={styles.gradientBg} />
          <div className={styles.gradientPattern} />
        </>
      ) : (
        <>
          <img src={imageSrc} alt={title} className={styles.heroImage} />
          <div className={styles.overlay} />
        </>
      )}

      <div className={styles.content}>
        {tagline && (
          <div className={`${styles.badge} fade-in`}>
            <span>{tagline}</span>
          </div>
        )}
        <h1 className={`${styles.title} slide-up`}>{title}</h1>
        {subtitle && (
          <p
            className={`${styles.subtitle} fade-in`}
            style={{ animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>
        )}
        {stats && stats.length > 0 && (
          <div
            className={`${styles.statsBar} fade-in`}
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((st) => (
              <div key={st.label} className={styles.statItem}>
                <span className={styles.statValue}>{st.value}</span>
                <span className={styles.statLabel}>{st.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
