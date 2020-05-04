import React from 'react';
import s from './Footer.module.sass'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.logoWrapper}>
                <img
                    src="https://expert365.com.au/wp-content/uploads/2017/09/4.png" alt=""/>
            </div>
        </div>
    );
};

export default Footer;