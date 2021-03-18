import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";
import RelatedProducts from "../components/RelatedProducts";
import Topbar from "../components/Topbar";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Joe The Big | Course Details">
                <Topbar/>
            <NavOne />
           <CourseDetails />             
            <RelatedProducts />            
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
