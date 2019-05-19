import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Employee from '../Employee/Employee';

import { 
  Container,
  Button
} from 'semantic-ui-react'

class Home extends Component {
  render(){
    return(
      <div className="body_container container_transition">
        <Container textAlign='center'>
          <div className="container_home">
              <img width="30%" src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/hipster-beard-african-512.png"/>
            <h1 className="title_home">Lista todos los empleados de tu compañia</h1>
            <p className="letter_normal">Este páginas encontraras un buscador multiple de nombre saliario y edad</p>
            <div>
              <Button className="btn_transition" as={ Link } to='/employees' negative>Ver empleados</Button>
              <Button color="white">Standard</Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;