import React from 'react'
import { MDBBtn } from "mdbreact";
import '../style/css/main.css'

function SubmitButton(){
	return (
		<div className="submitbutton">
			<h1>SUBMITBUTTON</h1>
			<MDBBtn color="success">Submit</MDBBtn>
		</div>
	)
}

export default SubmitButton;