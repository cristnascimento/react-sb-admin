# Contact list with React

## Description

In this project we will build a simple contact list to present some essential features of the [React framework](https://reactjs.org).

## Dependencies

* Ubuntu 18.04
* Node and Npm
* creat-react-app package
* Bootstrap

## Download Node

* Choose your version from [Download page](https://nodejs.org/en/download/)

## Install Node and Npm


1. Unzip the binary archive to any directory you wanna install Node, I use /usr/local/lib/nodejs
```
 VERSION=v10.15.0
 DISTRO=linux-x64
 sudo mkdir -p /usr/local/lib/nodejs
 sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
```
1. Set the environment variable ~/.profile, add below to the end
```
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```
1. Refresh profile
```
. ~/.profile
```
1. Test installation using

```
$ node -v
```
```
$ npm version
```
```
$ npx -v
```
Learn more from [React Installation](https://github.com/nodejs/help/wiki/Installation)

## Install create-react-app

```
$ npm install -g create-react-app
```

## Create react app
```
$ create-react-app contact-list
```

## Start the server

```
$ cd contact-list
```

then

```
$ npm start
```

## Create mock data

create **_src/mock_data.js_**

```javascript
let contacts = [
  {
    id:1,
    firstName: "William",
    lastName: "Patterson",
    email: "patterson@blindspot.com",
    phone: "+1 101 890809890",
    phoneCategory: "Mobile",
    address: "44 11th south",
    city: "New York",
    state: "PR",
    zip: "87987",
    closeFriend: ""},
...

export default contacts;
```

## Create a service

create **_src/service.js_**

```javascript
import contacts from "./mock_data";

...

const getContact = function(id) {
  return contacts.find(element => element.id == id);
}

const updateContact = function(id, body) {
  let contact = newContact(id, body);
  let contactToUpdate = contacts.find(element => element.id == id);
  let index = contacts.indexOf(contactToUpdate);
  contacts[index] = contact;
}

const deleteContact = function (id) {
  let newContacts = contacts.filter(element => element.id != id);
  contacts = newContacts;
}

const Service = {
  getContacts: getContacts,
  createContact: createContact,
  getContact: getContact,
  updateContact: updateContact,
  deleteContact: deleteContact,
};

export default Service;
```

## Install React Router

```
$ npm install --save react-router-dom
```

## Create routes

```javascript
import { BrowserRouter, Switch, Route } from 'react-router-dom'
...
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
      </BrowserRouter>
  );
}
```

## Create Components

**_src/NavBar.js_**

```javascript
import React from "react";

function NavBar () {

    return (
      <div>NavBar</div>
    );
}

export default NavBar;
```

**_src/Home.js_**
```javascript
import React from "react";

function Home () {
  
    return (
      <div>Home</div>
    );
}

export default Home;
```

**_src/ContactAdd.js_**

```javascript
import React from "react";
import ContactForm from "./ContactForm";

function ContactAdd () {

    return (
      <div>
        Add
        <ContactForm/>
      </div>
    );
}

export default ContactAdd;
```

**_src/ContactEdit.js_**
```javascript
import React from "react";
import ContactForm from "./ContactForm";

function ContactEdit () {

    return (
      <div>
        Edit
        <ContactForm/>
      </div>
    );
}

export default ContactEdit;
```
**_src/ContactView.js_**
```javascript
import React from "react";
import ContactForm from "./ContactForm";

function ContactView () {

    return (
      <div>
        View
        <ContactForm/>
      </div>
    );
}

export default ContactView;
```
**_src/ContactForm.js_**
```javascript
import React from "react";
import ContactForm from "./ContactForm";

function ContactForm () {

    return (
      <div>Form</div>
    );
}

export default ContactForm;
```

**_src/ContactList.js_**

```javascript
import React from "react";

function ContactList () {

    return (
      <div>List</div>
    );
}

export default ContactList;
```

## Try

* Home [localhost:3000/](http://localhost:3000/)
* Add [localhost:3000/contact/add](http://localhost:3000/contact/add)
* Edit [localhost:3000/contact/edit/1](http://localhost:3000/contact/edit/1)
* View [localhost:3000/contact/view/1](http://localhost:3000/contact/view/1)
* List [localhost:3000/contact/list](http://localhost:3000/contact/list)

## Copy HTML code to Components

Your going to find HTML code [here](./src/html).

**_public/index.html_**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ...
        <title>Contact list</title>
    </head>
    <body>        
        ...
        <div id="root">
        <!-- Content here -->
        </div>
        ...
    <body>
</html>
```

**_src/ContentForm.js_**

```javascript
return (
  <div class="container col-md-6" >
    <br/>
    <h2>Add/Edit/View Contact {state.firstName} {state.lastName} ({state.closeFriend})</h2>
    <br/>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputFirstName">First name</label>
          <input type="text" class="form-control" id="inputFirstName" name="firstName"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" name="lastName"/>
        </div>
      </div>
    ...
  );
```

**_src/ContentList.js_**

```javascript
return (
  <div class="container col-md-8" >
    <br/>
    <h3>List of contacts</h3><br/>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">E-mail</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    ...
```

## Replace `<a>` with `<Link>`

import in each component

```javascript
import { Link } from 'react-router-dom'; 
```
Then change `<a>` to `<Link>`

```xml
<Link to="/contact/list" className="btn btn-warning ml-1">Cancel</Link> 
```
## Set props

Edit **_ContactAdd.js_**

```javascript
function ContactAdd () {
    let contact = {
    id:0,
    firstName: "Hello",
    lastName: "Brooks",
    email: "",
    phone: "",
    phoneCategory: "Mobile",
    address: "",
    city: "",
    state: "CE",
    zip: "",
    closeFriend: "on"};


    function createSubmit(contact) {
      console.log("first: "+contact.firstName);
    }


    return (
    <div>
      <ContactForm readonly={false} disabled={false} submit={createSubmit} contact={contact}/>
    </div>
    );
}

export default ContactAdd;
```

**_ContactAdd_** will pass parameters to **_ContactForm_** using `props` like this

```xml
  <ContactForm readonly={false} disabled={false} submit={createSubmit} contact={contact}/>
```

Then edit **_ContactForm.js_**

```javascript
function ContactForm (props) {
...
}
```

Now we can use the variables in `props` in **_ContactForm_**.

Do the changes on **_ContactEdit.js_** and **_ContactView.js_** with their respective settings.
## Create `state` and `setState`

We are going to use these resources to get the values of the form controls and set default values.

Edit **_ContactForm.js_**

```javascript
import React, {useState} from "react";
```

initialize state
```javascript
const [state, setState] = useState(props.contact);
```

## Bind `state` to form controls

Edit **_src/ContactForm.js_**

Bind the value of a form control to a `state` attribute
```xml
<input type="text" ... value={state.firstName}/>
```

Then, set an event handler to every change
```xml
<input type="text" ... value={state.firstName} onChange={handleOnChange}/>
```

Finally, define the event handler

```javascript
function handleOnChange (e) {
    let value;
    const name = e.target.name;

    if (e.target.type === "checkbox")
      value = e.target.checked ? "on" : "";
    else
      value = e.target.value;

    setState(previous => {
      return {...previous, [name]: value};
    });
  }
```

We have definied a single function to handle the change in all of form controls. It uses `e.target.name` and `e.target.value` of the control that has changed.

The `checkbox` type has a special treatment because his value is only valid if it is checked. Thus, we could not use `e.target.value` directly.

## Set `selected` and `checked`

The values of a `select` are already set because we bind then to `state` values.

However, we need to set the value for checkboxes.

Edit **_ContactForm.js_**

```xml
<input type="checkbox" ... checked={state.closeFriend == "on" ? true : false} />
```

## Set `readonly` and `disabled`

Edit **_ContactForm.js_**

We get these two properties from `props`.

Add `readonly` to all controls except `select` and `checkbox`

```xml
<input type="text" ... name="firstName" ... readOnly={props.readonly}/>
```

For `select` and `checkbox` use `disabled`

```xml
<select ... name="phoneCategory" ... disabled={props.disabled}>
```

## Add event handler to form submission

edit **_src/ContactForm.js_**

Add the event handler to the submit button
```xml
<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
```

On `handleSubmit` we are going to use a function defined outsite `ContactForm` that we have received on the `props`

```javascript
function handleSubmit (e) {
  e.preventDefault();
  props.submit(state)
}
```

## Get data from Service

edit **_ContactEdit.js_** and **_ContactView.js_**

```javascript
import Service from "./service";

function ContactEdit (props) {

    let contact = Service.getContact(props.match.params.id);
```

edit **_ContactList.js_**

```javascript
...
import Service from "./service"

function ContactList () {

  let contacts = Service.getContacts();
  ...
  return (
    ...
    <tbody>
    { contacts.map( contact => {
      return (
        <tr>
          <th scope="row">1</th>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.email}</td>
          <td>
            <Link class="btn btn-success" 
                to={"/contact/view/"+contact.id} role="button">View</Link>
            <Link class="btn btn-warning ml-1"
                to={"/contact/edit/"+contact.id}  role="button">Edit</Link>
            <Link class="btn btn-danger ml-1"
                to={"/contact/delete/"+contact.id}  role="button">Remove</Link>
          </td>
        </tr>);
      })
    }
    </tbody>
    ...
```

## Event handlers and Services

Finally, lets connect the event handlers with our Service component and redirect the pages after submission.

Actually, it turned to be very simple ;-)

Edit **_ContactAdd.js_**

```javascript
function createSubmit(contact) {
  let newId = Service.createContact(contact);
  props.history.push('/contact/view/'+newId);
}
```

Edit **_ContactEdit.js_**

```javascript
function updateSubmit(contact) {
  Service.updateContact(contact);
  props.history.push('/contact/view/'+contact.id);
}
```

Edit **_ContactView.js_**

```javascript
function viewSubmit(contact) {
  props.history.push('/contact/edit/'+contact.id);
}
```

Edit **_ContactList.js_**

```javascript
function handleSubmit(id) {
  Service.deleteContact(id);
  setState(previous => previous.filter(contact => contact.id != id));
}
```

## Test

Access [localhost:3000](http://localhost:3000/)

Try to Add, Update, View and Remove contacts.

## Congratulations

You have finished this tutorial. Congratulations!

Learn more in [React Documentation](https://reactjs.org/docs/getting-started.html).

Play with the code. Make changes.