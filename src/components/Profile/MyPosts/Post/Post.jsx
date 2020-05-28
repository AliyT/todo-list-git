import React from "react";
import s from "./Post.module.sass"


const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <img src="https://social-network.samuraijs.com/activecontent/images/users/5417/user.jpg?v=3"/>
            <span>{props.postText}</span>
        </div>
    )
}

export default Post;