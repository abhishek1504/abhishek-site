import { pillars } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="eyebrow mb-4">What I bring to a senior role</div>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Engineering depth. Client trust. Product ownership.
        </h2>
        <p className="lede mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate">
          I can talk architecture with engineers in the morning, sit with a
          client stakeholder at noon, and defend roadmap trade-offs with
          leadership in the afternoon.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ tag, title, desc }) => (
            <div key={tag} className="card flex flex-col">
              <div className="eyebrow mb-4">{tag}</div>
              <h3 className="font-display text-xl font-medium leading-snug text-ink">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
