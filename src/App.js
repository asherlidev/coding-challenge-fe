import React, {useState, useEffect} from 'react';
import NewHome from "./NewComponents/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <React.Fragment>
      <Router>
       <Switch>
          
          <Route exact path="/">
            <NewHome/>
          </Route>

        </Switch>  
      </Router>
    </React.Fragment>
  );
}

export default App;
