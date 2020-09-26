import React from 'react';

const DefaultCard = (props) => {
    return (
        <div className="card mb-4">
            {/* Default Card Example */}
            <div className="card-header">
            Default Card Example
            </div>
            <div className="card-body">
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
            </div>
        </div>
    );
}

export default DefaultCard;
