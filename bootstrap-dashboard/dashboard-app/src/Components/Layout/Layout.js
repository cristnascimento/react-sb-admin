import React from 'react';
import ContentWrapper from './MyContentWrapper';

import SideBar from './SideBar/SideBar';
import MyContentWrapper from './MyContentWrapper';

const Layout = (props) => {
    return (
        <div  id="wrapper">
            <SideBar/>
            <MyContentWrapper>
                {props.children}
            </MyContentWrapper>
        </div>
    );
}

export default Layout;