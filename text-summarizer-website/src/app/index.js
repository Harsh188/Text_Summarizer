import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../style/css/main.css'

import { Main, Summary } from '../pages'

function App() {
  return (
    <>
    <div className="App">
      <Router>
      	<Switch>
          <Route exact path="/">
            <Main/>
          </Route>
      		<Route path= "/summarizedText/:summary">
            <Summary />
          </Route>
      	</Switch>
      </Router>
    </div>
    </>
  );
}

export default App;