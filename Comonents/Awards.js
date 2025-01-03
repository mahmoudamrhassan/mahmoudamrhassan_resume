const awards = [
    {
      title: 'Certificate of Completion and Appreciation',
      description:
        'Awarded by the Ministry of Communications and Information Technology for outstanding leadership and exceptional contributions as a Team Leader in the Digital Egypt Pioneers Program.',
      date: 'April 2024 - October 2024',
    },
  ];
  
const Awards = () => {
    return (
      <section id="awards" className="container-fluid bg-dark" style={styles.awardsSection}>
        <h2 style={styles.title} className="text-white">Awards and Recognitions</h2>
        <ul style={styles.awardsList}>
          {awards.map((award, index) => (
            <li key={index} style={styles.awardCard}>
              <h3 style={styles.awardTitle}>{award.title}</h3>
              <p style={styles.awardDescription}>{award.description}</p>
              <p style={styles.awardDate}>{award.date}</p>
            </li>
          ))}
        </ul>
        <hr style={styles.hr}></hr>
      </section>
    );
  };
  
  const styles = {
    awardsSection: {
      padding: '4rem 2rem',
      backgroundColor: '#f9f9f9',
      color: '#333',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '2rem',
    },
    awardsList: {
      listStyleType: 'none',
      padding: 0,
    },
    awardCard: {
      backgroundColor: '#fff',
      margin: '1rem auto',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
    },
    awardTitle: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
    },
    awardDescription: {
      fontSize: '1rem',
      marginBottom: '0.5rem',
    },
    awardDate: {
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    hr: { 
    color:'white',
    height:'3px'
    },
  };
  
  export default Awards;
  