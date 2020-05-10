import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.avatarImg}>
                <img
                    src={props.profile.photos.large
                        ? props.profile.photos.large
                        : "https://clck.ru/N43d9"}/>
            </div>
            <ProfileStatus status={props.profile.aboutMe}/>
            {/*<div className={s.userInfo}>*/}
            {/*    <div>ФИО: {props.profile.fullName}</div>*/}
            {/*    <div>Статус: {props.profile.aboutMe}</div>*/}
            {/*    <div>Контакты:*/}
            {/*        {Object.values(props.profile.contacts)*/}
            {/*            .map(contact => {*/}
            {/*                return <div className={s.contacts}>{contact}</div>*/}
            {/*            })}</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default ProfileInfo;