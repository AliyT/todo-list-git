import React from 'react'
import s from './Header.module.sass'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoWrapper}>
                <img
                    src="https://expert365.com.au/wp-content/uploads/2017/09/4.png"/>
            </div>

            <Navbar />
        </div>
    );
};

export default Header;