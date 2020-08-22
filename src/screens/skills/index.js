import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';

function Skills() {
  return (
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">
          <div className="container backBox" >

            <div className="row">
              <div className="col s12">
                <h3 className="center color1">Skills</h3>
              </div>
            </div>

            <div className="row">
              <div className="col s4 skillicon">
                <i className="react-logo center fab fa-react fa-3x skill-icon no-pad"></i>
                <h6 className="center skilllabel">React.JS</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="fab fa-vuejs fa-3x skill-icon"></i>
                <h6 className="center skilllabel">Vue</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="center fas fa-dollar-sign fa-3x skill-icon"></i>
                <h6 className="center skilllabel">jQuery</h6>
              </div>
            </div>

            <div className="row">
              <div className="col s4 skillicon">
                <i className="center fab fa-js fa-3x skill-icon no-pad"></i>
                <h6 className="center skilllabel">JavaScript</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="center fab fa-html5 fa-3x skill-icon no-pad"></i>
                <h6 className="center skilllabel">HTML</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="center fab fa-css3 fa-3x skill-icon no-pad"></i>
                <h6 className="center skilllabel">CSS</h6>
              </div>
            </div>

            <div className="row">
              <div className="col s4 skillicon">
                <i className="center fab fa-node fa-js fa-3x skill-icon no-pad"></i>
                <h6 className="center skilllabel">node.js</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="center fas fa-database fa-3x skill-icon"></i>
                <h6 className="center skilllabel">MySQL</h6>
              </div>
              <div className="col s4 skillicon">
                <i className="center fas fa-leaf fa-3x skill-icon"></i>
                <h6 className="center skilllabel">MongoDB</h6>
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

export default Skills;
