import React from 'react';
import SidebarLayout from './SidebarLayout';
import ContentLayout from './ContentLayout';

const MainLayout = ({sidebar, content}) => {

    return (
        <div className="container">
            <SidebarLayout>{sidebar}</SidebarLayout>
            <ContentLayout>{content}</ContentLayout>
        </div>
    );

}

export default MainLayout;
