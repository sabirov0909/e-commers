import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import Popular from "../components/Popular/Popular";
import Banner from "../components/Banner/Banner";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Category />
            <Product />
            <Popular />
            <Products />
            <Banner />
            <Footer />
        </>
    );
};

export default Home;