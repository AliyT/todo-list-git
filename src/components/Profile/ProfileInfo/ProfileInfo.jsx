import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {NewElement} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
debugger
const Textarea = NewElement("textarea");

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"}
                       placeholder={"Post text"}
                       validate={[required, maxLength10]}
                />
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
        debugger
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
            <AddReduxForm onSubmit={addNewPost} />
            {props.posts.map(p => {
                return <div><img src={props.profile.photos.small} />{p.postText}</div>;
            })}

        </div>
    )
}


export default ProfileInfo;