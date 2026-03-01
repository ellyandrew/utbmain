"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/ToastContext";

export default function Contact() {

const [visible, setVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setVisible(true), 300);
  return () => clearTimeout(timer);
}, []);

  const contactSubjects = [
  "General Inquiry",
  "Request for Information",
  "Feedback or Suggestions",

  "Partnership Opportunity",
  "Collaboration Proposal",
  "Donor / Funder Engagement",
  "Corporate Partnership",

  "Childcare Programs Inquiry",
  "Network for Women in Childcare",
  "Collaborative Action for Childcare (CAC)",
  "Mama Plus Program",
  "SACCO & Financial Inclusion",

  "Join the Network",
  "Membership Support",
  "Community Engagement",

  "Events & Convenings",
  "Media & Press Inquiry",
  "Speaking Engagements",

  "Jobs & Careers",
  "Volunteering Opportunities",
  "Internships & Fellowships",

  "Policy & Advocacy",
  "Training & Capacity Building",
  "Data or Research Inquiry",
  "Website / Portal Support",

  "Other",
];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { showToast } = useToast();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPersonName = (name) => /^[a-zA-Z\s'-]{2,}$/.test(name);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  // Submit form data to API route
  const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email address is required";
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!isValidPersonName(fullName)) {
    newErrors.name = "Enter a valid full name";
  }

  if (!formData.subject) {
    newErrors.subject = "Please select a subject";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message cannot be empty";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length !== 0) return;

  try {
    setLoading(true);

    const res = await fetch("/api/contact/sendContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      showToast(data.error || "Failed to send message", "error");
      return;
    }

    showToast("Message sent successfully", "success");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch {
    showToast("Network error. Please try again.", "error");
  } finally {
    setLoading(false);
  }
};

  return (
    <main >

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
       <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Names */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  borderRadius: "0.75rem",
                  border: errors.firstName
                    ? "1px solid #e53935"
                    : "1px solid var(--color-border)",
                  fontSize: "1rem",
                }}
              />
              {errors.firstName && (
                <small style={{ color: "#e53935" }}>{errors.firstName}</small>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  borderRadius: "0.75rem",
                  border: errors.lastName
                    ? "1px solid #e53935"
                    : "1px solid var(--color-border)",
                  fontSize: "1rem",
                }}
              />
              {errors.lastName && (
                <small style={{ color: "#e53935" }}>{errors.lastName}</small>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: errors.email
                  ? "1px solid #e53935"
                  : "1px solid var(--color-border)",
                fontSize: "1rem",
              }}
            />
            {errors.email && (
              <small style={{ color: "#e53935" }}>{errors.email}</small>
            )}
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: "0.9rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              fontSize: "1rem",
            }}
          />

          {/* Subject */}
          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: errors.subject
                  ? "1px solid #e53935"
                  : "1px solid var(--color-border)",
                fontSize: "1rem",
                backgroundColor: "#fff",
              }}
            >
              <option value="">— Select Subject —</option>
              {contactSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <small style={{ color: "#e53935" }}>{errors.subject}</small>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: errors.message
                  ? "1px solid #e53935"
                  : "1px solid var(--color-border)",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
            {errors.message && (
              <small style={{ color: "#e53935" }}>{errors.message}</small>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "0.9rem 2rem",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              borderRadius: "999px",
              border: "none",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              alignSelf: "flex-start",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
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
              <li><a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Partner With Us</a></li>
              <li><a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Jobs</a></li>
              <li><a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Volunteer</a></li>
              <li><a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>Calendar</a></li>
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
      <style jsx>{`
        @media (max-width: 768px) {
          /* HERO */
          section:first-of-type {
            min-height: 40vh;
            padding: 3rem 1.5rem;
          }

          /* FORM + INFO GRID */
          section[style*="grid"] {
            gap: 2rem;
            margin: 3rem auto;
          }

          /* FORM INPUT ROW */
          form > div {
            flex-direction: column;
          }

          /* SUBMIT BUTTON */
          button[type="submit"] {
            width: 100%;
            text-align: center;
          }

          /* CONTACT INFO */
          section[style*="grid"] > div:last-child {
            padding-top: 1rem;
          }

          /* CTA */
          section:last-of-type h2 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.1rem !important;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
