import React from 'react'
import { MDBBtn } from "mdbreact";
import '../style/css/main.css'

class SubmitButton extends React.Component{

	handleSubmit = async event => {
		this.props.parentCallBack();
	};

	render(){
		return (
			<div className="input">
				<MDBBtn color="success" onClick={this.handleSubmit}>SUBMIT</MDBBtn>
			</div>
		)
	}
	
}

export default SubmitButton;