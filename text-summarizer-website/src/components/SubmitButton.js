import React from 'react'
import { MDBBtn } from "mdbreact";
import '../style/css/main.css'
import api from '../api'

function SubmitButton(){
	const handleSubmit = () => {
		api.getSummary()
	};
	
	return (
		<div className="submitbutton">
			<h1>SUBMIT BUTTON</h1>
			<MDBBtn color="success" onClick={this.handleSubmit}>SUBMIT</MDBBtn>
		</div>
	)
}

export default SubmitButton;