import React from 'react'
import s from './Navbar.module.sass'

const Navbar = () => {
    return (
        <nav>
            <div className={`${s.link} ${s.active}`}>
                <a href="#">Приложение</a>
            </div>
            <div className={s.link}>
                <a href="#">О нас</a>
            </div>
        </nav>
    );
};

export default Navbar;