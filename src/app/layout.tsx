import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL("https://vashishthaluxuryfashionltd.com"),
  title: {
    default: "Vashishtha Luxury Fashion Ltd. | Hand & Machine Embroidery Mumbai",
    template: "%s | Vashishtha Luxury Fashion Ltd.",
  },
  description:
    "Premier couture embroidery, hand embellishments, machine precision, and end-to-end garment manufacturing from Mumbai for global luxury labels.",
  keywords: [
    "Luxury Embroidery Mumbai",
    "Couture Embellishment",
    "Hand Embroidery Manufacturer",
    "Computerized Sequin Embroidery",
    "Garment Manufacturing India",
    "Pret-a-Porter Embroidery",
    "Vashishtha Luxury Fashion",
    "Sedex Certified Embroidery Mumbai",
    "ISO 9001 Garment Manufacturer",
  ],
  authors: [{ name: "Vashishtha Luxury Fashion Ltd." }],
  creator: "Vashishtha Luxury Fashion Ltd.",
  publisher: "Vashishtha Luxury Fashion Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vashishthaluxuryfashionltd.com",
    title: "Vashishtha Luxury Fashion Ltd. | Luxury Embroidery, Made Global",
    description:
      "Couture and pret-a-porter embellishment development from Mumbai with hand craftsmanship, machine precision, and end-to-end garment execution.",
    siteName: "Vashishtha Luxury Fashion Ltd.",
    images: [
      {
        url: "/images/source/about-infrastructure.jpg",
        width: 1920,
        height: 650,
        alt: "Vashishtha Luxury Fashion Atelier Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vashishtha Luxury Fashion Ltd.",
    description: "Couture and pret-a-porter embellishment development from Mumbai.",
    images: ["/images/source/about-infrastructure.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vashishtha Luxury Fashion Ltd.",
  url: "https://vashishthaluxuryfashionltd.com",
  logo: "https://vashishthaluxuryfashionltd.com/images/vfashion-logo-retina-1.png",
  description:
    "Luxury embroidery, embellished accessories, and garment development for couture and pret-a-porter brands from Mumbai.",
  foundingDate: "2010",
  founders: [
    { "@type": "Person", name: "Ravi Dhareshivkar" },
    { "@type": "Person", name: "Mustak Odiya" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gala No. 101, 102 & 103, 1st Floor, Building No. 2, A-Wing, Asmeeta Textile Park, Kalyan Bhiwandi Road, Kon Village",
    addressLocality: "Bhiwandi, Thane, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "421311",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9892300000",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: ["http://www.vashishthaluxuryfashionltd.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
