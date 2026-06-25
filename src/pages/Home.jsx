import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page fade-in">
      <section className="hero">
        <div className="hero-eyebrow">// Engineer · Chess Champion · Runner</div>
        <h1 className="hero-name">
          ABHISHEK<br /><span>SHARMA</span>
        </h1>
        <div className="hero-roles">
          <span className="hero-role-tag active">Frontend Eng. Manager</span>
          <span className="hero-role-tag">React & React Native</span>
          <span className="hero-role-tag">Fintech · 12 yrs</span>
          <span className="hero-role-tag">PBEL Chess Champion 2025</span>
          <span className="hero-role-tag">Runner · 100 Days</span>
        </div>
        <p className="hero-desc">
          12 years building high-performance products. AVP Engineering at GajiGesa,
          leading the frontend for an EWA platform serving 25,000+ users.
          Off the keyboard — PBEL Chess Championship 2025 winner, and still running.
        </p>
        <div className="hero-cta">
          <Link to="/work" className="btn-primary">View My Work</Link>
          <Link to="/contact" className="btn-outline">Get In Touch</Link>
        </div>
        <div className="hero-chessboard">♟</div>
      </section>

      {/* Quick identity strip */}
      <div style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {[
            { icon: "💻", label: "Engineering", desc: "Frontend Manager · React · Fintech · 12 yrs · 25K MAU" },
            { icon: "♟", label: "Chess", desc: "PBEL Chess Champion 2025 · The Thinking Athlete" },
            { icon: "🏃", label: "Running", desc: "100 Days of Running · Consistent lifestyle athlete" },
          ].map(({ icon, label, desc }, i) => (
            <div key={label} style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid #1A1A1A" : "none" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "#C9A84C", letterSpacing: 1, marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 13, color: "#555" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trophy teaser */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#1A1A1A" }}>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
            <img
              src="/chess-trophy.jpg"
              alt="PBEL Chess Championship 2025 winner"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.8)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C9A84C", letterSpacing: 3, marginBottom: 8 }}>CHESS</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#F5F4F0" }}>PBEL Champion 2025</div>
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
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C9A84C", letterSpacing: 3, marginBottom: 8 }}>RUNNING</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#F5F4F0" }}>100 Days Strong</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
