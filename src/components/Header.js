import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [showNuradin, setShowNuradin] = useState(false);
  const [showIbrahim, setShowIbrahim] = useState(false);
  const [showCabdi, setShowCabdi] = useState(false);

  const description = "Étudiant en informatique passionné par la programmation";

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowNuradin(true), 500),
      setTimeout(() => setShowIbrahim(true), 1500),
      setTimeout(() => setShowCabdi(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-container">
      <h3 className="name-container">
        {showNuradin && <span className="name-part slide-down">Nuradin&nbsp;</span>}
        {showIbrahim && <span className="name-part slide-down">Ibrahim&nbsp;</span>}
        {showCabdi && <span className="name-part slide-down">Cabdi</span>}
      </h3>
      <p className="description">{description}</p>
      <nav>
        <button onClick={() => handleScroll("about")} className="nav-button">À propos</button>
        <button onClick={() => handleScroll("projects")} className="nav-button">Projets</button>
        <button onClick={() => handleScroll("contact")} className="nav-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
