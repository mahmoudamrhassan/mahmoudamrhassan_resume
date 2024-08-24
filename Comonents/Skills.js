// components/Skills.js
import React from 'react';

const skills = [
  { name: 'Html', level: 'Advanced', width: '95%' },
  { name: 'CSS, Sass & Bootstrap', level: 'Advanced', width: '90%' },
  { name: 'JavaScript, TypeScript, JQuery', level: 'Advanced', width: '85%' },
  { name: 'UI design in Figma', level: 'Regular', width: '65%' },
  { name: 'Angular', level: 'Beginner', width: '50%' },
  { name: 'React', level: 'Beginner', width: '50%' },
  { name: 'React Native', level: 'Beginner', width: '50%' },
];

const additionalSkills = [
  'Git', 'Wordpress', 'Teamwork',
  'Quick learning', 'Engagement', 'B2 English',
];

const Skills = () => {
  return (
    <section id='Skills' className='container-fluid' style={styles.skillsSection}>
      <h2 style={styles.title}>Technologies</h2>
      {skills.map((skill, index) => (
        <div key={index} style={styles.skill}>
          <div style={styles.skillName}>{skill.name}</div>
          <div style={styles.skillBarContainer}>
            <div style={{ ...styles.skillBar, width: skill.width }}></div>
          </div>
          <div style={styles.skillLevel}>{skill.level}</div>
        </div>
      ))}
      <h3 style={styles.subtitle}>Additional technologies and skills</h3>
      <ul style={styles.additionalSkills}>
        {additionalSkills.map((skill, index) => (
          <li key={index} style={styles.additionalSkillItem}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  skillsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#0f0f23',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  skill: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  skillName: {
    flex: 1,
    fontSize: '1rem',
  },
  skillBarContainer: {
    flex: 2,
    backgroundColor: '#1b1b32',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '0 1rem',
  },
  skillBar: {
    height: '10px',
    backgroundColor: '#6c63ff',
  },
  skillLevel: {
    fontSize: '0.875rem',
    textAlign: 'right',
    width: '80px',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '3rem',
    marginBottom: '1.5rem',
  },
  additionalSkills: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,
  },
  additionalSkillItem: {
    backgroundColor: '#1b1b32',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    borderRadius: '5px',
    fontSize: '1rem',
  },
};

export default Skills;
