export default function Running() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">// One foot in front of the other</div>
        <h1 className="section-title">RUNNING &<br /><span>DISCIPLINE</span></h1>

        <p className="running-intro">
          Running is the simplest thing I do. No opponent, no algorithm, no team.
          Just <strong>distance, time, and honesty</strong>. You can't shortcut a
          kilometre. You can't refactor your way out of tired legs. You either put
          in the work or you don't — and the road always knows the difference.
        </p>
        <p className="running-intro" style={{ marginTop: 20 }}>
          I run as part of a <strong>fitness lifestyle</strong> — consistently, not
          obsessively. It's a counterbalance to the sedentary nature of engineering.
          Screens demand stillness; running demands movement. Both, done well, require
          the same thing: <strong>showing up when you don't feel like it</strong>.
        </p>

        {/* Photo strip */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#1A1A1A" }}>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
            <img
              src="/running-night.jpg"
              alt="Abhishek on a night run"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.85)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.8)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2 }}>NIGHT RUN</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>The city belongs to runners after dark</div>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
            <img
              src="/running-day.jpg"
              alt="Abhishek on an early morning run"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.85)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.8)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2 }}>MORNING RUN</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>100 Days of Running — still going</div>
            </div>
          </div>
        </div>

        <div className="running-grid" style={{ marginTop: 2 }}>
          {[
            {
              icon: "🏃",
              title: "THE HABIT",
              body: "Consistency over intensity. Regular runs build more than fitness — they build the mental habit of finishing what you start. Every engineer should have something that has no undo button.",
            },
            {
              icon: "🧠",
              title: "THE MIND",
              body: "Long runs are thinking time. Some of my best architecture decisions have happened at kilometre 6. Movement unlocks something sitting at a desk doesn't.",
            },
            {
              icon: "♟",
              title: "THE LINK",
              body: "Chess and running are both about managing energy over time. Sprint too early in a game or a race and you're done. Pacing is strategy.",
            },
            {
              icon: "📍",
              title: "HYDERABAD",
              body: "Running in Hyderabad — the same track you see in these photos, night after night. The city has its rhythm and I've found mine within it.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="running-card">
              <div className="running-card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        {/* The Thinking Athlete tie-in */}
        <div style={{ marginTop: 64, padding: "48px 40px", border: "1px solid #1A1A1A", background: "#0F0F0F", position: "relative", overflow: "hidden" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 120, color: "#1A1A1A", position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", lineHeight: 1, pointerEvents: "none" }}>TA</div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 540 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 3, marginBottom: 16 }}>// THE BRAND</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: "#F5F4F0", letterSpacing: 1, marginBottom: 16 }}>THE THINKING ATHLETE</div>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
              A chess tournament winner and a consistent runner — the same person.
              The Thinking Athlete is built around the idea that <span style={{ color: "#F5F4F0" }}>mental and physical performance are the same thing</span> — trained the same way, through consistency, reflection, and the willingness to keep showing up.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow The Thinking Athlete →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
