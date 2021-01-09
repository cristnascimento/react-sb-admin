import React from 'react'
import Contact from './Contact';

const Profile = (props) => {
    return (
      <div className="container-fluid">
      {/* Begin Page Content */}

        {/* Page Heading */}
        <h1 className="h3 mb-4 text-gray-800">Profile</h1>

        <div className="row">
          <div className="col-lg-6">
            <Contact/>
            <Contact/>
          </div>

          <div className="col-lg-6">
            <Contact/>
          </div>

        </div>
      {/* /.container-fluid */}
      </div>
              
    );
}

export default Profile;