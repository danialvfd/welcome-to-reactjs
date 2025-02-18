import React from 'react';
import Layout from '../layout/MainLayout';
import AmountDivider from '../components/AmountDivider';
import DiscountCalculator from '../components/DiscountCalculator';
import ShareCalculator from '../components/ShareCalculator';

function DongChi() {
    const sidebarContent = (
        <>
            <AmountDivider />
            <DiscountCalculator />
        </>
    );

    const mainContent = (
        <ShareCalculator />
    );

    return (
        <Layout sidebar={sidebarContent} content={mainContent} />
    );
}

export default DongChi;
