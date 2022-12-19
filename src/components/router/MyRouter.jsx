import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/about/AboutPage";
import TrainersPage from "../pages/trainerspage/TrainersPage";
import BlogPage from "../pages/blog/BlogPage";
import ContactPage from "../pages/contactpage/ContactPage";
import SingleBlog from "../pages/blog/SingleBlog";
import AllBlogs from "../pages/blog/AllBlogs";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route index element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="trainers" element={<TrainersPage/>}/>
                <Route path="blog" element={<BlogPage/>}>
                    <Route index element={<AllBlogs/>}/>
                    <Route path=":id" element={<SingleBlog/>}/>
                </Route>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>

            </Route>
        </Routes>
    );
};

export default MyRouter;