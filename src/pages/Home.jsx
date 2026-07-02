import { Link } from "react-router-dom";

const evolution = [
  { year: "2008", tech: "Delphi & Firebird" },
  { year: "2011", tech: "iOS · Delphi Prism" },
  { year: "2013", tech: "Objective-C → Titanium" },
  { year: "2016", tech: "Kotlin · Native Android" },
  { year: "2018", tech: "React · React Native" },
  { year: "2022", tech: "Node.js · AWS · CI/CD" },
  { year: "2025", tech: "Gen AI · Agentic AI" },
];

const stats = [
  { num: "17+", label: "Years building & shipping software" },
  { num: "25K", label: "Monthly active users on my products" },
  { num: "99.5%", label: "Crash-free users, sustained" },
  { num: "0.9", label: "Apdex score achieved" },
];

const pillars = [
  {
    title: "Engineering leadership",
    desc: "Founded and led mobility teams, managed vendors, and delivered production apps for KFC, Kohl's, Tractor Supply, Wallenius Wilhelmsen, and Hindustan Unilever.",
  },
  {
    title: "Technical product management",
    desc: "At Gajigesa (Kredivo Group), I own the product lifecycle end to end — roadmap, UX design, delivery, and performance — reporting to the Head of Engineering.",
  },
  {
    title: "Applied AI",
    desc: "PGCP in Generative & Agentic AI from IIT Roorkee, Anthropic Claude certifications, and a production AI-powered automation pipeline running daily on GitHub Actions.",
  },
];

export default function Home() {
  return (
    <div className="page fade-in">
      {/* ── Hero ── */}
      <header className="hero">
        <div className="wrap">
          <div className="mono eyebrow">AVP · Technical Product Manager · Hyderabad, India</div>
          <h1 className="hero-name">
            Seventeen years of<br />shipping products —<br />
            <em>and still curious.</em>
          </h1>
          <p className="hero-desc">
            I'm Abhishek Sharma. I lead product and engineering at Gajigesa (a Kredivo
            Group company) — owning development, UX, and optimization for a consumer
            fintech platform. Before that: mobile and web products for some of the
            world's most recognized brands.
          </p>
          <div className="hero-cta">
            <Link to="/work" className="btn-primary">See my experience</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Download resume</a>
          </div>

          {/* Signature: stack evolution */}
          <div className="evolution">
            <div className="mono" style={{ color: "var(--slate)", marginBottom: 4 }}>
              One career, seven stacks — I learn whatever the product needs
            </div>
            <div className="evolution-track" aria-label="Technology evolution timeline">
              {evolution.map(({ year, tech }) => (
                <div className="evo-node" key={year}>
                  <div className="evo-dot" />
                  <div className="mono evo-year">{year}</div>
                  <div className="evo-tech display">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="section" style={{ paddingTop: 0, borderTop: "none" }}>
        <div className="wrap">
          <div className="stats">
            {stats.map(({ num, label }) => (
              <div className="stat" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I do ── */}
      <section className="section">
        <div className="wrap">
          <div className="mono eyebrow">What I bring to a senior role</div>
          <h2 className="section-title">Engineering depth.<br />Product ownership.</h2>
          <p className="lede" style={{ marginBottom: 44 }}>
            I can talk architecture with engineers in the morning and roadmap
            trade-offs with stakeholders in the afternoon.
          </p>
          <div className="grid-3">
            {pillars.map(({ title, desc }) => (
              <div className="card" key={title}>
                <h3 className="display" style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured project ── */}
      <section className="section">
        <div className="wrap">
          <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, padding: "38px 36px" }}>
            <div style={{ maxWidth: 560 }}>
              <div className="mono eyebrow" style={{ marginBottom: 10 }}>Featured project · Live in production</div>
              <h3 className="display" style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: 8 }}>
                AI-powered content automation pipeline
              </h3>
              <p style={{ fontSize: 15, color: "var(--slate)" }}>
                A zero-touch Python pipeline that turns raw game data into published
                YouTube videos daily — Claude API for metadata, FFmpeg rendering,
                GitHub Actions scheduling. No servers, no manual steps.
              </p>
            </div>
            <Link to="/projects" className="btn-primary">How it works</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
