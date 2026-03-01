"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Coffee,
  Gift,
  Globe2,
  UserCheck,
  Wallet,
  Users,
  Users2,
  User,
} from "lucide-react";

export default function UAFoundationPage() {

  const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setVisible(true), 120);
    }, []);

  const focusAreas = [
    {
      icon: <Coffee size={28} />,
      title: "Food Security",
      text: "Providing nutritious meals and essential food supplies to vulnerable households to ensure health and resilience.",
    },
    {
      icon: <Gift size={28} />,
      title: "Basic Needs Provision",
      text: "Supplying play and sleeping items, including mattresses and household essentials, to improve family well-being.",
    },
    {
      icon: <Globe2 size={28} />,
      title: "Climate Action",
      text: "Promoting sustainable practices, community-based conservation, and climate-resilient initiatives.",
    },
    {
      icon: <UserCheck size={28} />,
      title: "Workforce Development",
      text: "Offering skills training, mentorship, and career pathways, particularly empowering women to succeed in the workforce.",
    },
    {
      icon: <Wallet size={28} />,
      title: "Financial Inclusion",
      text: "Expanding access to financial services, literacy programs, and support for women-led enterprises.",
    },
    {
      icon: <Users size={28} />,
      title: "Women's Economic Empowerment",
      text: "Fostering entrepreneurship, leadership, and decision-making opportunities for women to drive community impact.",
    },
    {
      icon: <Users2 size={28} />,
      title: "Community Empowerment",
      text: "Supporting initiatives that enhance education, self-sufficiency, and holistic well-being in underserved communities.",
    },
  ];

  const governance = [
    {
      icon: <User size={28} />,
      title: "Independent Board",
      text: "Comprised of experts in social development, finance, and community empowerment, providing objective guidance on all Foundation activities.",
    },
    {
      icon: <Wallet size={28} />,
      title: "Strategic Oversight",
      text: "The Board sets priorities, approves initiatives, and monitors progress to maximize the impact of our programs.",
    },
    {
      icon: <Globe2 size={28} />,
      title: "Transparent Operations",
      text: "Ensures responsible use of grants and resources, with clear reporting and compliance with regulatory standards.",
    },
    {
      icon: <UserCheck size={28} />,
      title: "Connection to Advisory Services",
      text: "Although established by Uthabiti Africa Advisory Services, the Foundation operates independently, safeguarding mission integrity and decision-making autonomy.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#fafafa", color: "#111" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          padding: "7rem 1.5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/illustrations/background2.jpg') center/cover no-repeat",
          color: "var(--color-white)",
        }}
      >
        <h1 style={{
              fontSize: "clamp(2.4rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              transform: visible ? "translateY(0)" : "translateY(-30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
            }}>
          Uthabiti Africa Foundation
        </h1>
        <p style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#e6e6e6",
              maxWidth: "700px",
              margin: "0 auto",
              transform: visible ? "translateY(0)" : "translateY(-20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
              transitionDelay: "0.15s",
            }}>
          Quality, Affordable Childcare for All
        </p>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h2 style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>
          About the Foundation
        </h2>
        <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
          Uthabiti Africa Advisory Services established Uthabiti Africa Foundation
          to pursue grant funding and implement programs that empower communities
          across Africa. With a special focus on women and marginalized groups,
          the Foundation fosters sustainable development, promotes economic
          opportunity, and drives social change.
        </p>
        
      </section>

      {/* Focus Areas */}
      <section
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h2 style={{ color: "var(--color-primary)", marginBottom: "2rem" }}>
          Our Focus Areas
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {focusAreas.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "2rem",
                borderRadius: "1.2rem",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                boxShadow: "0 10px 26px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Governance & Leadership */}
      <section
        style={{
          padding: "5rem 1.5rem",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ color: "var(--color-primary)", marginBottom: "2rem" }}>
            Governance & Leadership
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.8rem",
            }}
          >
            {governance.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  borderRadius: "1.2rem",
                  backgroundColor: "#222",
                  border: "1px solid #333",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1100px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-primary)", marginBottom: "2rem" }}>
          Get Involved
        </h2>
        <p style={{ maxWidth: "750px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Support our mission and help us expand our impact across Africa.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/contact"
            style={{
              padding: "0.85rem 2rem",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/donate"
            style={{
              padding: "0.85rem 2rem",
              border: "2px solid var(--color-primary)",
              color: "var(--color-primary)",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Make a Donation
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "0.85rem 2rem",
              backgroundColor: "#eee",
              color: "#111",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
