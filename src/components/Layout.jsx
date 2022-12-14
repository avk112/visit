import React from 'react';
import Header from "./Header";
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="app">
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;