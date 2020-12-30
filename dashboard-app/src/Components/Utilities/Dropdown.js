import React from 'react';

const Dropdown = (props) => {
    return (
        <div className="card mb-4">
        {/* Dropdown No Arrow */}
        <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
        </div>
        <div className="card-body">
        <div className="dropdown no-arrow mb-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown (no arrow)
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
        </div>
        </div>
    );
}

export default Dropdown;