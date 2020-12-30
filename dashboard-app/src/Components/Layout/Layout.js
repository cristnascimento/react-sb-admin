import React from 'react';
import ContentWrapper from './MyContentWrapper';

import SideBar from './SideBar/SideBar';
import MyContentWrapper from './MyContentWrapper';
import Content from './Content';
import TopBar from './TopBar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div id="wrapper">
            <SideBar/>
            <MyContentWrapper>
                <Content>
                    <TopBar/>
                    {props.children}
                </Content>
                <Footer/>
            </MyContentWrapper>
        </div>
    );
}

export default Layout;