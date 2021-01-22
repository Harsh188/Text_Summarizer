import React from 'react'

function Input(){
	return (
		<div className="input">
			<h1>INPUT</h1>
			<label>Enter your text here: </label>
			<input type='textarea'
				name='textValue'
			/>
		</div>
	)
}

export default Input;