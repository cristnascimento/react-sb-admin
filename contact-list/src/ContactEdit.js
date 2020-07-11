import React from "react";
import ContactForm from "./ContactForm";
import Service from "./service";

function ContactEdit (props) {

    let contact = Service.getContact(props.match.params.id);

    function updateSubmit(contact) {
      Service.updateContact(contact);
      props.history.push('/contact/view/'+contact.id);
    }

    return (
      <div>
        <ContactForm readonly={false} disabled={false} submit={updateSubmit} btn="Update" contact={contact}/>
      </div>
    );
}

export default ContactEdit;