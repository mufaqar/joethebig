import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";
import Topbar from '../components/Topbar';

const PrivacyPage = () => {
    return (
        <Layout pageTitle="Privacy Policy | Online Store">
            <Topbar />
            <NavOne />
            <PageHeader title="Privacy Policy" />
            <Privacy />
            <Footer />
        </Layout>
    );
};

export default PrivacyPage;
