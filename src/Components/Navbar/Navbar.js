import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

import { Grid } from 'semantic-ui-react'

class Navbar extends Component {
    render() {
        return (
            <div className="container_navbar">
                <Link to="/"><h3>Menu</h3></Link>
            </div>
        );
    }
}

export default Navbar;