import React from 'react';
import classes from "./BlogArea.module.css";
import blogData from "../../data/homepage/blog";
import calendarImg from "../../../image/calendar.png";
import likeImg from "../../../image/heart.png";
import commentImg from "../../../image/speech-bubble.png";
import {Link} from "react-router-dom";

const BlogArea = () => {
    const blogsArray = [...blogData];
    const sortedData = blogsArray.sort((a,b)=>{return b.id-a.id});
    sortedData.length=3;

    const blogsBlock = sortedData.map(item=>{
        return <div key={item.id} className={classes.blogArea__row__item}>
                <Link to={`blog/${item.id}`}>
                    <div className={classes.blogArea__row__item__imgContainer}>
                        <img src={item.img}/>
                    </div>
                    <h4 className={classes.blogArea__row__item__title}>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <div className={classes.blogArea__row__item__infoBlock}>
                        <div className={classes.blogArea__row__item__infoBlock__section}>
                            <img src={calendarImg}/>
                            {item.date}
                        </div>
                        <div className={classes.blogArea__row__item__infoBlock__section}>
                            <img src={likeImg}/>
                            {item.likes}
                        </div>
                        <div className={classes.blogArea__row__item__infoBlock__section}>
                            <img src={commentImg}/>
                            {item.comments.length}
                        </div>
                    </div>
                </Link>
                </div>
    });


    return (
        <div className={`universal-container ${classes.blogArea}`}>
            <h1 className="universal-container__header" >Our Recent Blogs</h1>
            <p className="universal-container__subheader" >As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
            <div className={classes.blogArea__row}>
                {blogsBlock}
            </div>

        </div>
    );
};

export default BlogArea;