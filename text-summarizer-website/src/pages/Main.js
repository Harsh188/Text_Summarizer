import React from 'react'
import '../style/css/main.css'

import { Input, Output, SubmitButton, Heading } from '../components'

function Main(){
	return (
		<div className="mainPage">
			<Heading />
			<Input />
      		<SubmitButton />
		</div>
	)
}

export default Main;