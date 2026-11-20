import { useEffect, useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${scrolled || open ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="logo" onClick={goTo("home")} aria-label={`${BUSINESS.name} home`}>
          <span className="logo__mark">
            <Coffee size={20} />
          </span>
          <span className="logo__text">
            <strong>The Urban Brew</strong>
            <small>Premium Café</small>
          </span>
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={goTo(l.id)} className="nav__link">
              {l.label}
            </a>
          ))}
          <a href="#visit" onClick={goTo("visit")} className="btn btn--small nav__cta">
            Book a Table
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
