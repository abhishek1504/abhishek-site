import React from 'react';

const certs = [
  {
    course:   "Claude 101",
    issuer:   "Anthropic Education",
    date:     "June 28, 2026",
    url:      "https://verify.skilljar.com/c/pbew7eofxepx",
  },
  {
    course:   "Claude Platform 101",
    issuer:   "Anthropic Education",
    date:     "June 28, 2026",
    url:      "https://verify.skilljar.com/c/x8d8xb9w6gfj",
  },
  {
    course:   "Claude Code 101",
    issuer:   "Anthropic Education",
    date:     "June 28, 2026",
    url:      "https://verify.skilljar.com/c/2ama2ayudmnr",
  },
];

export default function Certifications() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Certifications</h2>
      <p style={styles.sub}>Verified by Anthropic Education · June 2026</p>
      <div style={styles.grid}>
        {certs.map((c, i) => (
          <div key={i} style={styles.card}>
            <span style={styles.badge}>Verified</span>
            <div style={styles.issuer}>{c.issuer}</div>
            <div style={styles.course}>{c.course}</div>
            <div style={styles.date}>{c.date}</div>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Verify certificate ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 24px',
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontFamily: 'inherit',
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  sub: {
    color: 'var(--muted, #888)',
    fontSize: '0.9rem',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1.5px solid var(--border, #e5e7eb)',
    borderRadius: '8px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    transition: 'border-color 0.2s',
  },
  badge: {
    display: 'inline-block',
    background: 'var(--gold, #EF9F27)',
    color: '#000',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '3px 10px',
    borderRadius: '20px',
    alignSelf: 'flex-start',
    marginBottom: '4px',
  },
  issuer: {
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--muted, #888)',
  },
  course: {
    fontSize: '1.2rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  date: {
    fontSize: '0.8rem',
    color: 'var(--muted, #888)',
    marginBottom: '8px',
  },
  link: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--gold, #EF9F27)',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(239,159,39,0.4)',
    paddingBottom: '1px',
    alignSelf: 'flex-start',
  },
};
