import "./globals.css";

import ClientRootLayout from "./ClientRootLayout";

import DynamicSEO from "@/components/layouts/SEO";

export const metadata = {
  title: {
    default: "Uthabiti Africa - Accelerating Quality, Affordable Childcare",
    template: "%s | Uthabiti Africa",
  },
  description:
    "Uthabiti Africa Advisory Services strengthens childcare systems across the continent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DynamicSEO />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
