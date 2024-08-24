// components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Todo List Project',
    description: 'Responsive HTML/CSS layout . HTML5, CSS3 (SCSS) Django',
    image: '/download.png',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Designer furniture store landing page',
    description: 'Responsive HTML/CSS layout for an online store of designer furniture. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Landing page for front-end developer',
    description: 'Responsive HTML/CSS layout for a landing page for a front-end developer. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Website redesign for The Venus project',
    description: 'Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Website redesign for The Venus project',
    description: 'Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Website redesign for The Venus project',
    description: 'Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Website redesign for The Venus project',
    description: 'Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
  {
    title: 'Website redesign for The Venus project',
    description: 'Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)',
    image: '/img.jpeg',
    livePreview: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section style={styles.projectsSection}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={project.image} alt={project.title} style={styles.projectImage} />
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.buttons}>
              <a href={project.livePreview} style={styles.button} target="_blank" rel="noopener noreferrer">Live preview</a>
              <a href={project.github} style={styles.button} target="_blank" rel="noopener noreferrer">Check on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projectsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#0f0f23',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    backgroundColor: '#1b1b32',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  projectImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  projectDescription: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    padding: '0.5rem 1rem',
    textAlign: 'center',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#5750e0',
  },
};

export default Projects;
