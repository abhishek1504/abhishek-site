import { brands, education, jobs } from "../lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="eyebrow mb-4">2008 – Present</div>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Experience
        </h2>
        <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate">
          Embedded inside client engineering teams across fintech,
          e-commerce, retail, logistics, QSR, and HR tech — from writing
          payroll engines on-site to leading product and engineering.
        </p>

        {/* Brands */}
        <div className="mt-16">
          <div className="eyebrow mb-6">Products &amp; brands shipped</div>
          <div className="grid gap-6 md:grid-cols-3">
            {brands.map((b) => (
              <div key={b.name} className="card flex flex-col">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border font-display font-medium"
                  style={{
                    background: `${b.color}12`,
                    borderColor: `${b.color}33`,
                    color: b.color,
                    fontSize: b.letter.length > 2 ? 12 : 16,
                  }}
                >
                  {b.letter}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wide text-slate">{b.category}</div>
                <h3 className="mt-2 font-display text-[1.05rem] font-medium text-ink">{b.name}</h3>
                <div className="mt-0.5 text-[13px] italic text-slate">{b.role}</div>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate">{b.desc}</p>
                <div className="mt-4">
                  {b.highlights.map((h) => (
                    <span key={h} className="tag tag-accent">
                      {h}
                    </span>
                  ))}
                </div>
                <div>
                  {b.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="eyebrow mb-8">Career timeline</div>
          <div className="flex flex-col">
            {jobs.map((job) => (
              <div
                key={job.role + job.company}
                className="grid gap-2 border-t border-line py-8 first:border-t-0 sm:grid-cols-[180px_1fr]"
              >
                <div>
                  <div className="font-mono text-[12px] text-slate">{job.dates}</div>
                  {job.current && (
                    <span className="tag tag-accent mt-2 !mr-0">Current</span>
                  )}
                </div>
                <div>
                  <div className="font-display text-lg font-medium text-ink">{job.role}</div>
                  <div className="mt-0.5 text-[14px] text-slate">{job.company}</div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-slate">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 border-t border-line pt-14">
          <div className="eyebrow mb-6">Education</div>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map(({ degree, school, year }) => (
              <div key={degree} className="card">
                <div className="font-mono text-[12px] text-accent">{year}</div>
                <div className="mt-2 font-display text-[1.05rem] font-medium text-ink">{degree}</div>
                <div className="mt-1 text-[13.5px] text-slate">{school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
