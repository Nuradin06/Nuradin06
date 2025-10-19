import React from "react";
import "./Header.css"; // On crée ce fichier pour le style

function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header style={{ backgroundColor: "#2c3e50", color: "white", padding: "20px", textAlign: "center" }}>
      <h1 className="gradient-text">Nuradin Ibrahim Cabdi</h1>
      <nav>
        <button onClick={() => handleScroll("about")} className="nav-button">À propos</button>
        <button onClick={() => handleScroll("projects")} className="nav-button">Projets</button>
        <button onClick={() => handleScroll("contact")} className="nav-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
