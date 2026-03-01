"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Baby,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  Gavel,
  Layers,
  Building,
  HandCoins,
  Sparkles,
  ChevronDown, Award,
  Landmark,
  HeartHandshake,
} from "lucide-react";

export default function Home() {

  const [showScroll, setShowScroll] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
  }, []);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [openIndex, setOpenIndex] = useState(null)

  const achievements = [
  {
    title: "Built the Foundation for Africa’s Childcare Ecosystem Movement",
    points: [
      "Established the first organisation dedicated to childcare systems strengthening in Africa – Uthabiti.",
      "Created a knowledge base that reframed childcare as economic infrastructure, not just a social service.",
      "Built multi-country networks influencing policy and investment decisions.",
    ],
  },
  {
    title: "Strengthened National & Sub-national Policy Frameworks",
    points: [
      "Supported governments to design national childcare policies, regulations, and implementation plans.",
      "Provided technical expertise to education, labour, gender, and health ministries.",
      "Facilitated inter-agency coordination to elevate childcare as a development priority.",
    ],
  },
  {
    title: "Catalysed Funding Pathways for Childcare Solutions",
    points: [
      "Established Collaborative Action for Childcare to mobilise and deploy childcare-focused funding.",
      "Mobilised resources from philanthropic organisations, INGOs, and private sector partners.",
    ],
  },
  {
    title: "Convened Leading Childcare Forums & Conferences",
    points: [
      "Hosted the Africa Childcare Forum (ACFKigali2025).",
      "Launched the Women in Childcare Forum (2023 & 2025).",
      "Organised national conferences including ECCED 2022 and CAC 2024.",
    ],
  },
  {
    title: "Built a Strong Continental Network of Childcare Experts",
    points: [
      "Established one of Africa’s largest childcare consultant and practitioner networks.",
      "Enabled cross-country learning, mentorship, and collaboration.",
    ],
  },
  {
    title: "Generated Africa’s Most Comprehensive Childcare Data & Insights",
    points: [
      "Produced research on childcare availability, affordability, and workforce dynamics.",
      "Conducted national and county-level assessments shaping government thinking.",
      "Launched the Status of Female Childcare Workers in Kenya Report (2023).",
    ],
  },
  {
    title: "Supported Childcare Workers, Domestic Workers & Providers",
    points: [
      "Trained hundreds of childcare workers and entrepreneurs.",
      "Strengthened childcare centres through quality, safety, and business training.",
      "Piloted financial inclusion, leadership, and psychosocial support interventions.",
    ],
  },
  {
    title: "Launched High-Impact Ecosystem Initiatives",
    points: [
      "Collaborative Action for Childcare – multi-sector innovation platform.",
      "Mamaplus – workforce development and training hub.",
      "Collaborative SACCO – savings & credit for childcare workers.",
      "Network for Women in Childcare – 11,000-member continental network.",
    ],
  },
  {
    title: "Influenced National & Global Care Economy Conversations",
    points: [
      "Contributed to major continental and global policy dialogues.",
      "Positioned childcare as a lever for workforce participation and growth.",
      "Partnered with global institutions on care economy agendas.",
    ],
  },
  {
    title: "Established Uthabiti as the Partner of Choice",
    points: [
      "Trusted by governments, funders, NGOs, and private sector partners.",
      "Recognised for evidence-driven insights and collaborative leadership.",
    ],
  },
];

const stakeholders = [
    {
      icon: <Landmark size={28} />,
      title: "Governments",
      text:
        "National and sub-national governments shaping childcare policy, regulation, and public investment.",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "NGOs",
      text:
        "Civil society organisations delivering childcare services, advocacy, and community-based solutions.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Private Sector",
      text:
        "Employers and businesses advancing workplace childcare and care-friendly employment models.",
    },
    {
      icon: <HandCoins size={28} />,
      title: "Funders",
      text:
        "Philanthropic organisations, development partners, and investors catalysing sustainable childcare financing.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Workers",
      text:
        "Childcare workers, domestic workers, and caregivers at the frontline of the care economy.",
    },
  ];

  return (
    <>
    <main style={{ overflowX: "hidden" }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-white)",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(229,85,60,0.3)), url('/illustrations/hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            paddingTop: "0", 
          }}
        >
          {/* Heading */}
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
            Uthabiti Africa Foundation
          </h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto 2.5rem",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#e6e6e6",
              transform: visible ? "translateY(0)" : "translateY(-30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.15s",
            }}
          >
            Quality, Affordable Childcare for All. The Foundation empowers communities across Africa, focusing on women and marginalized groups to foster sustainable development, economic opportunity, and social change.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              transform: visible ? "translateY(0)" : "translateY(-20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.3s",
            }}
          >
            <Link
              href="/donate"
              style={{
                padding: "0.9rem 2.1rem",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Make a Donation
            </Link>

            <Link
              href="/contact"
              style={{
                padding: "0.9rem 2.1rem",
                border: "2px solid var(--color-primary)",
                color: "var(--color-primary)",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>


      {/* WHY CHILDCARE MATTERS */}
      <section
        style={{
          padding: "clamp(3.5rem, 6vw, 5.5rem) 1.25rem",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {/* Section label */}
        <p
          style={{
            color: "var(--color-primary)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          The Case for Action
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: "1.1rem",
            textAlign: "center",
          }}
        >
          Why Childcare Matters
        </h2>

        {/* Intro */}
        <p
          style={{
            maxWidth: "720px",
            fontSize: "clamp(0.95rem, 3.5vw, 1.05rem)",
            lineHeight: 1.8,
            color: "#444",
            margin: "0 auto 2.5rem",
            textAlign: "center",
          }}
        >
          Across Africa, more than <strong>90 million children under the age of five</strong>{" "}
          require safe and nurturing care. At the same time, millions of women depend
          on reliable childcare to remain economically active. Childcare is not only a
          social service — it is critical economic infrastructure.
        </p>

        {/* Impact grid */}
        <div className="impact-grid">
          {[
            {
              icon: <Baby size={22} />,
              title: "Early Childhood Development",
              text: "Improved cognitive, social, and emotional outcomes during the most critical years of life.",
              bg: "linear-gradient(135deg, rgba(229,85,60,0.12), #ffffff)",
            },
            {
              icon: <Users size={22} />,
              title: "Women’s Economic Participation",
              text: "Enables mothers and caregivers to work, earn, and advance economically.",
              bg: "linear-gradient(135deg, rgba(0,0,0,0.06), #ffffff)",
            },
            {
              icon: <Briefcase size={22} />,
              title: "Business Productivity",
              text: "Reduces absenteeism and improves workforce stability for employers.",
              bg: "linear-gradient(135deg, rgba(229,85,60,0.1), #ffffff)",
            },
            {
              icon: <Building2 size={22} />,
              title: "Childcare Entrepreneurship",
              text: "Creates dignified jobs and supports local childcare enterprises.",
              bg: "linear-gradient(135deg, rgba(0,0,0,0.05), #ffffff)",
            },
            {
              icon: <TrendingUp size={22} />,
              title: "Economic Growth",
              text: "Strengthens national economies through higher labour participation and human capital development.",
              bg: "linear-gradient(135deg, rgba(229,85,60,0.14), #ffffff)",
            },
          ].map((item, i) => (
            <div key={i} className="impact-card" style={{ background: item.bg }}>
              <div className="impact-icon">{item.icon}</div>

              <div>
                <h3 className="impact-title">{item.title}</h3>
                <p className="impact-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scoped styles */}
        <style jsx>{`
          .impact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.6rem;
            max-width: 920px;
            margin: 0 auto;
          }

          .impact-card {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            padding: 1.4rem 1.5rem;
            border-radius: 1.1rem;
            border: 1px solid var(--color-border);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
          }

          .impact-icon {
            min-width: 42px;
            height: 42px;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: var(--color-white);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .impact-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.3rem;
          }

          .impact-text {
            font-size: 0.92rem;
            line-height: 1.6;
            color: #555;
            margin: 0;
          }

          @media (max-width: 768px) {
            .impact-grid {
              grid-template-columns: 1fr;
              gap: 1.25rem;
            }

            .impact-card {
              padding: 1.2rem 1.25rem;
            }

            .impact-icon {
              min-width: 38px;
              height: 38px;
            }
          }
        `}</style>
      </section>

      {/* CATALYTIC INITIATIVES */}
      <section
        style={{
          padding: "clamp(3.5rem, 6vw, 6rem) 1.25rem",
          background:
            "linear-gradient(180deg, #fafafa 0%, #ffffff 65%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-140px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(560px, 90vw)",
            height: "min(560px, 90vw)",
            background:
              "radial-gradient(circle, rgba(229,85,60,0.18), transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header */}
          <p
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              marginBottom: "0.75rem",
              textAlign: "center",
              transform: visible ? "translateY(0)" : "translateY(20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease",
            }}
          >
            Our Flagship Work
          </p>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 5vw, 2.6rem)",
              fontWeight: 700,
              marginBottom: "1.1rem",
              textAlign: "center",
              transform: visible ? "translateY(0)" : "translateY(25px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Catalytic Initiatives
          </h2>

          <p
            style={{
              maxWidth: "820px",
              fontSize: "clamp(0.95rem, 3.5vw, 1.05rem)",
              lineHeight: 1.75,
              color: "#555",
              margin: "0 auto 3rem",
              textAlign: "center",
              transform: visible ? "translateY(0)" : "translateY(30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.1s",
            }}
          >
            Across these initiatives, Uthabiti Africa acts as a backbone organisation,
            convener, and systems reform partner — accelerating childcare transformation
            across Africa.
          </p>

          {/* Cards grid */}
          <div className="initiative-grid">
            {[
              {
                logo: "/logos/cac-logo.png",
                title: "Collaborative Action for Childcare",
                text:
                  "A pan-African, multi-stakeholder platform convening policymakers, funders, practitioners, and communities to accelerate childcare reform.",
              },
              {
                logo: "/logos/NWC-logo.png",
                title: "Network for Women in Childcare",
                text:
                  "A growing movement amplifying women’s leadership through advocacy, peer learning, and professional development.",
              },
              {
                logo: "/logos/mamaplus-logo.png",
                title: "Mama Plus",
                text:
                  "An innovative model strengthening women-owned childcare micro-enterprises through training, certification, and collective centres.",
              },
              {
                logo: "/logos/sacco-logo.png",
                title: "Collaborative SACCO",
                text:
                  "A financial inclusion platform offering savings, credit, and financial literacy services tailored to childcare workers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="initiative-card"
                style={{
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  opacity: visible ? 1 : 0,
                  transition: "all 0.9s ease",
                  transitionDelay: `${0.15 + i * 0.12}s`,
                }}
              >
                <div className="initiative-glow" />

                <div className="logo-wrap">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={150}
                    height={56}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <Link href="/" className="learn-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          .initiative-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
            gap: 2rem;
          }

          .initiative-card {
            position: relative;
            padding: 2.2rem;
            border-radius: 1.4rem;
            background: var(--color-white);
            border: 1px solid var(--color-border);
            box-shadow: 0 22px 50px rgba(0, 0, 0, 0.06);
          }

          .initiative-glow {
            position: absolute;
            inset: 0;
            border-radius: 1.4rem;
            background: linear-gradient(
              135deg,
              rgba(229, 85, 60, 0.12),
              transparent 55%
            );
            opacity: 0.45;
            pointer-events: none;
          }

          .logo-wrap {
            height: 64px;
            margin-bottom: 1.1rem;
            display: flex;
            align-items: center;
          }

          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.65rem;
          }

          p {
            font-size: 0.95rem;
            line-height: 1.65;
            color: #555;
            margin-bottom: 1.2rem;
          }

          .learn-link {
            font-weight: 600;
            color: var(--color-primary);
            text-decoration: none;
            font-size: 0.95rem;
          }

          @media (max-width: 768px) {
            .initiative-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .initiative-card {
              padding: 1.7rem 1.5rem;
            }

            .logo-wrap {
              height: 52px;
            }

            h3 {
              font-size: 1.15rem;
            }
          }
        `}</style>
      </section>

      {/* STAKEHOLDERS */}
      <section
      style={{
        padding: "6.5rem 1.5rem",
        backgroundColor: "#f7f7f7",
        position: "relative",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-120px",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(229,85,60,0.18), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          position: "relative",
        }}
      >
        {/* Label */}
        <p
          style={{
            color: "var(--color-primary)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            marginBottom: "0.75rem",
          }}
        >
          Our Ecosystem
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginBottom: "1.2rem",
          }}
        >
          Uthabiti’s Ecosystem & Engagement
        </h2>

        {/* Intro */}
        <p
          style={{
            maxWidth: "820px",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#555",
            marginBottom: "3.5rem",
          }}
        >
          We operate at the intersection of policy, practice, and lived
          experience—bringing together the full spectrum of actors required to
          build strong, inclusive childcare systems across Africa.
        </p>

        {/* Stakeholder grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {stakeholders.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "2.2rem 2rem",
                borderRadius: "1.4rem",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 55px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 45px rgba(0,0,0,0.06)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(229,85,60,0.14)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>

              {/* Text */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "#555",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* WHAT WE DO */}
      <section
        style={{
        width: "100%",
        padding: "6.5rem 1.5rem",
        position: "relative",
        background:
          "linear-gradient(180deg, #fff7f4 0%, #ffffff 85%)",
      }}
      >
        {/* Subtle glow */}
        <div
          style={{
          position: "absolute",
          top: "-140px",
          right: "-160px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(229,85,60,0.22), transparent 68%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
        />

        <div style={{
            maxWidth: "1100px",
            margin: "auto",
            position: "relative",
            zIndex: 1,
          }}>
          {/* Label */}
          <p
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
              transform: visible ? "translateY(0)" : "translateY(20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease",
            }}
          >
            Our Expertise
          </p>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 700,
              marginBottom: "1.25rem",
              transform: visible ? "translateY(0)" : "translateY(25px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            What We Do
          </h2>

          {/* Intro */}
          <p
            style={{
              maxWidth: "820px",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "3.5rem",
              transform: visible ? "translateY(0)" : "translateY(30px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s ease",
              transitionDelay: "0.1s",
            }}
          >
            We deliver impact across five strategic pillars that strengthen childcare
            systems, unlock women’s economic participation, and support sustainable
            development across Africa.
          </p>

          {/* Pillars grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.8rem",
            }}
          >
            {[
              {
                icon: <Gavel size={26} />,
                title: "Policy & Systems Strengthening",
                text:
                  "Designing national childcare policies, regulatory frameworks, and system-wide reforms with governments and partners.",
              },
              {
                icon: <Layers size={26} />,
                title: "Program Design & Institutional Support",
                text:
                  "Supporting NGOs and institutions to design, scale, and manage high-quality childcare programs.",
              },
              {
                icon: <Building size={26} />,
                title: "Workplace Childcare Solutions",
                text:
                  "Helping employers create inclusive, productive environments for working parents.",
              },
              {
                icon: <HandCoins size={26} />,
                title: "Inclusive Funding Mechanisms",
                text:
                  "Enabling funders to deploy capital that reaches high-potential childcare organisations.",
              },
              {
                icon: <Sparkles size={26} />,
                title: "Innovation & Ecosystem Building",
                text:
                  "Designing and scaling catalytic models that strengthen Africa’s childcare ecosystem.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2.2rem",
                  borderRadius: "1.3rem",
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(40px)",
                  opacity: visible ? 1 : 0,
                  transition: "all 0.9s ease",
                  transitionDelay: `${0.15 + i * 0.12}s`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(229,85,60,0.12)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#555",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
      style={{
        padding: "6.5rem 1.5rem",
        background: "linear-gradient(180deg, #0b0b0b, #111)",
        color: "var(--color-white)",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-140px",
          left: "-120px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(229,85,60,0.22), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "auto", position: "relative" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          Our Achievements So Far
        </h2>

        {/* Accordion */}
        <div style={{ display: "grid", gap: "1.2rem" }}>
          {achievements.map((item, i) => {
            const open = openIndex === i;

            return (
              <div
                key={i}
                style={{
                  borderRadius: "1.1rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: open
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(255,255,255,0.03)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1.4rem 1.6rem",
                    background: "none",
                    border: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Award color="var(--color-primary)" />
                    <span style={{ fontWeight: 600 }}>{item.title}</span>
                  </div>

                  <ChevronDown
                    size={20}
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {/* Content */}
                <div
                  style={{
                    maxHeight: open ? "600px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <ul
                    style={{
                      padding: "0 1.8rem 1.6rem",
                      margin: 0,
                      lineHeight: 1.8,
                      color: "#ddd",
                    }}
                  >
                    {item.points.map((point, idx) => (
                      <li key={idx} style={{ marginTop: "0.6rem" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* CTA */}
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

    {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
          title="Scroll to top"
        >
          ↑
        </button>
      )}

    </>
  );
}
