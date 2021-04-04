import React from 'react'
import { MDBInput } from 'mdbreact';
import '../style/css/main.css'

function Input(){

	sendData = async event =>{
		const message = event.target.value
		this.props.parentCallBack(message);
	}

	return (
		<div className="input">
			<h1>INPUT</h1>
			<MDBInput type="textarea" label="textarea" rows="5" 
			value={message} onChange={this.sendData}/>
		</div>
	)
}

export default Input;