import React, { useState, useRef } from 'react';
import { AuthProvider, useAuth } from "../../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"

const Register = (props) => {
    const [state, setState] = useState({
      firstName: "",
      lastName: ""

    });
    
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signup, currentUser } = useAuth();
    const history = useHistory()

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;

        // textarea, checkbox, radio, select

        if (type === "checkbox") {
          setState({
            ...state,
            [name]: checked
          });
          return;
        }

        // radio: has checked and value

        setState({
          ...state,
          [name]: value
        });

        console.log(state.firstName);
    }

    async function formHandler (event) {
      event.preventDefault();
      console.log("Form submitted!");
      console.log(state.firstName);
      console.log(state.lastName);

      if (!firstNameRef.current.value) {
        return setError("First name is empty")
      }

      if (!lastNameRef.current.value) {
        return setError("Last name is empty")
      }

      if (!emailRef.current.value) {
        return setError("Email is empty")
      }

      if (!emailRef.current.value) {
        return setError("Password is empty")
      }

      if (passwordRef.current.value) {
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
      }
      else {
        return setError("Password is empty")
      }


      /*
      if (state.firstName !== state.lastName) {
        return setError("Passwords do not match")
      }*/
  
      try {
        setError("")
        setLoading(true)
        // await signup(emailRef.current.value, passwordRef.current.value)
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push("/")
      } catch (error) {
        setError("Failed to create an account. " + error.message)
        console.log("Error message: " + error.message)
      }
  
      setLoading(false)

      
      console.log("current user: " + currentUser.email)
      console.log(currentUser)
    }

    return (
        <div className="bg-gradient-primary">
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  {error && <div className="alert alert-danger" role="alert">{error}</div>}
                  <form className="user" onSubmit={formHandler}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" ref={firstNameRef} className="form-control form-control-user" id="exampleFirstName" name="firstName" onChange={handleChange} placeholder="First Name"/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" ref={lastNameRef} className="form-control form-control-user" id="exampleLastName" name="lastName" onChange={handleChange} placeholder="Last Name"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" ref={emailRef} className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address"/>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" ref={passwordRef} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                      </div>
                      <div className="col-sm-6">
                        <input type="password" ref={passwordConfirmRef} className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"/>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-user btn-block">
                      Register Account
                    </button>
                    <hr/>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a>
                  </form>
                  <hr/>
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="login.html">Already have an account? Login!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    );
}

export default Register;