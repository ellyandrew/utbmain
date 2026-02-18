"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your message has been sent.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-white)",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(229,85,60,0.3)), url('/illustrations/team-headr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            paddingTop: "0",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              transform: visible ? "translateY(0)" : "translateY(-50px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#e6e6e6",
              transform: visible ? "translateY(0)" : "translateY(-30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.15s",
            }}
          >
            Partner with us to turn expertise into actionable, high-impact solutions.  
            Reach out to share ideas, collaborate, or join our initiatives.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "4rem auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                flex: 1,
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--color-border)",
                fontSize: "1rem",
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                flex: 1,
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--color-border)",
                fontSize: "1rem",
              }}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.9rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              fontSize: "1rem",
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: "0.9rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              fontSize: "1rem",
            }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: "0.9rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            style={{
              padding: "0.9rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.9rem 2rem",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              borderRadius: "999px",
              border: "none",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <MapPin size={24} color="var(--color-primary)" />
            <div>
              <strong>Visit us</strong>
              <p>Office #1, Overbay Apartments, Church Road, Off Waiyaki Way</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <Phone size={24} color="var(--color-primary)" />
            <div>
              <strong>Call us</strong>
              <p>(+254) 714-262626</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <Mail size={24} color="var(--color-primary)" />
            <div>
              <strong>Write us</strong>
              <p>info@uthabitiafrica.org</p>
            </div>
          </div>

          {/* Partner/Volunteer/Jobs */}
          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Get Involved:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><a href="/partner" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Partner With Us</a></li>
              <li><a href="/jobs" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Jobs</a></li>
              <li><a href="/volunteer" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Volunteer</a></li>
              <li><a href="/calendar" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Calendar</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optional Map / CTA */}
      <section style={{ textAlign: "center", margin: "4rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Join Us in Shaping Africa's Childcare Future
        </h2>
        <p style={{ maxWidth: "700px", margin: "1rem auto 2rem", color: "#555" }}>
          Be part of the movement transforming childcare systems across the continent.
        </p>
        <a
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
        </a>
      </section>
    </main>
  );
}
