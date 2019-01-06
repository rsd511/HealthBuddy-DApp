import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Doctor extends Component {
	state = {
		current : 0,
		makepdv : 0,
		tid : 0,
		pid : 0,
		did : 0,
		digno : '',
		test : '',
		bill : 0,
		dpacn : '',
		precau : '',
		tppacn : 0,
		tpdid : 0,
		tpdiagno : '',
		tptests : '',
		tpbill : 0,
		tpmed : '',
		tptid : 0,
		inkpid : 0,
		inkmed : ''
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Doctor</h4></center>
				  <br></br>
				  <center><h6><button onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Treatment Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Update Precaution</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 3});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Treat Patient</button></h6></center>

				  <center><h6><button id="toomuch3" onClick={() => {
				  	this.setState({current : 4});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Send Medication to Insurance</button></h6></center>
				</div>

				{
					(this.state.current==1)
					?    (<form id="gtd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Treatment ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Treatment ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gtd");
					  	this.setState({ tid : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getTreatmentDetails(this.state.tid)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			pid : result[0],
						  			did  : result[1],
						  			digno : web3.utils.hexToAscii(result[2]),
						  			test : web3.utils.hexToAscii(result[3]),
						  			bill : result[4]
						  		});
						  		this.setState({makepdv : 1});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==2)
					?    (<form id="udp" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Adhar Card No.</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient Adhar Card No."></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">New Precaution</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter New Precaution"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#udp");
					  	this.setState({ dpacn : x.elements[0].value, precau : web3.utils.asciiToHex(x.elements[1].value) });
					  	x.elements[0].value='';
					  	x.elements[1].value='';
					  	await contract.methods.UpdatePrecautions(this.state.dpacn,this.state.precau)
					  	.send({from : accounts[0]});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==3)
					?    (<form id="tpp" className="abc">	
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Adhar Card No.</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient Adhar Card No."></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Doctor ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Doctor ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Diagnosis</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the diagnosis"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Tests Conducted</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the tests"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Bill</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the bill"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Medicines</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the Medicines"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	let x = document.querySelector("#tpp");
					  	this.setState({ 
					  		tppacn : x.elements[0].value,
					  		tpdid : x.elements[1].value,
					  		tpdiagno : web3.utils.asciiToHex(x.elements[2].value),
					  		tptests : web3.utils.asciiToHex(x.elements[3].value),
					  		tpbill : x.elements[4].value,
					  		tpmed : web3.utils.asciiToHex(x.elements[5].value)
					  	});
					  	for(let i=0; i<6; i++)
					  	{
					  		x.elements[i].value = '';
					  	}
					  	const accounts = await web3.eth.getAccounts();
					  	await contract.methods.TreatPatient(this.state.tppacn,this.state.tpdid,this.state.tpdiagno,this.state.tptests,this.state.tpbill,this.state.tpmed).send({from : accounts[0]}, (error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			tptid : (142317*this.state.tppacn)%1000003
						  		});
						  		this.setState({makepdv : 3});
						  	}	
					  	});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==4)
					?    (<form id="ink" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Medication</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Medication"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#ink");
					  	this.setState({ inkpid : x.elements[0].value, inkmed : web3.utils.asciiToHex(x.elements[1].value) });
					  	x.elements[0].value='';
					  	x.elements[1].value='';
					  	await contract.methods.addInsuranceKeep(this.state.inkpid,this.state.inkmed).send({from : accounts[0]});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				
			    {
			    	(this.state.makepdv==1)
					?    (<div><h4 className="yf">Patient Id : {this.state.pid}</h4>
					    <h4 className="yf">Doctor Id : {this.state.did}</h4>
					    <h4 className="yf">Diagnostics : {this.state.digno}</h4>
					    <h4 className="yf">Tests Conducted : {this.state.test}</h4>
					    <h4 className="yf">Bill : {this.state.bill}</h4></div>)
					: (<span></span>)
				}
				{
			    	(this.state.makepdv==3)
					?    (<div><h4 className="yf">Treatment ID : {this.state.tptid}</h4></div>)
					: (<span></span>)
				}
				</div>
		  );
	}
}


export default Doctor;