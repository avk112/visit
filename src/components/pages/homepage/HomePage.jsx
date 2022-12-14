import React, {useEffect} from 'react';
import BannerArea from "./BannerArea";
import AboutArea from "./AboutArea";
import FeatureArea from "./FeatureArea";
import ScheduleArea from "./ScheduleArea";
import FeedbackArea from "./FeedbackArea";
import CtaArea from "./CtaArea";
import BlogArea from "./BlogArea";



const HomePage = () => {

    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <BannerArea/>
            <AboutArea/>
            <FeatureArea/>
            <ScheduleArea/>
            <FeedbackArea/>
            <CtaArea/>
            <BlogArea/>
        </>
    );
};

export default HomePage;