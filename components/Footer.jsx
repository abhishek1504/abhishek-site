import { site } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col items-center justify-between gap-4 py-10 text-[13px] text-slate sm:flex-row">
        <div>© {year} {site.name}. Built with Next.js.</div>
        <div className="flex gap-6">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
