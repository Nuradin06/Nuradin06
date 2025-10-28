import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projets = [
    {
      id: 0,
      titre: "Gestion critiques de films",
      tech: "Python, Flask, Bootstrap",
      image: "/images/Python.png",
      description: "Plateforme Web pour consulter et publier des critiques de films, avec système d’authentification, profils utilisateurs et réinitialisation de mot de passe."
    },
    {
      id: 1,
      titre: "Médiathèque en Java",
      tech: "Java",
      image: "/images/Mediatheque.png"
    },
    {
      id: 2,
      titre: "Thesaurus en JavaScript",
      tech: "JavaScript",
      image: "/images/Thesau.png"
    },
    {
      id: 3,
      titre: "PopBazar - Plateforme de petites annonces",
      tech: "PHP, MySQL, MVC",
      image: "/images/z.png"
    },
    {
      id: 4,
      titre: "Gestion Entreprise & Employée",
      tech: "ASP.NET Core, SQL Server",
      image: "/images/Entrp.png"
    },
    {
      id: 5,
      titre: "Super Machine à Sous (Android I)",
      tech: "Android Studio, Kotlin",
      image: "/images/mob.png"
    }
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "60px 20px",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>Mes projets</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {projets.map((proj) => (
          <Link
            key={proj.id}
            to={`/project/${proj.id}`}
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#1e1e1e",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
            }}
          >
            <img
              src={proj.image}
              alt={proj.titre}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
            <div>
              <h3>{proj.titre}</h3>
              <p style={{ marginTop: "8px", color: "#3498db" }}>{proj.tech}</p>
              {proj.description && <p style={{ marginTop: "5px", color: "#ccc", fontSize: "14px" }}>{proj.description}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
