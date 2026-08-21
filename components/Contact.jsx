import { site } from "../lib/content";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: "+91 98112 83725", href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "linkedin.com/in/abhishekmca", href: site.linkedin },
  { label: "GitHub", value: "github.com/abhishek1504", href: site.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="eyebrow mb-4">Let&apos;s talk</div>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Open to senior engineering &amp; leadership roles.
        </h2>
        <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate">
          Forward Deployed Engineer · Engineering Manager · Full-Stack
          Engineering · Applied AI — in Hyderabad or remote.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card block no-underline transition-colors hover:border-accent"
            >
              <div className="eyebrow">{l.label}</div>
              <div className="mt-2.5 font-display text-[1.02rem] font-medium text-ink">{l.value}</div>
            </a>
          ))}
        </div>

        <div className="mt-9">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Download my résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
