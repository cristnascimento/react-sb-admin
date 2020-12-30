import React from 'react';
import BorderBottom from './BorderBottom';
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
            <BorderBottom/>
           
          </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Borders;