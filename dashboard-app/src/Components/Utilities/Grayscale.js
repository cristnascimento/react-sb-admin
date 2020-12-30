import React from 'react';

const Grayscale = (props) => {
    return (
        <div className="card shadow mb-4">
            {/* Grayscale Utilities */}
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
    );
}

export default Grayscale;