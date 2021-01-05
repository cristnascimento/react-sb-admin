import React, { useRef, useState } from 'react';
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

const Forgot = (props) => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { resetPassword, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!emailRef.current.value) {
      return setError("Email is empty")
    }

    try {
      setError("")
      setMessage("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your e-mail for further instructions.")
    } catch (error) {
      setError("Failed to reset password. " + error.message)
    }

    setLoading(false)
    
  }

    return (
        <div className="bg-gradient-primary">
        <div className="container">

        {/* Outer Row */}
        <div className="row justify-content-center">
    
          <div className="col-xl-10 col-lg-12 col-md-9">
    
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                        <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                      </div>
                      {error && <div className="alert alert-danger" role="alert">{error}</div>}
                      {message && <div className="alert alert-success" role="alert">{message}</div>}
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input type="email" ref={emailRef} className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                        </div>
                        <button className="btn btn-primary btn-user btn-block">
                          Reset Password
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" href="/register">Create an Account!</Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/login">Already have an account? Login!</Link>
                      </div>
                    </div>
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

export default Forgot;