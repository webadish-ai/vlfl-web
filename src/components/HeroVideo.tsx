"use client";

import styles from "@/app/page.module.css";

interface HeroVideoProps {
  onEnded?: () => void;
}

export default function HeroVideo({ onEnded }: HeroVideoProps) {
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration && video.currentTime >= video.duration - 0.3) {
      if (onEnded) onEnded();
    }
  };

  return (
    <video
      className={styles.heroVideo}
      autoPlay
      muted
      playsInline
      controls={false}
      preload="auto"
      aria-hidden="true"
      onEnded={onEnded}
      onTimeUpdate={handleTimeUpdate}
    >
      <source src="/hero-video-hq.mp4" type="video/mp4" />
      Your browser does not support background video playback.
    </video>
  );
}
