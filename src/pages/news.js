import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";
import Topbar from '../components/Topbar';

const NewsPage = () => {
    return (
        <Layout pageTitle="Privacy Policy | Online Store">
            <Topbar />
            <NavOne />
            <PageHeader title="Privacy Policy" />
            <News />
            <Footer />
        </Layout>
    );
};

export default NewsPage;
