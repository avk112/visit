import React from 'react';
import { Outlet } from 'react-router-dom';
import UniversalBanner from "../../UniversalBanner";

const BlogPage = () => {

    return (
        <>
            <UniversalBanner header="Our Blogs"/>
            <div className="universal-container">
               <Outlet/>
            </div>
        </>
    );
};

export default BlogPage;