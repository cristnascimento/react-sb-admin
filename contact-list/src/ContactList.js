import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Service from "./service"

function ContactList () {
    let contacts = Service.getContacts();

    const [state, setState] = useState(contacts);

    function handleSubmit(id) {
      Service.deleteContact(id);
      setState(previous => previous.filter(contact => contact.id != id));
    }

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
      <tbody>
      { state.map( (contact, index) => {
        return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.email}</td>
          <td>
            <Link class="btn btn-success" to={"/contact/view/"+contact.id} role="button">View</Link>
            <Link class="btn btn-warning ml-1" to={"/contact/edit/"+contact.id}  role="button">Edit</Link>
            <button class="btn btn-danger ml-1" onClick={() => handleSubmit(contact.id)}  role="button">Remove</button>
          </td>
        </tr>);
      })
      }
      </tbody>
    </table>
</div>
    );
}

export default ContactList;