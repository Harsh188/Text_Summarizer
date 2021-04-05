import React from 'react'
import { MDBInput } from 'mdbreact';
import '../style/css/main.css'

class Input extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			message: '',
		}
	}
	sendData = async event =>{
		const message = event.target.value;
		// console.log(message);
		this.setState({message})
		this.props.parentCallBack(this.state.message);
	}

	render(){
		const {message} = this.state;

		return (
			<div className="input">
				<h1>INPUT</h1>
				<MDBInput type="textarea" label="textarea" rows="5" 
				value={message} onChange={this.sendData}/>
			</div>
		)
	}
	
}

export default Input;