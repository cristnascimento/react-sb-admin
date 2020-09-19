import React from 'react';

const MyContentWrapper = (props) => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">{props.children}</div>
    );
}

export default MyContentWrapper;