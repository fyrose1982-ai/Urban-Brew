import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyUs />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
