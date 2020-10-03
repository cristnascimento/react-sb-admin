import React from 'react';

const Overflow = (props) => {
    return (
        <div className="card mb-4">
            {/* Overflow Hidden */}
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Overflow Hidden Utilty</h6>
            </div>
            <div className="card-body">
                Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
            </div>
        </div>
    );
}

export default Overflow;