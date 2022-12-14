import React from 'react';
import AboutArea from "../homepage/AboutArea";
import FeedbackArea from "../homepage/FeedbackArea";
import {useEffect} from "react";
import UniversalBanner from "../../UniversalBanner";

const AboutPage = () => {

    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <UniversalBanner header="About Us"/>
            <AboutArea/>
            <FeedbackArea/>
        </>
    );
};

export default AboutPage;