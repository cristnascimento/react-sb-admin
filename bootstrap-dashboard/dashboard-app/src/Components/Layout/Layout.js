import React from 'react';

import SideBar from './SideBar/SideBar';

const Layout = (props) => {
    return (
        <div  id="wrapper">
            <SideBar/>
            {props.children}
        </div>
    );
}

export default Layout;