import React from 'react';
import BorderLeft from './BorderLeft';

const Borders = (props) => {
    return (  
        <div className="container-fluid">
        {/* Begin Page Content */}

          {/* Page Heading */}
          <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
          <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

          {/* Content Row */}
          <div className="row">

            <BorderLeft/>
            
            {/* Border Bottom Utilities */}
            <div className="col-lg-6">

              <div className="card mb-4 py-3 border-bottom-primary">
                <div className="card-body">
                  .border-bottom-primary
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-secondary">
                <div className="card-body">
                  .border-bottom-secondary
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-success">
                <div className="card-body">
                  .border-bottom-success
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-info">
                <div className="card-body">
                  .border-bottom-info
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-warning">
                <div className="card-body">
                  .border-bottom-warning
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-danger">
                <div className="card-body">
                  .border-bottom-danger
                </div>
              </div>

              <div className="card mb-4 py-3 border-bottom-dark">
                <div className="card-body">
                  .border-bottom-dark
                </div>
              </div>

            </div>

          </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Borders;