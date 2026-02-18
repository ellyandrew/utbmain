"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

export default function NewsArticle() {
  const router = useRouter();
  const { slug } = router.query;

  // Example article data – in real app, fetch via API or CMS
  const articles = [
    {
      slug: "climate-caregivers",
      title: "Climate Change Hurts Children—But Caregivers Carry the Weight",
      author: "Asayya Imaya",
      date: "Dec 5, 2025",
      category: "Climate",
      content: [
        "A new advocacy brief released by Samuel Hall and Uthabiti Africa, with support from Global Affairs Canada, reveals a critical and long-overlooked truth: climate action is failing caregivers.",
        "While global and national climate strategies focus on emissions and adaptation, the wellbeing of caregivers—who are primarily women—remains neglected. This has consequences not only for the caregivers themselves but also for the children in their care.",
        "Our report calls for integrated climate and social policies that explicitly support caregiving communities, strengthen childcare infrastructure, and prioritize gender equity in climate solutions."
      ]
    },
    {
      slug: "female-childcare-workers",
      title: "The Role of Female Childcare Workers in Quality, Affordable Childcare in Africa",
      author: "Asayya Imaya",
      date: "Jun 20, 2024",
      category: "Childcare",
      content: [
        "In Africa, the quest for quality, affordable childcare is heavily reliant on the contributions of female childcare workers. These women are not just caregivers; they are the backbone of early childhood development.",
        "Despite their critical role, female childcare workers often face low pay, lack of recognition, and minimal support.",
        "This article highlights the importance of investing in their training, working conditions, and professional development to ensure sustainable, high-quality childcare across the continent."
      ]
    }
  ];

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main style={{ padding: "4rem 1.5rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>Article Not Found</h2>
        <p style={{ marginTop: "1rem", color: "#555" }}>Sorry, the article you are looking for does not exist.</p>
        <Link href="/news" style={{ marginTop: "2rem", display: "inline-block", padding: "0.8rem 2rem", backgroundColor: "var(--color-primary)", color: "#fff", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
          Back to News
        </Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Breadcrumb */}
      <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#888" }}>
        <Link href="/news" style={{ color: "var(--color-primary)", textDecoration: "none" }}>News</Link> &rarr; {article.title}
      </p>

      {/* Title */}
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "1rem" }}>
        {article.title}
      </h1>

      {/* Author, Date, Category */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "2rem", color: "#888" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Calendar size={16} /> {article.date}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Tag size={16} /> {article.category}
        </span>
        <span>By {article.author}</span>
      </div>

      {/* Article Content */}
      <div style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
        {article.content.map((para, i) => (
          <p key={i} style={{ marginBottom: "1.5rem" }}>{para}</p>
        ))}
      </div>

      {/* Call to Action */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>
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
