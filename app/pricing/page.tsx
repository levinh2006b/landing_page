import type { Metadata } from "next";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import PricingSection from "@/components/landing/PricingSection";

const PAGE_URL = "https://ronansat.com/pricing";

const DESCRIPTION =
  "Ronan SAT pricing. Free forever to start. Advanced unlocks everything from $5.99 for 7 days, $15.99 for 1 month, $30.99 for 3 months, or $55.99 for 8 months.";

export const metadata: Metadata = {
  title: "Pricing | Ronan SAT",
  description: DESCRIPTION,
  keywords: [
    "Ronan SAT pricing",
    "SAT prep price",
    "SAT practice subscription",
    "Ronan SAT Advanced",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Pricing | Ronan SAT",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Ronan SAT",
    description: DESCRIPTION,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#BCCE75] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main className="pt-16">
        <PricingSection headingLevel="h1" />
      </main>
      <SiteFooter />
    </div>
  );
}
