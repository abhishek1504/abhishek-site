import { Link } from "react-router-dom";

const stats = [
  { num: "13",    label: "Years in Engineering" },
  { num: "1000+", label: "Chess Games Played" },
  { num: "100+",  label: "Days Running Streak" },
  { num: "25K",   label: "MAU on My Products" },
];

export default function Home() {
  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <section className="hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "center", minHeight: "calc(100vh - 64px)", padding: "80px 40px" }}>

        {/* Left — identity */}
        <div>
          <div className="hero-eyebrow">Engineer · Chess Champion · Runner</div>
          <h1 className="hero-name">
            ABHISHEK<br /><span>SHARMA</span>
          </h1>
          <div className="hero-roles">
            <span className="hero-role-tag active">Product Eng. Manager</span>
            <span className="hero-role-tag">React · React Native · NestJS</span>
            <span className="hero-role-tag">Fintech · 13 yrs</span>
            <span className="hero-role-tag">PBEL Chess Champion 2025</span>
            <span className="hero-role-tag">Runner · 100 Days</span>
          </div>
          <p className="hero-desc">
            13 years building high-performance products. AVP Engineering at GajiGesa,
            leading the frontend for an EWA platform serving 25,000+ users.
            Off the keyboard — PBEL Chess Championship 2025 winner, and still running.
          </p>
          <div className="hero-cta">
            <Link to="/work" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>

        {/* Right — stats block */}
        <div style={heroRight}>
          <div style={statsLabel}>BY THE NUMBERS</div>
          <div style={statsGrid}>
            {stats.map(({ num, label }) => (
              <div key={label} style={statCard}>
                <div style={statNum}>{num}</div>
                <div style={statLbl}>{label}</div>
              </div>
            ))}
          </div>
          <div style={heroDivider} />
          <div style={heroTag}>
            <span style={heroTagDot} />
            Available for senior engineering leadership roles
          </div>
        </div>

      </section>

      {/* ── IDENTITY STRIP ── */}
      <div style={{ borderTop: "1px solid var(--gray-2)", borderBottom: "1px solid var(--gray-2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {[
            { icon: "💻", label: "Engineering", desc: "Frontend Manager · React · Fintech · 12 yrs · 25K MAU" },
            { icon: "♟",  label: "Chess",       desc: "PBEL Chess Champion 2025 · The Thinking Athlete" },
            { icon: "🏃", label: "Running",     desc: "100 Days of Running · Consistent lifestyle athlete" },
          ].map(({ icon, label, desc }, i) => (
            <div key={label} style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid var(--gray-2)" : "none" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontWeight: 800, color: "var(--gold)", letterSpacing: 1, marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 14, color: "var(--gray-4)", lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TROPHY / IMAGES ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--gray-2)" }}>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
            <img
              src="/chess-trophy.jpg"
              alt="PBEL Chess Championship 2025 winner"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.8)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--gold)", letterSpacing: 3, marginBottom: 8 }}>CHESS</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 24, fontWeight: 800, color: "var(--white)" }}>PBEL Champion 2025</div>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
            <img
              src="/running-night.jpg"
              alt="Night run"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.8)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--gold)", letterSpacing: 3, marginBottom: 8 }}>RUNNING</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 24, fontWeight: 800, color: "var(--white)" }}>100 Days Strong</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CHESS PIPELINE TEASER ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2px 40px 80px" }}>
        <div style={{ background: "var(--gray-1)", border: "1px solid var(--gray-2)", borderTop: "none", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--gold)", letterSpacing: 2, marginBottom: 10 }}>SIDE PROJECT · LIVE IN PRODUCTION</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 28, fontWeight: 800, color: "var(--white)", letterSpacing: 0.5, marginBottom: 6 }}>Chess Pipeline</div>
            <div style={{ fontSize: 14, color: "var(--gray-4)", lineHeight: 1.7 }}>Automated pipeline · Chess.com → Video analysis → YouTube · Runs daily via GitHub Actions</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="/projects" className="btn-primary" style={{ fontSize: 12 }}>See How It Works</a>
            <a href="https://www.youtube.com/@indianthinkingathlete" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 12 }}>Watch on YouTube</a>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ── Styles ── */
const heroRight = {
  padding: "0 0 0 60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const statsLabel = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--gold)",
  marginBottom: 24,
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 2,
  background: "var(--gray-2)",
  marginBottom: 32,
};

const statCard = {
  background: "var(--gray-1)",
  padding: "28px 24px",
};

const statNum = {
  fontFamily: "'Nunito', sans-serif",
  fontSize: "2.6rem",
  fontWeight: 900,
  color: "var(--gold)",
  lineHeight: 1,
  marginBottom: 6,
};

const statLbl = {
  fontSize: "0.75rem",
  color: "var(--gray-4)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 600,
};

const heroDivider = {
  height: 1,
  background: "var(--gray-2)",
  marginBottom: 24,
};

const heroTag = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: "0.8rem",
  color: "var(--gray-4)",
  fontWeight: 500,
};

const heroTagDot = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "#4ade80",
  flexShrink: 0,
  boxShadow: "0 0 6px #4ade80",
};
