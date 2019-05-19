import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'

import Home from './Components/Home/Home'
import Employee from './Components/Employee/Employee';
import Navbar from './Components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div>
          <Navbar></Navbar>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/employees" component={ Employee }/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;