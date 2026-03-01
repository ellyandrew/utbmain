"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== HEADER BAR ===== */}
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
          padding: "0.75rem 1.25rem",
          transition: "all 0.35s ease",
          backgroundColor: scrolled
            ? "var(--color-black)"
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
        {/* Logo (left) */}
        <Link href="/" style={{ display: "flex", 
          alignItems: "center", backgroundColor: "#fff",
           borderRadius: "50% 60% 50% 60% / 50% 50% 60% 60%", padding: "0.5rem 1rem", }}>
          <Image
            src="/logos/logo.png"
            alt="Logo"
            width={isMobile ? 90 : 140}
            height={isMobile ? 28 : 42}
          />
        </Link>

        {/* Desktop navigation */}
        {!isMobile && (
          <>
            <div style={{ display: "flex", gap: "1.75rem" }}>
              {links.map((link, i) => {
                const isActive = pathname === link.href;
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
                        ? "#E5553C" // active
                        : hovered === i
                        ? "var(--color-primary)" // hover
                        : "var(--color-white)", // default
                      transition: "color 0.25s ease",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Link
                href="https://portal.uthabitiafrica.org/auth/register"
                style={{
                  padding: "0.55rem 1.2rem",
                  borderRadius: "999px",
                  border: "2px solid var(--color-primary)",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  fontWeight: 600,
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
          </>
        )}

        {/* Mobile menu icon (right) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.9rem",
              cursor: "pointer",
              color: scrolled ? "var(--color-black)" : "var(--color-white)",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* ===== MOBILE DROPDOWN ===== */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "var(--color-white)",
            zIndex: 999,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
        >
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontWeight: 600,
                  color: isActive ? "#E5553C" : "#222",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="https://portal.uthabitiafrica.org/auth/register"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "1rem",
              padding: "0.7rem",
              borderRadius: "999px",
              border: "2px solid var(--color-primary)",
              textAlign: "center",
              fontWeight: 600,
              color: "var(--color-primary)",
              textDecoration: "none",
            }}
          >
            Join Network
          </Link>

          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "0.7rem",
              borderRadius: "999px",
              backgroundColor: "var(--color-primary)",
              color: "white",
              textAlign: "center",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Donate
          </Link>
        </div>
      )}
    </>
  );
}