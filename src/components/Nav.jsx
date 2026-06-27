import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">AS</div>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/work", "Work"],
          ["/projects", "Projects"],
          ["/chess", "Chess"],
          ["/running", "Running"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
