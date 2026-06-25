export default function Chess() {
  return (
    <div className="page fade-in">
      <div className="section chess-section">
        <div className="chess-hero-text">♟</div>

        <div className="chess-content">
          <div className="section-label">// The 64 squares</div>
          <h1 className="section-title">CHESS &<br /><span>STRATEGY</span></h1>

          <p>
            Chess found me the way it finds most people — slowly, then completely.
            What started as a casual game became a discipline, and the discipline
            became competition. In 2025, I won the <strong>PBEL Chess Championship</strong>
            — an open tournament that put that discipline to the test.
          </p>
          <p>
            I play on <strong>Chess.com</strong>. Each game is a small experiment
            in patience, pattern recognition, and knowing when to attack and when
            to defend. The parallels to engineering are impossible to ignore: both
            reward preparation, punish impulsiveness, and require you to think
            in systems, not just individual moves.
          </p>
          <p>
            Chess also taught me how to lose well — and in 12 years of engineering,
            that's been just as valuable as knowing how to win.
          </p>
        </div>

        {/* Trophy photo */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#1A1A1A", maxWidth: 800 }}>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
            <img
              src="/chess-trophy.jpg"
              alt="Abhishek receiving the PBEL Chess Championship 2025 trophy"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" }}
            />
          </div>
          <div style={{ background: "#0F0F0F", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 3, marginBottom: 16 }}>ACHIEVEMENT</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: "#F5F4F0", lineHeight: 0.95, marginBottom: 16 }}>PBEL CHESS CHAMPIONSHIP 2025</div>
            <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 24 }}>
              Open category. Not a participation trophy — a tournament win, earned across multiple rounds against competitive opponents.
            </div>
            <a
              href="https://www.chess.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "inline-block", alignSelf: "flex-start" }}
            >
              Find me on Chess.com →
            </a>
          </div>
        </div>

        {/* The Thinking Athlete brand */}
        <div className="brand-card" style={{ marginTop: 56, maxWidth: 800 }}>
          <div className="brand-card-title">THE THINKING ATHLETE</div>
          <p>
            Chess and running don't seem like they belong together — until you realise
            both are about <strong style={{ color: "#F5F4F0" }}>showing up consistently</strong>,
            building capacity over time, and performing under fatigue.
            The Thinking Athlete is where these two worlds meet.
          </p>
        </div>

        {/* Chess → Engineering lessons */}
        <div style={{ marginTop: 64, maxWidth: 800 }}>
          <div className="section-label" style={{ marginBottom: 24 }}>// Lessons from the board</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "#1A1A1A" }}>
            {[
              { move: "01.", lesson: "Control the center", apply: "Own the core architecture before building features." },
              { move: "02.", lesson: "Develop before you attack", apply: "Ship infrastructure before optimizing for scale." },
              { move: "03.", lesson: "Every move changes the position", apply: "Every engineering decision has downstream consequences." },
              { move: "04.", lesson: "When ahead, trade pieces", apply: "When the product is working, reduce complexity." },
            ].map(({ move, lesson, apply }) => (
              <div key={move} style={{ display: "grid", gridTemplateColumns: "48px 1fr 1fr", gap: 20, padding: "20px 24px", background: "#0A0A0A", alignItems: "start" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#C9A84C" }}>{move}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#F5F4F0" }}>{lesson}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{apply}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
