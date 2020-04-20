import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatarImg}>
                <img
                    src="https://clck.ru/N43d9" alt=""/>
            </div>
            <div className={s.userInfo}>
                <div>ФИО:</div>
                <div>Год рождения:</div>
                <div>Номер телефона:</div>
            </div>
        </div>
    )
}

export default ProfileInfo;