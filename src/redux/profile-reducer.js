import {profileAPI, usersAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD_POST';

let initialState = {
    profile: null,
    status: "",
    posts: [
        {id: 1, postText: "NewPost 1"}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 2, postText: action.newPostText}]
        }
        default:
            return state;
    }
}

// ActionCreators
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    });
}

export default profileReducer;