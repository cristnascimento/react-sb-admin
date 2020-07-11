import React from "react";
import ContactForm from "./ContactForm";
import Service from "./service";

function ContactView (props) {

    let contact = Service.getContact(props.match.params.id);
    
    function viewSubmit(contact) {
      props.history.push('/contact/edit/'+contact.id);
    }

    return (
      <div>
        <ContactForm readonly={true} disabled={true} submit={viewSubmit} btn="Edit" contact={contact}/>
      </div>
    );
}

export default ContactView;