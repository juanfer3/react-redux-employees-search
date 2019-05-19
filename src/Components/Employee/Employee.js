import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEmployee } from '../../Actions'

import './Employee.css';

import { PacmanLoader } from 'react-spinners';

import { 
    Container,
    Button,
    Card,
    Search, 
    Grid, 
    Header, 
    Segment,
    Input
 } from 'semantic-ui-react'

class Employee extends Component {
    constructor(){
        super();
        this.state={
            search: ''
        }
        this.enventChange = this.eventChange.bind(this)
    }

    componentWillMount(){
        this.props.getEmployee();
    }

    eventChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let employee = []
        if (this.props.employee.data) {


            employee = this.props.employee.data
            .filter(value => {
                if(value.employee_name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0){
                    return value.employee_name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0
                }
                if(value.employee_salary.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0){
                    return value.employee_salary.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0
                }
                if(value.employee_age.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0){
                    return value.employee_age.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) >= 0
                }
            })
            .map((emp, index, array)=>{
                return(
                    <Card 
                    key={index} fluid  
                    header={emp.employee_name} 
                    meta={'Salario: '+ emp.employee_salary}
                    description={'Edad: '+emp.employee_age}
                    />
                ) 
            })
        }

        if(this.props.employee.type == 'START_GET_EMPLOYEE'){
            return(
                <div className="Home-preLoader">
                    <PacmanLoader
                    color="#58DBBA"
                    loading={true}
                    />
                </div>
            )
        }

        return (
            <div>
                <Container textAlign='center'>
                    <h3>Empleados</h3>
                    <div>
                        <Input 
                        onChange={e => this.eventChange(e)} 
                        value={this.state.search} 
                        name='search'
                        icon={{ name: 'search', circular: true, link: true }} 
                        placeholder='Search...' />
                    </div>
                    <br/>
                    <Card.Group>
                        {employee}
                    </Card.Group>
                </Container>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
      employee: state.getEmployee
    }
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      getEmployee
    }, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(Employee);