"use client";

import { useEffect, useState } from "react";
import { nav, site } from "../lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-paper/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-ink">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                active === item.href ? "text-accent" : "text-slate hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-5 text-[13px]">
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="block h-[1.5px] w-4 bg-ink" />
            <span className="block h-[1.5px] w-4 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink hover:bg-paper-alt"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-md px-2 py-2.5 text-sm font-medium text-accent hover:bg-paper-alt"
            >
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
