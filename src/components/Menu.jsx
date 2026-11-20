import { MENU } from "../data.js";
import SafeImage from "./SafeImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Menu() {
  return (
    <section id="menu" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Menu</span>
          <h2>Popular favourites</h2>
          <p>A taste of what we serve every day. Sample menu and prices for demonstration.</p>
        </Reveal>

        <div className="menu-grid">
          {MENU.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <article className="card">
                <div className="card__media">
                  <SafeImage src={item.img} alt={item.name} className="card__img" />
                  <span className="card__tag">{item.tag}</span>
                </div>
                <div className="card__body">
                  <div className="card__row">
                    <h3>{item.name}</h3>
                    <span className="card__price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
