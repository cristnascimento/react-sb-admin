import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Buttons from './Components/Components/Buttons';

//import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/buttons' component={Buttons} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
