import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import Topbar from "../components/Topbar";
const CoursesPage = () => {
    return (
        <Layout pageTitle="Joe The Big | Courses">
               <Topbar /> 
            <NavOne />
            <PageHeader title="Products" />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
