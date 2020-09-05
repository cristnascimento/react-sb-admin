import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Buttons from './Components/Components/Buttons';
import Cards from './Components/Components/Cards';
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/cards' component={Cards} />
          <Route path='/colors' component={Colors} />
          <Route path='/borders' component={Borders} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
