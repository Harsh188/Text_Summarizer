import React from 'react'
import { MDBBtn } from "mdbreact";
import '../style/css/main.css'

function SubmitButton(){
	return (
		<div className="submitbutton">
			<h1>SUBMIT BUTTON</h1>
			<MDBBtn color="success">SUBMIT</MDBBtn>
		</div>
	)
}

export default SubmitButton;