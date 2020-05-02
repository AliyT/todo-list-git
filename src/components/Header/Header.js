import React from 'react'
import s from './Header.module.sass'
import Navbar from "./Navbar/Navbar";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logoWrapper}>
                <img
                    src="https://expert365.com.au/wp-content/uploads/2017/09/4.png"/>
            </div>
            <Navbar />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;