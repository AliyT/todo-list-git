import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
})

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostContainer;