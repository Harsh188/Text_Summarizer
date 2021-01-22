import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Input, Output, SubmitButton } from '../components'

function App() {
  return (
    <>
    <div className="App">
      <Router>
      	<Input />
      	<SubmitButton />
      	<Switch>
      		<Route path='/summarizedText' exact component={Output}/>
      	</Switch>
      </Router>
    </div>
    </>
  );
}

export default App;