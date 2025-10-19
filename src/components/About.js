import React from "react";

function About() {
  const outils = [
    { nom: "C#", url: "https://learn.microsoft.com/fr-fr/dotnet/csharp/" },
    { nom: "Java", url: "https://www.oracle.com/java/" },
    { nom: "Kotlin", url: "https://kotlinlang.org/" },
    { nom: "PHP", url: "https://www.php.net/" },
    { nom: "ADO .NET", url: "https://learn.microsoft.com/fr-fr/dotnet/framework/data/adonet/" },
    { nom: "ASP.NET Core", url: "https://learn.microsoft.com/fr-fr/aspnet/core/" },
    { nom: "JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
    { nom: "SQL", url: "https://www.mysql.com/" },
    { nom: "React", url: "https://reactjs.org/" },
    { nom: "Python", url: "https://www.python.org/" },
    { nom: "Flask", url: "https://flask.palletsprojects.com/" },
    { nom: "Android Studio", url: "https://developer.android.com/studio" }
  ];

  const competences = [
    "Je maîtrise la programmation orientée objet en C# et Java pour créer des applications robustes.",
    "Je conçois et interroge des bases de données SQL et optimise les requêtes pour des performances accrues.",
    "Je développe des applications Web avec React et ASP.NET Core en suivant les bonnes pratiques.",
    "Je collabore efficacement en équipe et applique les méthodologies Agile/Scrum pour gérer les projets.",
    "J’utilise Git pour le contrôle de version et la gestion des projets de manière organisée.",
    "Je teste et débogue mes programmes afin d’assurer une qualité optimale du code.",
    "Je développe des applications backend avec Python et Flask, et des applications mobiles avec Android Studio."
  ];

  const personalSkills = [
    "Capacité à travailler efficacement en équipe et en solo selon la situation",
    "Curiosité et volonté d’apprendre de nouvelles technologies et méthodologies.",
    "Sens de l’organisation et gestion du temps pour mener à bien plusieurs projets simultanément.",
    "Créativité et capacité à proposer des solutions innovantes aux problèmes rencontrés.",
    "Esprit d’analyse et aptitude à résoudre des problèmes complexes de manière structurée."
  ];

  return (
    <section
      id="about"
      style={{
        padding: "60px 20px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.8",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>À propos de moi</h2>
      
      <p style={{ marginBottom: "30px" }}>
        Étudiant en informatique au <strong>Cégep Gérald-Godin</strong> (2023-2026), passionné par le développement logiciel et l’intelligence artificielle.
        Je m’intéresse particulièrement à la création de solutions logicielles efficaces et à la résolution de problèmes concrets grâce au code.
        J’aime collaborer en équipe sur des projets pratiques et apprendre de nouvelles technologies.
        Actuellement, je suis à la recherche d’un stage pour mettre en pratique mes compétences et contribuer à des projets réels.
      </p>

      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>Mon parcours :</h2>
      <ul style={{ textAlign: "left", margin: "0 auto 30px", maxWidth: "600px", paddingLeft: "20px" }}>
        <li style={{ marginBottom: "20px" }}>
          <strong>Cégep Gérald-Godin (2023-2026)</strong> – Techniques de l’informatique  
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Obtention prévue du DEC en 2026</li>
            <li>Participation à des projets de développement logiciel et travail en équipe</li>
          </ul>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong>École Secondaire de la Cité-des-Jeunes</strong> – Diplôme d’études secondaires  
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Bases solides en sciences et en mathématiques, préparant aux études supérieures en informatique</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>Outils et technologies :</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginTop: "15px" }}>
        {outils.map((outil, index) => (
          <a
            key={index}
            href={outil.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "8px 12px",
              borderRadius: "20px",
              fontSize: "14px",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {outil.nom}
          </a>
        ))}
      </div>

      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>Compétences :</h2>
      <ul style={{ textAlign: "left", maxWidth: "700px", margin: "0 auto", paddingLeft: "20px", lineHeight: "1.6" }}>
        {competences.map((comp, index) => (
          <li key={index} style={{ marginBottom: "12px" }}>{comp}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>Informations personnelles :</h2>
      <ul style={{ textAlign: "left", maxWidth: "700px", margin: "0 auto", paddingLeft: "20px", lineHeight: "1.6" }}>
        {personalSkills.map((skill, index) => (
          <li key={index} style={{ marginBottom: "12px" }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
