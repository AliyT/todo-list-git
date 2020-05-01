import React from "react"
import s from "./Users.module.sass"
import userPhoto from "../../assets/images/userAvatar.jpg"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    // получаем количиество количество страниц 1 2 3
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.profileWrapperBlock}>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && s.selectedPage}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div className={s.userProfileAvatar}>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                        <div>
                            <div>{u.name}</div>
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