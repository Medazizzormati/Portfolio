import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (projectsGridRef.current) observer.observe(projectsGridRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Digital Village NIRD - Nuit de l\'Info 2025',
      description: 'Plateforme éducative web pour accompagner les établissements scolaires vers un numérique souverain, inclusif et durable. Projet réalisé lors de la Nuit de l\'Info 2025 avec système de gamification, quiz intelligent par IA, et gestion des utilisateurs.',
      image: '/Dashboard - Social Media Analytics.jpg',
      technologies: ['Next.js 15', 'Node.js', 'MongoDB', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
      liveDemo: 'https://digital-village-nird.vercel.app',
      github: 'https://github.com/Medazizzormati/digital-village-nird'
    },
    {
      id: 2,
      title: 'Plateforme Médicale Intelligente',
      description: 'Développement d\'une plateforme web de gestion des rendez-vous médicaux avec React.js, Spring Boot et IA pour la priorisation automatique des cas. Implémentation d\'algorithmes de priorisation intelligente des urgences médicales.',
      image: '/Cleveroad.jpg',
      technologies: ['React.js', 'Spring Boot', 'Python', 'IA', 'Jira', 'Agile/Scrum'],
      liveDemo: '#',
      github: 'https://github.com/Medazizzormati/Gestion-des-Rendez-vous-M-dicaux'
    },
    {
      id: 3,
      title: 'Application d\'Échange de Devises',
      description: 'Conception et développement d\'une application mobile d\'échange de devises avec intégration d\'APIs externes pour les taux de change en temps réel.',
      image: '/pf.png',
      technologies: ['React Native', 'JavaScript', 'REST APIs'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Application de Gestion d\'Emploi du Temps',
      description: 'Conception et développement d\'une application mobile de gestion d\'emploi du temps avec Flutter et Spring Boot, incluant la création des maquettes et du design UI/UX sur Figma.',
      image: '/Task manager app.jpg',
      technologies: ['Flutter', 'Spring Boot', 'Figma'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Application de Gestion de Fichiers',
      description: 'Réalisation d\'une application Android en Java permettant la navigation, la création, la suppression et la gestion de fichiers et dossiers locaux.',
      image: '/Weather Forecast Dashboard.jpg',
      technologies: ['Java', 'Android SDK', 'SQLite'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Site E-commerce Complet',
      description: 'Développement d\'une plateforme e-commerce complète avec système de paiement, gestion des commandes et tableau de bord administrateur.',
      image: '/Dashboard - Social Media Analytics.jpg',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Payment Gateway'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Système de Gestion Interne',
      description: 'Développement d\'un système de gestion interne pour entreprises avec authentification, gestion des utilisateurs et rapports automatisés.',
      image: '/WordPress dashboard design concept.jpg',
      technologies: ['Angular', 'Spring Boot', 'Oracle'],
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid slide-in-up" ref={projectsGridRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveDemo !== '#' && (
            <a 
              href={project.liveDemo} 
              className="project-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.github !== '#' && (
            <a 
              href={project.github} 
              className="project-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
