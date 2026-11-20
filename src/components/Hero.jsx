import { ArrowDown, Clock, MapPin } from "lucide-react";
import { IMAGES } from "../data.js";
import SafeImage from "./SafeImage.jsx";

export default function Hero() {
  const scroll = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <SafeImage src={IMAGES.hero} alt="A freshly poured cup of coffee on a wooden table" className="hero__bg" eager />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">Specialty coffee · Fresh bakes · All-day brunch</span>
        <h1>
          Where every cup
          <br />
          <em>tells a story.</em>
        </h1>
        <p className="hero__lead">
          Slow-crafted coffee, warm pastries and a calm corner of the city to call your own. Welcome to The Urban Brew.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn" onClick={scroll("menu")}>
            Explore the Menu
          </a>
          <a href="#visit" className="btn btn--ghost" onClick={scroll("visit")}>
            Visit Us
          </a>
        </div>
        <ul className="hero__facts">
          <li>
            <Clock size={18} /> Open daily from 7:30 AM
          </li>
          <li>
            <MapPin size={18} /> Coffee Quarter, Demo City
          </li>
        </ul>
      </div>
      <a href="#about" className="hero__scroll" onClick={scroll("about")} aria-label="Scroll to about section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
