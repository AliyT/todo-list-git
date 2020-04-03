import React from 'react'
import s from './Header.module.sass'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoWrapper}>
                <img
                    src="https://expert365.com.au/wp-content/uploads/2017/09/4.png"/>
            </div>
            <nav>
                <div className={`${s.link} ${s.active}`}>
                    <a href="#">Приложение</a>
                </div>
                <div className={s.link}>
                    <a href="#">О нас</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;