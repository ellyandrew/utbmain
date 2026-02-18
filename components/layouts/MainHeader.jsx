"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function MainHeader() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "UA Foundation", href: "/ua-foundation" },
    { name: "Consultancy", href: "/consultancy" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
    { name: "Insights", href: "/insights" },
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1.5rem",
        flexWrap: "wrap",
        transition: "all 0.35s ease",

        /* 🌟 Visual state */
        backgroundColor: scrolled
          ? "var(--color-white)"
          : "rgba(0,0,0,0.15)",
        backdropFilter: scrolled ? "none" : "blur(10px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: scrolled
          ? "0 6px 20px rgba(0,0,0,0.08)"
          : "0 0 30px rgba(229,85,60,0.45)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logos/logo.png"
          alt="Logo"
          width={isMobile ? 100 : 140}
          height={isMobile ? 30 : 42}
        />
      </Link>

      {/* Center links */}
      {(menuOpen || !isMobile) && (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1.5rem" : "1.75rem",
            marginTop: isMobile ? "1rem" : "0",
          }}
        >
          {links.map((link, i) => {
            const isActive = pathname === link.href; // 👈 active link check
            return (
              <Link
                key={i}
                href={link.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  color: isActive
                    ? "#E5553C" // active color
                    : scrolled
                    ? hovered === i
                      ? "var(--color-primary)"
                      : "var(--color-black)"
                    : hovered === i
                    ? "var(--color-primary)"
                    : "var(--color-white)",
                  transition: "color 0.3s",
                  padding: isMobile ? "0.5rem 0" : "0",
                  textAlign: "center",
                }}
                onClick={() => isMobile && setMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* Actions */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "0.75rem", marginLeft: "auto" }}>
          <Link
            href="https://portal.uthabitiafrica.org/register"
            style={{
              padding: "0.55rem 1.2rem",
              borderRadius: "999px",
              border: "2px solid var(--color-primary)",
              color: scrolled ? "var(--color-primary)" : "var(--color-white)",
              backgroundColor: scrolled ? "transparent" : "rgba(0,0,0,0.25)",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s",
            }}
          >
            Join Network
          </Link>

          <Link
            href="/donate"
            style={{
              padding: "0.6rem 1.3rem",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Donate
          </Link>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            marginLeft: "auto",
            color: scrolled ? "var(--color-black)" : "var(--color-white)",
          }}
        >
          ☰
        </button>
      )}
    </nav>
  );
}
