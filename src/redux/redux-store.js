import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import usersReducer from "./users-reducer";

// appPage - это state который можно получить с помощью getState();
let reducers = combineReducers({
    appPage: appReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;