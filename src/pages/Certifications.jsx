const certs = [
  { name: "Claude Code in Action", issuer: "Anthropic", date: "Jul 2026", id: "j3bvpme8thxb", featured: true },
  { name: "Claude Platform 101", issuer: "Anthropic", date: "Jun 2026", id: "x8d8xb9w6gfj", featured: true },
  { name: "Claude Code 101", issuer: "Anthropic", date: "Jun 2026", id: "2ama2ayudmnr", featured: true },
  { name: "Claude 101", issuer: "Anthropic", date: "Jun 2026", id: "pbew7eofxepx", featured: true },
  { name: "AI & ML", issuer: "IIT Hyderabad Tinkerers' Lab", date: "Mar 2025", id: "5GXW6K24XPWWKBU" },
  { name: "UX Design with AI", issuer: "IIT Hyderabad Tinkerers' Lab", date: "Mar 2025", id: "B69RYEL86h4yl2j" },
  { name: "Kony Certified Developer", issuer: "Kony", date: "Jul 2016", id: "KCD04271671692" },
];

export default function Certifications() {
  return (
    <div className="page fade-in">
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="mono eyebrow">Continuous learning</div>
          <h1 className="section-title">Certifications</h1>
          <p className="lede" style={{ marginBottom: 48 }}>
            Currently pursuing a PGCP in Generative AI & Agentic AI at IIT Roorkee,
            alongside hands-on Anthropic Claude platform certifications.
          </p>
          <div className="grid-2">
            {certs.map((c) => (
              <div className="card" key={c.id} style={c.featured ? { borderColor: "#0f766e40" } : undefined}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                  <h3 className="display" style={{ fontWeight: 800, fontSize: "1.05rem" }}>{c.name}</h3>
                  <span className="mono" style={{ color: "var(--teal)" }}>{c.date}</span>
                </div>
                <div style={{ fontSize: 14, color: "var(--slate)", margin: "6px 0 12px" }}>{c.issuer}</div>
                <div className="mono" style={{ color: "var(--slate)", textTransform: "none", letterSpacing: "0.04em" }}>ID: {c.id}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
