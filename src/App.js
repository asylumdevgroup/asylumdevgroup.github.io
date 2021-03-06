import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Modpacks from './Components/Modpacks';

import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App" style={{fontFamily: 'Montserrat'}}>
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand><Link to="/"><img
        src="ADG3.jpg"
        width="32"
        height="32"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/about">About</Link></Nav.Link>
      <Nav.Link><Link to="/modpacks">Modpacks</Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
<Route exact path='/' component={Home} />
<Route path='/about' component={About} />
<Route path='/modpacks' component={Modpacks} />
</Switch>
    </div>
  );
}

export default App;
