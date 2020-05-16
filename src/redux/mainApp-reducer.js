import {authAPI} from "../api/api";
import {getAuthUsersData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const mainAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializesSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUsersData());

    Promise.all([promise]).then(() => {
        dispatch(initializesSuccess())
    });
}

export default mainAppReducer;