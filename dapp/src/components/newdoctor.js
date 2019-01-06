import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class NewDoctor extends Component {
		state = {
		    did : '',
		    name : '',
		    ptype : '',
		    exp : '',
		    no : '',
		    addr : '',
	    };

		render() {
			  return (
					<div id="addpatient">
						    <form id="newpatient" className="abc">	
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Doctor ID</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Doctor ID"></input>
						 </div>
						 <div className="form-group" >
						  <label htmlFor="exampleInputPassword1">Name</label>
						    <input type="email" className="form-control"id="exampleInputPassword1" placeholder="Enter your Name"></input>
						   
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputemail1">Practice Type</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Practice Type"></input>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputnumber1">Area of Expertize</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Area of Expertize"></input>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputemail1">Phone Number</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Phone Number"></input>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputnumber1">Clinic Address</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Clinic Address"></input>
						  </div>
						  <div className="aab">
						  <button onClick={async(event) => {
						  	event.preventDefault();
						  	let x = document.querySelector("#newpatient");
						  	this.setState({
						  		did : x.elements[0].value,
						  		name : web3.utils.asciiToHex(x.elements[1].value),
						  		ptype : web3.utils.asciiToHex(x.elements[2].value),
						  		exp : web3.utils.asciiToHex(x.elements[3].value),
						  		no : x.elements[4].value,
						  		addr : web3.utils.asciiToHex(x.elements[5].value)
						  	});
						  	for(let i=0; i<6; i++)
						  	{
						  		x.elements[i].value = '';
						  	}
						  	const accounts = await web3.eth.getAccounts();
						  	await contract.methods.addDoctor(this.state.did,this.state.name,this.state.ptype,this.state.exp,this.state.no,this.state.addr).send({from : accounts[0]});
						  }} className="btn btn-primary">Submit</button>
						  </div>
						</form>
					</div>
			  );
		}
}

export default NewDoctor;