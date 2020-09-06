import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Buttons from './Components/Components/Buttons';
import Cards from './Components/Components/Cards';
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';
import Animations from './Components/Utilities/Animations';
import Other from './Components/Utilities/Other';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

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
          <Route path='/animations' component={Animations} />
          <Route path='/other' component={Other} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
