const brands = [
  { letter: "G", color: "#0F766E", name: "Gajigesa (Kredivo Group)", category: "Fintech · Earned Wage Access", role: "AVP – Technical Product Manager", desc: "Consumer fintech platform serving 25,000+ monthly active users. I own product development, UX design, and performance — React/React Native front end, Node.js backend, AWS infrastructure.", highlights: ["99.5% crash-free users", "Apdex 0.9", "25K+ MAU"], tech: ["React Native", "React", "Node.js", "AWS", "GitHub Actions", "MongoDB", "Firebase"] },
  { letter: "KFC", color: "#B3202C", name: "KFC Multi-Tenant App", category: "QSR · Consumer", role: "Senior Associate, Cognizant", desc: "Multi-tenant web and mobile application for multiple countries (India, Australia) — React web app, React Native mobile app, shared business logic via internal NPM libraries.", highlights: ["Multi-country tenancy", "Shared codebase"], tech: ["React", "React Native", "NPM Libraries"] },
  { letter: "K", color: "#3B2F8F", name: "Kohl's Inventory App", category: "Retail · Enterprise", role: "Senior Associate, Cognizant", desc: "Native Android inventory management app for Zebra OEM enterprise devices, used by store employees to scan and manage inbound inventory.", highlights: ["Zebra OEM devices", "In-store operations"], tech: ["Kotlin", "Native Android"] },
  { letter: "TSC", color: "#20609C", name: "Tractor Supply Co.", category: "Retail · E-commerce", role: "Senior Associate, Cognizant", desc: "Consumer shopping app for one of America's largest rural lifestyle retailers, maintained and enhanced in collaboration with Infosys.", highlights: ["Large-scale retail", "Partner delivery"], tech: ["React Native"] },
  { letter: "WWL", color: "#1E3A66", name: "Wallenius Wilhelmsen", category: "Logistics · Shipping", role: "Senior Associate, Cognizant", desc: "Driver-facing delivery app for a global automotive logistics leader — VIN scanning, proof-of-delivery, digital signature capture. Feature development drove an 80% increase in app engagement.", highlights: ["80% engagement lift", "Solo delivery"], tech: ["Appcelerator Titanium"] },
  { letter: "HUL", color: "#0B5AA5", name: "HUL Payroll Delivery", category: "HR Tech · Payroll", role: "Software Engineer, Ma Foi", desc: "Single-handedly managed payroll processing delivery across 80 units of Hindustan Unilever — engineering through client resolution, month on month.", highlights: ["80 business units", "End-to-end ownership"], tech: ["Delphi", "Firebird DB"] },
];

const jobs = [
  { role: "Assistant Vice President – Technical Product Manager", company: "Gajigesa (acquired by Kredivo Group)", dates: "Oct 2022 – Present", current: true,
    bullets: [
      "Own the end-to-end product lifecycle — product development, UX design, and performance optimization — for a consumer fintech platform, reporting to the Head of Engineering.",
      "Achieved and sustained 99.5% crash-free users and an Apdex score of 0.9 through performance optimization, monitoring, and release quality initiatives.",
      "Drive delivery across a React / React Native front end and Node.js backend on AWS, with CI/CD pipelines on GitHub Actions.",
      "Translate product strategy into technical roadmaps; align stakeholders across product, design, and engineering.",
    ],
    tags: ["React Native", "React", "Node.js", "AWS", "GitHub Actions", "Product Management", "Fintech"] },
  { role: "Head of Mobility", company: "Integrum Solutions", dates: "May 2022 – Sep 2022",
    bullets: [
      "Spearheaded the mobile development practice; delivered 2 production React Native apps in 4 months.",
      "Managed vendor resourcing and external engineering partners for on-time, on-quality delivery.",
    ],
    tags: ["React Native", "Vendor Management", "Leadership"] },
  { role: "Manager – Web Engineering", company: "Capgemini", dates: "Sep 2021 – May 2022",
    bullets: [
      "Designed and built a reusable React.js component library, standardizing UI development and accelerating build time across client web projects.",
    ],
    tags: ["React", "Component Library", "Enterprise"] },
  { role: "Senior Associate – Projects", company: "Cognizant Technology Solutions", dates: "Feb 2016 – Aug 2021",
    bullets: [
      "KFC: multi-tenant web + mobile app for India and Australia — React, React Native, shared NPM libraries.",
      "Kohl's: Kotlin native Android inventory app for Zebra OEM enterprise devices.",
      "Tractor Supply Co.: React Native consumer shopping app, in collaboration with Infosys.",
      "Wallenius Wilhelmsen: single-handedly built a driver delivery app — VIN scanning, proof-of-delivery, e-signatures.",
    ],
    tags: ["React Native", "Kotlin", "React", "Retail", "Logistics", "QSR"] },
  { role: "Senior Software Engineer", company: "Accrete Solutions LLC · Gurugram", dates: "2013 – 2016",
    bullets: [
      "Migrated an enterprise field-service iPad app from Objective-C to Appcelerator Titanium for a cross-platform codebase.",
      "Built B2B customer-data synchronization services with third-party platforms using Ruby on Rails.",
    ],
    tags: ["Objective-C", "Titanium", "Ruby on Rails"] },
  { role: "Senior Software Engineer", company: "OTS Solutions · Gurugram", dates: "2011 – 2012",
    bullets: [
      "Developed iPhone apps on Delphi Prism and laid the foundation of the company's mobility team.",
      "Led a team of engineers to adopt Appcelerator Titanium with ASP.NET backends.",
    ],
    tags: ["iOS", "Titanium", "ASP.NET", "Team Building"] },
  { role: "Software Engineer – Delivery", company: "Ma Foi Consulting", dates: "2010 – 2011",
    bullets: [
      "Owned the payroll product from engineering through client delivery; single-handedly managed 80 units of Hindustan Unilever.",
    ],
    tags: ["Payroll", "Client Delivery"] },
  { role: "Software Programmer", company: "Topsys Solutions · Bengaluru", dates: "2008 – 2010",
    bullets: [
      "Developed and maintained the core salary-processing engine of a desktop payroll product (Delphi 5.0, Firebird DB) used by ING Vysya Bank, Kamat Yatri Nivas, and other enterprise clients.",
    ],
    tags: ["Delphi", "Firebird DB"] },
];

const education = [
  { degree: "PGCP, Generative AI & Agentic AI", school: "IIT Roorkee · with Futurense", year: "2025 – 2026" },
  { degree: "Master of Computer Applications", school: "H.N.B. Garhwal University · IMS Dehradun", year: "2005 – 2008" },
  { degree: "B.Sc. (Hons) Mathematics", school: "University of Delhi", year: "2002 – 2005" },
];

export default function Work() {
  return (
    <div className="page fade-in">
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="mono eyebrow">2008 – Present</div>
          <h1 className="section-title">Experience</h1>
          <p className="lede" style={{ marginBottom: 56 }}>
            Seventeen years across fintech, e-commerce, retail, logistics, QSR, and
            HR tech — from writing payroll engines to leading product and engineering.
          </p>

          <div className="mono eyebrow">Products & brands</div>
          <div className="grid-3" style={{ marginBottom: 80, marginTop: 20 }}>
            {brands.map((b) => (
              <div className="card" key={b.name} style={{ display: "flex", flexDirection: "column" }}>
                <div className="display" style={{ width: 52, height: 52, borderRadius: 8, background: `${b.color}12`, border: `1px solid ${b.color}30`, color: b.color, fontWeight: 800, fontSize: b.letter.length > 2 ? 13 : 18, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{b.letter}</div>
                <div className="mono" style={{ color: "var(--slate)", marginBottom: 8 }}>{b.category}</div>
                <h3 className="display" style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 2 }}>{b.name}</h3>
                <div style={{ fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginBottom: 14 }}>{b.role}</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)", flex: 1, marginBottom: 16 }}>{b.desc}</p>
                <div style={{ marginBottom: 8 }}>
                  {b.highlights.map((h) => <span className="tag tag-accent" key={h}>{h}</span>)}
                </div>
                <div>{b.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>

          <div className="mono eyebrow" style={{ marginBottom: 24 }}>Career timeline</div>
          <div className="timeline">
            {jobs.map((job) => (
              <div key={job.role + job.company} className={`timeline-item${job.current ? " current" : ""}`}>
                <div className="timeline-dates">{job.dates}</div>
                <div className="timeline-role">{job.role}</div>
                <div className="timeline-company">{job.company}</div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div style={{ marginTop: 14 }}>
                  {job.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 72, paddingTop: 56, borderTop: "1px solid var(--line)" }}>
            <div className="mono eyebrow" style={{ marginBottom: 20 }}>Education</div>
            <div className="grid-3">
              {education.map(({ degree, school, year }) => (
                <div className="card" key={degree}>
                  <div className="mono" style={{ color: "var(--teal)", marginBottom: 10 }}>{year}</div>
                  <div className="display" style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 4 }}>{degree}</div>
                  <div style={{ fontSize: 14, color: "var(--slate)" }}>{school}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
