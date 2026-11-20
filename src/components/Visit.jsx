import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, HOURS } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Visit() {
  const waLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="visit" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Visit Us</span>
          <h2>Location &amp; opening hours</h2>
          <p>Drop in for a coffee, or message us to reserve a table.</p>
        </Reveal>

        <div className="visit">
          <Reveal className="visit__card">
            <div className="visit__item">
              <span className="visit__icon"><MapPin size={22} /></span>
              <div>
                <h3>Address</h3>
                <p>
                  {BUSINESS.address[0]}
                  <br />
                  {BUSINESS.address[1]}
                </p>
              </div>
            </div>
            <div className="visit__item">
              <span className="visit__icon"><Phone size={22} /></span>
              <div>
                <h3>Phone</h3>
                <p><a href={`tel:+${BUSINESS.whatsapp}`}>{BUSINESS.phoneDisplay}</a></p>
              </div>
            </div>
            <div className="visit__item">
              <span className="visit__icon"><Mail size={22} /></span>
              <div>
                <h3>Email</h3>
                <p><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
              </div>
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120} className="visit__card visit__card--hours">
            <div className="visit__hours-head">
              <span className="visit__icon visit__icon--light"><Clock size={22} /></span>
              <h3>Opening Hours</h3>
            </div>
            <ul className="hours">
              {HOURS.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <strong>{h.time}</strong>
                </li>
              ))}
            </ul>
            <p className="visit__note">Kitchen closes 30 minutes before closing time.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
