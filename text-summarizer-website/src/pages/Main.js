import React from 'react'
import '../style/css/main.css'
import api from '../api'

import { Input, Output, SubmitButton, Heading } from '../components'

class Main extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			ready: false,
			message: '',
		}
	}
	callbackFunctionInput = (childData) =>{
		this.setState({ready: true, message: childData})
	}

	callbackFunctionSubmit = async event => {
		try{
			console.log("Message:")
			console.log(this.state.message)
			const response = JSON.stringify(await api.getSummary(this.state.message))
			console.log("Response:")
			console.log(response)
			console.log("Summary:")
			var summary = JSON.parse(response)
			console.log(summary)
		} catch(e){
			window.alert('Please try again')
			return
		}
		// const href = window.location.href
		// window.location.href = href + 'cr/summarize/' + this.state.message
	}

	render(){
		const {ready, message} = this.state

		return (
			<div className="mainPage">
				<Heading />
				<Input parentCallBack = {this.callbackFunctionInput}/>
	      		<SubmitButton ready = {this.state.ready}
	      		parentCallBack = {this.callbackFunctionSubmit}/>
			</div>
		)
	}
}

export default Main;