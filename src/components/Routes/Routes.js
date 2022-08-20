import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../../pages/Login/Login';
function Routes() {
  return (
    <Router>

        <Switch>
         
          <Route path="/">
            <Login />
          </Route>

        </Switch>
        
    </Router>
  )
}

export default Routes