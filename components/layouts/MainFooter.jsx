"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/uthabitiafrica", icon: "/social/x.png" },
    { name: "Facebook", href: "https://facebook.com/uthabitiafrica", icon: "/social/facebook.png" },
    { name: "LinkedIn", href: "https://linkedin.com/company/uthabitiafrica", icon: "/social/linkedin.png" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#ddd",
        padding: "4rem 1.5rem",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo & About */}
        <div style={{ flex: "1 1 250px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div
            style={{
                backgroundColor: "#fff", // white background
                padding: "0.5rem 1rem",
                borderRadius: "50% 60% 50% 60% / 50% 50% 60% 60%", // cloud shape
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <Image
                src="/logos/uthabiti.png"
                alt="Uthabiti Africa"
                width={120}
                height={36}
                style={{ display: "block" }}
            />
            </div>
        </Link>
        <p style={{ lineHeight: 1.7, color: "#bbb", marginTop: "1rem" }}>
            Uthabiti Africa strengthens childcare systems across Africa through research, innovation, and strategic partnerships, ensuring every child has the foundation to thrive.
        </p>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            {socialLinks.map((social, i) => (
            <Link key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
                style={{ filter: "invert(100%)", cursor: "pointer" }}
                />
            </Link>
            ))}
        </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li>
              <Link href="/" style={{ textDecoration: "none", color: "#ddd" }}>Home</Link>
            </li>
            <li>
              <Link href="/ua-foundation" style={{ textDecoration: "none", color: "#ddd" }}>UA Foundation</Link>
            </li>
            <li>
              <Link href="/consultancy" style={{ textDecoration: "none", color: "#ddd" }}>Consultancy</Link>
            </li>
            <li>
              <Link href="/insights" style={{ textDecoration: "none", color: "#ddd" }}>Insights</Link>
            </li>
            <li>
              <Link href="/news" style={{ textDecoration: "none", color: "#ddd" }}>News</Link>
            </li>
            <li>
              <Link href="/contact" style={{ textDecoration: "none", color: "#ddd" }}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h4 style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>Contact Us</h4>
          <p style={{ lineHeight: 1.7 }}>
            <strong>Phone:</strong> (+254) 717-023-607 <br />
            <strong>Tel:</strong> +254 714 919 191
          </p>
          <p style={{ lineHeight: 1.7, marginTop: "0.5rem" }}>
            <strong>Address:</strong><br />
            Office #1, Overbay Apartments, Church Road, Off Waiyaki Way<br />
            P.O. Box 3493 City Square 00200 Nairobi, Kenya
          </p>
          <p style={{ lineHeight: 1.7, marginTop: "0.5rem" }}>
            <strong>Email:</strong> info@uthabitiafrica.org
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: "1px solid #333",
          marginTop: "3rem",
          paddingTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#888",
        }}
      >
        © 2026 Uthabiti Africa. All rights reserved.
      </div>
    </footer>
  );
}
