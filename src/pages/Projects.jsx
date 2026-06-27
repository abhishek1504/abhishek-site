export default function Projects() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">// Things I've built outside work</div>
        <h1 className="section-title">SIDE<br /><span>PROJECTS</span></h1>

        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, maxWidth: 600, marginBottom: 80 }}>
          The best engineers build things for themselves. These are projects born from
          personal interests — chess, running, automation — that ended up becoming
          genuinely interesting engineering problems.
        </p>

        {/* Chess Pipeline — main project */}
        <div style={{ border: "1px solid #1A1A1A", background: "#0A0A0A", marginBottom: 40 }}>

          {/* Header */}
          <div style={{ padding: "40px 40px 32px", borderBottom: "1px solid #1A1A1A", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 3, marginBottom: 12 }}>// AUTOMATION · PIPELINE · PYTHON</div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: "#F5F4F0", letterSpacing: 1, lineHeight: 0.95, marginBottom: 12 }}>CHESS<br />PIPELINE</h2>
              <div style={{ fontSize: 14, color: "#555" }}>Automated chess content generation · Live on YouTube daily</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
              <a href="https://www.youtube.com/@indianthinkingathlete" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 12 }}>
                Watch on YouTube →
              </a>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#444", letterSpacing: 1 }}>Runs daily @ 11 PM IST</span>
            </div>
          </div>

          {/* What it does */}
          <div style={{ padding: "32px 40px", borderBottom: "1px solid #1A1A1A" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 20 }}>WHAT IT DOES</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, background: "#1A1A1A" }}>
              {[
                { step: "01", title: "Fetch", desc: "Pulls daily chess games from Chess.com public API. Filters by result — only wins go through." },
                { step: "02", title: "Analyse", desc: "Scores each game 0–100 using python-chess PGN analysis. Detects hanging pieces, missed captures, brilliant moves, checkmates. Only games scoring ≥70 are published." },
                { step: "03", title: "Render", desc: "Generates two video formats: Short (last 20 moves for YouTube Shorts) and Landscape (full game). Frame-by-frame board rendering via Pillow, encoded with libx264." },
                { step: "04", title: "Audio", desc: "Mixes move sounds per timestamp using FFmpeg subprocess. Each piece movement has a corresponding sound cued to the exact frame." },
                { step: "05", title: "Metadata", desc: "Generates titles, descriptions, and hashtags deterministically from PGN data — opening name, opponent rating, result, key moments." },
                { step: "06", title: "Publish", desc: "Uploads both video formats to YouTube via Data API v3. Fully automated — zero manual steps from game played to video live." },
              ].map(({ step, title, desc }) => (
                <div key={step} style={{ background: "#0A0A0A", padding: "28px 24px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", marginBottom: 8 }}>{step}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#F5F4F0", marginBottom: 10 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering decisions */}
          <div style={{ padding: "32px 40px", borderBottom: "1px solid #1A1A1A" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 20 }}>INTERESTING ENGINEERING DECISIONS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  decision: "Replaced Claude API with deterministic generation",
                  why: "Prototyped LLM commentary using Claude API. Benchmarked output quality vs cost. Deterministic metadata from structured PGN data matched quality at zero cost — so the LLM was removed. Engineering over hype."
                },
                {
                  decision: "Quality score as a publishing gate",
                  why: "Not every game is worth watching. Built a 0–100 scoring engine that detects hanging pieces and missed captures as quality proxies. Only games scoring ≥70 get published — keeps the channel output high quality automatically."
                },
                {
                  decision: "Two video formats from one pipeline",
                  why: "YouTube Shorts (vertical, last 20 moves) and landscape (full game) serve different audiences. Both are generated from the same pipeline run — no duplicate processing, just different render configs."
                },
                {
                  decision: "GitHub Actions as the scheduler",
                  why: "No server, no cron job on a VPS, no cost. GitHub Actions runs the full pipeline daily at 11 PM IST. The pipeline is stateless — pulls fresh data each run, processes, publishes, exits."
                },
              ].map(({ decision, why }) => (
                <div key={decision} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24, padding: "20px 0", borderBottom: "1px solid #111" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#F5F4F0", lineHeight: 1.5 }}>{decision}</div>
                  <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>{why}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div style={{ padding: "32px 40px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 20 }}>TECH STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                "Python 3.11", "python-chess", "Pillow", "imageio", "libx264",
                "FFmpeg", "GitHub Actions", "Chess.com API", "YouTube Data API v3",
                "google-api-python-client", "PGN Analysis", "Cron Scheduling"
              ].map(t => (
                <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, padding: "6px 14px", background: "#1A1A1A", color: "#888", border: "1px solid #222" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* What's next box */}
        <div style={{ padding: "32px 40px", border: "1px solid #C9A84C22", background: "#0F0F0F" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 16 }}>// WHAT'S NEXT</div>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, maxWidth: 640, marginBottom: 20 }}>
            The pipeline is running. Next logical steps are adding <span style={{ color: "#F5F4F0" }}>LLM-generated move commentary</span> back in (now that the base pipeline is stable and cost-justified), and potentially open-sourcing the project once secrets are fully externalized.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://www.youtube.com/@indianthinkingathlete" target="_blank" rel="noopener noreferrer" className="btn-outline">
              @indianthinkingathlete →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
