// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer className='bg-dark' style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>Connect with me:</p>
        <div style={styles.socialIcons} id='contact'> 
          <a href="https://github.com/mahmoudamr5896" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faGithub} size="1x"  className='me-2'style={{width:'50px'}} />
          </a>
          <a href="https://linkedin.com/in/mahmoudamrhassan"  target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="1x" className='me-2' style={{width:'50px'}}/>
          </a>
          <a href="https://twitter.com/"  target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="1x"  className='me-2'style={{width:'50px'}}/>
          </a>
        </div>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Mahmoud Amr Hassan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0',
    backgroundColor: '#0f0f23',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  socialIcons: {
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
    width:'50px'
  },
  iconHover: {
    color: '#6c63ff',
  },
  copyright: {
    fontSize: '0.9rem',
    marginTop: '1rem',
  },
};

export default Footer;
