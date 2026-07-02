import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/work", "Experience"],
    ["/projects", "Projects"],
    ["/certifications", "Certifications"],
    ["/contact", "Contact"],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          Abhishek Sharma<span>.</span>
        </NavLink>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↓
            </a>
          </li>
        </ul>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
