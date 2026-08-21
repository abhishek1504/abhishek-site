import { certifications } from "../lib/content";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="eyebrow mb-4">Continuous learning</div>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Certifications
        </h2>
        <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate">
          Currently pursuing a PGCP in Generative AI &amp; Agentic AI at IIT
          Roorkee, alongside hands-on Anthropic Claude platform
          certifications.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.id}
              className={`card ${c.featured ? "border-accent-soft" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-[1.02rem] font-medium text-ink">{c.name}</h3>
                <span className="font-mono text-[12px] text-accent">{c.date}</span>
              </div>
              <div className="mt-1.5 text-[13.5px] text-slate">{c.issuer}</div>
              <div className="mt-3 font-mono text-[11px] tracking-wide text-slate">ID: {c.id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
