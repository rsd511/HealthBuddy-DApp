import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class NewPatient extends Component {
	state = {
	    acn : '',
	    name : '',
	    home : '',
	    no : '',
	    bg : '',
	    icid : '',
	    emer : ''
    };

	render() {
		  return (
				<div id="addpatient">
					    <form id="newpatient" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Aadhaar Card Number"></input>
					 </div>
					 <div className="form-group" >
					  <label htmlFor="exampleInputPassword1">Name</label>
					    <input type="email" className="form-control"id="exampleInputPassword1" placeholder="Enter your Name"></input>
					   
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputemail1">Address</label>
					    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Home Address"></input>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputnumber1">Phone Number</label>
					    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Phone Number"></input>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputemail1">Blood Group</label>
					    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Blood Group"></input>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputnumber1">Insurance Company Id</label>
					    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Insurance Company Id"></input>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputnumber1">Emergency Contact</label>
					    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Emergency Contact"></input>
					  </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	let x = document.querySelector("#newpatient");
					  	this.setState({
					  		acn : x.elements[0].value,
					  		name : web3.utils.asciiToHex(x.elements[1].value),
					  		home : web3.utils.asciiToHex(x.elements[2].value),
					  		no : x.elements[3].value,
					  		bg : web3.utils.asciiToHex(x.elements[4].value),
					  		icid : x.elements[5].value,
					  		emer : x.elements[6].value
					  	});
					  	for(let i=0; i<7; i++)
					  	{
					  		x.elements[i].value = '';
					  	}
					  	const accounts = await web3.eth.getAccounts();
					  	await contract.methods.addPatientInfo(this.state.acn,this.state.name,this.state.home,this.state.no,this.state.bg,this.state.icid,this.state.emer).send({from : accounts[0]});
					  }} className="btn btn-primary">Submit</button>
					  </div>
					</form>
				</div>
		  );
	}
}

export default NewPatient;