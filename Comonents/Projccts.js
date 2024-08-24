// components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Todo List Project',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/todo.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Web Application E-Commece',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/react1.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
  },
  {
    title: 'Web Application Movies',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/movies.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/day3',
  },
  {
    title: 'Project Database Engine in BASH',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/bash.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
  },
  {
    title: 'Web Application Mshroh Courses Online',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/mashroh.jpg',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
  },
  {
    title: 'Web Application clothing Shop clothes',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/clothing.jpg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
  },
  {
    title: 'Web Application E-commerce',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/ecommerce1.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/',
  },
  {
    title: 'Web Application Mr./Health',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/mrhealth.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
  },
  {
    title: 'Web Application Book store',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/bookstor.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-book-store ',
  },
  {
    title: 'Web Application Angular E Commerce',
    description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
    image: '/imges/ecommerce2.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
  },
  {
    title: 'Project Ecommpece Web App Vue.js',
    description: 'This is a simple card component created using CSS. Teck Stack Firebase HTML Css',
    image: '/imges/vuejs.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/vueproject ',
  },
  {
    title: 'Project Laravel Posts',
    description: 'This is a simple card component created using CSS. Teck Stack PHP Laravel HTML Css',
    image: '/imges/laravel.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-laravel',
  },
 
];

const Projects = () => {
  return (
    <section id='projects' className='container-fluid' style={styles.projectsSection}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={project.image} alt={project.title} style={styles.projectImage} />
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.buttons}>
              <a href={project.livePreview} className='me-2' style={styles.button} target="_blank" rel="noopener noreferrer">Live preview</a>
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
