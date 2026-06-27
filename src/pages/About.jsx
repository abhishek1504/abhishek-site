export default function About() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">// Who I am</div>
        <h1 className="section-title">ABOUT<br /><span>ME</span></h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Abhishek Sharma</strong> — a Product Engineering Manager based in
              Hyderabad, India, with 13+ years of experience building products that people
              actually use. I started writing code in 2013 and haven't stopped since,
              working my way through mobile apps, enterprise systems, and most recently
              fintech at scale.
            </p>
            <p>
              At <strong>GajiGesa</strong> (acquired by Kredivo Group), I served as AVP Engineering
              and led the frontend for an Earned Wage Access platform — letting workers
              access earned salary before payday. I made key architectural decisions,
              built an in-house component library, and took the app from a rocky 0.1
              Apdex score to a smooth 0.7.
            </p>
            <p>
              But engineering is only one part of how I think. I'm also a <strong>chess player</strong>
              — the game that taught me patience, pattern recognition, and thinking
              several moves ahead. And I run — not competitively, but consistently.
              Running keeps me honest. You can't fake a kilometre.
            </p>
            <p>
              The three aren't separate. The same mind that plans an opening plays an
              architecture review. The same discipline that gets you out at 6am ships
              clean code at 6pm.
            </p>

            <div className="skill-tags">
              {["React JS", "React Native", "TypeScript", "JavaScript", "Performance Optimization",
                "Team Leadership", "SonarQube", "Jest", "Maestro", "Fintech", "EWA", "UX Design"
              ].map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>

          <div>
            <div className="about-stats">
              {[
                { num: "12+", label: "Years Experience" },
                { num: "25K", label: "Monthly Active Users" },
                { num: "0.7", label: "Apdex Score Achieved" },
                { num: "99.5%", label: "Crash-Free Rate" },
              ].map(({ num, label }) => (
                <div key={label} className="stat-box">
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: "24px", border: "1px solid #1A1A1A", background: "#0F0F0F" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 12 }}>CURRENTLY</div>
              <div style={{ fontSize: 15, color: "#888", lineHeight: 1.7 }}>
                AVP Engineering at <span style={{ color: "#F5F4F0" }}>Kredivo Group</span> (formerly GajiGesa) · 
                Exploring new opportunities in frontend engineering leadership ·
                Building <span style={{ color: "#F5F4F0" }}>The Thinking Athlete</span> brand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
