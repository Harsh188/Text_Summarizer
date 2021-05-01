import React from 'react'
import { MDBBtn } from "mdbreact";
import '../style/css/main.css'
import api from '../api'

class SubmitButton extends React.Component{
	constructor(props){
		super(props)
	}

	handleSubmit = async event => {
		// console.log('button was pressed')
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