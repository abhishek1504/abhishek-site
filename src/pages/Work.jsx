const jobs = [
  {
    role: "AVP – Engineering",
    company: "GajiGesa (Acquired by Kredivo Group)",
    dates: "Oct 2022 – Present",
    location: "Hyderabad, IN",
    current: true,
    bullets: [
      "Led frontend engineering for 3 products: the GajiGesa EWA mobile app, its web counterpart, and an HR dashboard — collectively serving 25,000+ monthly active users.",
      "Made the architectural decision to adopt React Native for both mobile and web, eliminating duplicate codebases and accelerating feature delivery across platforms.",
      "Improved Apdex score from 0.1 to 0.7 by optimizing API calls, memoizing React components, and reducing render cycles.",
      "Achieved 99.5%+ crash-free rate by migrating away from the deprecated NativeBase library and building an in-house component library.",
      "Reduced code duplication to under 1% by introducing SonarQube into the CI pipeline and enforcing code quality standards.",
    ],
    tags: ["React Native", "React JS", "TypeScript", "SonarQube", "Performance", "Fintech"],
  },
  {
    role: "Head of Mobility",
    company: "Integrum Solutions",
    dates: "May 2022 – Sep 2022",
    location: "Bengaluru, IN",
    bullets: [
      "Led mobile application development across 2 products end-to-end.",
      "Reduced page load time by 30% across 10 client websites through performance audits and Web Vitals optimization.",
      "Implemented responsive design for a client project that won a UX Award from the Lion Foundation.",
    ],
    tags: ["React Native", "Web Vitals", "Performance", "Mobile"],
  },
  {
    role: "Manager",
    company: "Capgemini Technology Solutions",
    dates: "Aug 2021 – May 2022",
    location: "Bengaluru, IN",
    bullets: [
      "Built a reusable UX component library for the web vertical, achieving 30% code reuse across multiple projects.",
      "Collaborated with cross-functional teams to deliver web application projects for enterprise clients.",
    ],
    tags: ["React JS", "Component Library", "UX", "Enterprise"],
  },
  {
    role: "Senior Associate – Project",
    company: "Cognizant Technology Solutions",
    dates: "Feb 2016 – Aug 2021",
    location: "Hyderabad, IN",
    bullets: [
      "Led frontend development across healthcare, logistics, and e-commerce domains.",
      "Worked on the KFC Mobile app serving 20,000+ monthly active users.",
      "Increased app engagement by 80% by developing new features for the WWL mobile app.",
      "Worked on TSC (Tractor Supply Company), a large-scale e-commerce platform.",
    ],
    tags: ["React Native", "Mobile", "Healthcare", "E-Commerce", "Logistics"],
  },
  {
    role: "Senior Software Engineer",
    company: "Accrete Solutions LLC",
    dates: "Feb 2013 – Feb 2016",
    location: "Gurgaon, IN",
    bullets: [
      "Migrated iOS projects from Objective-C and Swift to Appcelerator Titanium for a unified cross-platform codebase.",
      "Upskilled 10 engineers through structured daily training on Appcelerator Titanium.",
    ],
    tags: ["Appcelerator Titanium", "iOS", "Cross-Platform", "Training"],
  },
];

export default function Work() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-label">// Career timeline</div>
        <h1 className="section-title">MY<br /><span>WORK</span></h1>

        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>
            12 years across startups, consulting giants, and fintech. Each role taught me
            something different — but the thread is always the same: fast, reliable,
            user-first frontend engineering.
          </p>
        </div>

        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.role + job.company} className={`timeline-item${job.current ? " current" : ""}`}>
              <div className="timeline-dates">{job.dates} · {job.location}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="skill-tags" style={{ marginTop: 16 }}>
                {job.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: 80, paddingTop: 80, borderTop: "1px solid #1A1A1A" }}>
          <div className="section-label">// Education</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
            {[
              { degree: "Masters in Computer Applications", school: "HNB Garhwal University · IMS Dehradun", year: "2005 – 2008" },
              { degree: "B.Sc. Mathematics", school: "Delhi University", year: "2002 – 2005" },
            ].map(({ degree, school, year }) => (
              <div key={degree} style={{ padding: "28px 24px", border: "1px solid #1A1A1A", background: "#0F0F0F" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 10 }}>{year}</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#F5F4F0", marginBottom: 4 }}>{degree}</div>
                <div style={{ fontSize: 13, color: "#555" }}>{school}</div>
              </div>
            ))}
          </div>

          {/* Cert */}
          <div style={{ marginTop: 24, padding: "24px", border: "1px solid #C9A84C22", background: "#0F0F0F", maxWidth: 480 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", letterSpacing: 2, marginBottom: 8 }}>CERTIFICATION</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#F5F4F0", marginBottom: 4 }}>GenAI & Agentic AI</div>
            <div style={{ fontSize: 13, color: "#555" }}>IIT Roorkee & Futurense</div>
          </div>
        </div>
      </div>
    </div>
  );
}
