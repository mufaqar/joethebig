import React from "react";
import Layout from "../components/Layout";

import NavOne from "../components/NavOne";

import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Courses from "../components/Courses";


const HomePage = () => (
  <Layout pageTitle="Joe The Big | Courses">
    <Topbar /> 
    <NavOne />
    <Courses />
    <Footer />
    </Layout>
);

export default HomePage;
