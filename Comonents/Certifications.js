'use client';
import React, { useState } from 'react';
import Modal from './Modal';


const certifications = [
    {
      title: 'Certified Azure Fundamentals',
      organization: 'Microsoft',
      date: 'January 2023',
      description: 'Demonstrated knowledge of foundational cloud concepts and Azure services.',
      imageUrl: '/imges/vue-app.png', // Replace with your image path
    },
    {
      title: 'Machine Learning Specialist',
      organization: 'Coursera',
      date: 'August 2022',
      description: 'Completed an advanced course on machine learning, supervised and unsupervised models.',
      imageUrl: '/images/ml-certification.jpg',
    },
    {
      title: 'Data Science Professional',
      organization: 'IBM',
      date: 'March 2022',
      description: 'Achieved proficiency in data analysis, visualization, and data-driven decision-making.',
      imageUrl: '/images/data-science-certification.jpg',
    },
  ];
  
const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" style={styles.certificationsSection}>
      <h2 style={styles.title}>Certifications</h2>
      <ul style={styles.certificationsList}>
        {certifications.map((cert, index) => (
          <li key={index} style={styles.certCard}>
            <h3 style={styles.certTitle}>{cert.title}</h3>
            <p style={styles.certOrganization}>{cert.organization}</p>
            <p style={styles.certDate}>{cert.date}</p>
            <p style={styles.certDescription}>{cert.description}</p>
            <button
              style={styles.viewImageButton}
              onClick={() => openModal(cert)}
            >
              View Certificate
            </button>
          </li>
        ))}
      </ul>
      {selectedCert && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          imageSrc={selectedCert.imageUrl}
          title={selectedCert.title}
        />
      )}
    </section>
  );
};

const styles = {
  certificationsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#e6f7ff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  certificationsList: {
    listStyleType: 'none',
    padding: 0,
  },
  certCard: {
    backgroundColor: '#fff',
    margin: '1rem auto',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  },
  certTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  certOrganization: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  certDate: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    marginBottom: '0.5rem',
  },
  certDescription: {
    fontSize: '1rem',
  },
  viewImageButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Certifications;
