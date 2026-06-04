import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Investor Relations redirects
      { source: '/statement-of-deviation', destination: '/investor-relations', permanent: true },
      { source: '/annual-report', destination: '/investor-relations', permanent: true },
      { source: '/announcements', destination: '/investor-relations', permanent: true },
      { source: '/disclosure', destination: '/investor-relations', permanent: true },
      { source: '/share-information', destination: '/investor-relations', permanent: true },
      { source: '/outcome', destination: '/investor-relations', permanent: true },
      { source: '/intimation', destination: '/investor-relations', permanent: true },
      { source: '/newspaper-advertisement', destination: '/investor-relations', permanent: true },
      { source: '/shareholding-pattern', destination: '/investor-relations', permanent: true },
      { source: '/corporate-documents', destination: '/investor-relations', permanent: true },
      { source: '/share-capital-audit', destination: '/investor-relations', permanent: true },
      { source: '/integrated-report', destination: '/investor-relations', permanent: true },
      { source: '/stock-exchange-filings', destination: '/investor-relations', permanent: true },
      { source: '/board-meeting', destination: '/investor-relations', permanent: true },
      { source: '/corporate-actions-general-meetings', destination: '/investor-relations', permanent: true },
      { source: '/trading-window-closure', destination: '/investor-relations', permanent: true },
      { source: '/investor-enquiry', destination: '/investor-relations', permanent: true },
      { source: '/offer-documents', destination: '/investor-relations', permanent: true },
      { source: '/investor-presentation', destination: '/investor-relations', permanent: true },
      { source: '/board-committees', destination: '/investor-relations', permanent: true },
      { source: '/policies', destination: '/investor-relations', permanent: true },
      { source: '/kmp', destination: '/investor-relations', permanent: true },
      { source: '/investor', destination: '/investor-relations', permanent: true },
      // Booking/Contact redirects
      { source: '/book-appointment', destination: '/contact', permanent: true },
      { source: '/my-bookings', destination: '/contact', permanent: true },
      { source: '/cancel-appointment', destination: '/contact', permanent: true },
      { source: '/cancel-payment', destination: '/contact', permanent: true },
      { source: '/appointment-cancellation-confirmation', destination: '/contact', permanent: true },
      // Other redirects
      { source: '/sustainability', destination: '/initiative', permanent: true },
      { source: '/limelight', destination: '/media-coverage', permanent: true }
    ];
  },
};
export default nextConfig;
