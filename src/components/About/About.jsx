import React from "react"
import s from "./About.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Users from "./Users/Users";

const About = () => {
    return (
        <div className={s.aboutWrapper}>
            <ProfileInfo/>
            <Users/>
        </div>
    )
}

export default About