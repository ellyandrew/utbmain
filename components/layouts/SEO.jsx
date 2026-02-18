"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const seoMap = {
  "/": {
    title: "Uhrtur Africa | Innovation, Impact & Sustainable Development",
    description:
      "Uhrtur Africa is driving innovation, social impact, and sustainable development across Africa through technology, consultancy, and community empowerment.",
  },
  "/ua-foundation": {
    title: "UA Foundation | Community Impact & Social Development",
    description:
      "UA Foundation focuses on education, empowerment, and sustainable community development initiatives across Africa.",
  },
  "/consultancy": {
    title: "Consultancy | Uhrtur Africa Advisory Services",
    description:
      "Professional consultancy services in digital transformation, strategy, governance, and sustainable growth.",
  },
  "/news": {
    title: "News & Updates | Uhrtur Africa",
    description:
      "Latest news, insights, and updates from Uhrtur Africa and its ecosystem.",
  },
  "/contact": {
    title: "Contact Uhrtur Africa",
    description:
      "Get in touch with Uhrtur Africa for partnerships, consultancy, and collaborations.",
  },
  "/insights": {
    title: "Insights | Thought Leadership & Research",
    description:
      "Strategic insights, research, and thought leadership from Uhrtur Africa experts.",
  },
};

export default function DynamicSEO() {
  const pathname = usePathname();
  const seo = seoMap[pathname] || {
    title: "Uhrtur Africa",
    description: "Uhrtur Africa – Innovation, Impact and Sustainable Growth",
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      {/* SEO extras */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}