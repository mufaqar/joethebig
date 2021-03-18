import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";


const CoursesPage = () => {
    return (
        <Layout pageTitle="Joe The Big | Course Details">
            <NavOne />
           <CourseDetails />              
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
