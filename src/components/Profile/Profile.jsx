import React from "react"
import s from "./Profile.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.aboutWrapper}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         posts={props.posts}
                         updateStatus={props.updateStatus}
                         addPost={props.addPost}
            />
        </div>
    )
}

export default Profile