import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../style/css/main.css'

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