import React from 'react'
import BrandButtons from './BrandButtons';
import CircleButtons from './CircleButtons';
import SplitButtons from './SplitButtons';

const Buttons = (props) => {
    return (
      <div className="container-fluid">
      {/* Begin Page Content */}

        {/* Page Heading */}
        <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

        <div className="row">
          <div className="col-lg-6">
            <CircleButtons/>
            <BrandButtons/>
          </div>

          <div className="col-lg-6">
            <SplitButtons/>
          </div>

        </div>
      {/* /.container-fluid */}
      </div>
              
    );
}

export default Buttons;