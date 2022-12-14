import React from 'react';
import bannerIMG from "../image/cta-img.png";

const UniversalBanner = ({header}) => {
    return (
        <div className="universal-banner">
            <h1 className="universal-banner__title">{header}</h1>
            <img src={bannerIMG}/>
        </div>
    );
};

export default UniversalBanner;