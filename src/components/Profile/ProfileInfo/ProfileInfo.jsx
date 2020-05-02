import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <p>Заглушка</p>
            <div className={s.avatarImgZagl}>
                <img
                    src="https://clck.ru/N43d9" alt=""/>
            </div>
            <div className={s.avatarImg}>
                <img
                    src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.userInfo}>
                <div>ФИО: {props.profile.fullName}</div>
                <div>Статус: {props.profile.aboutMe}</div>
                <div>Контакты:
                    {Object.values(props.profile.contacts)
                    .map(contact => {
                        return <div className={s.contacts}>{contact}</div>
                    })}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;