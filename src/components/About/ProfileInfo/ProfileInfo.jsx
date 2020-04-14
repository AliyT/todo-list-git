import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatarImg}>
                <img
                    src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122262975/original/0abc45118810fbb603495935275b3f1e170c8ab4/create-minimalist-avatar-social-media-profile-picture.png" alt=""/>
            </div>
            <div>ФИО: </div>
            <div>Год рождения: </div>
            <div>Номер телефона: </div>
        </div>
    )
}

export default ProfileInfo;