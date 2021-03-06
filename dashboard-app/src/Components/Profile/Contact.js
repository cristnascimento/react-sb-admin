import React, { useRef, useEffect, useState } from 'react';
import { useAuth } from "../../Contexts/AuthContext"

const Contact = (props) => {

  const { currentUser, databaseService } = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setSuccess("")

    if (!firstNameRef.current.value) {
      setError("First name is empty")
      return
    }

    if (!lastNameRef.current.value) {
      setError("Last name is empty")
      return
    }

    if (!emailRef.current.value) {
      setError("Email is empty")
      return
    }

    if (!mobileRef.current.value) {
      setError("Mobile is empty")
      return
    }
    
    try {
      await databaseService.createContact(currentUser.uid, {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            mobile: mobileRef.current.value
      })
      setSuccess("Os dados foram salvos com sucesso")
      setTimeout( () => {
        setSuccess("")
      }, 3000)
    } catch (e) {
      setError(e)
    }
  }

  const getContact = (contact) => {    
    firstNameRef.current.value = contact.firstName;
    lastNameRef.current.value = contact.lastName
    emailRef.current.value = contact.email
    mobileRef.current.value = contact.mobile
  }

  useEffect(async () => {
    // databaseService.readContact(currentUser.uid, getContact);
    const contact = await databaseService.readContactSync(currentUser.uid);
    getContact(contact)
  }, [])

    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
          </div>
          <div className="card-body">
            <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
   
            <form className="user" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {success && <div className="alert alert-success" role="alert">{success}</div>}
            <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" ref={firstNameRef} className="form-control form-control-user" id="inputFirstName" placeholder="First Name"/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" ref={lastNameRef} className="form-control form-control-user" id="inputLastName" placeholder="Last Name"/>
                      </div>
                    </div>
                        <div className="form-group">
                          <input type="email" ref={emailRef} className="form-control form-control-user" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                        </div>
                        <div className="form-group">
                          <input type="text" ref={mobileRef} className="form-control form-control-user" id="inputMobile" aria-describedby="emailHelp" placeholder="Enter Phone Number +55 31 99988-7755..."/>
                        </div>
                        <button className="btn btn-primary btn-user btn-block">
                          Save Changes
                        </button>
            </form>
          </div>
        </div>
    );
}

export default Contact;