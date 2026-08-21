import { featuredProject, otherProjects } from "../lib/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="eyebrow mb-4">{featuredProject.eyebrow}</div>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {featuredProject.name}
        </h2>
        <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate">
          {featuredProject.desc}
        </p>
        <div className="mt-6">
          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2.5 px-5 text-[13px]"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-16">
          <div className="eyebrow mb-6">How it works</div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProject.steps.map(({ step, desc }, i) => (
              <div key={step} className="card">
                <div className="font-mono text-[12px] text-accent">
                  Stage {i + 1} · {step}
                </div>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="eyebrow mb-6">Engineering decisions</div>
          <div className="flex flex-col">
            {featuredProject.decisions.map(({ decision, why }) => (
              <div
                key={decision}
                className="grid gap-3 border-t border-line py-6 first:border-t-0 sm:grid-cols-[1fr_2fr] sm:gap-7"
              >
                <div className="font-display text-[15.5px] font-medium text-ink">{decision}</div>
                <p className="text-[14.5px] leading-relaxed text-slate">{why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="eyebrow mb-4">Stack</div>
          <div>
            {featuredProject.stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-20 border-t border-line pt-14">
            <div className="eyebrow mb-6">Other projects</div>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <div key={p.name} className="card">
                  <h3 className="font-display text-[1.05rem] font-medium text-ink">{p.name}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate">{p.desc}</p>
                  <div className="mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline mt-2 py-2 px-4 text-[12.5px]"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
