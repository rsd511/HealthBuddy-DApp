import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Patient extends Component {
	state = {
		current : 0,
		pacn : 0,
		pname : '',
		paddr : '',
		pno : 0,
		pbg : '',
		picid : 0,
		pemer : 0,
		pprecau : '',
		makepdv : 0,
		did : 0,
		dname : '',
		dprac : '',
		dexp : '',
		dno : 0,
		daddr : '',
		gicicid : 0,
		gicname : '',
		gicno : 0,
		afipacn : 0,
		afires : ''
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Patient</h4></center>
				  <br></br>
				  <center><h6><button onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Your Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Doctor Details</button></h6></center>

				  <center><h6><button id="toomuch" onClick={() => {
				  	this.setState({current : 3});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Insurance Company Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 4});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Apply for Insurance</button></h6></center>
				</div>

				{
					(this.state.current==1)
					?    (<form id="gpd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Aadhaar Card Number"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gpd");
					  	this.setState({ pacn : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getPatientInfo(this.state.pacn)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			pname : web3.utils.hexToAscii(result[0]),
						  			paddr : web3.utils.hexToAscii(result[1]),
						  			pno : result[2],
						  			pbg : web3.utils.hexToAscii(result[3]),
						  			picid : result[4],
						  			pemer : result[5],
						  			pprecau : web3.utils.hexToAscii(result[6])
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
					?    (<form id="gdd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Doctor ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Doctor ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gdd");
					  	this.setState({ did : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getDoctorDetails(this.state.did)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			dname : web3.utils.hexToAscii(result[1]),
						  			dprac : web3.utils.hexToAscii(result[2]),
						  			dexp : web3.utils.hexToAscii(result[3]),
						  			dno : result[4],
						  			daddr : web3.utils.hexToAscii(result[5])
						  		});
						  		this.setState({makepdv : 2});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
			    }
			    {	
					(this.state.current==3)
					?    (<form id="gic" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Insurance Company ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Insurance Company ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gic");
					  	this.setState({ gicicid : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getInsuranceCompany(this.state.gicicid).call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			gicname : web3.utils.hexToAscii(result[0]),
						  			gicno : result[1]
						  		});
						  		this.setState({makepdv : 3});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
			    }
			    {
					(this.state.current==4)
					?    (<form id="afi" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Aadhaar Card Number"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#afi");
					  	this.setState({ afipacn : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.applyForInsurance(this.state.afipacn).call({from : accounts[0]}, (error,result) => {
					  		if(!error)
					  		{
					  			console.log(result);
						  		this.setState({
						  			afires : web3.utils.hexToAscii(result)
						  		});
						  		this.setState({makepdv : 4});
						  	}	
					  	});
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}

			    {
			    	(this.state.makepdv==1)
					?    (<div><h4 className="yf">Name : {this.state.pname}</h4>
					    <h4 className="yf">Address : {this.state.paddr}</h4>
					    <h4 className="yf">Phone Number : {this.state.pno}</h4>
					    <h4 className="yf">Blood Group : {this.state.pbg}</h4>
					    <h4 className="yf">Insurance Company Id : {this.state.picid}</h4>
					    <h4 className="yf">Emergency Contact : {this.state.pemer}</h4>
					    <h4 className="yf">Precautions : {this.state.pprecau}</h4></div>)
					: (<span></span>)
				}
				{
				    (this.state.makepdv==2)
					?    (<div><h4 className="yf">Name : {this.state.dname}</h4>
					    <h4 className="yf">Practice Type : {this.state.dprac}</h4>
					    <h4 className="yf">Area of Expertize : {this.state.dexp}</h4>
					    <h4 className="yf">Phone Number : {this.state.dno}</h4>
					    <h4 className="yf">Address : {this.state.daddr}</h4></div>)
					: (<span></span>)
			    }
			    {
				    (this.state.makepdv==3)
					?    (<div><h4 className="yf">Name : {this.state.gicname}</h4>
					    <h4 className="yf">Phone No : {this.state.gicno}</h4></div>)
					: (<span></span>)
			    }
			    {
				    (this.state.makepdv==4)
					?    (<div><h3 className="yf">{this.state.afires}</h3></div>)
					: (<span></span>)
			    }
				</div>
		  );
	}
}

export default Patient;