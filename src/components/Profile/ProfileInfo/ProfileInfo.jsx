import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.avatarImg}>
                <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : "https://clck.ru/N43d9"}/>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <hr/>
        </div>
    )
}


export default ProfileInfo;