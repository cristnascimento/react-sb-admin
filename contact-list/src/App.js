import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Service from './service';
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import ContactAdd from "./ContactAdd";
import ContactEdit from "./ContactEdit";
import ContactView from "./ContactView";
import ContactList from "./ContactList";
import Home from "./Home";

function App() {
  
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/contact/add" exact={true} component={ContactAdd} />
            <Route path="/contact/edit/:id" exact={true} component={ContactEdit} />
            <Route path="/contact/view/:id" exact={true} component={ContactView} />
            <Route path="/contact/list" component={ContactList} />
        </Switch>
      </ BrowserRouter>
  );
}

export default App;