import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import NewPatient from './components/newpatient';
import NewDoctor from './components/newdoctor';
import NewInsuranceCompany from './components/newinsurancecompany';
import NewChemist from './components/newchemist';
import Patient from './components/patient';
import Doctor from './components/doctor';
import InsuranceCompany from './components/insurancecompany';
import Chemist from './components/chemist';

const Navigation = () => {
	return(
    <div>
		  <div id="home-header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div> 
            <div className="navbar-header">
              <h2>HealthBuddy DApp</h2>
            </div>
          </div>
          <NavLink to="/"><button className="btn btn-info">Home</button></NavLink>
        </nav>
      </div>
    </div>
	);
}



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
      		<Navigation/>
      		<Switch>
      			<Route path="/" component={Home} exact /> 
      			<Route path="/newpatient" component={NewPatient} /> 
      			<Route path="/newdoctor" component={NewDoctor} /> 
      			<Route path="/newinsurancecompany" component={NewInsuranceCompany} /> 
      			<Route path="/newchemist" component={NewChemist} /> 
      			<Route path="/patient" component={Patient} /> 
      			<Route path="/doctor" component={Doctor} /> 
      			<Route path="/insurancecompany" component={InsuranceCompany} /> 
      			<Route path="/chemist" component={Chemist} /> 
      			<Route component={() => {
      				return(
      					<div>
      						<h1>Error : This page doesn't exist</h1>
      					</div>
      				);
      			}}/>       			
      		</Switch>
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;