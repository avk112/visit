import React,{useEffect, useRef, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import facebook from "../image/facebook-app-symbol.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import logo from "../image/logo.png";
import navData from "./data/header/navigation";
import menuIcon from "../image/menu-button-of-three-horizontal-lines.png";
import HiddenScreen from "./HiddenScreen";
import FormOrder from "./FormOrder";
import {useDispatch, useSelector} from "react-redux";
import {switchVisible} from "./redux/hiddenScreensSlice";

const Header = () => {
  const dispatch = useDispatch();
    const hiddenScreensStatus = useSelector(state=>state.hiddenScreens);
    const activeStyle={color: "#0093df"};
    const passiveStyle = {undefined};

    const scrollRef = useRef(null);
    const [scroll, setScroll] = useState(0);

    const handleScroll= ()=> {
        setScroll(window.scrollY);
    };

    const handleHiddenScreen = (id)=> {
        dispatch(switchVisible(id));
    };


    const visibleBackground = scroll > scrollRef.current?.offsetTop ? "visible-background" : "hidden-background";

    const navBlock = <ul>
                        {
                            navData.map(item=>{
                                return  <li key={item.id}>
                                            <NavLink to={item.link} style={({isActive}) => isActive ? activeStyle : passiveStyle}>
                                                {item.title}
                                            </NavLink>
                                        </li>
                        })}
                    </ul>;

    const menuBlock = <aside className="header__hidden-nav-block">
                        {navBlock}
                        </aside>;


    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);


    return (
        <header className={`header ${visibleBackground}`}>
             <div className="header__top">
                <div className="header__top__social">
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={instagram}/>
                </div>
                <div className="header__top__contacts">
                    <a href="tel:+880 1234 456 789">+880 1234 456 789</a>
                    <button
                        className="header__top__contacts__btn"
                        onClick={()=>handleHiddenScreen("form")}
                    >Book Now</button>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__bottom__logo" ref={scrollRef}>
                    <img src={logo}/>
                </div>
               <nav className="header__bottom__nav">
                       {navBlock}
               </nav>
                <div className="header__bottom__menu">
                    <img
                        src={menuIcon}
                        onClick={()=>handleHiddenScreen("menu")}
                    />
                </div>
            </div>
            <HiddenScreen
                justify="flex-start"
                insertBlock={menuBlock}
                isVisible={hiddenScreensStatus.menu}
                handleScreenStatus={()=>handleHiddenScreen("menu")}
            />
            <HiddenScreen
                justify="center"
                insertBlock={<FormOrder/>}
                isVisible={hiddenScreensStatus.form}
                handleScreenStatus={()=>handleHiddenScreen("form")}
            />
        </header>
    );
};

export default Header;