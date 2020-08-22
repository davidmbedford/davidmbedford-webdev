import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';

function Contact() {
  return (
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">

          <div className="container backBox left-align">
            <div className="row">
              <div className="col s12">
                <h3 className="center color1">Contact</h3>
                <h5>Email: <span className="contact-info">david.m.bedford1@gmail.com</span></h5>
                <h5>Phone: <span className="contact-info">848.391.9915</span></h5>
                <h5>Github: <a className="contact-info" href="https://github.com/davidmbedford/">davidmbedford</a></h5>
                <h5>LinkedIn: <a className="contact-info" href="https://www.linkedin.com/in/david-bedford-027b99190/">link</a></h5>
                <h5>More about me:
                  <a className="contact-info" href="https://docs.google.com/document/d/16ADcaKgLQvL9U5Qq8-KJYXubDxbyXjrrusFbPDU3tuE/edit?usp=sharing"> resume</a></h5>
              </div>
            </div>
          </div>

          <div className="container">    
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Contact;