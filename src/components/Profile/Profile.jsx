import React from "react"
import s from "./Profile.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.aboutWrapper}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
        </div>
    )
}

export default Profile