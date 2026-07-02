export default function Contact() {
  return (
    <div className="page fade-in">
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="mono eyebrow">Let's talk</div>
          <h1 className="section-title">Open to senior<br />leadership roles.</h1>
          <p className="lede" style={{ marginBottom: 48 }}>
            Engineering Manager · AVP Engineering · Technical Product Manager ·
            AI Engineering Leadership — in Hyderabad or remote.
          </p>
          <div className="grid-3">
            <a href="mailto:abhisheksharma.dsc@gmail.com" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mono" style={{ color: "var(--teal)", marginBottom: 10 }}>Email</div>
              <div className="display" style={{ fontWeight: 700, fontSize: 15 }}>abhisheksharma.dsc@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/abhishekmca" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mono" style={{ color: "var(--teal)", marginBottom: 10 }}>LinkedIn</div>
              <div className="display" style={{ fontWeight: 700, fontSize: 15 }}>linkedin.com/in/abhishekmca</div>
            </a>
            <a href="https://github.com/abhishek1504" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mono" style={{ color: "var(--teal)", marginBottom: 10 }}>GitHub</div>
              <div className="display" style={{ fontWeight: 700, fontSize: 15 }}>github.com/abhishek1504</div>
            </a>
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Download my resume (PDF)</a>
          </div>
        </div>
      </section>
    </div>
  );
}
