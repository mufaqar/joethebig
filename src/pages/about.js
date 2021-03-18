import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutOne from "../components/AboutOne";
import Footer from "../components/Footer";
import TeamOne from "../components/TeamOne";
import Topbar from "../components/Topbar";


const AboutPage = () => {
    return (
        <Layout pageTitle="About Us | The Compnay">
                 <Topbar />
            <NavOne />
            <PageHeader title="About Us" />
       
            <AboutOne />
            <TeamOne />         
            <Footer />
        </Layout>
    );
};

export default AboutPage;
