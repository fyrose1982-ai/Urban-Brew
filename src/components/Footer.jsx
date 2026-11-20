import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="logo logo--footer">
            <span className="logo__mark"><Coffee size={20} /></span>
            <span className="logo__text">
              <strong>The Urban Brew</strong>
              <small>Premium Café</small>
            </span>
          </div>
          <p className="footer__about">
            Specialty coffee, fresh bakes and all-day brunch in a calm, welcoming space.
          </p>
          <div className="socials">
            {/* Demo links – replace with the client's real profiles */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer__links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__links">
            <li>{BUSINESS.address[0]}</li>
            <li>{BUSINESS.address[1]}</li>
            <li><a href={`tel:+${BUSINESS.whatsapp}`}>{BUSINESS.phoneDisplay}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} The Urban Brew. All rights reserved.</span>
          <span>
            Demo website designed &amp; developed by <strong>{BUSINESS.agency}</strong>. The Urban Brew is a fictional
            business created for portfolio purposes.
          </span>
        </div>
      </div>
    </footer>
  );
}
