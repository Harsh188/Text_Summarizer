import React from 'react'
import { MDBInput } from 'mdbreact';
import '../style/css/main.css'

class Input extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			message: "Example: US-based private equity firm General Atlantic is in talks to invest about \
$850 million to $950 million in Reliance Industries' digital unit Jio \
Platforms, the Bloomberg reported. Saudi Arabia's $320 billion sovereign \
wealth fund is reportedly also exploring a potential investment in the \
Mukesh Ambani-led company. The 'Public Investment Fund' is looking to \
acquire a minority stake in Jio Platforms.",
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
			<div>
				<h1>Abstractive Text Summarizer</h1>
				<div className="input">
					<h5>Enter the text you want to summarize here:</h5>
					<div class='md-form'>
						<MDBInput type="textarea" label="textarea" rows="5" 
							value={message} onChange={this.sendData}/>
					</div>
				</div>
			</div>
		)
	}
	
}

export default Input;