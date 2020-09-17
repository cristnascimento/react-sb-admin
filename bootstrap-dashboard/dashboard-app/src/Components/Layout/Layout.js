import React from 'react';
import ContentWrapper from './MyContentWrapper';

import SideBar from './SideBar/SideBar';
import MyContentWrapper from './MyContentWrapper';
import Content from './Content';

const Layout = (props) => {
    return (
        <div  id="wrapper">
            <SideBar/>
            <MyContentWrapper>
                <Content/>
                {props.children}
            </MyContentWrapper>
        </div>
    );
}

export default Layout;