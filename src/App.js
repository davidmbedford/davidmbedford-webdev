import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row } from 'reactstrap';
// import './App.css';

import Home from './screens/home/index.js';
import Portfolio from './screens/portfolio/index.js';
import Skills from './screens/skills/index.js';
import Contact from './screens/contact/index.js';
import Navigation from './components/nav/index.js';

function App() {
  return (
    <>
    <Router>
    <Row style={{ margin: 0 }}>
    <Navigation /> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Row>
    </Router>
    </>
  );
}

export default App;