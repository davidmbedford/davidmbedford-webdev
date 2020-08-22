import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer >
        <div className="container center">
          <div className="row">
          <a className="footerIcon" href="https://docs.google.com/document/d/16ADcaKgLQvL9U5Qq8-KJYXubDxbyXjrrusFbPDU3tuE/edit?usp=sharing" target="_blank">
            <i className="far fa-file" title="resume"></i>
              </a>
          <a className="footerIcon" href="https://github.com/davidmbedford" target="_blank"><i className="fab fa-github" title="github"></i></a>
          <a className="footerIcon" href="https://www.linkedin.com/in/davidmbedford/" target="_blank"><i className="fab fa-linkedin" title="linkedin"></i></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer;