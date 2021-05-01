import React from 'react'
import '../style/css/main.css'
import {useParams} from "react-router-dom";

import { NavBar } from '../components'

function Summary(){
	let {summary} = useParams();

	return (
		<div className="mainPage">
			<NavBar/>
			<div className='backgroundContainer'>
				<h5>Here is your summary:</h5>
				<p>{summary}</p>
      		</div>
		</div>
	)
}

export default Summary;