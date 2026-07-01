export default function About() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">Who I am</div>
        <h1 className="section-title">FULL STACK<br /><span>ENGINEER</span></h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Abhishek Sharma</strong> — a Full-Stack and Forward Deployed Engineer based in Hyderabad, India, with 13+ years of experience building
              products that people actually use. I started writing code in 2013 and
              haven't stopped since — working across mobile, web, cloud infrastructure,
              and data pipelines, most recently in fintech at scale.
            </p>
            <p>
              At <strong>GajiGesa</strong> (acquired by Kredivo Group), I served as AVP Engineering
              and owned the full product stack — from React Native mobile and web frontends
              to GCP infrastructure, Firebase performance monitoring, MongoDB data layers,
              and MoEngage-powered user engagement. I took the app from a rocky 0.1
              Apdex score to a smooth 0.7, and pushed crash-free rate to 99.5%.
            </p>
            <p>
              I think of myself as a builder who operates across the stack — comfortable
              making frontend architecture decisions in the morning, reviewing cloud
              infrastructure in the afternoon, and instrumenting analytics pipelines before
              the day ends. The titles that fit best: <strong>Full-Stack Engineer</strong> and <strong>Forward Deployed Engineer</strong> — someone who can own a problem from the database to the UI to the cloud, and deploy it.
            </p>
            <p>
              Off the keyboard — PBEL Chess Championship 2025 winner, and still running.
              The same mind that plans an opening plays an architecture review.
            </p>

            <div className="skill-tags">
              {[
                "React JS", "React Native", "TypeScript", "JavaScript",
                "GCP", "AWS", "Firebase", "MongoDB", "NestJS",
                "MoEngage", "Firebase Analytics", "Performance Optimization",
                "Team Leadership", "SonarQube", "Jest", "Maestro", "Fintech",
              ].map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>

          <div>
            <div className="about-stats">
              {[
                { num: "13+", label: "Years Engineering" },
                { num: "25K",  label: "Monthly Active Users" },
                { num: "0.7",  label: "Apdex Score Achieved" },
                { num: "99.5%", label: "Crash-Free Rate" },
              ].map(({ num, label }) => (
                <div key={label} className="stat-box">
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Stack breadth */}
            <div style={{ marginTop: 2, background: "var(--gray-1)" }}>
              {[
                { layer: "Frontend",     tools: "React · React Native · TypeScript · NestJS" },
                { layer: "Cloud",        tools: "GCP · AWS · Firebase Hosting · CI/CD" },
                { layer: "Data",         tools: "MongoDB · Firebase Firestore · NoSQL" },
                { layer: "Observability",tools: "Firebase Performance · Firebase Analytics · MoEngage" },
                { layer: "Quality",      tools: "SonarQube · Jest · Maestro · Apdex" },
              ].map(({ layer, tools }, i) => (
                <div key={layer} style={{
                  display: "grid", gridTemplateColumns: "120px 1fr",
                  padding: "14px 20px",
                  borderBottom: i < 4 ? "1px solid var(--gray-2)" : "none",
                  gap: 16, alignItems: "center",
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--gold)", letterSpacing: 1, textTransform: "uppercase" }}>{layer}</div>
                  <div style={{ fontSize: 13, color: "var(--gray-4)", lineHeight: 1.5 }}>{tools}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, padding: "20px 24px", border: "1px solid var(--gray-2)", background: "var(--gray-1)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--gold)", letterSpacing: 2, marginBottom: 12 }}>CURRENTLY</div>
              <div style={{ fontSize: 15, color: "var(--gray-4)", lineHeight: 1.7 }}>
                Exploring new opportunities as a <span style={{ color: "var(--white)" }}>Full-Stack or Forward Deployed Engineer</span>, or Engineering Manager — fintech, consumer, or platform companies.
                Also building <span style={{ color: "var(--white)" }}>The Thinking Athlete</span> brand.
              </div>
            </div>
          </div>
        </div>
        {/* Full-stack capabilities strip */}
        <div style={{ marginTop: 80, paddingTop: 80, borderTop: "1px solid var(--gray-2)" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>Full-stack capabilities</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--gray-2)" }}>
            {[
              {
                layer: "Frontend",
                icon: "◻",
                tools: ["React JS", "React Native", "React Native Web", "TypeScript", "JavaScript", "NestJS"],
                desc: "Mobile-first to responsive web. Shared codebases, design systems, and sub-1% code duplication.",
              },
              {
                layer: "Cloud & Infra",
                icon: "☁",
                tools: ["GCP", "AWS", "Firebase Hosting", "CI/CD", "GitHub Actions"],
                desc: "Deployment pipelines, environment management, cloud infra configuration for production systems.",
              },
              {
                layer: "Data & Observability",
                icon: "◈",
                tools: ["MongoDB", "Firebase Firestore", "Firebase Analytics", "Firebase Performance", "MoEngage"],
                desc: "NoSQL data layers, real-time instrumentation, crash monitoring, and user engagement pipelines.",
              },
            ].map(({ layer, icon, tools, desc }) => (
              <div key={layer} style={{ background: "var(--black)", padding: "36px 28px" }}>
                <div style={{ fontSize: 24, color: "var(--gold)", marginBottom: 12 }}>{icon}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: "var(--white)", marginBottom: 12 }}>{layer}</div>
                <p style={{ fontSize: 13, color: "var(--gray-4)", lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {tools.map(t => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "3px 10px", background: "var(--gray-1)", color: "var(--gold)", border: "1px solid var(--gray-2)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
