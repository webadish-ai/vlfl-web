import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Vashishtha Luxury Fashion Ltd. | Luxury Embroidery, Made Global",
  description:
    "Hand and machine embroidery, embellished accessories, and end-to-end garment development for couture and pret-a-porter brands, from our Mumbai atelier since 2010.",
  alternates: {
    canonical: "https://vashishthaluxuryfashionltd.com",
  },
  openGraph: {
    title: "Vashishtha Luxury Fashion Ltd. | Luxury Embroidery, Made Global",
    description:
      "Hand and machine embroidery, embellished accessories, and end-to-end garment development from Mumbai.",
    url: "https://vashishthaluxuryfashionltd.com",
    images: ["/images/source/about-infrastructure.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
