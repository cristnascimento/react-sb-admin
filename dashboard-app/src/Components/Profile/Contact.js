import React from 'react';

const Contact = (props) => {
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
          </div>
          <div className="card-body">
            <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
   
            <form className="user" >
            <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="exampleInputPassword" placeholder="First Name"/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Last Name"/>
                      </div>
                    </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Phone Number +55 31 99988-7755..."/>
                        </div>
                        <button className="btn btn-primary btn-user btn-block">
                          Reset Password
                        </button>
            </form>
          </div>
        </div>
    );
}

export default Contact;