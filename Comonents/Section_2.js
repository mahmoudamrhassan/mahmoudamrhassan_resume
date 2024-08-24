import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function HeroSection() {
  return (
    <section className="d-flex align-items-center"  style={{'background-color': '#1c1e21','padding': '100px', 'position': 'relative'}}>
      <div className="container text-center text-white">
        <div className='col-8 '> 
        <h1 className="hero-title" style={{  'font-size': '2.5rem', 'font-weight': '700','line-height':' 1.2'}}>
          Hello, I'm <span className="highlight" style={{    'color': '#6a4ef6', 'background': '-webkit-linear-gradient(45deg, #6a4ef6, #00c9ff)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent'}}>Mahmoud Amr Hassan</span>,
          <br/>
        </h1>
        <p className="hero-subtitle mt-3" style={{ 'font-size': '1.2rem',   ' font-weight': '400',    'max-width': '600px',    'margin': '0 auto'}}>
        software engineer graduated from the Information Technology Institute (ITI), certified by Google as a Data Analyst. I'm proficient in JavaScript, ES6, jQuery, React, Python, Django, Flask, SQL, PostgreSQL, MySQL, MongoDB, HTML5, CSS3, Bootstrap, Git, GitHub, Bash scripting, Apache, Odoo, Docker, C, C++, PHP, and WordPress.
        </p>
        </div>
    <br/>
        <Button variant="primary" className="mt-4 hero-button" style={{ '  background-color': '#00c9ff',
    'border': 'none',
    'padding': '10px 30px',
    'font-size': '1rem',
    'border-radius': '30px',
    'box-shadow': '0px 10px 20px rgba(0, 201, 255, 0.3)'}}>
            <a className='btn' href='./imges/mahmoudamrhassan_resume01.pdf'> 
               Download CV
            </a>
        </Button>
      </div>
      <div className="hero-image-wrapper col-4 " 
      style={{ 
    'top': '50%',
    'right':' 10%',
    'transform': 'translateY(-50%)'}}>
        <img src="./imges/img.jpeg" alt="Mahmoud Amr Hassan" style={{
             'width':' 250px',     'height': '250px',
             'border-radius': '50%',
             'border': '5px solid #1c1e21',
            ' box-shadow': '0px 10px 20px rgba(0, 0, 0, 0.3)'
        }}/>
      </div>
    </section>
  );
}

