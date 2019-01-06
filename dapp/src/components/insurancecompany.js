import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class InsuranceCompany extends Component {
	state = {
		current : 0,
		makepdv : 0,
		mnamed : ''
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Insurance Company</h4></center>
				  <br></br>
				  <center><h6><button id="toomuch2" onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Add non-covered medication</button></h6></center>
				</div>

				{
					(this.state.current==1)
					?    (<form id="mna" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Not covered Medication</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter non-covered medication"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#mna");
					  	this.setState({ mnamed : web3.utils.asciiToHex(x.elements[0].value) });
					  	x.elements[0].value='';
					  	await contract.methods.addNotCoverdMedicationInInsurance(this.state.mnamed).send({from : accounts[0]});
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}


				</div>
		  );
	}
}

export default InsuranceCompany;