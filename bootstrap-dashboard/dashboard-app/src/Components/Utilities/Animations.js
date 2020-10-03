import React from 'react';
import FadeIn from './FadeIn';
import GrownIn from './GrownIn';

const Animations = (props) => {
    return (
      <div className="container-fluid">
      {/* Begin Page Content */}     
        {/* Page Heading */}
        <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
        <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

        {/* Content Row */}
        <div className="row">

          {/* Grow In Utility */}
          <div className="col-lg-6">
            <GrownIn/>
          </div>

          {/* Fade In Utility */}
          <div className="col-lg-6">
            <FadeIn/>
          </div>

        </div>
      {/* /.container-fluid */}
      </div>
              
    );
}

export default Animations;