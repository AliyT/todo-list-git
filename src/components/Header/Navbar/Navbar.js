import React from 'react'
import s from './Navbar.module.sass'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to="/app" activeClassName={s.activeLink}>Приложение</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/about" activeClassName={s.activeLink}>О нас</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
        </nav>
    )
};

export default Navbar