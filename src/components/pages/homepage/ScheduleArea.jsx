import React from 'react';
import classes from "./ScheduleArea.module.css";
import scheduleImg from "../../../image/feature-img.png";
import scheduleData from "../../data/homepage/schedule";

const ScheduleArea = () => {
    const scheduleBlock=<table className={classes.scheduleArea__table}>
                            <thead>
                                <tr>
                                    <th>Course name</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                </tr>
                            </thead>
                            <tbody>
                            {scheduleData.map(item=>{
                                return <tr key={item.id}>
                                            <th>{item.title}</th>
                                            <td>{item.mon}</td>
                                            <td>{item.thu}</td>
                                            <td>{item.wed}</td>
                                            <td>{item.thu}</td>
                                            <td>{item.fri}</td>
                                        </tr>
                            })}
                            </tbody>
                        </table>;


    return (
        <div className={`${classes.scheduleArea} universal-container`}>
            <h1 className="universal-container__header" >Schedule your Fitness Process</h1>
            <p className="universal-container__subheader" >Who are in extremely love with eco friendly system.</p>
            <img src={scheduleImg}/>
            {scheduleBlock}
        </div>
    );
};

export default ScheduleArea;