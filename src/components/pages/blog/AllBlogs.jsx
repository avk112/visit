import React, {useEffect, useState} from 'react';
import classes from "../homepage/BlogArea.module.css";
import pageClasses from "./BlogPage.module.css";
import blogData from "../../data/homepage/blog";
import calendarImg from "../../../image/calendar.png";
import likeImg from "../../../image/heart.png";
import commentImg from "../../../image/speech-bubble.png";
import {Link} from "react-router-dom";

const AllBlogs = () => {
    const blogsArray = [...blogData];
    const sortedData = blogsArray.sort((a,b)=>{return b.id-a.id});

    const [page, setPage] = useState([]);
    const [currentPageId, setCurrentPageId] = useState(1);
    const pageLimit = 3;
    const pagesTotal = Math.ceil(sortedData.length/pageLimit);

    const selectPageToShow = (number)=> {
        let array = [];
        const firstBlog = (pageLimit * (number-1)) + 1;
        const lastBlog = pageLimit * number;

        for(let i = firstBlog-1; i<= lastBlog-1; i++){
            sortedData[i] && array.push(sortedData[i]);
        }
        setCurrentPageId(number);
        return setPage(array);
    }

    const blogsBlock = page.map(item=>{
        return <div key={item.id} className={classes.blogArea__row__item}>
            <Link to={`${item.id}`}>
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

    const buttonsBlock = ()=>{
        let btnsArray = [];
        for(let i =1;  i<=pagesTotal; i++){
            btnsArray.push(<button
                key={i}
                className={currentPageId===i ? pageClasses.activeBtn : pageClasses.passiveBtn}
                onClick={()=>selectPageToShow(i)}> </button>)
        }

        return btnsArray;
    }

    useEffect(()=>{
        window.scroll(0, 0);
        selectPageToShow(1);
    }, []);


    return (
        <>
            <div className={classes.blogArea__row}>
                {blogsBlock}
            </div>
            <div className={pageClasses.buttonsBlock}>
                {buttonsBlock()}
            </div>
        </>
    );
};

export default AllBlogs;