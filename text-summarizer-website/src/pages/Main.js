import React from 'react'
import '../style/css/main.css'

import { Input, Output, SubmitButton, Heading } from '../components'

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ready: false,
			message: "",
		}
	}
	callbackFunction(childData){
		this.setState({ready: true, message: childData})
	}

	render(){
		return (
			<div className="mainPage">
				<Heading />
				<Input parentCallBack = {this.callbackFunction}/>
	      		<SubmitButton />
			</div>
		)
	}
}

export default Main;