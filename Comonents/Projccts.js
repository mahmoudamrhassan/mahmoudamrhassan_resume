// components/Projects.js
'use client';
import React, { useState } from 'react';
// const projects = [
//   {
//     title: 'Seller List web application',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/seller-list.png',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamr5896/Todo-List ',
//   },
//   {
//     title: 'Web App Ecommerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/vue-app.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Todo-List ',
//   },
//   {
//     title: 'Web App Ecommerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/e-commerce-app.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Todo-List ',
//   },
//   {
//     title: 'Web App Taheed',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/taheed2.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Todo-List ',
//   },
//   {
//     title: 'Todo List Project',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/todo.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Todo-List ',
//   },
//   {
//     title: 'Web Application E-Commece',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/react1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
//   },
//   {
//     title: 'Web Application Movies',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/movies.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/day3',
//   },
//   {
//     title: 'Project Database Engine in BASH',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/bash.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
//   },
//   {
//     title: 'Web Application Mshroh Courses Online',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/mashroh.jpg',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
//   },
//   {
//     title: 'Web Application clothing Shop clothes',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/clothing.jpg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
//   },
//   {
//     title: 'Web Application E-commerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/ecommerce1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/',
//   },
//   {
//     title: 'Web Application Mr./Health',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/mrhealth.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
//   },
//   {
//     title: 'Web Application Book store',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/bookstor.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-book-store ',
//   },
//   {
//     title: 'Web Application Angular E Commerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/ecommerce2.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
//   },
//   {
//     title: 'Project Ecommpece Web App Vue.js',
//     description: 'This is a simple card component created using CSS. Teck Stack Firebase HTML Css',
//     image: '/imges/vuejs.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/vueproject ',
//   },
//   {
//     title: 'Project Laravel Posts',
//     description: 'This is a simple card component created using CSS. Teck Stack PHP Laravel HTML Css',
//     image: '/imges/laravel.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-laravel',
//   },
 
// ];
const projects = [
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/seller-list.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/code-app.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image3.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image4.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Asp.net mvc',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/seller-list.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Asp.net Api',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/seller-list.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image1.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image2.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'E-commerce Web App',
    description: 'An e-commerce application for online shopping. Developed with Python, Django, HTML, and CSS.',
    image: '/imges/vue-app.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich platform for e-commerce operations using Python, Django, HTML, and CSS.',
    image: '/imges/e-commerce-app.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Taheed Web Application',
    description: 'A specialized web application built using Python, Django, HTML, and CSS.',
    image: '/imges/taheed2.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'Todo List Project',
    description: 'A simple and interactive to-do list application designed with Python, Django, HTML, and CSS.',
    image: '/imges/todo.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Todo-List ',
  },
  {
    title: 'React E-commerce Application',
    description: 'An e-commerce web app developed using React, Python, Django, HTML, and CSS.',
    image: '/imges/react1.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
  },
  {
    title: 'Movies Web Application',
    description: 'A movie cataloging application with features to explore and manage movie details, built with Python and Django.',
    image: '/imges/movies.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/day3',
  },
  {
    title: 'Database Engine Project (BASH)',
    description: 'A database engine implemented in BASH, showcasing shell scripting and database management concepts.',
    image: '/imges/bash.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
  },
  {
    title: 'Mashroh Online Courses Application',
    description: 'An educational platform offering online courses, built using Python, Django, HTML, and CSS.',
    image: '/imges/mashroh.jpg',
    livePreview: '',
    github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
  },
  {
    title: 'Clothing Shop Web Application',
    description: 'An e-commerce site specializing in clothing, created using Python, Django, HTML, and CSS.',
    image: '/imges/clothing.jpg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
  },
  {
    title: 'E-commerce Application',
    description: 'A comprehensive e-commerce solution built with Python, Django, HTML, and CSS.',
    image: '/imges/ecommerce1.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/',
  },
  {
    title: 'Mr. Health Web Application',
    description: 'A health-focused web application for tracking and managing wellness activities, created with Python and Django.',
    image: '/imges/mrhealth.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
  },
  {
    title: 'Bookstore Application',
    description: 'An online bookstore platform developed using Python, Django, HTML, and CSS.',
    image: '/imges/bookstor.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-book-store ',
  },
  {
    title: 'Angular E-commerce Application',
    description: 'An e-commerce site developed using Angular, with a focus on modern web design and functionality.',
    image: '/imges/ecommerce2.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
  },
  {
    title: 'Vue.js E-commerce Web App',
    description: 'A dynamic e-commerce application built with Vue.js and Firebase.',
    image: '/imges/vuejs.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/vueproject ',
  },
  {
    title: 'Laravel Posts Project',
    description: 'A blogging platform to manage posts, developed using PHP, Laravel, HTML, and CSS.',
    image: '/imges/laravel.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-laravel',
  },
];

const Projects = () => {
    // Set initial number of projects to display
    const [visibleProjects, setVisibleProjects] = useState(12);
  
    // Function to handle "See More" click
    const handleSeeMore = () => {
      setVisibleProjects(projects.length); // Show all projects
    };
  return (
    <section id='projects' className='container-fluid' style={styles.projectsSection}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.projectsGrid}>
      {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div >
            <img src={project.image} alt={project.title} style={styles.projectImage} />

            </div>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.buttons}>
              <a href={project.livePreview} className='me-2' style={styles.button} target="_blank" rel="noopener noreferrer">Live preview</a>
              <a href={project.github} style={styles.button} target="_blank" rel="noopener noreferrer">Check on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div style={styles.seeMoreButtonContainer}>
          <button style={styles.seeMoreButton} onClick={handleSeeMore}>See More</button>
        </div>
      )}
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
  seeMoreButtonContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  seeMoreButton: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Projects;
