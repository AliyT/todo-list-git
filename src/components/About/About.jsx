import React from "react"
import s from "./About.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const About = () => {
    return (
        <div className={s.aboutWrapper}>
            <ProfileInfo/>
        </div>
    )
}

export default About