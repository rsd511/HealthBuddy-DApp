import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class NewChemist extends Component {
		state = {
		    chid : '',
		    home : '',
		    name : '',
		    no : '',
	    };

		render() {
			  return (
					<div id="addpatient">
						    <form id="newpatient" className="abc">	
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Chemist ID</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Chemist ID"></input>
						 </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputemail1">Address</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Home Address"></input>
						  </div>
						 <div className="form-group" >
						  <label htmlFor="exampleInputPassword1">Name</label>
						    <input type="email" className="form-control"id="exampleInputPassword1" placeholder="Enter your Name"></input>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputnumber1">Phone Number</label>
						    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your Phone Number"></input>
						  </div>
						  <div className="aab">
						  <button onClick={async(event) => {
						  	event.preventDefault();
						  	let x = document.querySelector("#newpatient");
						  	this.setState({
						  		chid : x.elements[0].value,
						  		home : web3.utils.asciiToHex(x.elements[1].value),
						  		name : web3.utils.asciiToHex(x.elements[2].value),
						  		no : x.elements[3].value,
						  	});
						  	for(let i=0; i<4; i++)
						  	{
						  		x.elements[i].value = '';
						  	}
						  	const accounts = await web3.eth.getAccounts();
						  	await contract.methods.addChemist(this.state.chid,this.state.home,this.state.name,this.state.no).send({from : accounts[0]});
						  }} className="btn btn-primary">Submit</button>
						  </div>
						</form>
					</div>
			  );
		}
}

export default NewChemist;