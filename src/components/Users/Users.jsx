import React from "react"
import s from "./Users.module.sass"

const Users = (props) => {

    if (props.users.length ===0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.iconninja.com/files/592/204/968/communication-male-cyber-avatar-man-person-crime-human-profile-head-anonymous-hacker-creative-icon.svg',
                    followed: false,
                    fullName: 'Aliy',
                    status: "I'am a boss",
                    location: {city: 'Nalchik', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.iconninja.com/files/592/204/968/communication-male-cyber-avatar-man-person-crime-human-profile-head-anonymous-hacker-creative-icon.svg',
                    followed: true,
                    fullName: 'Sasha',
                    status: "I'am a boss too",
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.iconninja.com/files/592/204/968/communication-male-cyber-avatar-man-person-crime-human-profile-head-anonymous-hacker-creative-icon.svg',
                    followed: false,
                    fullName: 'Andrew',
                    status: "I'am a boss too",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return (
        <div className={s.profileWrapperBlock}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div className={s.userProfileAvatar}>
                            <img src={u.photoUrl}/>
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
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Users