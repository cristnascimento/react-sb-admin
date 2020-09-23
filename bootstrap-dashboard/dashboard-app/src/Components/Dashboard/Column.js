import React from 'react';

const Column = (props) => {
    return (
        <div className="col-lg-6 mb-4">{props.children}</div>
    );
}

export default Column;