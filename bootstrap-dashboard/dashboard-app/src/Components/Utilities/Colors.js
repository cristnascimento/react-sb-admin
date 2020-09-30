import React from 'react';
import BackgroundGradient from './BackgroundGradient';
import FontSize from './FontSize';
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

              {/* Grayscale Utilities */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
                </div>
                <div className="card-body">
                  <div className="p-3 bg-gray-100">.bg-gray-100</div>
                  <div className="p-3 bg-gray-200">.bg-gray-200</div>
                  <div className="p-3 bg-gray-300">.bg-gray-300</div>
                  <div className="p-3 bg-gray-400">.bg-gray-400</div>
                  <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                  <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                  <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                  <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                  <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                </div>
              </div>
            </div>
          </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Colors;