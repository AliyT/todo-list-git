import React from 'react';
import './Header.sass'

const Header = () => {
    return (
        <div className="header">
            <div className="logoWrapper">
                <img
                    src="https://expert365.com.au/wp-content/uploads/2017/09/4.png"/>
            </div>
            <nav>
                <div><a href="#">Приложение</a></div>
                <div><a href="#">О нас</a></div>
            </nav>
        </div>
    );
};

export default Header;