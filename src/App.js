import React, { useState } from "react";
import "./home.css";
import logo from "./assets/images/logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const projects = [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          {/* <span className="logo-text">KROWN</span> */}
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>Krown Renovations</h1>
          <p>Premium Renovations & Painting in Toronto</p>
          <a href="#contact" className="btn">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2 data-aos="fade-up">Our Services</h2>

        <div className="grid">
          <div className="card" data-aos="zoom-in">
            <h3>Full Renovations</h3>
            <p>Complete home transformations with premium finishes.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Painting</h3>
            <p>Interior & exterior high-end painting services.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Project Management</h3>
            <p>Handled professionally from start to finish.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark">
        <h2>Our Work</h2>
        <div className="gallery">
          {projects.map((img, i) => (
            <img key={i} src={img} alt="project" />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Get a Free Quote</h2>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Project details" required />

          <button type="submit">Send</button>
        </form>
      </section>

      {/* MAP */}
      <section className="section dark">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps?q=Toronto&output=embed"
          style={{ width: "100%", height: "300px", border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Krown Renovations & Painting Inc.</p>
      </footer>

      {/* FLOATING BUTTONS */}
      <a href="tel:+1647XXXXXXX" className="call-btn">
        📞
      </a>
      <a href="https://wa.me/1647XXXXXXX" className="whatsapp-btn">
        💬
      </a>
    </>
  );
}

export default App;
