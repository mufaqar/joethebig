import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutOne from "../components/AboutOne";
import Footer from "../components/Footer";
import TeamOne from "../components/TeamOne";


const AboutPage = () => {
    return (
        <Layout pageTitle="Joe The Big | About Us">
            <NavOne />
            <PageHeader title="About" />
            <AboutOne />
            <TeamOne />         
            <Footer />
        </Layout>
    );
};

export default AboutPage;
