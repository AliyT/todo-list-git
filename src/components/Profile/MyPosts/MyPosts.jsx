import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {NewElement} from "../../common/FormsControls/FormsControls";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);
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

const MyPosts = props => {
    console.log("RENDER YO")

    let postsElements = props.posts.map(p => <Post postText={p.postText}/>)

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div>
            <h3>My posts</h3>
            <AddReduxForm onSubmit={addNewPost}/>
            {postsElements}
        </div>
    )
};

export default MyPosts;