import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

// appPage - это state который можно получить с помощью getState();
let reducers = combineReducers({
    appPage: appReducer,
    // таким образом получаем ветку state в mapStateToProps users: state.usersPage.users
    usersPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;