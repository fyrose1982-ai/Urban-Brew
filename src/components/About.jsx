import { IMAGES } from "../data.js";
import SafeImage from "./SafeImage.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal className="about__images">
          <SafeImage src={IMAGES.interior} alt="Warm and welcoming café interior" className="about__img about__img--main" />
          <SafeImage src={IMAGES.barista} alt="Latte served in a ceramic cup" className="about__img about__img--accent" />
          <div className="about__badge">
            <strong>Fresh</strong>
            <span>roasted &amp; baked daily</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="about__text">
          <span className="eyebrow">Our Story</span>
          <h2>A neighbourhood café with big-city craft</h2>
          <p>
            The Urban Brew was created for people who love a properly made coffee and a space that lets them slow down.
            We pair carefully sourced beans with skilled baristas, and serve them alongside bakes and brunch plates made
            from scratch in our kitchen.
          </p>
          <p>
            Whether you are catching up with friends, getting some work done or simply treating yourself, there is always
            a seat and a warm welcome waiting.
          </p>
          <ul className="about__list">
            <li>Small-batch roasted specialty coffee</li>
            <li>House-made pastries, cakes and brunch plates</li>
            <li>Vegetarian and plant-based options available</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
