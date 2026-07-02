const steps = [
  { step: "Fetch", desc: "Pulls the day's game data from a public REST API via scheduled automation. A quality-scoring engine (0–100) filters out low-quality entries — only results scoring ≥ 70 continue." },
  { step: "Render", desc: "Generates two video formats from one run — 1280×720 landscape (full sequence) and 1080×1920 vertical for Shorts — frame-by-frame with Pillow/imageio, encoded via FFmpeg with event-synced audio." },
  { step: "Generate", desc: "Calls the Anthropic Claude API to write titles, descriptions, and hashtags from the structured game data — publish-ready metadata with zero manual editing." },
  { step: "Publish", desc: "Uploads both formats through the YouTube Data API (OAuth 2.0), assigns playlists, cross-links versions, and records everything in a persistent log for idempotent, duplicate-free publishing." },
];

const decisions = [
  { decision: "GitHub Actions as the only infrastructure", why: "No servers, no VPS, no cost. Scheduled workflows run the full pipeline daily; the pipeline is stateless — fetch, process, publish, exit. Secrets-based auth keeps credentials out of the repo." },
  { decision: "Quality score as a publishing gate", why: "Not every result deserves an audience. A 0–100 scoring engine acts as an automated editorial filter, so the output stays high quality with zero human review." },
  { decision: "LLM where it earns its place", why: "Claude generates the creative metadata — titles, descriptions, hashtags — where language quality matters. Deterministic code handles everything else. Right tool, right layer." },
  { decision: "Idempotency by design", why: "A committed upload log plus sync tooling means re-runs never duplicate content, and the pipeline can rebuild its state from YouTube itself if the log drifts." },
];

const stack = ["Python", "Anthropic Claude API", "YouTube Data API v3", "OAuth 2.0", "FFmpeg", "imageio", "Pillow", "GitHub Actions", "REST APIs", "Cron Scheduling"];

export default function Projects() {
  return (
    <div className="page fade-in">
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="mono eyebrow">Applied AI · Automation · Live in production</div>
          <h1 className="section-title">AI-powered content<br />automation pipeline</h1>
          <p className="lede" style={{ marginBottom: 12 }}>
            A zero-touch publishing system: raw game data goes in, finished YouTube
            videos come out — every day, with no manual steps. Built to prove one
            thing: agentic automation is most valuable when it runs unattended.
          </p>
          <div style={{ marginBottom: 56 }}>
            <a href="https://github.com/abhishek1504/chess-pipeline" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>View on GitHub</a>
          </div>

          <div className="mono eyebrow" style={{ marginBottom: 20 }}>How it works</div>
          <div className="grid-2" style={{ marginBottom: 64 }}>
            {steps.map(({ step, desc }, i) => (
              <div className="card" key={step}>
                <div className="mono" style={{ color: "var(--teal)", marginBottom: 10 }}>Stage {i + 1} · {step}</div>
                <p style={{ fontSize: 15, color: "var(--slate)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="mono eyebrow" style={{ marginBottom: 20 }}>Engineering decisions</div>
          <div style={{ marginBottom: 64 }}>
            {decisions.map(({ decision, why }) => (
              <div key={decision} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 28, padding: "22px 0", borderBottom: "1px solid var(--line)" }}>
                <div className="display" style={{ fontWeight: 700, fontSize: 15.5 }}>{decision}</div>
                <p style={{ fontSize: 15, color: "var(--slate)" }}>{why}</p>
              </div>
            ))}
          </div>

          <div className="mono eyebrow" style={{ marginBottom: 16 }}>Stack</div>
          <div>{stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
      </section>
    </div>
  );
}
