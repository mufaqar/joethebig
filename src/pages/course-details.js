import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Joe The Big | Course Details">
            <NavOne />
            <PageHeader title="Product Details" />
         
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
