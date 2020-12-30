import React from 'react';

const FontSize = (props) => {
    return (
    <div className="card shadow mb-4">
        {/* Custom Font Size Utilities */}
        <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
        </div>
        <div className="card-body">
        <p className="text-xs">.text-xs</p>
        <p className="text-lg mb-0">.text-lg</p>
        </div>
    </div>
    );
}

export default FontSize;