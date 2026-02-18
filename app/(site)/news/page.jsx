"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

export default function News() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Climate", "Childcare", "Advocacy", "Uncategorized"];

  const articles = [
    {
      title: "Climate Change Hurts Children—But Caregivers Carry the Weight",
      author: "Asayya Imaya",
      date: "Dec 5, 2025",
      category: "Climate",
      excerpt:
        "A new advocacy brief released by Samuel Hall and Uthabiti Africa reveals a critical and long-overlooked truth: climate action is failing caregivers. While global and national climate strategies focus on…",
      slug: "/news/climate-caregivers",
    },
    {
      title: "The Role of Female Childcare Workers in Quality, Affordable Childcare in Africa",
      author: "Asayya Imaya",
      date: "Jun 20, 2024",
      category: "Childcare",
      excerpt:
        "In Africa, the quest for quality, affordable childcare is heavily reliant on the contributions of female childcare workers. These women are not just caregivers; they are the backbone of early childhood…",
      slug: "/news/female-childcare-workers",
    },
  ];

  const filteredArticles =
    filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem", marginTop: "2.5rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Latest News
        </h1>
        <p style={{ maxWidth: "700px", margin: "1rem auto 0", color: "#555", fontSize: "1.1rem" }}>
          Explore our latest research, advocacy, and stories shaping childcare, women’s empowerment, and social development across Africa.
        </p>
      </header>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "3rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: "999px",
              border: filter === cat ? "2px solid var(--color-primary)" : "1px solid #ccc",
              backgroundColor: filter === cat ? "var(--color-primary)" : "#fff",
              color: filter === cat ? "#fff" : "#555",
              cursor: "pointer",
              fontWeight: 500,
              transition: "all 0.3s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}
      >
        {filteredArticles.map((article, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "var(--color-white)",
              borderRadius: "1rem",
              boxShadow: "0 16px 36px rgba(0,0,0,0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 22px 50px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.06)";
            }}
          >
            <div style={{ padding: "1.5rem", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.75rem" }}>
                <Calendar size={16} color="#888" />
                <span style={{ fontSize: "0.85rem", color: "#888" }}>{article.date}</span>
                <Tag size={16} color="#888" />
                <span style={{ fontSize: "0.85rem", color: "#888" }}>{article.category}</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                {article.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {article.excerpt}
              </p>
              <Link
                href={article.slug}
                style={{
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Stay Informed
        </h2>
        <p style={{ maxWidth: "700px", margin: "1rem auto 2rem", color: "#555" }}>
          Subscribe to our newsletter to receive updates on research, advocacy, and initiatives advancing childcare and social development across Africa.
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
