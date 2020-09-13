import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Buttons from './Components/Components/Buttons';
import Cards from './Components/Components/Cards';
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';
import Animations from './Components/Utilities/Animations';
import Other from './Components/Utilities/Other';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Forgot from './Components/Pages/Forgot';
import NotFound from './Components/Pages/NotFound';
import Blank from './Components/Pages/Blank';
import Charts from './Components/Charts/Charts';
import Tables from './Components/Tables/Tables';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/forgot' component={Forgot} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Layout>
          <Route path='/' exact component={Dashboard} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/cards' component={Cards} />
          <Route path='/colors' component={Colors} />
          <Route path='/borders' component={Borders} />
          <Route path='/animations' component={Animations} />
          <Route path='/other' component={Other} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/blank' component={Blank} /> 
          <Route path='/charts' component={Charts} />
          <Route path='/tables' component={Tables} />
        </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
