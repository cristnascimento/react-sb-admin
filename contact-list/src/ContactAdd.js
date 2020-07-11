import React from "react";
import ContactForm from "./ContactForm";
import Service from "./service";

function ContactAdd (props) {

    let contact = Service.getEmpty();

    function createSubmit(contact) {
      let newId = Service.createContact(contact);
      props.history.push('/contact/view/'+newId);
    }

    return (
      <div>
        <ContactForm readonly={false} disabled={false} submit={createSubmit} btn="Add" contact={contact}/>
      </div>
    );
}

export default ContactAdd;