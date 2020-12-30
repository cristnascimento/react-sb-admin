import React from 'react';

const BackgroundGradient = (props) => {
    return (
        <div className="card shadow mb-4">
            {/* Background Gradient Utilities */}
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
            </div>
            <div className="card-body">
                <div className="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
                <div className="px-3 py-5 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
                <div className="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
                <div className="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
                <div className="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
                <div className="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
                <div className="px-3 py-5 bg-gradient-light text-white">.bg-gradient-light</div>
                <div className="px-3 py-5 bg-gradient-dark text-white">.bg-gradient-dark</div>
            </div>
        </div>
    );
}

export default BackgroundGradient;