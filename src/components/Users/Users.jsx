import React from "react"
import s from "./Users.module.sass"
import * as axios from "axios";
import userPhoto from "../../assets/images/userAvatar.jpg"


class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div className={s.profileWrapperBlock}>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                            <div className={s.userProfileAvatar}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users