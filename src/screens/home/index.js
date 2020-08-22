import React from 'react';
// import './style.css';
import Footer from '../../components/footer/index.js';

function Home() {
  return (
    <>
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">
          <div className="container left-align">
            
            <h3 className="color1">
              <a id="hi" href="/contact">Hi,</a>
            </h3>
            
            <h3>I'm a <span className="color1">Full-Stack Web Developer</span> with a deep passion for design!</h3>
            <br/>

            <h5>My focus is on modern JavaScript frameworks and libraries, from <span className="color3"> React </span> and <span className="color3"> Vue </span>
              on the front-end to <span className="color3"> node.js </span> and <span className="color3"> Express </span> on the back-end.
            </h5>

            <h5>I have a deep passion for learning and have my hands in a lot of other tech too!
              Check out my work <span className="color2"><a id="workhere" href='/portfolio'>here</a></span>
            </h5>

            <h5>Outside of programming, I'm a musician, audio engineer, and community activist.</h5>

          </div>
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
    </>
  )
  
};

export default Home;