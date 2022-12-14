import React, {useEffect, useState} from 'react';
import UniversalBanner from "../../UniversalBanner";
import GoogleMapContainer from "./GoogleMapContainer";
import classes from "./ContactPage.module.css";
import contactData from "../../data/contactpage/contactsData";
import FormOrder from "../../FormOrder";
import HiddenScreen from "../../HiddenScreen";
import FormAcceptation from "../../FormAcceptation";
import {useDispatch, useSelector} from "react-redux";
import {switchVisible} from "../../redux/hiddenScreensSlice";

const ContactPage = () => {
    const dispatch = useDispatch();
    const hiddenScreenStatus = useSelector(state=>state.hiddenScreens.contactsAcceptance);

    class FormDefault {
        constructor(name="", email="", subject="", message="") {
            this.name=name;
            this.email=email;
            this.subject=subject;
            this.message=message;
        }
    }

    const [formData, setFormData] = useState(new FormDefault());


    const handleInput = (e)=> {
        const id = e.target.id;
        const value = e.target.value;

        setFormData(prev=>({...prev, [id]: value}));
    }

    const sendMessage= (e)=> {
        e.preventDefault();
        setFormData(new FormDefault());
        handleHiddenScreen();
    };

    const handleHiddenScreen = ()=> {
        dispatch(switchVisible("contactsAcceptance"));
    };

    const itemBlock = contactData.map(item=>{
        return <div key={item.id} className={classes.contactPage__infoBlock__contacts__item}>
                    <img src={item.img}/>
                    <div className={classes.contactPage__infoBlock__contacts__item__titlesBlock}>
                        <h5 className={classes.contactPage__infoBlock__contacts__item__titlesBlock__title}>{item.title}</h5>
                            <h6 className={classes.contactPage__infoBlock__contacts__item__titlesBlock__subtitle}>{item.subtitle}</h6>
                    </div>
                </div>
    });


    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <HiddenScreen
                justify="center"
                insertBlock={<FormAcceptation message="Thank you for your feedback!"/>}
                isVisible={hiddenScreenStatus}
                handleScreenStatus={handleHiddenScreen}
            />
            <UniversalBanner header="Our Contact"/>
            <div className={`universal-container ${classes.contactPage}`}>
                <GoogleMapContainer/>
                <div className={classes.contactPage__infoBlock}>
                    <div className={classes.contactPage__infoBlock__contacts}>
                        {itemBlock}
                    </div>

                    <form onSubmit={sendMessage} className={classes.contactPage__infoBlock__form}>
                        <div className={classes.contactPage__infoBlock__form__inputsBlock}>
                            <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInput}
                                    placeholder="Enter your name"
                            />
                            <input
                                id="email"
                                type="text"
                                value={formData.email}
                                onChange={handleInput}
                                placeholder="Enter your email"
                            />
                            <input
                                id="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleInput}
                                placeholder="Enter your subject"
                            />
                        </div>
                        <div className={classes.contactPage__infoBlock__form__textareaBlock}>
                            <textarea
                                id="message"
                                type="text"
                                maxLength={400}
                                value={formData.message}
                                onChange={handleInput}
                                placeholder="Enter your message"
                            />
                            <button>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;