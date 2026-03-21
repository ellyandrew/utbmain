"use client";

import Link from "next/link";
import {
  Calendar,
  Users,
  Globe2,

  Sparkles,
  Handshake,
  Megaphone,
  Lightbulb,
  Network,
} from "lucide-react";

export default function EventsPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", marginTop: "2.5rem", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Convening Change. Building Systems. Elevating Care.
        </h1>
        <p style={{ maxWidth: "750px", margin: "1rem auto", color: "#555", fontSize: "1.1rem" }}>
          Uthabiti Africa brings together caregivers, policymakers, innovators, and partners
          to transform childcare systems across Africa—through powerful events that drive action,
          learning, and movement building.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="#upcoming" style={btnPrimary}>Explore Upcoming Events</Link>
          <Link href="/contact" style={btnOutline}>Partner With Us</Link>
          <Link href="/contact" style={btnGhost}>Join WiC Network</Link>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section style={cardSection}>
        <h2 style={sectionTitle}> Featured Event</h2>

        <div style={{ ...card, border: "2px solid var(--color-primary)" }}>
          <h3 style={cardTitle}>Africa Childcare Forum (Mombasa 2026)</h3>
          <h3 style={cardTitle}> 16th - 18th Septemter, 2026</h3>
          <p style={cardSub}>Flagship Continental Convening</p>

          <p style={text}>
            The Africa Childcare Forum is a premier platform bringing together African governments,
            development partners, researchers, and practitioners to shape the future of childcare
            across the continent.
          </p>

          <ul style={list}>
            <li>Sets the continental childcare agenda</li>
            <li>Showcases innovations</li>
            <li>Drives regional policy alignment</li>
            <li>Builds cross-country partnerships</li>
          </ul>

          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://acf.uthabitiafrica.org"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPrimary}
            >
              Learn More
            </a>

            <a href="https://acf.uthabitiafrica.org/event-register"
                target="_blank"
              rel="noopener noreferrer"
             style={{ ...btnOutline, marginLeft: "1rem" }}>
              Register Interest
            </a>
          </div>
        </div>
      </section>

      {/* OUR EVENTS */}
      <section style={cardSection}>
        <h2 style={sectionTitle}>Our Events</h2>

        <div style={grid}>
          {[
            {
              icon: <Users size={22} />,
              title: "Women in Childcare Forums (WiC)",
              desc: "Grassroots-led convenings amplifying voices of women childcare providers.",
            },
            {
              icon: <Handshake size={22} />,
              title: "Collaborative Action for Childcare Conference",
              desc: "High-level platform for policy dialogue and partnerships.",
            },
            {
              icon: <Sparkles size={22} />,
              title: "Early Childhood Care Festivals",
              desc: "Community-centered events connecting families and caregivers.",
            },
            {
              icon: <Lightbulb size={22} />,
              title: "Technical Workshops & Trainings",
              desc: "Hands-on sessions for workforce and ecosystem strengthening.",
            },
          ].map((item, i) => (
            <div key={i} style={card}>
              <div style={{ marginBottom: "0.8rem", color: "var(--color-primary)" }}>
                {item.icon}
              </div>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={text}>{item.desc}</p>

              <Link href="/contact" target="_blank" rel="noopener noreferrer" style={link}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section id="upcoming" style={cardSection}>
        <h2 style={sectionTitle}>Upcoming Events</h2>

        <div style={grid}>
          {[
            {
              title: "Bungoma Easter Festival",
              date: "3–5 April 2026",
              link: "#",
              highlight: true,
            },
            {
              title: "Kisumu Childcare Policy Launch",
              date: "May 2025",
              link: "#",
            },
            {
              title: "Africa Childcare Forum (Mombasa)",
              date: "2025",
              link: "https://acf.uthabiti.africa",
              external: true,
            },
          ].map((event, i) => (
            <div
              key={i}
              style={{
                ...card,
                border: event.highlight ? "2px solid var(--color-primary)" : "1px solid #eee",
                position: "relative",
              }}
            >
              {event.highlight && (
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "var(--color-primary)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "999px",
                  }}
                >
                  Featured
                </span>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                <Calendar size={16} color="#888" />
                <span style={{ fontSize: "0.9rem", color: "#888" }}>{event.date}</span>
              </div>

              <h3 style={cardTitle}>{event.title}</h3>

              {event.external ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer" style={link}>
                  View Event →
                </a>
              ) : (
                <Link href={event.link} style={link}>
                  View Details →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="#" style={btnPrimary}>
            View Full Events Calendar
          </Link>
        </div> */}
      </section>

      {/* WHY EVENTS MATTER */}
      <section style={cardSection}>
        <h2 style={sectionTitle}>Why Our Events Matter</h2>

        <div style={grid}>
          {[
            { icon: <Megaphone />, title: "Shift Narratives" },
            { icon: <Globe2 />, title: "Strengthen Systems" },
            { icon: <Network />, title: "Build Movements" },
            { icon: <Lightbulb />, title: "Catalyze Innovation" },
          ].map((item, i) => (
            <div key={i} style={miniCard}>
              {item.icon}
              <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAST EVENTS */}
      <section style={cardSection}>
        <h2 style={sectionTitle}>Past Events Highlights</h2>

        <ul style={list}>
          <li>Policy dialogues</li>
          <li>Roundtables</li>
          <li>Certification pilots</li>
          <li>Network launches</li>
        </ul>

        {/* <Link href="#" style={btnOutline}>View Past Events Gallery</Link> */}
      </section>

      {/* PARTNER */}
      {/* <section style={{ ...cardSection, textAlign: "center" }}>
        <h2 style={sectionTitle}>Partner With Us</h2>
        <p style={text}>Co-create the future of childcare in Africa.</p>

        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" style={btnPrimary}>Become a Partner</Link>
          <Link href="/contact" style={{ ...btnOutline, marginLeft: "1rem" }}>
            Sponsor an Event
          </Link>
        </div>
      </section> */}

      {/* FINAL CTA */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Be part of the movement shaping childcare in Africa.
        </h2>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="#upcoming" style={btnPrimary}>Attend an Event</Link>
          <Link href="/contact" style={btnOutline}>Join WiC Network</Link>
          <Link href="/contact" style={btnGhost}>Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

/* STYLES */
const btnPrimary = {
  padding: "0.8rem 1.6rem",
  backgroundColor: "var(--color-primary)",
  color: "#fff",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 600,
};

const btnOutline = {
  padding: "0.8rem 1.6rem",
  border: "2px solid var(--color-primary)",
  color: "var(--color-primary)",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 600,
};

const btnGhost = {
  padding: "0.8rem 1.6rem",
  color: "#555",
  textDecoration: "none",
  fontWeight: 500,
};

const sectionTitle = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "var(--color-primary)",
  marginBottom: "1.5rem",
};

const cardSection = {
  marginBottom: "4rem",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.5rem",
};

const card = {
  backgroundColor: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
};

const miniCard = {
  padding: "1.2rem",
  textAlign: "center",
  borderRadius: "0.8rem",
  background: "#f9f9f9",
};

const cardTitle = {
  fontSize: "1.2rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const cardSub = {
  fontSize: "0.9rem",
  color: "#888",
  marginBottom: "0.8rem",
};

const text = {
  color: "#555",
  lineHeight: 1.7,
};

const list = {
  marginTop: "1rem",
  paddingLeft: "1.2rem",
  color: "#555",
  lineHeight: 1.8,
};

const link = {
  display: "inline-block",
  marginTop: "1rem",
  color: "var(--color-primary)",
  fontWeight: 600,
  textDecoration: "none",
};