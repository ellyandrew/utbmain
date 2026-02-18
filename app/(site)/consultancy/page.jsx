"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  Gavel,
  Layers,
  Building2,
  Baby,
  Users as UsersIcon,
  HandCoins,
} from "lucide-react";

export default function Consultancy() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
  }, []);

  const services = [
    {
      icon: <Gavel size={28} />,
      title: "Policy & Regulatory Support",
      text: "Drafting, reviewing, and implementing childcare policies and frameworks.",
    },
    {
      icon: <Layers size={28} />,
      title: "Research & Evaluation",
      text: "Research design, stakeholder engagement, and conducting evidence-based studies to inform decision-making.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Program Design & Implementation",
      text: "Developing scalable, community-centered childcare models and workforce programs.",
    },
    {
      icon: <UsersIcon size={28} />,
      title: "Ecosystem & Partnership Development",
      text: "Supporting networks, multi-stakeholder platforms, and collaborative initiatives.",
    },
    {
      icon: <HandCoins size={28} />,
      title: "Capacity Building & Training",
      text: "Equipping organizations and childcare workers with practical skills and tools.",
    },
  ];

  const workingGroups = [
    { icon: "", title: "Women in Childcare" },
    { icon: "", title: "Special Needs & Inclusion" },
    { icon: "", title: "Legal, Policy & Regulatory Reforms" },
    { icon: "", title: "Maternal Child Health Promotion" },
  ];

  return (
    <main style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-white)",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(229,85,60,0.3)), url('/illustrations/team-headr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              transform: visible ? "translateY(0)" : "translateY(-30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Consultancy & Advisory Services
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#e6e6e6",
              maxWidth: "700px",
              margin: "0 auto",
              transform: visible ? "translateY(0)" : "translateY(-20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
              transitionDelay: "0.15s",
            }}
          >
            Uthabiti Africa offers tailored consultancy services to help governments, NGOs, funders, and businesses strengthen childcare systems and women’s empowerment initiatives.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", color: "var(--color-primary)" }}>
          Our Expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-white)",
                borderRadius: "1.2rem",
                padding: "2rem",
                boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
                transform: visible ? "translateY(0)" : "translateY(30px)",
                opacity: visible ? 1 : 0,
                transition: `all 0.8s ease`,
                transitionDelay: `${i * 0.1}s`,
              }}
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
                {service.icon}
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.6rem" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "3rem",
            textAlign: "center",
            fontSize: "1rem",
            color: "#444",
          }}
        >
          Partner with us to turn expertise into actionable, high-impact solutions.
        </p>

        <p style={{ textAlign: "center", marginTop: "0.5rem", fontSize: "1rem" }}>
          📧 <a href="mailto:info@uthabitiafrica.org">info@uthabitiafrica.org</a> | 📞 +254 717 023 607
        </p>
      </section>

      {/* Featured Initiative Section */}
      <section
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "#fafafa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--color-primary)" }}>
          Featured Initiative
        </h2>

        <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
          Collaborative Action for Childcare (CAC)
        </h3>

        <p style={{ maxWidth: "800px", margin: "0 auto 2rem", color: "#555", lineHeight: 1.7 }}>
          The Collaborative Action for Childcare (CAC) is a Pan-African platform for cooperation, co-creation, co-innovation, and learning initiated by Uthabiti Africa to accelerate quality, affordable childcare for all.
        </p>

        <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Our Vision</h4>
        <p style={{ maxWidth: "700px", margin: "0 auto 1.5rem", color: "#555" }}>
          We envision a well-coordinated sector where children are safe, childcare work is dignified, micro-entrepreneurs thrive, and governments lead in delivering quality, affordable childcare for all.
        </p>

        <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Main Objective</h4>
        <p style={{ maxWidth: "700px", margin: "0 auto 1.5rem", color: "#555" }}>
          Cultivate a culture of joint ecosystem-wide action towards delivering quality and affordable childcare services.
        </p>

        <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Key Focus Areas</h4>
        <ul style={{ maxWidth: "700px", margin: "0 auto 2rem", listStyle: "disc", paddingLeft: "1.2rem", color: "#555", lineHeight: 1.7 }}>
          <li>Enhance pooled learning and resource mobilization</li>
          <li>Enhance research and evidence generation</li>
          <li>Strengthen partnerships and coordination</li>
          <li>Establish thematic technical working groups</li>
          <li>Push the childcare agenda forward</li>
        </ul>

        <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>Technical Working Groups</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {workingGroups.map((group, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-white)",
                padding: "1.4rem 1rem",
                borderRadius: "1rem",
                boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
                textAlign: "center",
                fontWeight: 600,
                color: "var(--color-primary)",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{group.icon}</div>
              <div>{group.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-primary)", fontSize: "2rem", fontWeight: 700 }}>
          Join Us in Shaping Africa's Childcare Future
        </h2>
        <p style={{ maxWidth: "700px", margin: "1rem auto 2rem", color: "#555" }}>
          Be part of the movement transforming childcare systems across the continent.
        </p>

        <Link
          href="/contact"
          style={{
            padding: "0.9rem 2rem",
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
