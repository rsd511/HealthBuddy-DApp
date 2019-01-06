import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class NewInsuranceCompany extends Component {
		state = {
		    cid : '',
		    name : '',
		    no : '',
	    };

		render() {
			  return (
					<div id="addpatient">
						    <form id="newpatient" className="abc">	
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Company ID</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Company ID"></input>
						 </div>
						 <div className="form-group" >
						  <label htmlFor="exampleInputPassword1">Name</label>
						    <input type="email" className="form-control"id="exampleInputPassword1" placeholder="Enter your Name"></input>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputemail1">Phone Number</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Phone Number"></input>
						  </div>
						  <div className="aab">
						  <button onClick={async(event) => {
						  	event.preventDefault();
						  	let x = document.querySelector("#newpatient");
						  	this.setState({
						  		cid : x.elements[0].value,
						  		name : web3.utils.asciiToHex(x.elements[1].value),
						  		no : x.elements[2].value,
						  	});
						  	for(let i=0; i<3; i++)
						  	{
						  		x.elements[i].value = '';
						  	}
						  	const accounts = await web3.eth.getAccounts();
						  	await contract.methods.addInsurancecompany(this.state.cid,this.state.name,this.state.no).send({from : accounts[0]});
						  }} className="btn btn-primary">Submit</button>
						  </div>
						</form>
					</div>
			  );
		}
}

export default NewInsuranceCompany;