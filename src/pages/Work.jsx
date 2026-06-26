const apps = [
  {
    name: "GajiGesa EWA App",
    category: "Fintech · Earned Wage Access",
    color: "#00B37E",
    bgColor: "#00120B",
    icon: "💸",
    letter: "G",
    platform: "iOS & Android",
    users: "25,000+ MAU",
    role: "Lead Architect & Manager",
    desc: "Earned Wage Access platform allowing workers to withdraw earned salary before payday. Built on a single React Native codebase serving both mobile and web.",
    highlights: ["Apdex 0.1 → 0.7", "99.5% crash-free", "35% perf gain", "<1% code duplication"],
    tech: ["React Native", "TypeScript", "SonarQube", "Maestro"],
  },
  {
    name: "GajiGesa Web",
    category: "Fintech · Web Platform",
    color: "#00B37E",
    bgColor: "#00120B",
    icon: "🌐",
    letter: "G",
    platform: "Web",
    users: "25,000+ MAU",
    role: "Lead Frontend Engineer",
    desc: "Web counterpart to the mobile EWA app — same React Native codebase, unified design system, serving HR teams and employees on desktop browsers.",
    highlights: ["Shared codebase with mobile", "React Native Web", "Performance optimized"],
    tech: ["React Native Web", "TypeScript", "Jest", "ESLint"],
  },
  {
    name: "HR Dashboard",
    category: "Fintech · Internal Tools",
    color: "#7C3AED",
    bgColor: "#0D0720",
    icon: "📊",
    letter: "HR",
    platform: "Web",
    users: "Enterprise clients",
    role: "Lead Frontend Engineer",
    desc: "Internal HR dashboard enabling companies to manage employee salary access, track usage, configure EWA policies and view payroll analytics in real time.",
    highlights: ["Real-time analytics", "Payroll integration", "Multi-tenant"],
    tech: ["React JS", "TypeScript", "Performance Monitoring"],
  },
  {
    name: "KFC Mobile App",
    category: "Food & Beverage · Consumer",
    color: "#E4002B",
    bgColor: "#1A0005",
    icon: "🍗",
    letter: "KFC",
    platform: "iOS & Android",
    users: "20,000+ MAU",
    role: "Senior Frontend Developer",
    desc: "KFC's mobile ordering and loyalty application — one of the world's most recognized fast food brands. Worked on feature development at Cognizant.",
    highlights: ["20K+ monthly active users", "Mobile ordering", "Loyalty features"],
    tech: ["React Native", "Mobile", "Performance"],
  },
  {
    name: "TSC — Tractor Supply Co.",
    category: "Retail · E-Commerce",
    color: "#007DC5",
    bgColor: "#000D1A",
    icon: "🚜",
    letter: "TSC",
    platform: "Web & Mobile",
    users: "Large-scale retail",
    role: "Senior Frontend Developer",
    desc: "Tractor Supply Company — one of America's largest rural lifestyle retailers with $14B+ in annual revenue. Contributed to the e-commerce frontend at Cognizant.",
    highlights: ["Large-scale retail platform", "E-commerce flows", "Cross-device"],
    tech: ["React", "JavaScript", "Responsive Design"],
  },
  {
    name: "WWL Mobile App",
    category: "Logistics · Shipping",
    color: "#003087",
    bgColor: "#00061A",
    icon: "🚢",
    letter: "WWL",
    platform: "iOS & Android",
    users: "Global logistics",
    role: "Senior Frontend Developer",
    desc: "Wallenius Wilhelmsen Logistics — global automotive and marine shipping leader. Developed new features that drove an 80% increase in app engagement.",
    highlights: ["80% engagement increase", "New feature development", "Global logistics"],
    tech: ["React Native", "Mobile", "Performance"],
  },
];

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
      "Increased app engagement by 80% by developing new features for the WWL (Wallenius Wilhelmsen) mobile app.",
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
        <div className="section-label">// Apps & products I've built</div>
        <h1 className="section-title">MY<br /><span>WORK</span></h1>

        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, maxWidth: 600, marginBottom: 64 }}>
          13 years across startups, consulting giants, and fintech. From global brands
          like KFC and Tractor Supply to building a fintech platform from scratch —
          always focused on fast, reliable, user-first frontend engineering.
        </p>

        {/* App showcase grid */}
        <div className="section-label" style={{ marginBottom: 24 }}>// Product showcase</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "#1A1A1A", marginBottom: 80 }}>
          {apps.map((app) => (
            <div key={app.name} style={{ background: "#0A0A0A", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 0, transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#111"}
              onMouseLeave={e => e.currentTarget.style.background = "#0A0A0A"}
            >
              {/* App icon */}
              <div style={{ width: 56, height: 56, borderRadius: 14, background: app.bgColor, border: `1px solid ${app.color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: app.letter.length > 2 ? 13 : 18, color: app.color, letterSpacing: 1 }}>{app.letter}</span>
              </div>

              {/* Meta */}
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>{app.category}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#F5F4F0", marginBottom: 4 }}>{app.name}</div>
              <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>{app.platform} · {app.users}</div>

              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{app.desc}</p>

              {/* Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {app.highlights.map(h => (
                  <span key={h} style={{ fontSize: 11, padding: "3px 10px", background: `${app.color}15`, color: app.color, borderRadius: 2, fontFamily: "'JetBrains Mono', monospace" }}>{h}</span>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {app.tech.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 8px", background: "#1A1A1A", color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Career Timeline */}
        <div className="section-label" style={{ marginBottom: 32 }}>// Career timeline</div>
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
          <div className="section-label" style={{ marginBottom: 24 }}>// Education</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
