import { embeddedWith, site, stats } from "../lib/content";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="wrap pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="eyebrow mb-6">{site.shortTitle}</div>
        <h1 className="max-w-3xl font-display text-[2.5rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[3.4rem]">
          I embed with the team, ship the product,{" "}
          <em className="italic text-accent">and own what happens after.</em>
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-slate">
          I&apos;m {site.name}. I embed inside client engineering teams and
          ship production software on their timeline — not mine.
          I&apos;ve done it for KFC, Kohl&apos;s, Tractor Supply, and
          Wallenius Wilhelmsen, and today I run engineering end-to-end at a
          consumer fintech platform serving 25,000+ monthly users.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#experience" className="btn-primary">
            See my experience
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Download résumé
          </a>
        </div>

        {/* Embedded with — forward deployed evidence */}
        <div className="mt-16">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
            Embedded inside the client&apos;s team — not consulting from outside
          </div>
          <div className="flex gap-8 overflow-x-auto pb-2">
            {embeddedWith.map(({ name, role }) => (
              <div key={name} className="flex min-w-[168px] flex-col gap-2 border-l border-line pl-4">
                <div className="h-1.5 w-1.5 -ml-[19px] rounded-full bg-accent" />
                <div className="font-display text-sm text-ink">{name}</div>
                <div className="font-mono text-[11px] text-slate">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="font-display text-3xl font-medium text-ink sm:text-4xl">{num}</div>
              <div className="mt-1 text-[13px] leading-snug text-slate">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
