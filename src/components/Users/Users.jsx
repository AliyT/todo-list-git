import React from "react"
import s from "./Users.module.sass"
import * as axios from "axios";
import userPhoto from "../../assets/images/userAvatar.jpg"

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={s.profileWrapperBlock}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div className={s.userProfileAvatar}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Users