export default function Contact() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">// Let's talk</div>
        <h1 className="section-title">GET IN<br /><span>TOUCH</span></h1>

        <div className="contact-layout">
          <div>
            <p className="contact-intro">
              I'm open to <strong>frontend engineering manager roles</strong>, conversations
              about fintech, React Native architecture, or just a good chess game.
              Reach out — I respond to real messages from real people.
            </p>

            <div className="contact-links">
              <a href="mailto:abhisheksharma.dsc@gmail.com" className="contact-link">
                <div className="contact-link-icon">✉️</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">abhisheksharma.dsc@gmail.com</div>
                </div>
                <div className="contact-link-arrow">→</div>
              </a>
              <a href="https://abhishek1504.netlify.app" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">🌐</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Website</div>
                  <div className="contact-link-value">abhishek1504.netlify.app</div>
                </div>
                <div className="contact-link-arrow">→</div>
              </a>
              <a href="https://www.linkedin.com/in/abhishekmca" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">💼</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/abhishekmca</div>
                </div>
                <div className="contact-link-arrow">→</div>
              </a>
            </div>
          </div>

          <div>
            <div className="contact-social">
              <div className="contact-social-title">// Find me elsewhere</div>
              <div className="social-grid">
                {[
                  { icon: "🐙", label: "GitHub", url: "https://github.com/abhishek1504", handle: "@abhishek1504" },
                  { icon: "♟", label: "Chess.com", url: "https://chess.com", handle: "My Chess Profile" },
                  { icon: "📸", label: "Instagram", url: "https://instagram.com", handle: "@thinkingathlete" },
                  { icon: "▶️", label: "YouTube", url: "https://youtube.com", handle: "The Thinking Athlete" },
                ].map(({ icon, label, url, handle }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <span style={{ fontSize: 18 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 12, color: "#555", marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 13 }}>{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 40, padding: "24px", border: "1px solid #1A1A1A", background: "#0F0F0F" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 12 }}>CURRENTLY OPEN TO</div>
              {[
                "Frontend Engineering Manager roles",
                "Staff / Principal Engineer positions",
                "Fintech & consumer product companies",
                "Bengaluru · Hyderabad · Remote",
              ].map(item => (
                <div key={item} style={{ fontSize: 14, color: "#888", paddingLeft: 16, position: "relative", marginBottom: 8, lineHeight: 1.6 }}>
                  <span style={{ position: "absolute", left: 0, color: "#C9A84C" }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
