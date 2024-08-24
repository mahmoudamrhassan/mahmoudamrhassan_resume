// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section style={styles.aboutSection}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>About Me</h2>
          <p style={styles.description}>
            Hi, I'm Mahmoud Amr, a passionate front-end developer with a strong background in creating responsive and user-friendly web applications. With experience in HTML, CSS, JavaScript, and modern frameworks like React and Angular, I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm always eager to learn new skills and take on new challenges.
          </p>
          <p style={styles.description}>
            Outside of work, I love exploring the latest tech trends, contributing to open-source projects, and spending time on personal projects. Whether it's building a new feature, optimizing performance, or enhancing the user experience, I’m always up for the challenge!
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="/img.jpeg"
            alt="Your Name"
            style={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: {
    padding: '4rem 2rem',
    backgroundColor: '#0f0f23',
    color: '#fff',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  textContainer: {
    flex: 1,
    marginRight: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  imageContainer: {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    width: '100%',
    maxWidth: '200px',
  },
};

export default AboutMe;
