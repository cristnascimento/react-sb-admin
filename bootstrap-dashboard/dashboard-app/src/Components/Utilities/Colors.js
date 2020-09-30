import React from 'react';
import BackgroundGradient from './BackgroundGradient';
import FontSize from './FontSize';
import Grayscale from './Grayscale';
import TextColor from './TextColor';

const Colors = (props) => {
    return (
        <div className="container-fluid">
        {/* Begin Page Content */}
        
          {/* Page Heading */}
          <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
          <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

          {/* Content Row */}
          <div className="row">

            {/* First Column */}
            <div className="col-lg-4">
              <TextColor/>
              <FontSize/>
            </div>

            {/* Second Column */}
            <div className="col-lg-4">
              <BackgroundGradient/>
            </div>

            {/* Third Column */}
            <div className="col-lg-4">
              <Grayscale/>              
            </div>

          </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Colors;