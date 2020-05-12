import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"} placeholder={"Post text"} />
            </div>
            <button>Add post</button>
        </form>
    )
};

const AddReduxForm = reduxForm({form: "postForm"})(AddPostForm);

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.avatarImg}>
                <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : "https://clck.ru/N43d9"}/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <hr/>

            {props.posts.map(p => {
                return <div>{p.postText}</div>;
            })}
            <AddReduxForm onSubmit={addNewPost} />
        </div>
    )
}


export default ProfileInfo;