import React from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  const projets = [
    {
      id: 1,
      titre: "Médiathèque en Java",
      details: `Système de gestion de documents (livres, périodiques, DVD) en Java orienté objet (Automne 2024).
Fonctionnalités :
- Inscription et retour de prêts
- Paiement d’amendes
- Gestion des adhérents (ajout, suppression, modification limitée)
- Recherche par auteur ou mots clés, tri par date ou nom
- Gestion de la disponibilité des documents`
    },
    {
      id: 2,
      titre: "Thesaurus en JavaScript",
      details: `Jeu 3D où le joueur parcourt un dédale à la recherche d’un trésor (Hiver 2025).
Fonctionnalités :
- Flèches d'orientation vers le trésor
- Ouvreurs de murs pour débloquer des passages
- Téléporteurs aléatoires
- Travail réalisé en équipe de 3 étudiants`
    },
    {
      id: 3,
      titre: "PopBazar - Plateforme de petites annonces (Hiver 2025)",
      details: `Développement web d’une plateforme de petites annonces avec PHP/MySQL en architecture MVC.
Fonctionnalités :
- CRUD complet des annonces
- Filtrage par statut et catégorie
- Gestion des utilisateurs (inscription, connexion, profil)
- Code structuré et sécurisé avec bonnes pratiques de développement
- Réalisé en équipe de 2`
    },
    {
      id: 4,
      titre: "Gestion Entreprise & Employée",
      details: `Projet ASP.NET Core MVC avec SQL Server pour la gestion complète des entreprises et employés (Automne 2025).
Fonctionnalités principales :
1. Gestion des entreprises
2. Gestion des types d'adresses
3. Gestion des adresses des entreprises
4. Gestion des employés
5. Gestion des types de téléphones
6. Gestion des numéros de téléphone
7. Barre/menu de navigation
Technologies : ASP.NET Core MVC, SQL Server`
    },
    {
      id: 5,
      titre: "Super Machine à Sous (Android I)",
      details: `Mini-projet Android Studio (Automne 2025)
Objectifs :
- Apprentissage d'Android Studio et ConstraintLayout
- Gestion des interactions utilisateurs
- ViewBinding et multi-langues
Description :
- Application de machine à sous avec 3 ImageViews, choix de mise, et mode Normal / Casse-Cou
- Calcul automatique des gains et pertes
- Ajout de 100$ avec code secret
- Sauvegarde des données lors des changements de configuration
- Affichage adapté pour téléphone et tablette
- Multi-langue (français / anglais)`
    }
  ];

  const projet = projets.find(p => p.id === parseInt(id));

  if (!projet) return <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Projet introuvable</p>;

  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
      <h2>{projet.titre}</h2>
      <pre style={{ textAlign: "left", whiteSpace: "pre-wrap", marginTop: "20px", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
        {projet.details}
      </pre>
      <Link 
        to="/" 
        style={{ marginTop: "20px", display: "inline-block", color: "#3498db", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
      >
        ⬅ Retour
      </Link>
    </div>
  );
}

export default ProjectDetail;
