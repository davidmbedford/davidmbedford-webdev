import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Particles from 'react-particles-js';

class Navigation extends Component {
    componentDidMount() {
      const M = window.M;
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
    }

    render () {
      return(
        <>
          <div className="col s12 l3 no-pad">
              
            <Particles className="particles"
              params={{
                "particles": {
                  "number": {
                    "value": 25
                    },
                  "size": {
                    "value": 4
                    }
                  },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                      }
                    }
                  }
              }} />

            <div className="nav">

              <div className="nav-wrapper">
                <h2 className="right-align" id="titleName">
                  <a href="https://www.linkedin.com/in/davidmbedford/" target="_blank">david michael bedford</a>
                </h2>
                <a data-target="slide-out" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons white-text menuicon">menu</i></a>
                  <div className="sticky-top">
                    <ul class="right-align hide-on-med-and-down">
                      <li><Link className="waves-effect waves-light btn-flat nav-links" to='/'>Home</Link></li>
                      <li><Link className="waves-effect waves-light btn-flat nav-links" to='/portfolio'>Portfolio</Link></li>
                      <li><Link className="waves-effect waves-light btn-flat nav-links" to='/skills'>Skills</Link></li>
                      <li><Link className="waves-effect waves-light btn-flat nav-links" to='/contact'>Contact</Link></li>
                    </ul>
                  </div> 
              </div>

              <ul className="sidenav" id="slide-out">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>

            </div>
            
          </div>
        </>
      )
    }
}

export default Navigation;
