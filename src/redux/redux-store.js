import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

// appPage - это state который можно получить с помощью getState();
let reducers = combineReducers({
    appPage: appReducer,
    // таким образом получаем ветку state в mapStateToProps users: state.usersPage.users
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;