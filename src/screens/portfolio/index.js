import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';
import tc from '../../images/tc.png'
import zigZag from '../../images/zigzag.png';
import swfc from '../../images/SWFC.png';
import showspot from '../../images/S.png';
import blitz from '../../images/blitz.png';
import bamazon from '../../images/bamazon.png';
import liri from '../../images/liri.png'
import liveschedule from '../../images/liveschedule.png';
import friend from '../../images/friendfinder.png';
import gifexploder from '../../images/gifexploder.png';


function Portfolio() {
  return (
    <>
      <div className="col s12 l9 no-pad">
        <div className="App">
          <div className="App-header">

            <div className="container">

              <div className="row">
                <div className="col s12">
                  <h3 className="center color1">Portfolio</h3>
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={tc} />
                      <span class="bard-title">TimeCrunch</span>
                    </div>
                    <div className="bard-content">
                      <p>TimeCrunch is a team-focused to-do app with realtime database connectivity. This version displays a pre-made team which you can alter 
                        through the side menu. The user log-in system is under construction.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> Vue, Vuetify, Firebase, ES6, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/TimeCrunch" target="_blank">Code</a>
                      <a className="btn-flat" href="https://time-crunch.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>
                
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={zigZag} />
                      <span class="bard-title">ZigZag</span>
                    </div>
                    <div className="bard-content">
                      <p>ZigZag contains a personality and career aptitude survey to help
                        determine the best academic course for you! We also have a vast database
                        of related college programs.</p>
                      <br />
                      <p><span className="bold">Main Tech: </span> React, ES6, node.js, MySql, Express, APIs, Materialize, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/asmith7531/team1project3" target="_blank">Code</a>
                      <a className="btn-flat" href="https://radiant-wildwood-53087.herokuapp.com" target="_blank">Site</a>
                    </div>
                  </div>
                </div>


              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={swfc} />
                      <span class="bard-title">Star Wars: Force Clicker</span>
                    </div>
                    <div className="bard-content">
                      <p>Test you connection to the force with this React-based memory game! Select every character without repeating in order to win.
                        This app was built with React in order to display dynamic, realtime page manipulation.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> React, ES6, Bootstrap, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/clickergame" target="_blank">Code</a>
                      <a className="btn-flat" href="https://clickergame-rubc.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={showspot} />
                      <span class="bard-title">ShowSpotter</span>
                    </div>
                    <div className="bard-content">
                      <p>Enables you to find concerts and other events near you! You can search for dates in your area, find tickets, and check directions, as well make a profile to save info.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, jQuery, Firebase, APIs, Moment.js, Bootstrap, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/Parker-Tech/project_one_boiler" target="_blank">Code</a>
                      <a className="btn-flat" href="https://show-spotter.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>


              <div className="row">
              <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={blitz} />
                      <span class="bard-title">Blitzkreig</span>
                    </div>
                    <div className="bard-content">
                      <p>An all-in-one productivity app: Blitz enables you to start your day with a bang, Choose between various widgets, such as traffic reports, weather, and the news, to maximize your morning!</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, node.js, jQuery, MySql, Handlebars, Express, APIs, Bootstrap, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/rachaelbelle/blitzkreig" target="_blank">Code</a>
                      <a className="btn-flat" href="https://blitzkreigg.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>


                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={liveschedule} />
                      <span class="bard-title">Live Schedule</span>
                    </div>
                    <div className="bard-content">
                      <p>This utilizes Firebase to create a live-updating schedule application. This current version is geared towards Train conductors, but the application can be refactored for anyone in need of coordinating a steady routine.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, jQuery, Firebase, Moment.js, Bootstrap, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/LiveSchedule" target="_blank">Code</a>
                      <a className="btn-flat" href="https://davidmbedford.github.io/LiveSchedule/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={bamazon} />
                      <span class="bard-title">Bamazon</span>
                    </div>
                    <div className="bard-content">
                      <p>A digital storefront designed for your command line interface! There is a client, and manager-facing interface for this app. Customers may view inventory and purchase items; managers can review, stock and add new items.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, node.js, jQuery, MySQL, Inquirer</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/bamazon-unit12" target="_blank">Code</a>
                      <a className="btn-flat" href="#"><span className="card-link">Clone</span></a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={liri} />
                      <span class="bard-title">Liri</span>
                    </div>
                    <div className="bard-content">
                      <p>LIRI is a Node.js based app that users can run in a command line interface to search for concerts, movies, and music. Liri stands for: Language Interpretation and Recognition Interface.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, node.js, Inquirer, Axios, Moment.js, APIs</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/liri-node-app" target="_blank">Code</a>
                      <a className="btn-flat" href="https://clickergame-rubc.herokuapp.com/" target="_blank">Clone</a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={friend} />
                      <span class="bard-title">Friend Finder</span>
                    </div>
                    <div className="bard-content">
                      <p>This app allows users to take a survey and find like-minded people in their area to hang out with! This app is meant to demonstrate MySql API-routing and Handlebars via node.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, jQuery, MySql, Handlebars, Materialize, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/FriendFinder" target="_blank">Code</a>
                      <a className="btn-flat" href="https://friend-finderxrubc.herokuapp.com/home" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={gifexploder} />
                      <span class="bard-title">Gif Exploder</span>
                    </div>
                    <div className="bard-content">
                      <p>A jQuery-based Gif engine that utilizes the Giphy API. Users can add buttons to the header and use them to search for gifs of any sort based on what's trending.</p>
                      <br />
                      <p><span className="bold">Main Tech:</span> JavaScript, jQuery, Giphy API, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a className="btn-flat" href="https://github.com/davidmbedford/Unit-6-GifTastic" target="_blank">Code</a>
                      <a className="btn-flat" href="https://davidmbedford.github.io/Unit-6-GifTastic/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>
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

export default Portfolio;