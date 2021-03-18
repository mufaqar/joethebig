import React from "react";
import Layout from "../components/Layout";

import NavOne from "../components/NavOne";

import Footer from "../components/Footer";
import Topbar from "../components/Topbar";


const HomePage = () => (
  <Layout pageTitle="Joe The Big  - Ecomemrece">
   
   <Topbar />  
    <NavOne />   
    <Footer />
  </Layout>
);

export default HomePage;
