// 'use client';
// import React, { useState } from 'react';
// import Modal from './Modal';


// const certifications = [
//     {
//       title: 'Certified Azure Fundamentals',
//       organization: 'Microsoft',
//       date: 'January 2023',
//       description: 'Demonstrated knowledge of foundational cloud concepts and Azure services.',
//       imageUrl: '/imges/vue-app.png', // Replace with your image path
//     },
//     {
//       title: 'Machine Learning Specialist',
//       organization: 'Coursera',
//       date: 'August 2022',
//       description: 'Completed an advanced course on machine learning, supervised and unsupervised models.',
//       imageUrl: '/images/ml-certification.jpg',
//     },
//     {
//       title: 'Data Science Professional',
//       organization: 'IBM',
//       date: 'March 2022',
//       description: 'Achieved proficiency in data analysis, visualization, and data-driven decision-making.',
//       imageUrl: '/images/data-science-certification.jpg',
//     },
//   ];
  
// const Certifications = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedCert, setSelectedCert] = useState(null);

//   const openModal = (cert) => {
//     setSelectedCert(cert);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedCert(null);
//   };

//   return (
//     <section id="certifications" style={styles.certificationsSection}>
//       <h2 style={styles.title}>Certifications</h2>
//       <ul style={styles.certificationsList}>
//         {certifications.map((cert, index) => (
//           <li key={index} style={styles.certCard}>
//             <h3 style={styles.certTitle}>{cert.title}</h3>
//             <p style={styles.certOrganization}>{cert.organization}</p>
//             <p style={styles.certDate}>{cert.date}</p>
//             <p style={styles.certDescription}>{cert.description}</p>
//             <button
//               style={styles.viewImageButton}
//               onClick={() => openModal(cert)}
//             >
//               View Certificate
//             </button>
//           </li>
//         ))}
//       </ul>
//       {selectedCert && (
//         <Modal
//           isOpen={modalOpen}
//           onClose={closeModal}
//           imageSrc={selectedCert.imageUrl}
//           title={selectedCert.title}
//         />
//       )}
//     </section>
//   );
// };

// const styles = {
//   certificationsSection: {
//     padding: '4rem 2rem',
//     backgroundColor: '#e6f7ff',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2rem',
//     marginBottom: '2rem',
//   },
//   certificationsList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   certCard: {
//     backgroundColor: '#fff',
//     margin: '1rem auto',
//     padding: '1.5rem',
//     borderRadius: '8px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     maxWidth: '600px',
//   },
//   certTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '0.5rem',
//   },
//   certOrganization: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem',
//   },
//   certDate: {
//     fontSize: '0.9rem',
//     fontStyle: 'italic',
//     marginBottom: '0.5rem',
//   },
//   certDescription: {
//     fontSize: '1rem',
//   },
//   viewImageButton: {
//     marginTop: '1rem',
//     padding: '0.5rem 1rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default Certifications;
// 'use client';
// import React, { useState } from 'react';
// import Modal from './Modal';

// const certifications = [
//   {
//     title: 'Python Data Analysis',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//     img:'./imges/certification/coursera_dotnet.pdf'
//   },
//   {
//     title: 'Python Machine Learning',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//   },
//   {
//     title: 'Python Deep Learning',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//   },
//   {
//     title: 'Microsoft Power BI Desktop for Business Intelligence',
//     organization: 'Microsoft',
//   },
//   {
//     title: 'Statistics in R',
//     organization: 'Udemy',
//     instructor: 'Mohammed Jarabe',
//   },
//   {
//     title: 'Alteryx Bootcamp for Data Management',
//     organization: 'Alteryx',
//   },
//   {
//     title: 'Informatica Tutorial: Beginner to Expert Level',
//     organization: 'Informatica',
//   },
//   {
//     title: '.NET Full Stack Developer',
//     organization: 'Board Infinity',
//   },
//   {
//     title: 'Full Stack JavaScript Developer',
//     organization: 'IBM',
//   },
//   {
//     title: 'Full Stack Software Developer',
//     organization: 'IBM',
//   },
//   {
//     title: 'MERN Stack Developer',
//     organization: 'Board Infinity',
//   },
//   {
//     title: 'Google Certified Data Analyst',
//     organization: 'Google',
//   },
//   {
//     title: 'IBM Data Warehouse Engineer Professional Certificate',
//     organization: 'IBM',
//   },
//   {
//     title: 'Advanced Python for Data Science',
//     organization: 'LinkedIn Learning',
//   },
//   {
//     title: 'IBM Data Science Professional Certificate',
//     organization: 'IBM',
//   },
// ];

// const Certifications = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const openModal = (cert) => {
//     setSelectedCert(cert);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedCert(null);
//   };

//   const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);

//   return (
//     <section id="certifications" style={styles.certificationsSection}>
//       <h2 style={styles.title}>Certifications & Achievements</h2>
//       <div style={styles.certificationsGrid}>
//         {displayedCertifications.map((cert, index) => (
//           <div key={index} style={styles.certCard}>
//             <h3 style={styles.certTitle}>{cert.title}</h3>
//             <p style={styles.certOrganization}>{cert.organization}</p>
//             {cert.instructor && <p style={styles.certInstructor}>Instructor: {cert.instructor}</p>}
//             <button style={styles.viewButton} onClick={() => openModal(cert)}>View Certificate</button>
//           </div>
//         ))}
//       </div>
//       {!showAll && (
//         <button style={styles.showMoreButton} onClick={() => setShowAll(true)}>See More</button>
//       )}
//       {modalOpen && selectedCert && (
//         <Modal isOpen={modalOpen} onClose={closeModal}>
//           <h3>{selectedCert.title}</h3>
//           <p>{selectedCert.organization}</p>
//           {selectedCert.instructor && <p>Instructor: {selectedCert.instructor}</p>}
//         </Modal>
//       )}
//     </section>
//   );
// };

// const styles = {
//   certificationsSection: {
//     padding: '4rem 2rem',
//     backgroundColor: '#1a1a2e',
//     color: 'white',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2rem',
//     marginBottom: '2rem',
//   },
//   certificationsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '1rem',
//   },
//   certCard: {
//     backgroundColor: '#16213e',
//     padding: '1.5rem',
//     borderRadius: '8px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   certTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '0.5rem',
//   },
//   certOrganization: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem',
//   },
//   certInstructor: {
//     fontSize: '0.9rem',
//     fontStyle: 'italic',
//     marginBottom: '0.5rem',
//   },
//   viewButton: {
//     marginTop: '1rem',
//     padding: '0.5rem 1rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   showMoreButton: {
//     display: 'block',
//     margin: '2rem auto',
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '1rem',
//   },
// };

// export default Certifications;
// 'use client';
// import React, { useState } from 'react';
// import Modal from './Modal';

// const certifications = [
//   {
//     title: 'Python Data Analysis',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//     img:'./imges/certification/Coursera_dotnet.pdf'
//   },
//   {
//     title: 'Python Machine Learning',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//   },
//   {
//     title: 'Python Deep Learning',
//     organization: 'Udemy',
//     instructor: 'Mostafa Othman',
//   },
//   {
//     title: 'Microsoft Power BI Desktop for Business Intelligence',
//     organization: 'Microsoft',
//   },
//   {
//     title: 'Statistics in R',
//     organization: 'Udemy',
//     instructor: 'Mohammed Jarabe',
//   },
//   {
//     title: 'Alteryx Bootcamp for Data Management',
//     organization: 'Alteryx',
//   },
//   {
//     title: 'Informatica Tutorial: Beginner to Expert Level',
//     organization: 'Informatica',
//   },
//   {
//     title: '.NET Full Stack Developer',
//     organization: 'Board Infinity',
//   },
//   {
//     title: 'Full Stack JavaScript Developer',
//     organization: 'IBM',
//   },
//   {
//     title: 'Full Stack Software Developer',
//     organization: 'IBM',
//   },
//   {
//     title: 'MERN Stack Developer',
//     organization: 'Board Infinity',
//   },
//   {
//     title: 'Google Certified Data Analyst',
//     organization: 'Google',
//   },
//   {
//     title: 'IBM Data Warehouse Engineer Professional Certificate',
//     organization: 'IBM',
//   },
//   {
//     title: 'Advanced Python for Data Science',
//     organization: 'LinkedIn Learning',
//   },
//   {
//     title: 'IBM Data Science Professional Certificate',
//     organization: 'IBM',
//   },
// ];

// const Certifications = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const openModal = (cert) => {
//     setSelectedCert(cert);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedCert(null);
//   };

//   const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);

//   return (
//     <section id="certifications" style={styles.certificationsSection}>
//       <h2 style={styles.title}>Certifications & Achievements</h2>
//       <div style={styles.certificationsGrid}>
//         {displayedCertifications.map((cert, index) => (
//           <div key={index} style={styles.certCard}>
//             <h3 style={styles.certTitle}>{cert.title}</h3>
//             <p style={styles.certOrganization}>{cert.organization}</p>
//             {cert.instructor && <p style={styles.certInstructor}>Instructor: {cert.instructor}</p>}
//             <button style={styles.viewButton} onClick={() => openModal(cert)}>View Certificate</button>
//           </div>
//         ))}
//       </div>
//       {!showAll && (
//         <button style={styles.showMoreButton} onClick={() => setShowAll(true)}>See More</button>
//       )}
//       {modalOpen && selectedCert && (
//         <Modal isOpen={modalOpen} onClose={closeModal}>
//           <h3>{selectedCert.title}</h3>
//           <p>{selectedCert.organization}</p>
//           {selectedCert.img && (
//   selectedCert.img.endsWith('.pdf') ? (
//     <embed src={selectedCert.img} width="100%" height="500px" type="application/pdf" />
//   ) : (
//     <img src={selectedCert.img} alt={selectedCert.title} style={{ width: '100%', maxHeight: '500px' }} />
//   )
// )}

//         </Modal>
//       )}
//     </section>
//   );
// };

// const styles = {
//   certificationsSection: {
//     padding: '4rem 2rem',
//     backgroundColor: '#1a1a2e',
//     color: 'white',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2rem',
//     marginBottom: '2rem',
//   },
//   certificationsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '1rem',
//   },
//   certCard: {
//     backgroundColor: '#16213e',
//     padding: '1.5rem',
//     borderRadius: '8px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   certTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '0.5rem',
//   },
//   certOrganization: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem',
//   },
//   certInstructor: {
//     fontSize: '0.9rem',
//     fontStyle: 'italic',
//     marginBottom: '0.5rem',
//   },
//   viewButton: {
//     marginTop: '1rem',
//     padding: '0.5rem 1rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   showMoreButton: {
//     display: 'block',
//     margin: '2rem auto',
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '1rem',
//   },
// };

// export default Certifications;
'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const certifications = [
  {
    title: 'Python Data Analysis',
    organization: 'Udemy',
    instructor: 'Mostafa Othman',
    img:'/imges/certification/image.png'
  },
  {
    title: 'Python Machine Learning',
    organization: 'Udemy',
    instructor: 'Mostafa Othman',
  },
  {
    title: 'Python Deep Learning',
    organization: 'Udemy',
    instructor: 'Mostafa Othman',
  },
  {
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    organization: 'Microsoft',
  },
  {
    title: 'Statistics in R',
    organization: 'Udemy',
    instructor: 'Mohammed Jarabe',
  },
  {
    title: 'Alteryx Bootcamp for Data Management',
    organization: 'Alteryx',
  },
  {
    title: 'Informatica Tutorial: Beginner to Expert Level',
    organization: 'Informatica',
  },
  {
    title: '.NET Full Stack Developer',
    organization: 'Board Infinity',
  },
  {
    title: 'Full Stack JavaScript Developer',
    organization: 'IBM',
  },
  {
    title: 'Full Stack Software Developer',
    organization: 'IBM',
  },
  {
    title: 'MERN Stack Developer',
    organization: 'Board Infinity',
  },
  {
    title: 'Google Certified Data Analyst',
    organization: 'Google',
  },
  {
    title: 'IBM Data Warehouse Engineer Professional Certificate',
    organization: 'IBM',
  },
  {
    title: 'Advanced Python for Data Science',
    organization: 'LinkedIn Learning',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    organization: 'IBM',
  },
];

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="certifications" style={styles.certificationsSection}>
      <h2 style={styles.title}>Certifications & Achievements</h2>
      <div style={styles.certificationsGrid}>
        {displayedCertifications.map((cert, index) => (
          <div key={index} style={styles.certCard}>
            <h3 style={styles.certTitle}>{cert.title}</h3>
            <p style={styles.certOrganization}>{cert.organization}</p>
            {cert.instructor && <p style={styles.certInstructor}>Instructor: {cert.instructor}</p>}
            <button style={styles.viewButton} onClick={() => openModal(cert)}>View Certificate</button>
          </div>
        ))}
      </div>
      {!showAll && (
        <button style={styles.showMoreButton} onClick={() => setShowAll(true)}>See More</button>
      )}
      
      <Modal show={modalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Organization:</strong> {selectedCert?.organization}</p>
          {selectedCert?.instructor && <p><strong>Instructor:</strong> {selectedCert.instructor}</p>}
          {selectedCert?.img && (
            selectedCert.img.endsWith('.pdf') ? (
              <embed src={selectedCert.img} width="100%" height="500px" type="application/pdf" />
            ) : (
              <img src={selectedCert.img} alt={selectedCert.title} style={{ width: '100%', maxHeight: '500px' }} />
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

const styles = {
  certificationsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#1a1a2e',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  certificationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  certCard: {
    backgroundColor: '#16213e',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
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
  certInstructor: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    marginBottom: '0.5rem',
  },
  viewButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  showMoreButton: {
    display: 'block',
    margin: '2rem auto',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Certifications;
