import { Armchair, Coffee, Croissant, HeartHandshake, Leaf, Wifi } from "lucide-react";
import { FEATURES } from "../data.js";
import Reveal from "./Reveal.jsx";

const ICONS = { Armchair, Coffee, Croissant, HeartHandshake, Leaf, Wifi };

export default function WhyUs() {
  return (
    <section id="why-us" className="section why">
      <div className="container">
        <Reveal className="section__head section__head--light">
          <span className="eyebrow eyebrow--light">Why Choose Us</span>
          <h2>Made with care, served with warmth</h2>
          <p>Everything we do is about quality, comfort and a great experience.</p>
        </Reveal>

        <div className="features">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] || Coffee;
            return (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="feature">
                  <span className="feature__icon">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
