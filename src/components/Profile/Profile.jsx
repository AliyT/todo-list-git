import React from "react"
import s from "./Profile.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.aboutWrapper}>
            <ProfileInfo profile={props.profile} />
        </div>
    )
}

export default Profile