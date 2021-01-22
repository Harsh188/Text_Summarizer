import React from 'react'
import { MDBInput } from 'mdbreact';

function Input(){
	return (
		<div className="input">
			<h1>INPUT</h1>
			<MDBInput type="textarea" label="textarea" rows="5" />
		</div>
	)
}

export default Input;