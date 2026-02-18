"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/ToastContext";

export default function Donate() {
  const { showToast } = useToast();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
  }, []);

  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const presetAmounts = [500, 1000, 2500, 5000];

  const handleDonate = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      showToast("Please enter a valid donation amount.", "error");
      return;
    }
    showToast(`Thank you for your generous donation of KES ${amount} (${frequency}).`, "success");
    setAmount("");
  };

  return (
    <main className="bg-gray-50">

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
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(68,88,220,0.3)), url('/illustrations/hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.4rem,5vw,3.4rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              transform: visible ? "translateY(0)" : "translateY(-50px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
            }}
          >
            Support Our Mission
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#e6e6e6",
              transform: visible ? "translateY(0)" : "translateY(-30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.15s",
            }}
          >
            Your donation empowers Uthabiti Africa to strengthen childcare systems and women’s empowerment initiatives across the continent. Every contribution helps transform lives.
          </p>
        </div>
      </section>

      {/* DONATION FORM & IMPACT */}
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
        {/* FORM */}
        <form
          onSubmit={handleDonate}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <input
              type="number"
              placeholder="Enter custom amount (KES)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min={1}
              style={{
                flex: 1,
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--color-border)",
                fontSize: "1rem",
              }}
            />
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              style={{
                flex: 1,
                padding: "0.9rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--color-border)",
                fontSize: "1rem",
              }}
            >
              <option value="one-time">One-Time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Preset Amounts */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setAmount(amt)}
                style={{
                  padding: "0.6rem 1rem",
                  borderRadius: "999px",
                  border: "1px solid var(--color-primary)",
                  backgroundColor: amount == amt ? "var(--color-primary)" : "#fff",
                  color: amount == amt ? "#fff" : "var(--color-primary)",
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "all 0.3s",
                }}
              >
                KES {amt}
              </button>
            ))}
          </div>

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
            Donate Now
          </button>
        </form>

        {/* IMPACT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-primary)" }}>
            Your Impact
          </h2>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", color: "#555", lineHeight: 1.7 }}>
            <li>Support quality, affordable childcare initiatives across Africa.</li>
            <li>Empower female childcare workers and local entrepreneurs.</li>
            <li>Fund community-centered programs and training for caregivers.</li>
            <li>Help strengthen policies, research, and partnerships in childcare.</li>
          </ul>
          <p style={{ marginTop: "1rem", fontWeight: 600, color: "#333" }}>
            Every contribution, big or small, helps us transform the lives of children, families, and communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", margin: "4rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>
          Join Our Mission Today
        </h2>
        <p style={{ maxWidth: "700px", margin: "1rem auto 2rem", color: "#555" }}>
          Your support fuels impactful programs and drives systemic change in childcare and women’s empowerment across Africa.
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
          Contact Us Now
        </a>
      </section>
    </main>
  );
}
