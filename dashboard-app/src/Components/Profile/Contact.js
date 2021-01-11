Create handle submit contactimport React, { useRef } from 'react';

const Contact = (props) => {

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(firstNameRef.current.value)
    console.log(lastNameRef.current.value)
    console.log(emailRef.current.value)
    console.log(mobileRef.current.value)
  }
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
          </div>
          <div className="card-body">
            <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
   
            <form className="user" onSubmit={handleSubmit}>
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